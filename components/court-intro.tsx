export default function CourtIntro() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-foreground">Join The Court</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Become part of an exclusive community reserved for true connoisseurs. Members enjoy early access to
              limited releases, bespoke customization services, and invitations to private events.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              The Court is not just a membership—it's a philosophy. We believe luxury should be meaningful, earned
              through appreciation of craft, not merely purchased.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <h4 className="font-display font-bold text-foreground">Early Access</h4>
                  <p className="text-sm text-muted-foreground">First to discover new collections</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <h4 className="font-display font-bold text-foreground">Bespoke Services</h4>
                  <p className="text-sm text-muted-foreground">Custom design and leather selection</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <h4 className="font-display font-bold text-foreground">Private Events</h4>
                  <p className="text-sm text-muted-foreground">Exclusive workshops and collections launches</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg aspect-square">
            <img
              src="/luxury-mens-shoes-display-collection.jpg"
              alt="The Court membership benefits"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
