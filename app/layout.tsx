import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Exo_2 } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "PlayChange.io - In Games We Trust",
  description:
    "The ultimate gaming platform where trust meets innovation. Join millions of gamers in a revolutionary ecosystem built on blockchain technology.",
  keywords: "gaming, blockchain, web3, NFT, cryptocurrency, social impact, community",
  authors: [{ name: "PlayChange.io Team" }],
  openGraph: {
    title: "PlayChange.io - In Games We Trust",
    description: "The ultimate gaming platform where trust meets innovation.",
    url: "https://playchange.io",
    siteName: "PlayChange.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayChange.io - In Games We Trust",
    description: "The ultimate gaming platform where trust meets innovation.",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${exo2.variable} font-exo2 bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
