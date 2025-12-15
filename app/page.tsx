import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ProductPreview from "@/components/product-preview"
import CourtIntro from "@/components/court-intro"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <ProductPreview />
      <CourtIntro />
      <CTA />
      <Footer />
    </>
  )
}
