"use client"

import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/faustfuture.png" alt="FaustFuture Logo" className="h-8 w-auto object-contain" />
              <span className="text-zinc-900">FaustFuture</span>
            </Link>
            <p className="text-zinc-500 max-w-xs mb-4">
              Helping forward-thinking companies build the AI-native workforce of tomorrow.
            </p>
            <a href="mailto:klemens@faustfuture.com" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
              klemens@faustfuture.com
            </a>
          </div>
          
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><Link href="/services" className="hover:text-indigo-600 transition-colors">Our Services</Link></li>
              <li><a href="https://ai.faustfuture.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-1">AI Suite <span className="text-xs bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full">New</span></a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500">
            © 2025 FaustFuture. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
