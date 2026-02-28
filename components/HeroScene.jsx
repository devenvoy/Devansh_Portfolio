'use client';
import { useEffect, useRef, useCallback } from 'react';

const GridLightEffect = ({ darkMode = false }) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animFrameRef = useRef(null);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        // ── Config ──────────────────────────────────────
        const cellSize = 40;            // square size
        const lineWidth = 1;            // grid line thickness
        const glowRadius = 220;         // flashlight radius
        const cols = Math.ceil(width / cellSize) + 1;
        const rows = Math.ceil(height / cellSize) + 1;

        // Clear
        ctx.clearRect(0, 0, width, height);

        // ── Draw gradient glow visible only through grid lines ──
        // We draw the grid lines first as a clip mask shape,
        // then fill the glow gradient only inside that mask.

        ctx.save();

        // Build a path that represents ONLY the grid lines (thin strips)
        ctx.beginPath();
        // Vertical lines
        for (let c = 0; c <= cols; c++) {
            const x = c * cellSize;
            ctx.rect(x - lineWidth / 2, 0, lineWidth, height);
        }
        // Horizontal lines
        for (let r = 0; r <= rows; r++) {
            const y = r * cellSize;
            ctx.rect(0, y - lineWidth / 2, width, lineWidth);
        }
        ctx.clip();

        // Now draw the gradient glow — it will only show through the grid lines
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, glowRadius);

        if (darkMode) {
            gradient.addColorStop(0, 'rgba(6, 182, 212, 0.7)');     // cyan center
            gradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.4)');  // violet mid
            gradient.addColorStop(0.6, 'rgba(6, 182, 212, 0.15)');  // cyan fade
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');           // transparent
        } else {
            gradient.addColorStop(0, 'rgba(37, 99, 235, 0.5)');     // blue center
            gradient.addColorStop(0.3, 'rgba(99, 102, 241, 0.3)');  // indigo mid
            gradient.addColorStop(0.6, 'rgba(37, 99, 235, 0.1)');   // blue fade
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');           // transparent
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        ctx.restore();

        // ── Draw subtle grid lines near the cursor for structure ──
        // (faint lines that give the grid "structure" feel even outside the glow)
        ctx.save();
        ctx.strokeStyle = darkMode
            ? 'rgba(255, 255, 255, 0.025)'
            : 'rgba(0, 0, 0, 0.025)';
        ctx.lineWidth = 0.5;

        for (let c = 0; c <= cols; c++) {
            const x = c * cellSize;
            const distToMouse = Math.abs(x - mx);
            if (distToMouse < glowRadius * 1.5) {
                const alpha = Math.max(0, 1 - distToMouse / (glowRadius * 1.5));
                ctx.strokeStyle = darkMode
                    ? `rgba(255, 255, 255, ${0.03 + alpha * 0.06})`
                    : `rgba(0, 0, 0, ${0.03 + alpha * 0.04})`;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
        }

        for (let r = 0; r <= rows; r++) {
            const y = r * cellSize;
            const distToMouse = Math.abs(y - my);
            if (distToMouse < glowRadius * 1.5) {
                const alpha = Math.max(0, 1 - distToMouse / (glowRadius * 1.5));
                ctx.strokeStyle = darkMode
                    ? `rgba(255, 255, 255, ${0.03 + alpha * 0.06})`
                    : `rgba(0, 0, 0, ${0.03 + alpha * 0.04})`;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        }

        ctx.restore();

        animFrameRef.current = requestAnimationFrame(draw);
    }, [darkMode]);

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
            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        animFrameRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
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
                pointerEvents: 'none',
            }}
        />
    );
};

export default GridLightEffect;
