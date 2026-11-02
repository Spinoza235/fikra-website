"use client";

import { useEffect, useRef } from "react";

// Fond animé « réseau de neurones » : des neurones reliés entre eux,
// avec des signaux lumineux qui circulent le long des connexions.
// Il réagit doucement à la souris et s'arrête quand il n'est pas visible.

type Neuron = { x: number; y: number; vx: number; vy: number; r: number; hub: boolean };
type Signal = { a: number; b: number; t: number; speed: number };

const LINK_DISTANCE = 160; // distance max (px) pour relier deux neurones
const MOUSE_RADIUS = 180;

export default function GridBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let neurons: Neuron[] = [];
    let signals: Signal[] = [];
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(95, Math.max(30, Math.round((w * h) / 13000)));
      neurons = Array.from({ length: count }, () => {
        const hub = Math.random() < 0.12;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: hub ? 2.6 + Math.random() * 1.2 : 1 + Math.random() * 1.2,
          hub,
        };
      });
      signals = [];
    };

    const draw = (animate: boolean) => {
      ctx.clearRect(0, 0, w, h);

      // Déplacement lent des neurones
      if (animate) {
        for (const n of neurons) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }

      // Connexions
      for (let i = 0; i < neurons.length; i++) {
        const a = neurons[i];
        for (let j = i + 1; j < neurons.length; j++) {
          const b = neurons[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > LINK_DISTANCE) continue;

          const mx = (a.x + b.x) / 2 - mouse.x;
          const my = (a.y + b.y) / 2 - mouse.y;
          const nearMouse = Math.max(0, 1 - Math.hypot(mx, my) / MOUSE_RADIUS);
          const alpha = (1 - d / LINK_DISTANCE) * (0.3 + nearMouse * 0.5);

          ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
          ctx.lineWidth = 0.7 + nearMouse * 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nouveaux signaux qui partent d'un neurone vers un voisin
      if (animate && signals.length < 14 && Math.random() < 0.08) {
        const ai = Math.floor(Math.random() * neurons.length);
        const a = neurons[ai];
        const neighbours: number[] = [];
        neurons.forEach((b, bi) => {
          if (bi !== ai && Math.hypot(a.x - b.x, a.y - b.y) < LINK_DISTANCE) neighbours.push(bi);
        });
        if (neighbours.length) {
          signals.push({
            a: ai,
            b: neighbours[Math.floor(Math.random() * neighbours.length)],
            t: 0,
            speed: 0.008 + Math.random() * 0.012,
          });
        }
      }

      // Signaux lumineux
      signals = signals.filter((s) => {
        s.t += s.speed;
        const a = neurons[s.a];
        const b = neurons[s.b];
        if (s.t >= 1 || Math.hypot(a.x - b.x, a.y - b.y) > LINK_DISTANCE * 1.2) return false;
        const x = a.x + (b.x - a.x) * s.t;
        const y = a.y + (b.y - a.y) * s.t;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 10);
        glow.addColorStop(0, "rgba(221, 214, 254, 0.95)");
        glow.addColorStop(0.4, "rgba(167, 139, 250, 0.45)");
        glow.addColorStop(1, "rgba(124, 58, 237, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      // Neurones
      for (const n of neurons) {
        const nearMouse = Math.max(0, 1 - Math.hypot(n.x - mouse.x, n.y - mouse.y) / MOUSE_RADIUS);
        const r = n.r + nearMouse * 1.5;
        if (n.hub || nearMouse > 0) {
          const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5);
          halo.addColorStop(0, `rgba(167, 139, 250, ${0.35 + nearMouse * 0.3})`);
          halo.addColorStop(1, "rgba(124, 58, 237, 0)");
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = n.hub ? "rgba(237, 233, 254, 0.95)" : "rgba(196, 181, 253, 0.8)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (visible && !document.hidden) draw(true);
      raf = requestAnimationFrame(loop);
    };

    init();
    if (reduce) {
      draw(false); // image fixe si le visiteur a désactivé les animations
    } else {
      loop();
    }

    const resizeObserver = new ResizeObserver(() => {
      init();
      if (reduce) draw(false);
    });
    resizeObserver.observe(canvas);

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    intersection.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{
        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
    />
  );
}