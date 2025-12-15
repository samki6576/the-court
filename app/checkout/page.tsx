import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function CheckoutPage() {
  const cartItems = [
    {
      id: 1,
      name: "Milano Executive",
      price: 1450,
      qty: 1,
      image: "/luxury-shoe.jpg",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = 50
  const total = subtotal + shipping

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-foreground mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-secondary/5 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-display font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-4 border-b border-border pb-6 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                        <p className="text-accent font-medium">€{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>€{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>€{shipping}</span>
                  </div>
                  <div className="flex justify-between font-display font-bold text-foreground text-lg pt-3 border-t border-border">
                    <span>Total</span>
                    <span>€{total}</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-6">
                <h3 className="font-display font-bold mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 bg-primary-foreground/10 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 bg-primary-foreground/10 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-2 bg-primary-foreground/10 rounded"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="px-4 py-2 bg-primary-foreground/10 rounded" />
                    <input type="text" placeholder="CVC" className="px-4 py-2 bg-primary-foreground/10 rounded" />
                  </div>
                  <button className="w-full px-4 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium rounded">
                    COMPLETE PURCHASE
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-secondary/5 rounded-lg p-6 h-fit">
              <h3 className="font-display font-bold text-foreground mb-4">Secure Checkout</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Money-back guarantee</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Free shipping on orders over €500</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Expert support available 24/7</span>
                </div>
              </div>

              <Link href="/products" className="block text-center mt-6 text-sm text-accent hover:underline">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
