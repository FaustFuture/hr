"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Strategy Workshop",
    price: "From $5k",
    description: "A 2-day intensive to map your workflows and identify high-impact AI opportunities.",
    features: [
      "Current Workflow Audit",
      "AI Opportunity Mapping",
      "Tool Recommendations",
      "Executive Presentation"
    ],
    cta: "Book Workshop",
    popular: false
  },
  {
    name: "Implementation Blueprint",
    price: "From $15k",
    description: "Complete design of your AI-native organization, including role definitions and tech stack.",
    features: [
      "Everything in Workshop",
      "Detailed Implementation Roadmap",
      "Custom AI Role Descriptions",
      "Vendor Selection & Setup",
      "Pilot Program Design"
    ],
    cta: "Get the Blueprint",
    popular: true
  },
  {
    name: "Ongoing Advisory",
    price: "Retainer",
    description: "Long-term partnership to ensure your team stays ahead of the rapidly evolving AI landscape.",
    features: [
      "Monthly Strategy Reviews",
      "New Tool Vetting",
      "Team Training Sessions",
      "Priority Support",
      "Quarterly ROI Analysis"
    ],
    cta: "Contact Us",
    popular: false
  }
]

export function Pricing() {
  return (
    <section className="py-32 md:py-40 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Engagement Options</h2>
          <p className="text-zinc-600">Flexible ways to start your transformation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative flex flex-col shadow-sm ${plan.popular ? 'border-indigo-500 ring-1 ring-indigo-500 bg-white' : 'border-zinc-200 bg-white'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full shadow-md">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-zinc-900">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-zinc-900 mt-2">{plan.price}</div>
                <CardDescription className="text-zinc-500 mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-700">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
