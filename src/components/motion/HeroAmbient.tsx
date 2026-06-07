import { useEffect, useRef } from "react";

/**
 * HeroAmbient
 * A genuinely-moving ambient background for the dark navy hero.
 * - Two slow CSS radial-gradient "auroras" drift at 30s+ cycles (depth).
 * - A canvas constellation of faint points drifts slowly, with hairline
 *   connections that fade in when points pass near each other.
 *   The metaphor is the network of senior relationships — quiet, premium,
 *   on-brand for an executive search firm. Never competes with the headline.
 * - Respects prefers-reduced-motion (falls back to a static composition).
 */
export const HeroAmbient = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;
    let running = true;

    type Point = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let points: Point[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with area, capped for performance
      const area = width * height;
      const count = Math.min(120, Math.max(42, Math.round(area / 10500)));
      points = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        // Noticeable slow drift, pixels per frame at ~60fps
        vx: (Math.random() - 0.5) * 0.34,
        vy: (Math.random() - 0.5) * 0.26,
        r: 0.8 + Math.random() * 1.7,
        a: 0.36 + Math.random() * 0.5,
      }));
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      // Connection threshold — scales with the smaller dimension so it feels
      // consistent across viewports
      const linkDist = Math.min(190, Math.max(115, Math.min(width, height) * 0.24));
      const linkDistSq = linkDist * linkDist;

      // Move + draw points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        // Soft wrap around edges so motion is continuous, no bouncing
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        // Warm off-white, low alpha — reads as ambient, not as content
        ctx.fillStyle = `rgba(247, 245, 241, ${p.a * 0.72})`;
        ctx.fill();
      }

      // Connecting hairlines
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDistSq) {
            const t = 1 - d2 / linkDistSq; // 0..1, 1 when closest
            const alpha = t * 0.32; // visible, still premium
            ctx.strokeStyle = `rgba(201, 168, 76, ${alpha})`; // accent (warm gold)
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    resize();

    if (reduceMotion) {
      // Render one static frame and stop
      ctx.clearRect(0, 0, width, height);
      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 245, 241, ${p.a * 0.45})`;
        ctx.fill();
      }
    } else {
      draw();
    }

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      resize();
    };
    window.addEventListener("resize", onResize);

    // Pause when tab is hidden to save battery
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!reduceMotion && !running) {
        running = true;
        draw();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="hero-ambient-layer pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Aurora layer 1 — deep indigo glow, slow drift */}
      <div className="hero-aurora hero-aurora-1" />
      {/* Aurora layer 2 — warm gold ember, even slower, very low opacity */}
      <div className="hero-aurora hero-aurora-2" />
      {/* Constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Vignette so the headline always sits on calmer ground */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_45%,transparent_0%,transparent_35%,hsl(var(--primary)/0.55)_100%)]" />
    </div>
  );
};
