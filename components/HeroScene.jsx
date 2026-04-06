'use client';
import { useEffect, useRef, useCallback, useState } from 'react';
import { drawBlackhole } from './Blackhole';

/**
 * GridLightEffect — Interactive grid with gradient flashlight + 3D blackhole
 *
 * Props:
 * @param {number}   cellSize           – Grid square size (default: 40)
 * @param {number}   lineWidth          – Grid line thickness (default: 1)
 * @param {number}   glowRadius         – Flashlight glow radius (default: 220)
 * @param {string[]} gradientColors     – Gradient color stops
 * @param {number}   blackholeRadius    – Max gravitational pull radius (default: 250)
 * @param {number}   blackholeGrowSpeed – How fast blackhole grows (0-1, default: 0.008)
 * @param {number}   blackholeShrinkSpeed – How fast it disappears (0-1, default: 0.03)
 * @param {number}   blackholeSize      – Max event horizon radius (default: 25)
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
    blackholeSize = 25,
    darkMode = false,
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        setIsMobile(mq.matches);
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const pressedRef = useRef(false);
    const pressAnchorRef = useRef({ x: 0, y: 0 });
    const bhRef = useRef({
        strength: 0,
        rotation: 0,
        tiltX: 0,
        tiltY: 0,
        targetTiltX: 0,
        targetTiltY: 0,
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

        // ── Animate blackhole ──
        if (pressedRef.current) {
            bh.strength = Math.min(1, bh.strength + blackholeGrowSpeed);
            const dx = mx - pressAnchorRef.current.x;
            const dy = my - pressAnchorRef.current.y;
            bh.targetTiltX = Math.max(-1, Math.min(1, dx / 150));
            bh.targetTiltY = Math.max(-1, Math.min(1, dy / 150));
        } else {
            bh.strength = Math.max(0, bh.strength - blackholeShrinkSpeed);
            bh.targetTiltX *= 0.95;
            bh.targetTiltY *= 0.95;
        }
        bh.tiltX += (bh.targetTiltX - bh.tiltX) * 0.08;
        bh.tiltY += (bh.targetTiltY - bh.tiltY) * 0.08;
        bh.rotation += 0.015 + bh.strength * 0.025;

        const pull = bh.strength;

        ctx.clearRect(0, 0, w, h);

        const cols = Math.ceil(w / cellSize) + 1;
        const rows = Math.ceil(h / cellSize) + 1;

        // ── Warp function ──
        const warp = (px, py) => {
            if (pull <= 0) return [px, py];
            const ddx = px - mx;
            const ddy = py - my;
            const dist = Math.sqrt(ddx * ddx + ddy * ddy);
            const maxR = blackholeRadius * pull;
            if (dist > maxR || dist < 1) return [px, py];
            const norm = dist / maxR;
            let newDist;
            if (norm < 0.6) {
                newDist = norm * norm * norm * maxR * 0.6;
            } else {
                const t = (norm - 0.6) / 0.4;
                newDist = 0.6 * 0.6 * 0.6 * maxR * 0.6 + t * (maxR * (1 + pull * 0.08) - 0.6 * 0.6 * 0.6 * maxR * 0.6);
            }
            const angle = Math.atan2(ddy, ddx);
            return [mx + Math.cos(angle) * newDist, my + Math.sin(angle) * newDist];
        };

        // ── Build warped grid ──
        const vertices = [];
        for (let r = 0; r <= rows; r++) {
            const row = [];
            for (let c = 0; c <= cols; c++) {
                row.push(warp(c * cellSize, r * cellSize));
            }
            vertices.push(row);
        }

        // ── Grid clip + glow ──
        ctx.save();
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
            for (let r = 0; r < rows; r++) {
                const [x1, y1] = vertices[r][c];
                const [x2, y2] = vertices[r + 1][c];
                const dx = x2 - x1, dy = y2 - y1;
                const len = Math.sqrt(dx * dx + dy * dy);
                if (len < 0.1) continue;
                const nx = (-dy / len) * lineWidth * 0.5, ny = (dx / len) * lineWidth * 0.5;
                ctx.moveTo(x1 + nx, y1 + ny); ctx.lineTo(x2 + nx, y2 + ny);
                ctx.lineTo(x2 - nx, y2 - ny); ctx.lineTo(x1 - nx, y1 - ny); ctx.closePath();
            }
        }
        for (let r = 0; r <= rows; r++) {
            for (let c = 0; c < cols; c++) {
                const [x1, y1] = vertices[r][c];
                const [x2, y2] = vertices[r][c + 1];
                const dx = x2 - x1, dy = y2 - y1;
                const len = Math.sqrt(dx * dx + dy * dy);
                if (len < 0.1) continue;
                const nx = (-dy / len) * lineWidth * 0.5, ny = (dx / len) * lineWidth * 0.5;
                ctx.moveTo(x1 + nx, y1 + ny); ctx.lineTo(x2 + nx, y2 + ny);
                ctx.lineTo(x2 - nx, y2 - ny); ctx.lineTo(x1 - nx, y1 - ny); ctx.closePath();
            }
        }
        ctx.clip();
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, glowRadius);
        resolvedGradient.forEach((color, i) => {
            gradient.addColorStop(i / (resolvedGradient.length - 1), color);
        });
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
        ctx.restore();

        // ── Ambient grid lines ──
        ctx.save();
        for (let c = 0; c <= cols; c++) {
            for (let r = 0; r < rows; r++) {
                const [x1, y1] = vertices[r][c];
                const [x2, y2] = vertices[r + 1][c];
                const dist = Math.sqrt(((x1 + x2) / 2 - mx) ** 2 + ((y1 + y2) / 2 - my) ** 2);
                if (dist > glowRadius * 1.8) continue;
                const alpha = Math.max(0, 1 - dist / (glowRadius * 1.8));
                ctx.strokeStyle = darkMode ? `rgba(255,255,255,${0.02 + alpha * 0.06})` : `rgba(0,0,0,${0.02 + alpha * 0.04})`;
                ctx.lineWidth = 0.5; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
            }
        }
        for (let r = 0; r <= rows; r++) {
            for (let c = 0; c < cols; c++) {
                const [x1, y1] = vertices[r][c];
                const [x2, y2] = vertices[r][c + 1];
                const dist = Math.sqrt(((x1 + x2) / 2 - mx) ** 2 + ((y1 + y2) / 2 - my) ** 2);
                if (dist > glowRadius * 1.8) continue;
                const alpha = Math.max(0, 1 - dist / (glowRadius * 1.8));
                ctx.strokeStyle = darkMode ? `rgba(255,255,255,${0.02 + alpha * 0.06})` : `rgba(0,0,0,${0.02 + alpha * 0.04})`;
                ctx.lineWidth = 0.5; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
            }
        }
        ctx.restore();

        // ── Draw blackhole (modular component) ──
        drawBlackhole(ctx, {
            x: mx,
            y: my,
            pull,
            rotation: bh.rotation,
            tiltX: bh.tiltX,
            tiltY: bh.tiltY,
            radius: blackholeSize,
        });

        animFrameRef.current = requestAnimationFrame(draw);
    }, [darkMode, cellSize, lineWidth, glowRadius, blackholeRadius, blackholeGrowSpeed, blackholeShrinkSpeed, blackholeSize, resolvedGradient]);

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
        const handleMouseDown = (e) => {
            pressedRef.current = true;
            const rect = canvas.getBoundingClientRect();
            pressAnchorRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        const handleMouseUp = () => { pressedRef.current = false; };
        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
            pressedRef.current = false;
        };

        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            const pos = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
            mouseRef.current = pos;
            pressAnchorRef.current = { ...pos };
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

    // Disable grid + blackhole on mobile screens
    if (isMobile) return null;

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
