import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            Comprehensive AI workforce solutions designed to transform your organization from the ground up.
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          
          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Workforce Audit & Automation Mapping</h2>
              <p className="text-lg text-zinc-600 mb-6">
                We analyze your current organizational structure to identify high-value opportunities for AI automation and augmentation. We don't just look for tasks to automate; we look for entire workflows to reimagine.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Comprehensive workflow analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>ROI projection for automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Tool stack evaluation</span>
                </li>
              </ul>
              <Link href="/#contact">
                <Button>Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/1.png" alt="Workforce Audit Dashboard" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-4">AI-Native Role Design</h2>
              <p className="text-lg text-zinc-600 mb-6">
                Redefine job descriptions for the AI age. We help you transition from "task-based" roles to "outcome-based" roles where employees act as orchestrators of AI agents.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>New organizational charts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Updated job descriptions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Hiring frameworks for AI aptitude</span>
                </li>
              </ul>
              <Link href="/#contact">
                <Button>Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/2.png" alt="AI Role Design" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Implementation & Training</h2>
              <p className="text-lg text-zinc-600 mb-6">
                Strategy is nothing without execution. We help you implement the tools and train your team to use them effectively, ensuring adoption and long-term success.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Custom agent development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Team workshops and upskilling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Change management support</span>
                </li>
              </ul>
              <Link href="/#contact">
                <Button>Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/3.png" alt="Implementation and Training" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
