import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ProductsPage() {
  const collections = [
    {
      id: 1,
      name: "Milano Executive",
      desc: "Hand-stitched leather oxford. Italian craftsmanship meets timeless elegance.",
      price: "€1,450",
      image: "/luxury-mens-oxford-shoe-leather.jpg",
      limited: false,
    },
    {
      id: 2,
      name: "Venetian Heritage",
      desc: "Bespoke loafer collection with hand-rolled leather details.",
      price: "€1,650",
      image: "/luxury-venetian-loafer-shoe.jpg",
      limited: false,
    },
    {
      id: 3,
      name: "Florence Atelier",
      desc: "Limited edition ankle boot. Only 50 pairs available worldwide.",
      price: "€1,850",
      image: "/luxury-leather-ankle-boot-luxury.jpg",
      limited: true,
    },
    {
      id: 4,
      name: "Toscana Supreme",
      desc: "Premium leather slip-on with hand-woven sole detail.",
      price: "€1,750",
      image: "/premium-leather-slip-on-shoe.jpg",
      limited: false,
    },
    {
      id: 5,
      name: "Roma Exclusive",
      desc: "Ultra-limited edition with bespoke leather sourcing. 25 pairs only.",
      price: "€2,200",
      image: "/exclusive-luxury-shoe-limited-edition.jpg",
      limited: true,
    },
    {
      id: 6,
      name: "Amalfi Limited",
      desc: "Handcrafted beach-inspired luxury footwear. Seasonal release.",
      price: "€1,550",
      image: "/premium-luxury-sandal-leather.jpg",
      limited: true,
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-4">Collections</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Each collection is a testament to our commitment to uncompromising quality and timeless design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((product) => (
              <div key={product.id} className="group">
                <div className="relative bg-secondary/10 rounded-lg overflow-hidden mb-4 aspect-square">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.limited && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold rounded">
                      LIMITED
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-medium text-lg">{product.price}</span>
                  <button className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
