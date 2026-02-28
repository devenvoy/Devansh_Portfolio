'use client';
import { useEffect, useRef, useCallback } from 'react';

/**
 * GridLightEffect — Interactive grid with gradient flashlight + blackhole effect
 *
 * Props:
 * @param {number}   cellSize           – Grid square size (default: 40)
 * @param {number}   lineWidth          – Grid line thickness (default: 1)
 * @param {number}   glowRadius         – Flashlight glow radius (default: 220)
 * @param {string[]} gradientColors     – Gradient color stops [center, mid, edge, transparent]
 * @param {number}   blackholeRadius    – Max gravitational pull radius (default: 250)
 * @param {number}   blackholeGrowSpeed – How fast blackhole grows (0-1, default: 0.008)
 * @param {number}   blackholeShrinkSpeed – How fast it disappears (0-1, default: 0.03)
 * @param {boolean}  darkMode           – Theme mode
 */
const GridLightEffect = ({
    cellSize = 40,
    lineWidth = 1,
    glowRadius = 220,
    gradientColors,
    blackholeRadius = 250,
    blackholeGrowSpeed = 0.008,
    blackholeShrinkSpeed = 0.03,
    darkMode = false,
}) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const pressedRef = useRef(false);
    const bhRef = useRef({
        strength: 0,       // 0→1: controls all blackhole visuals + grid warping
        rotation: 0,       // accretion disk rotation angle
    });
    const animFrameRef = useRef(null);

    const resolvedGradient = gradientColors || (darkMode
        ? ['rgba(6, 182, 212, 0.7)', 'rgba(139, 92, 246, 0.4)', 'rgba(6, 182, 212, 0.15)', 'rgba(0,0,0,0)']
        : ['rgba(37, 99, 235, 0.5)', 'rgba(99, 102, 241, 0.3)', 'rgba(37, 99, 235, 0.1)', 'rgba(0,0,0,0)']
    );

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const dpr = parseFloat(canvas.dataset.dpr || '1');
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const bh = bhRef.current;

        // ── Animate blackhole strength (slow grow, medium shrink) ──
        if (pressedRef.current) {
            bh.strength = Math.min(1, bh.strength + blackholeGrowSpeed);
        } else {
            bh.strength = Math.max(0, bh.strength - blackholeShrinkSpeed);
        }
        bh.rotation += 0.02 + bh.strength * 0.03; // rotate faster as it grows

        const pull = bh.strength;

        ctx.clearRect(0, 0, w, h);

        const cols = Math.ceil(w / cellSize) + 1;
        const rows = Math.ceil(h / cellSize) + 1;

        // ── Warp function: shrink squares near blackhole, stretch outer ──
        const warp = (px, py) => {
            if (pull <= 0) return [px, py];
            const dx = px - mx;
            const dy = py - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxR = blackholeRadius * pull;

            if (dist > maxR || dist < 1) return [px, py];

            const norm = dist / maxR; // 0 at center, 1 at edge

            // Gravitational pull: compress space near center, stretch at edge
            // Inner region (norm < 0.5): heavy compression toward center
            // Outer region (norm > 0.5): slight stretch outward
            let newDist;
            if (norm < 0.6) {
                // Cubic compression — squares shrink dramatically near center
                const compressionFactor = norm * norm * norm;
                newDist = compressionFactor * maxR * 0.6;
            } else {
                // Smooth transition: slight stretch
                const t = (norm - 0.6) / 0.4; // 0→1
                const innerEdge = 0.6 * 0.6 * 0.6 * maxR * 0.6;
                const outerEdge = maxR * (1 + pull * 0.08);
                newDist = innerEdge + t * (outerEdge - innerEdge);
            }

            const angle = Math.atan2(dy, dx);
            return [
                mx + Math.cos(angle) * newDist,
                my + Math.sin(angle) * newDist,
            ];
        };

        // ── Build warped grid vertices ──────────────────
        const vertices = [];
        for (let r = 0; r <= rows; r++) {
            const row = [];
            for (let c = 0; c <= cols; c++) {
                row.push(warp(c * cellSize, r * cellSize));
            }
            vertices.push(row);
        }

        // ── Draw warped grid lines as clip mask, then fill glow ──
        ctx.save();
        ctx.beginPath();

        // Vertical line segments
        for (let c = 0; c <= cols; c++) {
            for (let r = 0; r < rows; r++) {
                const [x1, y1] = vertices[r][c];
                const [x2, y2] = vertices[r + 1][c];
                const dx = x2 - x1;
                const dy = y2 - y1;
                const len = Math.sqrt(dx * dx + dy * dy);
                if (len < 0.1) continue;
                const nx = (-dy / len) * lineWidth * 0.5;
                const ny = (dx / len) * lineWidth * 0.5;
                ctx.moveTo(x1 + nx, y1 + ny);
                ctx.lineTo(x2 + nx, y2 + ny);
                ctx.lineTo(x2 - nx, y2 - ny);
                ctx.lineTo(x1 - nx, y1 - ny);
                ctx.closePath();
            }
        }

        // Horizontal line segments
        for (let r = 0; r <= rows; r++) {
            for (let c = 0; c < cols; c++) {
                const [x1, y1] = vertices[r][c];
                const [x2, y2] = vertices[r][c + 1];
                const dx = x2 - x1;
                const dy = y2 - y1;
                const len = Math.sqrt(dx * dx + dy * dy);
                if (len < 0.1) continue;
                const nx = (-dy / len) * lineWidth * 0.5;
                const ny = (dx / len) * lineWidth * 0.5;
                ctx.moveTo(x1 + nx, y1 + ny);
                ctx.lineTo(x2 + nx, y2 + ny);
                ctx.lineTo(x2 - nx, y2 - ny);
                ctx.lineTo(x1 - nx, y1 - ny);
                ctx.closePath();
            }
        }

        ctx.clip();

        // Gradient flashlight glow through grid lines
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, glowRadius);
        resolvedGradient.forEach((color, i) => {
            gradient.addColorStop(i / (resolvedGradient.length - 1), color);
        });
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);

        ctx.restore();

        // ── Draw ambient structure lines near cursor ────
        ctx.save();
        for (let c = 0; c <= cols; c++) {
            for (let r = 0; r < rows; r++) {
                const [x1, y1] = vertices[r][c];
                const [x2, y2] = vertices[r + 1][c];
                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2;
                const dist = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
                if (dist > glowRadius * 1.8) continue;
                const alpha = Math.max(0, 1 - dist / (glowRadius * 1.8));
                ctx.strokeStyle = darkMode
                    ? `rgba(255, 255, 255, ${0.02 + alpha * 0.06})`
                    : `rgba(0, 0, 0, ${0.02 + alpha * 0.04})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
        }
        for (let r = 0; r <= rows; r++) {
            for (let c = 0; c < cols; c++) {
                const [x1, y1] = vertices[r][c];
                const [x2, y2] = vertices[r][c + 1];
                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2;
                const dist = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
                if (dist > glowRadius * 1.8) continue;
                const alpha = Math.max(0, 1 - dist / (glowRadius * 1.8));
                ctx.strokeStyle = darkMode
                    ? `rgba(255, 255, 255, ${0.02 + alpha * 0.06})`
                    : `rgba(0, 0, 0, ${0.02 + alpha * 0.04})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
        }
        ctx.restore();

        // ── Draw the Blackhole (top-down, matching reference) ──
        if (pull > 0.01) {
            const bhSize = pull * 35;    // event horizon radius
            const diskOuter = bhSize + pull * 15; // tight band ~15px around event horizon
            const rot = bh.rotation;

            ctx.save();
            ctx.translate(mx, my);

            // ── Outer soft glow (gravitational lensing haze) ──
            const lensGlow = ctx.createRadialGradient(0, 0, diskOuter * 0.4, 0, 0, diskOuter * 1.6);
            lensGlow.addColorStop(0, `rgba(180, 190, 220, ${0.12 * pull})`);
            lensGlow.addColorStop(0.5, `rgba(100, 110, 140, ${0.06 * pull})`);
            lensGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = lensGlow;
            ctx.beginPath();
            ctx.arc(0, 0, diskOuter * 1.6, 0, Math.PI * 2);
            ctx.fill();

            // ── Congested Saturn-Ring Lines (rotating accretion disk) ──
            // Densely packed thin concentric arc strokes with random dust coloring
            const ringCount = 120;
            for (let i = 0; i < ringCount; i++) {
                // Seeded pseudo-random for each ring line
                const s1 = Math.sin(i * 127.1 + 42) * 43758.5453;
                const r1 = s1 - Math.floor(s1);
                const s2 = Math.sin(i * 269.5 + 84) * 43758.5453;
                const r2 = s2 - Math.floor(s2);
                const s3 = Math.sin(i * 419.2 + 126) * 43758.5453;
                const r3 = s3 - Math.floor(s3);

                // Radius: distribute densely between photon ring and outer disk
                const t = i / ringCount; // 0→1 inner to outer
                const radius = bhSize * 1.2 + (diskOuter - bhSize * 1.2) * t;

                // Rotation: all rings rotate fast, slight per-ring offset
                const ringAngle = rot * (2.5 + r1 * 0.5) + r2 * Math.PI * 2;

                // Arc length: varies per ring (partial arcs for that striated look)
                const arcLen = Math.PI * (0.4 + r3 * 1.2);

                // Brightness: bright near event horizon, fades outward
                const brightness = Math.max(0, 1 - t * 0.9);
                const baseAlpha = brightness * 0.4 * pull;
                if (baseAlpha < 0.01) continue;

                // Line width: thinner overall (1-2px), thicker near center
                const lw = (0.5 + (1 - t) * 1.5) * pull;

                // Color: mostly white/light-gray, ~15% are orange or yellow dust
                let cr, cg, cb;
                if (r1 < 0.08) {
                    // Orange dust
                    cr = 255; cg = 160 + Math.round(r2 * 40); cb = 60 + Math.round(r3 * 40);
                } else if (r1 < 0.15) {
                    // Yellow dust
                    cr = 255; cg = 220 + Math.round(r2 * 30); cb = 100 + Math.round(r3 * 60);
                } else {
                    // White / light lavender-gray
                    const shade = 200 + Math.round(brightness * 55);
                    cr = shade; cg = shade - 2; cb = shade + 5;
                }

                ctx.save();
                ctx.rotate(ringAngle);

                ctx.beginPath();
                ctx.arc(0, 0, radius, -arcLen / 2, arcLen / 2);
                ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${baseAlpha})`;
                ctx.lineWidth = lw;
                ctx.lineCap = 'round';
                ctx.stroke();

                ctx.restore();
            }

            // ── Bright photon ring (intense glow at event horizon edge) ──
            // Multiple layered rings for thick, bright glow
            for (let layer = 0; layer < 4; layer++) {
                const rOff = layer * 2;
                const ringR = bhSize * 1.15 + rOff;
                const ringAlpha = (0.5 - layer * 0.1) * pull;
                const ringW = (5 - layer * 0.8) * pull;

                ctx.beginPath();
                ctx.arc(0, 0, ringR, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(240, 235, 255, ${ringAlpha})`;
                ctx.lineWidth = ringW;
                ctx.shadowColor = `rgba(220, 215, 255, ${0.4 * pull})`;
                ctx.shadowBlur = 12 * pull;
                ctx.stroke();
                ctx.shadowBlur = 0;
            }

            // ── Inner bright halo (the white-hot ring in the reference) ──
            const haloGrad = ctx.createRadialGradient(0, 0, bhSize * 0.8, 0, 0, bhSize * 1.8);
            haloGrad.addColorStop(0, `rgba(255, 250, 255, ${0.7 * pull})`);
            haloGrad.addColorStop(0.4, `rgba(220, 215, 240, ${0.4 * pull})`);
            haloGrad.addColorStop(1, 'rgba(180, 180, 210, 0)');
            ctx.fillStyle = haloGrad;
            ctx.beginPath();
            ctx.arc(0, 0, bhSize * 1.8, 0, Math.PI * 2);
            ctx.fill();

            // ── Event Horizon (deep black center) ──
            const ehGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, bhSize);
            ehGrad.addColorStop(0, `rgba(0, 0, 0, ${0.98 * pull})`);
            ehGrad.addColorStop(0.75, `rgba(0, 0, 0, ${0.95 * pull})`);
            ehGrad.addColorStop(0.9, `rgba(10, 5, 20, ${0.8 * pull})`);
            ehGrad.addColorStop(1, `rgba(30, 20, 50, ${0.4 * pull})`);
            ctx.fillStyle = ehGrad;
            ctx.beginPath();
            ctx.arc(0, 0, bhSize, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        animFrameRef.current = requestAnimationFrame(draw);
    }, [darkMode, cellSize, lineWidth, glowRadius, blackholeRadius, blackholeGrowSpeed, blackholeShrinkSpeed, resolvedGradient]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = parent.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            canvas.dataset.dpr = String(dpr);
            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        const handleMouseDown = () => { pressedRef.current = true; };
        const handleMouseUp = () => { pressedRef.current = false; };
        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
            pressedRef.current = false;
        };

        // Touch support
        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
            pressedRef.current = true;
        };
        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
        };
        const handleTouchEnd = () => { pressedRef.current = false; };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
        canvas.addEventListener('touchend', handleTouchEnd);

        animFrameRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('touchend', handleTouchEnd);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'auto',
            }}
        />
    );
};

export default GridLightEffect;
