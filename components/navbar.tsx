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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/faustfuture.png" alt="FaustFuture Logo" className="h-8 w-auto object-contain" />
            <span className="text-zinc-900">FaustFuture</span>
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
            <Link href="#contact">
              <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                Book Consultation
              </Button>
            </Link>
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
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800">
              Book Consultation
            </Button>
          </Link>
        </motion.div>
      )}
    </nav>
  )
}
