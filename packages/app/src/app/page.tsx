export default function Home() {
  return (
    <>
      <div className="stars" />

      <main style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        zIndex: 1,
        position: "relative"
      }}>
        <h1 style={{ fontSize: "4rem", letterSpacing: "0.2em" }}>
          PURE MYSTIC KIDS
        </h1>

        <p style={{ fontStyle: "italic", marginTop: 16 }}>
          The Universe through a Virtuous Kid’s Eye
        </p>

        <p style={{ marginTop: 8 }}>
          A living, collective story that connects all beings.
        </p>

        <div style={{
          display: "flex",
          gap: 40,
          marginTop: 60,
          fontSize: "2rem"
        }}>
          <a href="/gunes">☀️</a>
          <a href="/ay">🌙</a>
          <a href="/yildizlar">⭐</a>
        </div>
      </main>
    </>
  )
}
