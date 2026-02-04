'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const router = useRouter();
  const [stage, setStage] = useState<'idle' | 'blackHole'>('idle');

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

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, []);

  const startPortalTransition = () => {
    if (stage !== 'idle') return;
    setStage('blackHole');
    timeoutsRef.current = [
      window.setTimeout(() => router.push('/gunes'), 2200),
    ];
  };

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

      <div
        className={`portal-overlay black-hole ${
          stage === 'blackHole' ? 'active' : ''
        }`}
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
          padding: '0 16px',
          pointerEvents: stage === 'idle' ? 'auto' : 'none',
        }}
      >
        {/* BAŞLIK */}
        <h1
          style={{
            fontFamily: '"Modern Antiqua", serif',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            letterSpacing: '0.18em',
            margin: 0,
          }}
        >
          PURE MYSTIC KIDS
        </h1>

        {/* ALT BAŞLIK */}
        <p
          style={{
            fontFamily: '"Tangerine", cursive',
            fontSize: 'clamp(1.6rem, 4.5vw, 2.4rem)',
            marginTop: '12px',
            marginBottom: '28px',
            opacity: 0.9,
          }}
        >
          The Universe through a Virtuous Kid&apos;s Eye
        </p>

        {/* 🌀 LOGO */}
        <div
          style={{
            position: 'relative',
            width: 'min(78vw, 360px)',
            height: 'auto',
          }}
        >
          <img
            src="/Pmk.png"
            alt="Pure Mystic Kids Portal"
            className={`portal-logo ${
              stage === 'idle' ? 'portal-idle' : 'portal-black'
            }`}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transition: 'transform 0.3s ease',
            }}
            onClick={startPortalTransition}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.06)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = 'scale(1)')
            }
          />

          {/* ☀️ */}
          <button
            onClick={startPortalTransition}
            style={{
              position: 'absolute',
              top: '0%',
              left: '0%',
              width: '35%',
              height: '35%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          />

          {/* 🌙 */}
          <button
            onClick={() => router.push('/ay')}
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '0%',
              width: '35%',
              height: '35%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          />

          {/* ⭐ */}
          <button
            onClick={() => router.push('/yildizlar')}
            style={{
              position: 'absolute',
              top: '30%',
              left: '30%',
              width: '40%',
              height: '40%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        </div>
      </main>

      <style jsx>{`
        .portal-logo {
          cursor: pointer;
          filter: drop-shadow(0 0 18px rgba(182, 147, 255, 0.55));
        }

        .portal-idle {
          animation: portalPulse 2.6s ease-in-out infinite;
        }

        .portal-black {
          animation: portalDive 2.2s cubic-bezier(0.16, 0, 0.3, 1) forwards;
        }

        .portal-overlay {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 200vmax;
          height: 200vmax;
          border-radius: 50%;
          pointer-events: none;
          z-index: 3;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0);
        }

        .black-hole {
          background: radial-gradient(
            circle at center,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 45%,
            rgba(0, 0, 0, 0.95) 62%,
            rgba(0, 0, 0, 0) 80%
          );
        }

        .black-hole.active {
          animation: blackHolePull 2.2s cubic-bezier(0.16, 0, 0.3, 1)
            forwards;
        }

        @keyframes portalPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
        }

        @keyframes portalDive {
          0% {
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 18px rgba(182, 147, 255, 0.55));
          }
          100% {
            transform: scale(3.4) rotate(360deg);
            filter: blur(1px)
              drop-shadow(0 0 28px rgba(90, 60, 140, 0.6));
            opacity: 0.7;
          }
        }

        @keyframes blackHolePull {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.05);
          }
          55% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.55);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
      `}</style>
    </>
  );
}
