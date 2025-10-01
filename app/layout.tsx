import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://xvannn07.xyz'),
  title: 'Ekspann',
  description: 'Personal Portfolio',
  openGraph: {
    type: 'website',
    url: 'https://xvannn07.xyz',
    title: 'Ekspann',
    description: 'Portfolio Probadi Saya',
    images: [
      {
        url: 'https://xvannn07.xyz/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo Ekspann',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekspann',
    description: 'My Personal Portfolio',
    images: ['https://xvannn07.xyz/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
