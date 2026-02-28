/**
 * Blackhole — Multi-layer Canvas 2D blackhole renderer
 * Physics-accurate Interstellar/Gargantua style
 *
 * SIDE-VIEW ANATOMY:
 *
 *         ╭───────╮           ← Layer: Top C-arc (lensed back disk)
 *        ╱         ╲
 *  ─────<    [●]    >─────   ← Layers: Disk line + Photon ring + Event Horizon
 *        ╲         ╱
 *         ╰───────╯           ← Layer: Bottom C-arc (lensed back disk)
 *
 *  The < and > are POINTED TIPS where the C-arcs meet the disk line.
 *  The [●] is the dark event horizon sphere.
 *  The photon ring is a full circle that always wraps around the sphere.
 *
 * TOP-DOWN VIEW:
 *  Concentric Saturn-ring lines + photon ring + dark center
 *
 * Each visual element is a separate "Lego piece" layer.
 */

// Seeded pseudo-random
const srand = (i, seed) => {
    const s = Math.sin(i * 127.1 + seed) * 43758.5453;
    return s - Math.floor(s);
};

export function drawBlackhole(ctx, opts) {
    const {
        x, y,
        pull,
        rotation: rot,
        tiltX = 0,
        tiltY = 0,
        radius: maxR = 80,
    } = opts;

    if (pull < 0.01) return;

    const R = pull * maxR;
    const absTiltY = Math.abs(tiltY);
    const sideView = absTiltY; // 0 = top-down, 1 = full side
    const diskScaleY = Math.max(0.04, 1 - sideView * 0.96);
    const rollAngle = tiltX * Math.PI * 0.35;

    // Tight ring band (for top-down view)
    const diskInner = R * 1.12;
    const diskOuter = R + pull * 10;

    // C-arc geometry (for side view)
    // The arcs span from (-pointX, 0) to (pointX, 0) — the "tips"
    const pointX = R * 1.15; // slightly outside sphere edge
    // Arc height: how far the C extends above/below
    const arcPeakY = R * (0.8 + sideView * 0.6);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rollAngle);

    // ═══════════════════════════════════════════════
    // LAYER 1: Soft atmospheric glow
    // ═══════════════════════════════════════════════
    layerAtmosphere(ctx, R, pull);

    // ═══════════════════════════════════════════════
    // LAYER 2: Top C-arc (lensed back disk — above)
    // Only visible when tilted. Fades in with sideView.
    // ═══════════════════════════════════════════════
    if (sideView > 0.05) {
        layerCArc(ctx, R, pull, sideView, pointX, arcPeakY, -1); // -1 = above
    }

    // ═══════════════════════════════════════════════
    // LAYER 3: Bottom C-arc (lensed back disk — below)
    // ═══════════════════════════════════════════════
    if (sideView > 0.05) {
        layerCArc(ctx, R, pull, sideView, pointX, arcPeakY, 1); // +1 = below
    }

    // ═══════════════════════════════════════════════
    // LAYER 4: Accretion disk ring lines (top-down)
    // These flatten and fade as we tilt to side view.
    // ═══════════════════════════════════════════════
    ctx.save();
    ctx.scale(1, diskScaleY);
    layerAccretionRings(ctx, R, diskInner, diskOuter, rot, pull, sideView);
    ctx.restore();

    // ═══════════════════════════════════════════════
    // LAYER 5: Horizontal disk line (edge-on accretion disk)
    // Extends from the left tip far left, and right tip far right.
    // Only visible when tilted.
    // ═══════════════════════════════════════════════
    if (sideView > 0.08) {
        layerDiskLine(ctx, R, pull, sideView, pointX);
    }

    // ═══════════════════════════════════════════════
    // LAYER 6: Photon ring — always a full circle
    // Gravitational lensing keeps it circular at all angles.
    // This is the "middle ring circling around from center
    // connecting the outer C-arcs"
    // ═══════════════════════════════════════════════
    layerPhotonRing(ctx, R, pull);

    // ═══════════════════════════════════════════════
    // LAYER 7: Inner luminous halo
    // ═══════════════════════════════════════════════
    layerInnerHalo(ctx, R, pull);

    // ═══════════════════════════════════════════════
    // LAYER 8: Event Horizon (dark sphere)
    // Always circular. The absolute black center.
    // ═══════════════════════════════════════════════
    layerEventHorizon(ctx, R, pull);

    // ═══════════════════════════════════════════════
    // LAYER 9: Front disk arcs (in FRONT of event horizon)
    // Thinner, fainter arcs drawn after EH.
    // ═══════════════════════════════════════════════
    if (sideView > 0.12) {
        layerFrontArcs(ctx, R, pull, sideView, pointX, arcPeakY);
    }

    ctx.restore();
}


// ─────────────────────────────────────────────────
// INDIVIDUAL LEGO PIECE LAYERS
// ─────────────────────────────────────────────────

