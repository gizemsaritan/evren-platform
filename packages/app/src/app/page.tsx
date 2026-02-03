'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const router = useRouter();

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

    const stars = Array.from({ length: 320 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.25 + 0.05,
      alpha: Math.random() * 0.7 + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.y -= s.speed;
        if (s.y < 0) {
          s.y = canvas.height;
          s.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <>
      {/* 🌌 ARKA PLAN */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: `
            radial-gradient(circle at 15% 20%, #6a3fa0 0%, transparent 40%),
            radial-gradient(circle at 85% 30%, #1b1e4b 0%, transparent 45%),
            radial-gradient(circle at 50% 80%, #000000 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, #000000 0%, transparent 55%),
            linear-gradient(180deg, #050510, #000000)
          `,
        }}
      />

      {/* ⭐ YILDIZ CANVAS */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* 🪐 İÇERİK */}
      <main
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#e6e1ff',
          padding: '0 24px',
        }}
      >
        <h1
          style={{
            fontFamily: '"Modern Antiqua", serif',
            fontSize: '4rem',
            letterSpacing: '0.25em',
            margin: 0,
          }}
        >
          PURE MYSTIC KIDS
        </h1>

        <p
          style={{
            fontFamily: '"Tangerine", cursive',
            fontSize: '2.4rem',
            marginTop: '16px',
            marginBottom: '36px',
            opacity: 0.9,
          }}
        >
          The Universe through a Virtuous Kid&apos;s Eye
        </p>

        {/* 🌀 LOGO + ETKİLEŞİM */}
        <div
          style={{
            position: 'relative',
            width: '380px',
            height: '380px',
          }}
        >
          {/* LOGO */}
          <img
            src="/Pmk.png"
            alt="Pure Mystic Kids Portal"
            style={{
              width: '380px',
              height: '380px',
              display: 'block',
              transition: 'transform 0.3s ease',
            }}
          />

          {/* ☀️ GÜNEŞ */}
          <button
            onClick={() => router.push('/gunes')}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '140px',
              height: '140px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget.previousSibling as HTMLElement).style.transform =
                'scale(1.05)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget.previousSibling as HTMLElement).style.transform =
                'scale(1)')
            }
          />

          {/* 🌙 AY */}
          <button
            onClick={() => router.push('/ay')}
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '0',
              width: '140px',
              height: '140px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget.previousSibling as HTMLElement).style.transform =
                'scale(1.05)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget.previousSibling as HTMLElement).style.transform =
                'scale(1)')
            }
          />

          {/* ⭐ MERKEZ YILDIZ */}
          <button
            onClick={() => router.push('/yildizlar')}
            style={{
              position: 'absolute',
              top: '120px',
              left: '120px',
              width: '140px',
              height: '140px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          />

          {/* ⭐ ÜST SOL YILDIZ */}
          <button
            onClick={() => router.push('/yildizlar')}
            style={{
              position: 'absolute',
              top: '20px',
              left: '180px',
              width: '80px',
              height: '80px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          />

          {/* ⭐ ÜST SAĞ YILDIZ */}
          <button
            onClick={() => router.push('/yildizlar')}
            style={{
              position: 'absolute',
              top: '40px',
              right: '20px',
              width: '80px',
              height: '80px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        </div>
      </main>
    </>
  );
}
