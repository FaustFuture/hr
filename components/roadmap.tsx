"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function Roadmap() {
  return (
    <section className="py-16 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50 to-white" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl border border-white bg-white/50 backdrop-blur-md shadow-xl">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mb-6">
            <Sparkles className="w-6 h-6 text-indigo-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">The Future is Automated</h2>
          <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
            We are building a platform where you can input your workflows and instantly get AI tool recommendations and automation blueprints tailored to your company DNA.
          </p>
          
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm text-indigo-700 font-medium">
            Coming late 2025 • Join the waitlist
          </div>
        </div>
      </div>
    </section>
  )
}
