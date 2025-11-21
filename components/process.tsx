"use client"

import { motion } from "framer-motion"
import { Search, Map, Layers, Rocket, RefreshCw } from "lucide-react"

const steps = [
  {
    title: "Discovery & Audit",
    description: "We analyze your current workforce structure, pain points, and high-volume bottlenecks.",
    icon: Search
  },
  {
    title: "Workflow Mapping",
    description: "We deconstruct every process to identify 'automation zones' and 'human leverage points'.",
    icon: Map
  },
  {
    title: "AI Stack Design",
    description: "We select and configure the right mix of LLMs, agents, and automation tools for your specific needs.",
    icon: Layers
  },
  {
    title: "Implementation & Training",
    description: "We roll out the systems and train your team to become 'AI Managers' instead of task doers.",
    icon: Rocket
  },
  {
    title: "Ongoing Advisory",
    description: "AI moves fast. We keep your stack updated and your team ahead of the curve.",
    icon: RefreshCw
  }
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Our Consulting Process</h2>
          <p className="text-zinc-600">From chaos to orchestration in five steps.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200/0 via-indigo-200 to-indigo-200/0 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 md:text-right">
                  <div className={`hidden md:block ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h3>
                    <p className="text-zinc-600">{step.description}</p>
                  </div>
                </div>

                {/* Icon Marker */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-indigo-100 flex items-center justify-center shadow-lg shadow-indigo-100/50">
                    <step.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>

                {/* Content Side (Mobile/Desktop Alternate) */}
                <div className="flex-1">
                  <div className={`md:hidden`}>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h3>
                    <p className="text-zinc-600">{step.description}</p>
                  </div>
                  <div className={`hidden md:block ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                     {/* Empty for spacing on desktop */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
