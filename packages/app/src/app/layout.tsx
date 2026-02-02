export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <h1>ROOT ÇALIŞIYOR</h1>
        {children}
      </body>
    </html>
  )
}
