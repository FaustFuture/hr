import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Roles } from "@/components/roles"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { Roadmap } from "@/components/roadmap"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <Features />
      <Roles />
      <Process />
      <Testimonials />
      <Roadmap />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
