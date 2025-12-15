import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display font-bold text-lg mb-4">THE COURT</h3>
            <p className="text-sm opacity-75">Handcrafted Italian luxury shoes for the discerning collector.</p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">COLLECTIONS</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/products" className="hover:opacity-100">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:opacity-100">
                  Limited Editions
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:opacity-100">
                  Bespoke
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/about" className="hover:opacity-100">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-100">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">CONNECT</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 The Court. All rights reserved. Handcrafted in Italy.</p>
        </div>
      </div>
    </footer>
  )
}
