import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function MembershipPage() {
  const benefits = [
    {
      icon: "★",
      title: "Early Access",
      desc: "First to discover new collections before public release",
    },
    {
      icon: "✦",
      title: "Bespoke Services",
      desc: "Custom design, leather selection, and personalized consultation",
    },
    {
      icon: "◆",
      title: "Private Events",
      desc: "Exclusive workshops, trunk shows, and collection launches",
    },
    {
      icon: "●",
      title: "VIP Support",
      desc: "24/7 concierge service and priority customer support",
    },
    {
      icon: "■",
      title: "Members Only",
      desc: "Access to ultra-limited editions (50 pairs or fewer)",
    },
    {
      icon: "◇",
      title: "Investment Value",
      desc: "Appreciation potential and collector community status",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-4">The Court Membership</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join an exclusive circle of collectors who understand that true luxury is about access, experience, and
              belonging to something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-secondary/5 rounded-lg border border-border">
                <div className="text-3xl mb-3 text-accent">{benefit.icon}</div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Join?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Membership is by application only. We accept collectors who share our philosophy of quality over quantity.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium"
            >
              APPLY NOW
            </Link>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Why The Court?</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We don't believe in mass production or compromises. Every shoe we craft represents our unwavering
                commitment to excellence. The Court exists to connect like-minded individuals who appreciate artistry,
                heritage, and the intangible value of exclusivity.
              </p>
              <p>
                Membership is a testament to your appreciation of craftsmanship. It's where collectors meet
                connoisseurs, where stories are shared, and where every acquisition becomes part of a larger legacy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
