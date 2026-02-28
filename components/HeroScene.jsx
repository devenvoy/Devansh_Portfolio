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

        // ── Draw the Blackhole (top-down view) ──────────
        if (pull > 0.01) {
            const bhSize = pull * 60; // max event horizon radius ~60px
            const diskSize = pull * 120; // accretion disk radius
            const rot = bh.rotation;

            ctx.save();
            ctx.translate(mx, my);

            // ── Outer glow / gravitational lensing ──
            const outerGlow = ctx.createRadialGradient(0, 0, bhSize * 0.5, 0, 0, diskSize * 1.5);
            outerGlow.addColorStop(0, `rgba(139, 92, 246, ${0.3 * pull})`);
            outerGlow.addColorStop(0.5, `rgba(6, 182, 212, ${0.15 * pull})`);
            outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = outerGlow;
            ctx.beginPath();
            ctx.arc(0, 0, diskSize * 1.5, 0, Math.PI * 2);
            ctx.fill();

            // ── Accretion disk (rotating elliptical rings) ──
            for (let ring = 3; ring >= 0; ring--) {
                const ringRadius = bhSize + (diskSize - bhSize) * (ring / 3);
                const ringWidth = 2 + ring * 1.5;
                const ringAlpha = (0.6 - ring * 0.12) * pull;

                ctx.save();
                ctx.rotate(rot + ring * 0.4);
                ctx.scale(1, 0.35); // flatten to ellipse (top-down perspective)

                ctx.beginPath();
                ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
                ctx.lineWidth = ringWidth;

                // Gradient along the ring — brighter on one side (doppler effect)
                const ringGrad = ctx.createLinearGradient(-ringRadius, 0, ringRadius, 0);
                ringGrad.addColorStop(0, `rgba(6, 182, 212, ${ringAlpha})`);
                ringGrad.addColorStop(0.3, `rgba(236, 72, 153, ${ringAlpha * 0.8})`);
                ringGrad.addColorStop(0.5, `rgba(255, 200, 50, ${ringAlpha * 1.2})`);
                ringGrad.addColorStop(0.7, `rgba(236, 72, 153, ${ringAlpha * 0.8})`);
                ringGrad.addColorStop(1, `rgba(139, 92, 246, ${ringAlpha})`);
                ctx.strokeStyle = ringGrad;
                ctx.stroke();

                ctx.restore();
            }

            // ── Spinning light streaks in the disk ──
            for (let i = 0; i < 6; i++) {
                const angle = rot * 1.5 + (i / 6) * Math.PI * 2;
                const streakR = bhSize + (diskSize - bhSize) * 0.5;
                const sx = Math.cos(angle) * streakR;
                const sy = Math.sin(angle) * streakR * 0.35; // flattened

                const streakGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 15 * pull);
                streakGrad.addColorStop(0, `rgba(255, 255, 255, ${0.5 * pull})`);
                streakGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = streakGrad;
                ctx.beginPath();
                ctx.arc(sx, sy, 15 * pull, 0, Math.PI * 2);
                ctx.fill();
            }

            // ── Photon ring (bright thin ring at event horizon edge) ──
            ctx.save();
            ctx.rotate(rot * 0.5);
            ctx.scale(1, 0.35);
            ctx.beginPath();
            ctx.arc(0, 0, bhSize * 1.15, 0, Math.PI * 2);
            ctx.lineWidth = 2 * pull;
            ctx.strokeStyle = `rgba(255, 200, 100, ${0.8 * pull})`;
            ctx.shadowColor = 'rgba(255, 200, 100, 0.5)';
            ctx.shadowBlur = 10 * pull;
            ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.restore();

            // ── Event Horizon (dark center) ──
            const eventHorizonGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, bhSize);
            eventHorizonGrad.addColorStop(0, `rgba(0, 0, 0, ${0.95 * pull})`);
            eventHorizonGrad.addColorStop(0.7, `rgba(0, 0, 0, ${0.9 * pull})`);
            eventHorizonGrad.addColorStop(0.85, `rgba(20, 10, 40, ${0.7 * pull})`);
            eventHorizonGrad.addColorStop(1, `rgba(50, 20, 80, ${0.3 * pull})`);
            ctx.fillStyle = eventHorizonGrad;
            ctx.beginPath();
            ctx.arc(0, 0, bhSize, 0, Math.PI * 2);
            ctx.fill();

            // ── Inner singularity glow ──
            const coreGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, bhSize * 0.4);
            coreGlow.addColorStop(0, `rgba(139, 92, 246, ${0.3 * pull})`);
            coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = coreGlow;
            ctx.beginPath();
            ctx.arc(0, 0, bhSize * 0.4, 0, Math.PI * 2);
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
