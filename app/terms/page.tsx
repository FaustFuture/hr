import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none">
          <p className="text-zinc-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and FaustFuture ("we," "us" or "our"), concerning your access to and use of the faustfuture.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: 
            <a href="mailto:klemens@faustfuture.com" className="text-indigo-600 hover:text-indigo-700 ml-1">klemens@faustfuture.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
