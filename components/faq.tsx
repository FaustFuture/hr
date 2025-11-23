"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Will AI replace my employees?",
    answer: "No. AI replaces tasks, not people. However, roles will evolve. We help you transition your workforce from 'doers' to 'managers of AI', ensuring they remain valuable and your company stays competitive."
  },
  {
    question: "Do my employees need to be technical?",
    answer: "Not necessarily. Modern AI tools are increasingly natural-language based. We focus on 'AI literacy'—teaching your team how to prompt, orchestrate, and verify AI outputs, rather than how to code."
  },
  {
    question: "How long does a typical engagement take?",
    answer: "Our initial 'Audit & Blueprint' phase typically takes 2-3 weeks. Full implementation and training programs can range from 1 to 3 months depending on organization size."
  },
  {
    question: "Do you help us choose specific tools?",
    answer: "Yes. We are vendor-agnostic and recommend the best stack for your specific needs, whether that's ChatGPT Enterprise, Claude, Jasper, Midjourney, or custom API integrations."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-12 text-center">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="text-lg font-medium text-zinc-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-indigo-600" />
                ) : (
                  <Plus className="w-5 h-5 text-zinc-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
