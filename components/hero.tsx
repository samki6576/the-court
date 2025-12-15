import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl sm:text-7xl font-display font-bold leading-tight text-foreground text-balance">
          Handcrafted Excellence Redefined
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Each pair is a masterpiece of Italian craftsmanship. Limited editions. Uncompromising quality. For those who
          understand that true luxury demands exclusivity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/products"
            className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            EXPLORE COLLECTIONS
          </Link>
          <Link
            href="/membership"
            className="px-8 py-4 border border-primary text-primary hover:bg-primary/5 transition-colors text-sm font-medium"
          >
            JOIN THE COURT
          </Link>
        </div>

        <div className="pt-12">
          <img
            src="/luxury-leather-shoes-product-photography.jpg"
            alt="Featured luxury shoe"
            className="w-full max-w-2xl mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
