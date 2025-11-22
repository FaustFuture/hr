"use client"

import { motion } from "framer-motion"
import { Megaphone, Settings, Users } from "lucide-react"

const roles = [
  {
    title: "The AI-Augmented Marketer",
    oldWay: "Writes 2 blogs/week, manages 1 campaign.",
    newWay: "Orchestrates 5 AI agents to produce 20 content pieces, optimizes 10 campaigns in real-time.",
    icon: Megaphone,
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100"
  },
  {
    title: "The Operations Architect",
    oldWay: "Manually updates spreadsheets, chases approvals.",
    newWay: "Designs self-healing workflows where AI handles data entry and routing, stepping in only for exceptions.",
    icon: Settings,
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    title: "The AI-Empowered Support Lead",
    oldWay: "Answers repetitive tickets all day.",
    newWay: "Trains the support bot, analyzes sentiment trends, and handles high-value VIP escalations.",
    icon: Users,
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100"
  }
]

export function Roles() {
  return (
    <section id="roles" className="py-32 md:py-40 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
            Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">AI-Native Roles</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Job descriptions haven't changed in decades. They need to. We help you redefine what your employees actually do when they have superpowers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-1 rounded-2xl bg-gradient-to-b from-zinc-100 to-white hover:from-indigo-50 hover:to-purple-50 transition-all duration-500 shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative h-full bg-white rounded-xl p-8 border border-zinc-100 group-hover:border-indigo-100 transition-colors">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-6 shadow-md`}>
                  <role.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{role.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-1">Traditional</p>
                    <p className="text-sm text-zinc-400 line-through decoration-zinc-300">{role.oldWay}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-indigo-600 font-semibold mb-1">AI-Native</p>
                    <p className="text-sm text-zinc-800">{role.newWay}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
