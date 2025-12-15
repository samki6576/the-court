"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-display font-bold tracking-tight">
            THE COURT
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/products" className="text-sm hover:text-accent transition-colors">
              COLLECTIONS
            </Link>
            <Link href="/about" className="text-sm hover:text-accent transition-colors">
              CRAFTSMANSHIP
            </Link>
            <Link href="/membership" className="text-sm hover:text-accent transition-colors">
              THE COURT
            </Link>
            <Link href="/contact" className="text-sm hover:text-accent transition-colors">
              CONTACT
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/checkout"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
            >
              <ShoppingBag size={18} />
              SHOP
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/products" className="block text-sm hover:text-accent transition-colors">
              COLLECTIONS
            </Link>
            <Link href="/about" className="block text-sm hover:text-accent transition-colors">
              CRAFTSMANSHIP
            </Link>
            <Link href="/membership" className="block text-sm hover:text-accent transition-colors">
              THE COURT
            </Link>
            <Link href="/contact" className="block text-sm hover:text-accent transition-colors">
              CONTACT
            </Link>
            <Link href="/checkout" className="block text-sm hover:text-accent transition-colors">
              SHOP
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
