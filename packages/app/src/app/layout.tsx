import './globals.css'
import Layout from '@/components/Layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
      </head>

      <body>
        <Providers cookies={cookies}>
          <Layout>{props.children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
