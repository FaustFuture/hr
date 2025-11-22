"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    // Add your Web3Forms Access Key here. 
    // Ideally, use an environment variable: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE") 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        event.currentTarget.reset()
      } else {
        setError(data.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to submit form. Please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 md:py-40 bg-gradient-to-b from-zinc-50 to-white">
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

          <Card className="bg-white border-zinc-200 shadow-xl relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-zinc-900">Get in Touch</CardTitle>
              <CardDescription className="text-zinc-500">Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Message Sent!</h3>
                  <p className="text-zinc-600">We'll be in touch shortly to schedule your consultation.</p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Web3Forms Hidden Fields */}
                  <input type="hidden" name="subject" value="New Consultation Request - FaustFuture" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">First name</label>
                      <input required name="first_name" id="first-name" className="w-full h-10 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">Last name</label>
                      <input required name="last_name" id="last-name" className="w-full h-10 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-700">Work Email</label>
                    <input required name="email" id="email" type="email" className="w-full h-10 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="jane@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-700">Main Challenge</label>
                    <textarea required name="message" id="message" className="w-full min-h-[100px] rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Tell us about your current workforce challenges..." />
                  </div>
                  
                  {error && (
                    <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
                    {isSubmitting ? "Sending..." : "Request Consultation"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
