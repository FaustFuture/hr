"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WorkflowGraphic } from "@/components/workflow-graphic"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[auto] lg:min-h-screen flex items-center justify-center pt-32 pb-16 lg:pt-20 lg:pb-0 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-white blur-3xl opacity-80" />
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-100 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
            The Future of Work is Here
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] break-words">
            Hiring in the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
              Age of AI
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 max-w-xl leading-relaxed">
            AI won't replace your people. But people who master AI will replace those who don't. We help you build an AI-native workforce that orchestrates intelligence rather than just executing tasks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-12 text-base shadow-lg shadow-indigo-200">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#process" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-zinc-200 text-zinc-900 hover:bg-zinc-50 h-12 text-base">
                See Our Process
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-zinc-100 grid grid-cols-2 gap-4">
            {[
              "Audit & Automation Mapping",
              "AI-Native Role Design",
              "Upskilling & Training",
              "Tool Stack Implementation"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <WorkflowGraphic />
        </motion.div>
      </div>
    </section>
  )
}
