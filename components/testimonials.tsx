"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "We reduced our content production costs by 70% while increasing quality. The team helped us understand that AI isn't about replacing writers, it's about giving them superpowers.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
  },
  {
    quote: "The 'Operations Architect' role they designed for us completely changed how we scale. One person now manages what used to take a team of five.",
    author: "Michael Chen",
    role: "Founder, ScaleUp Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
  },
  {
    quote: "Finally, a consulting firm that understands the human side of AI. They didn't just dump tools on us; they taught our team how to think like AI managers.",
    author: "Elena Rodriguez",
    role: "VP of HR, GlobalCorp",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces"
  }
]

export function Testimonials() {
  return (
    <section className="py-32 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-zinc-900 mb-16">
          Trusted by Forward-Thinking Leaders
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-zinc-50 border-zinc-100 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <Quote className="w-8 h-8 text-indigo-200" />
                <p className="text-zinc-700 leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">{t.author}</div>
                    <div className="text-sm text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
