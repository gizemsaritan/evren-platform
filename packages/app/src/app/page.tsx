'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Target = 'gunes' | 'ay' | 'yildizlar' | null;

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  // ⭐ YILDIZLAR – ESKİ İYİ HAL (GERÇEK GLOW)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = [
      ...Array.from({ length: 220 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 0.6 + 0.3,
        speed: 0.04,
      })),
      ...Array.from({ length: 120 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.2 + 0.7,
        speed: 0.1,
      })),
      ...Array.from({ length: 40 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2.2 + 1.2,
        speed: 0.18,
      })),
    ];

    function drawStar(s: any) {
      const radius = s.r * 3;
      const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, radius);
      g.addColorStop(0, 'rgba(255,255,255,0.9)');
      g.addColorStop(0.4, 'rgba(255,255,255,0.4)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.fillStyle = g;
      ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.y -= s.speed;
        if (s.y < -20) {
          s.y = canvas.height + 20;
          s.x = Math.random() * canvas.width;
        }
        drawStar(s);
      });
      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  const enter = (t: Target) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => router.push(`/${t}`), 1200);
  };

  return (
    <>
      <div className="stars" />
      <canvas ref={canvasRef} id="star-canvas" />

      <main className="hero">
        <h1>PURE MYSTIC KIDS</h1>

        <p className="subtitle">
          The Universe through a Virtuous Kid&apos;s Eye
        </p>

        <p className="desc">
          A living, collective story that connects all beings.
        </p>

        <div className="logo-portal">
          <Image
            src="/Pmk.png"
            alt="Pure Mystic Kids Portal"
            width={260}
            height={260}
            priority
          />

          {/* GÜNEŞ */}
          <button
            className="hit"
            style={{ top: 0, left: 0, width: 90, height: 90 }}
            onClick={() => enter('gunes')}
          />

          {/* YILDIZ */}
          <button
            className="hit"
            style={{ top: 0, right: 70, width: 80, height: 80 }}
            onClick={() => enter('yildizlar')}
          />

          {/* AY */}
          <button
            className="hit"
            style={{ bottom: 20, right: 20, width: 80, height: 80 }}
            onClick={() => enter('ay')}
          />
        </div>
      </main>
    </>
  );
}
