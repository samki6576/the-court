import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-8">Our Craft</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">A Legacy of Excellence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                For generations, Italian artisans have upheld traditions of extraordinary craftsmanship. We continue
                this legacy by creating shoes that transcend footwear—they are wearable art, each pair a masterpiece
                born from dedication and passion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every stitch, every seam, every detail is intentional. We refuse to compromise on quality. We refuse to
                settle for ordinary.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary/10 rounded-lg aspect-video">
                <img
                  src="https://i.pinimg.com/736x/cb/b0/b6/cbb0b6ba057cb43b43906e4c7f28ad5c.jpg"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">The Artisan's Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our master craftsmen have dedicated their lives to perfecting their art. With over 200 years of
                  combined experience, they bring unparalleled expertise to every creation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This is not mass production. This is passion, tradition, and an unwavering commitment to creating
                  shoes that will be treasured for generations.
                </p>
              </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-border">
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Pairs Crafted Annually</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">200+</div>
                <p className="text-sm text-muted-foreground">Years of Combined Heritage</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Hand-Crafted Process</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Materials of Distinction</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We source only the finest materials from carefully selected suppliers across Italy. Premium leather is
                personally inspected and approved, ensuring every hide meets our exacting standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <h4 className="font-display font-bold text-foreground mb-2">Leather</h4>
                  <p className="text-sm text-muted-foreground">
                    Sourced from Tuscan tanneries with heritage dating back centuries
                  </p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <h4 className="font-display font-bold text-foreground mb-2">Soles</h4>
                  <p className="text-sm text-muted-foreground">
                    Hand-cut from Italian leather and natural rubber compounds
                  </p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <h4 className="font-display font-bold text-foreground mb-2">Hardware</h4>
                  <p className="text-sm text-muted-foreground">
                    Italian-made brass and silver components, all hand-finished
                  </p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <h4 className="font-display font-bold text-foreground mb-2">Thread</h4>
                  <p className="text-sm text-muted-foreground">
                    Silk and cotton blends, dyed to precise color specifications
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
