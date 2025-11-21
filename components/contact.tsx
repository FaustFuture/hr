"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-zinc-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
              Ready to Future-Proof Your Workforce?
            </h2>
            <p className="text-lg text-zinc-600 mb-8">
              Book a free 30-minute consultation to discuss your current challenges and see if our approach is a fit for your organization.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-700">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Immediate actionable insights</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Speak directly with a senior consultant</span>
              </div>
            </div>
          </div>

          <Card className="bg-white border-zinc-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-zinc-900">Get in Touch</CardTitle>
              <CardDescription className="text-zinc-500">Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">First name</label>
                  <input id="first-name" className="w-full h-10 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">Last name</label>
                  <input id="last-name" className="w-full h-10 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700">Work Email</label>
                <input id="email" type="email" className="w-full h-10 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="jane@company.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700">Main Challenge</label>
                <textarea id="message" className="w-full min-h-[100px] rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Tell us about your current workforce challenges..." />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
                Request Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
