import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-display font-bold">Experience Craft. Own Legacy.</h2>
        <p className="text-lg opacity-90 leading-relaxed">
          Every pair tells a story of dedication, tradition, and uncompromising commitment to excellence.
        </p>
        <Link
          href="/checkout"
          className="inline-block px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium mt-4"
        >
          START YOUR COLLECTION
        </Link>
      </div>
    </section>
  )
}
