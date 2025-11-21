"use client"

import { motion } from "framer-motion"
import { Bot, User, Zap, Heart, Database, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Automate with AI",
    description: "Repetitive, data-heavy, and high-volume tasks are best handled by intelligent agents.",
    icon: Bot,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      { icon: Database, text: "Data Processing & Analysis" },
      { icon: Zap, text: "First-Draft Content Generation" },
      { icon: Bot, text: "Customer Support Triage" },
    ]
  },
  {
    title: "Delegate to Humans",
    description: "Strategic, creative, and empathetic roles require the human touch, amplified by AI tools.",
    icon: User,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    items: [
      { icon: Lightbulb, text: "Strategic Decision Making" },
      { icon: Heart, text: "Relationship Building" },
      { icon: User, text: "Complex Problem Solving" },
    ]
  }
]

export function Features() {
  return (
    <section id="services" className="py-24 bg-zinc-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
            The New Division of Labor
          </h2>
          <p className="text-lg text-zinc-600">
            We help you map your entire workflow to identify exactly where AI adds speed and where humans add value. Stop wasting human potential on robot work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className={`h-full bg-white border ${feature.border} shadow-sm overflow-hidden hover:shadow-md transition-shadow`}>
                <div className={`absolute top-0 left-0 w-full h-1 ${feature.color.replace('text', 'bg')}`} />
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-zinc-900">{feature.title}</CardTitle>
                  <p className="text-zinc-600 mt-2">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-700">
                        <div className={`p-1 rounded-md ${feature.bg}`}>
                          <item.icon className={`w-4 h-4 ${feature.color}`} />
                        </div>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
