export default function ProductPreview() {
  const products = [
    {
      id: 1,
      name: "Milano Executive",
      desc: "Hand-stitched leather oxford",
      price: "€1,450",
      image: "/luxury-mens-dress-shoe.jpg",
    },
    {
      id: 2,
      name: "Venetian Heritage",
      desc: "Bespoke loafer collection",
      price: "€1,650",
      image: "/luxury-leather-loafer.jpg",
    },
    {
      id: 3,
      name: "Florence Atelier",
      desc: "Limited edition ankle boot",
      price: "€1,850",
      image: "/luxury-leather-ankle-boot.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-foreground">Featured Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each collection represents decades of Italian heritage and meticulous handcraftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-secondary/10 rounded-lg overflow-hidden mb-4 aspect-square">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{product.desc}</p>
              <p className="text-accent font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
