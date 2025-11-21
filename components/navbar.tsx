"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <span className="text-white">AI</span>
            </div>
            <span className="text-zinc-900">Workforce<span className="text-indigo-600">.ai</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">
              Process
            </Link>
            <Link href="#roles" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">
              Roles
            </Link>
            <Link href="#faq" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">
              FAQ
            </Link>
            <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-zinc-200 p-4 flex flex-col gap-4 shadow-lg"
        >
          <Link href="#services" className="text-sm font-medium text-zinc-600 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="#process" className="text-sm font-medium text-zinc-600 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            Process
          </Link>
          <Link href="#roles" className="text-sm font-medium text-zinc-600 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            Roles
          </Link>
          <Link href="#faq" className="text-sm font-medium text-zinc-600 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800">
            Book Consultation
          </Button>
        </motion.div>
      )}
    </nav>
  )
}
