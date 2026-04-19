"use client";

import { useEffect, useRef } from "react";

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    // コンテンツ量が変わったときも追従
    const ro = new ResizeObserver(resize);
    ro.observe(document.body);

    type Star = {
      x: number; y: number;
      vx: number; vy: number;
      len: number; opacity: number; width: number;
      life: number; maxLife: number;
    };

    const stars: Star[] = [];

    function spawnStar() {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
      const speed = 8 + Math.random() * 10;
      stars.push({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: 80 + Math.random() * 120,
        opacity: 0,
        width: 1 + Math.random() * 1.5,
        life: 0,
        maxLife: 50 + Math.random() * 30,
      });
    }

    let frame = 0;
    let animId: number;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % 80 === 0) spawnStar();
      if (frame % 130 === 0) spawnStar();
      frame++;

      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;

        if (s.life < 10) s.opacity = s.life / 10;
        else if (s.life > s.maxLife - 10) s.opacity = (s.maxLife - s.life) / 10;
        else s.opacity = 1;

        if (s.life >= s.maxLife) { stars.splice(i, 1); continue; }

        const grad = ctx.createLinearGradient(
          s.x - s.vx * (s.len / 10), s.y - s.vy * (s.len / 10),
          s.x, s.y
        );
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.6, `rgba(255,100,200,${s.opacity * 0.7})`);
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(s.x - s.vx * (s.len / 10), s.y - s.vy * (s.len / 10));
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.lineCap = "round";
        ctx.stroke();

        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 6);
        glow.addColorStop(0, `rgba(255,255,255,${s.opacity * 0.9})`);
        glow.addColorStop(1, `rgba(255,100,200,0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-events-none"
    />
  );
}
