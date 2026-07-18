"use client";

import { useEffect, useRef } from "react";

interface Bar {
  height: number;
  target: number;
  speed: number;
}

export default function AudioVisualizer({ barCount = 48 }: { barCount?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const barsRef = useRef<Bar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    barsRef.current = Array.from({ length: barCount }, () => ({
      height: Math.random() * 0.4 + 0.1,
      target: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.06 + 0.02,
    }));

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const barW = width / barCount;
      const gap = barW * 0.3;
      const bW = barW - gap;

      barsRef.current.forEach((bar, i) => {
        if (Math.abs(bar.height - bar.target) < 0.01) {
          bar.target = Math.random() * 0.85 + 0.05;
          bar.speed = Math.random() * 0.06 + 0.02;
        }
        bar.height += (bar.target - bar.height) * bar.speed;

        const x = i * barW + gap / 2;
        const barH = bar.height * height;
        const y = height - barH;

        const grad = ctx.createLinearGradient(x, y, x, height);
        grad.addColorStop(0, "rgba(0, 212, 255, 0.9)");
        grad.addColorStop(0.5, "rgba(0, 184, 148, 0.7)");
        grad.addColorStop(1, "rgba(9, 132, 227, 0.3)");

        ctx.beginPath();
        ctx.roundRect(x, y, bW, barH, 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.roundRect(x, y, bW, barH, 2);
        ctx.strokeStyle = "rgba(0, 212, 255, 0.3)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [barCount]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
