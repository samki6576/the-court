import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"] })
const lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
  
  title: "The Court - Luxury Handcrafted Shoes",
  description:
    "Discover artisanal Italian-crafted shoes for the discerning collector. Limited editions, bespoke quality, and timeless elegance.",
  icons: {
    icon: [
      { url: "/s.png", sizes: "32x32" },
      { url: "/s.png", type: "image/png", sizes: "192x192" },
      { url: "/s.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/s.png", type: "image/png", sizes: "180x180" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