function layerAtmosphere(ctx, R, pull) {
    const atmoR = R * 3;
    const g = ctx.createRadialGradient(0, 0, R * 0.5, 0, 0, atmoR);
    g.addColorStop(0, `rgba(180, 185, 210, ${0.1 * pull})`);
    g.addColorStop(0.5, `rgba(100, 105, 140, ${0.04 * pull})`);
    g.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, atmoR, 0, Math.PI * 2);
    ctx.fill();
}


/**
 * Draw a C-shaped lensing arc (half-ellipse).
 * @param {number} dir -1 = above (top C), +1 = below (bottom C)
 *
 * Shape: An elliptical arc from (-pointX, 0) to (+pointX, 0)
 * that bulges upward (dir=-1) or downward (dir=+1).
 * The endpoints are the POINTED TIPS where the arc meets the disk line.
 */
function layerCArc(ctx, R, pull, sideView, pointX, peakY, dir) {
    const intensity = Math.min(1, (sideView - 0.05) * 2.5) * pull;
    if (intensity < 0.01) return;

    ctx.save();

    const layers = 8;
    for (let i = 0; i < layers; i++) {
        const t = i / layers;
        // Each layer is slightly different in size for glow effect
        const w = pointX * (1 + t * 0.08);
        const h = peakY * (1 - t * 0.15);
        const alpha = intensity * (0.55 - t * 0.4);
        const lw = (4 - i * 0.35) * pull;

        if (alpha < 0.01) continue;

        ctx.beginPath();
        // Use ellipse() for proper half-ellipse C shape
        // For top (dir=-1): draw from π to 0 (top semicircle)
        // For bottom (dir=+1): draw from 0 to π (bottom semicircle)
        if (dir < 0) {
            // Top C-arc
            ctx.ellipse(0, 0, w, h, 0, Math.PI, 0, false);
        } else {
            // Bottom C-arc
            ctx.ellipse(0, 0, w, h, 0, 0, Math.PI, false);
        }

        const shade = Math.round(235 + (1 - t) * 20);
        ctx.strokeStyle = `rgba(${shade}, ${shade - 5}, ${Math.min(255, shade + 5)}, ${alpha})`;
        ctx.lineWidth = lw;
        ctx.lineCap = 'round';

        if (i < 3) {
            ctx.shadowColor = `rgba(240, 235, 255, ${0.25 * pull})`;
            ctx.shadowBlur = 8 * pull;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
    }

    ctx.restore();
}


/**
 * Accretion ring lines — congested Saturn-ring style.
 * Fades as sideView increases (since disk goes edge-on).
 */
function layerAccretionRings(ctx, R, diskInner, diskOuter, rot, pull, sideView) {
    const fade = Math.max(0, 1 - sideView * 1.5); // fade out as tilted
    if (fade < 0.01) return;

    const ringCount = 120;
    for (let i = 0; i < ringCount; i++) {
        const r1 = srand(i, 42);
        const r2 = srand(i, 84);
        const r3 = srand(i, 126);

        const t = i / ringCount;
        const radius = diskInner + (diskOuter - diskInner) * t;
        const ringAngle = rot * (2.5 + r1 * 0.5) + r2 * Math.PI * 2 + t * Math.PI * 0.4;
        const arcLen = Math.PI * (0.3 + r3 * 1.3);

        const brightness = Math.pow(Math.max(0, 1 - t), 1.2);
        const baseAlpha = brightness * 0.45 * pull * fade;
        if (baseAlpha < 0.008) continue;

        const lw = (0.5 + (1 - t) * 1.5) * pull;

        let cr, cg, cb;
        if (r1 < 0.06) {
            cr = 255; cg = 165 + Math.round(r2 * 30); cb = 75 + Math.round(r3 * 30);
        } else if (r1 < 0.12) {
            cr = 255; cg = 225 + Math.round(r2 * 20); cb = 165 + Math.round(r3 * 40);
        } else {
            const shade = 195 + Math.round(brightness * 60);
            cr = shade; cg = shade; cb = shade + 8;
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
}


/**
 * Horizontal disk line — the accretion disk viewed edge-on.
 * Extends from each pointed tip outward.
 */
function layerDiskLine(ctx, R, pull, sideView, pointX) {
    const intensity = Math.min(1, (sideView - 0.08) * 2.5) * pull;
    const extLen = R * (2 + sideView * 3.5); // how far beyond the tips

    ctx.save();

    // Multi-pass for glow: thin bright core + wider soft glow
    const passes = [
        { w: 1, a: 1 },
        { w: 3, a: 0.4 },
        { w: 6, a: 0.1 },
    ];

    for (const pass of passes) {
        const a = intensity * pass.a;

        // Left line: from -pointX to far left
        const leftGrad = ctx.createLinearGradient(-pointX - extLen, 0, -pointX, 0);
        leftGrad.addColorStop(0, 'rgba(255, 250, 255, 0)');
        leftGrad.addColorStop(0.3, `rgba(255, 250, 255, ${a * 0.5})`);
        leftGrad.addColorStop(1, `rgba(255, 255, 255, ${a})`);

        ctx.strokeStyle = leftGrad;
        ctx.lineWidth = pass.w * pull;
        ctx.beginPath();
        ctx.moveTo(-pointX - extLen, 0);
        ctx.lineTo(-pointX, 0);
        ctx.stroke();

        // Right line: from +pointX to far right
        const rightGrad = ctx.createLinearGradient(pointX, 0, pointX + extLen, 0);
        rightGrad.addColorStop(0, `rgba(255, 255, 255, ${a})`);
        rightGrad.addColorStop(0.7, `rgba(255, 250, 255, ${a * 0.5})`);
        rightGrad.addColorStop(1, 'rgba(255, 250, 255, 0)');

        ctx.strokeStyle = rightGrad;
        ctx.lineWidth = pass.w * pull;
        ctx.beginPath();
        ctx.moveTo(pointX, 0);
        ctx.lineTo(pointX + extLen, 0);
        ctx.stroke();
    }

    ctx.restore();
}


/**
 * Photon ring — always a full circle wrapping around the event horizon.
 * This is the "middle ring circling around from center" that connects
 * visually with the C-arcs and disk line at the pointed tips.
 */
function layerPhotonRing(ctx, R, pull) {
    for (let layer = 0; layer < 5; layer++) {
        const rOff = layer * 1.5;
        const ringR = R * 1.08 + rOff;
        const ringAlpha = (0.5 - layer * 0.08) * pull;
        const ringW = (4 - layer * 0.5) * pull;

        ctx.beginPath();
        ctx.arc(0, 0, ringR, 0, Math.PI * 2);

        const shade = layer < 2 ? 255 : 235;
        ctx.strokeStyle = `rgba(${shade}, ${shade - 5}, 255, ${ringAlpha})`;
        ctx.lineWidth = ringW;

        if (layer < 2) {
            ctx.shadowColor = `rgba(230, 225, 255, ${0.45 * pull})`;
            ctx.shadowBlur = 12 * pull;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
    }
}


/**
 * Inner luminous halo — bright glow at event horizon edge
 */
function layerInnerHalo(ctx, R, pull) {
    const g = ctx.createRadialGradient(0, 0, R * 0.6, 0, 0, R * 1.5);
    g.addColorStop(0, `rgba(255, 250, 255, ${0.65 * pull})`);
    g.addColorStop(0.35, `rgba(230, 225, 245, ${0.35 * pull})`);
    g.addColorStop(0.7, `rgba(190, 185, 210, ${0.1 * pull})`);
    g.addColorStop(1, 'rgba(150, 145, 170, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, R * 1.5, 0, Math.PI * 2);
    ctx.fill();
}


/**
 * Event Horizon — absolute black sphere
 */
function layerEventHorizon(ctx, R, pull) {
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, R);
    g.addColorStop(0, `rgba(0, 0, 0, ${pull})`);
    g.addColorStop(0.7, `rgba(0, 0, 0, ${0.98 * pull})`);
    g.addColorStop(0.9, `rgba(5, 2, 15, ${0.85 * pull})`);
    g.addColorStop(1, `rgba(20, 12, 35, ${0.3 * pull})`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, R, 0, Math.PI * 2);
    ctx.fill();
}


/**
 * Front lensing arcs — drawn IN FRONT of the event horizon.
 * Thinner, subtler arcs representing the front of the disk.
 */
function layerFrontArcs(ctx, R, pull, sideView, pointX, peakY) {
    const intensity = Math.min(1, (sideView - 0.12) * 2) * pull;
    if (intensity < 0.01) return;

    ctx.save();

    const layers = 4;
    const frontPeakY = peakY * 0.5; // front arcs are smaller

    // Top front arc
    for (let i = 0; i < layers; i++) {
        const t = i / layers;
        const w = pointX * (0.9 + t * 0.05);
        const h = frontPeakY * (1 - t * 0.2);
        const alpha = intensity * (0.3 - t * 0.15);
        const lw = (2.5 - i * 0.35) * pull;

        if (alpha < 0.01) continue;

        ctx.beginPath();
        ctx.ellipse(0, 0, w, h, 0, Math.PI, 0, false);
        ctx.strokeStyle = `rgba(250, 248, 255, ${alpha})`;
        ctx.lineWidth = lw;
        ctx.lineCap = 'round';
        ctx.stroke();
    }

    // Bottom front arc
    for (let i = 0; i < layers; i++) {
        const t = i / layers;
        const w = pointX * (0.9 + t * 0.05);
        const h = frontPeakY * (1 - t * 0.2);
        const alpha = intensity * (0.25 - t * 0.12);
        const lw = (2 - i * 0.25) * pull;

        if (alpha < 0.01) continue;

        ctx.beginPath();
        ctx.ellipse(0, 0, w, h, 0, 0, Math.PI, false);
        ctx.strokeStyle = `rgba(250, 248, 255, ${alpha})`;
        ctx.lineWidth = lw;
        ctx.lineCap = 'round';
        ctx.stroke();
    }

    ctx.restore();
}
