export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Arka plan */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
          zIndex: 0,
        }}
      />

      {/* Yavaş kayan ışık / evren hissi */}
      <div
        style={{
          position: "absolute",
          inset: "-50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), transparent 60%)",
          animation: "drift 60s linear infinite",
          zIndex: 1,
        }}
      />

      {/* İçerik */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "0 24px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              letterSpacing: "0.12em",
              marginBottom: "1.5rem",
            }}
          >
            PURE MYSTIC KIDS
          </h1>

          <p
            style={{
              fontStyle: "italic",
              fontWeight: 600,
              marginBottom: "0.8rem",
              opacity: 0.9,
            }}
          >
            The Universe through a Virtuous Kid's Eye
          </p>

          <p style={{ opacity: 0.8 }}>
            A living, collective story that connects all beings.
          </p>
        </div>
      </div>

      {/* Animasyon */}
      <style>{`
        @keyframes drift {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(20%, 20%);
          }
        }
      `}</style>
    </div>
  )
}
