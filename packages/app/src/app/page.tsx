export default function Home() {
  return (
    <>
      <div className="stars" />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "transparent",
        }}
      >
        <h1 style={{ fontSize: "4rem", letterSpacing: "0.25em" }}>
          PURE MYSTIC KIDS
        </h1>

        <p style={{ fontStyle: "italic", marginTop: 20 }}>
          The Universe through a Virtuous Kid&apos;s Eye
        </p>

        <p style={{ marginTop: 8 }}>
          A living, collective story that connects all beings.
        </p>

        <div
          style={{
            display: "flex",
            gap: 50,
            marginTop: 60,
            fontSize: "2.5rem",
          }}
        >
          <a href="/gunes">☀️</a>
          <a href="/ay">🌙</a>
          <a href="/yildizlar">⭐</a>
        </div>
      </main>
    </>
  );
}
