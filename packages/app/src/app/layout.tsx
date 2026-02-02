export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body style={{ padding: 24 }}>
        <header>
          <h1>Evren Platformu</h1>
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}
