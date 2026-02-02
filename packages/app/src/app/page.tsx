export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "4rem",
            letterSpacing: "0.12em",
            marginBottom: "1.5rem",
          }}
        >
          PURE MYSTIC KIDS
        </h1>

        <p
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "1.2rem",
            opacity: 0.9,
            marginBottom: "0.8rem",
          }}
        >
          The Universe through a Virtuous Kid's Eye
        </p>

        <p
          style={{
            fontSize: "1rem",
            opacity: 0.8,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          A living, collective story that connects all beings.
        </p>
      </div>
    </div>
  )
}
