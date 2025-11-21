"use client"

import { motion } from "framer-motion"
import { Bot, User, Brain, Zap } from "lucide-react"

export function WorkflowGraphic() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Glow - Adjusted for light mode */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-purple-100 to-transparent blur-3xl rounded-full opacity-70" />

      {/* Central Hub - The Manager */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-xl shadow-indigo-200 border border-white">
          <User className="w-10 h-10 text-white" />
        </div>
        <div className="mt-4 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200 text-sm font-medium text-zinc-900 shadow-sm">
          AI Orchestrator
        </div>
      </motion.div>

      {/* Orbiting Nodes */}
      <div className="absolute inset-0">
        {/* Node 1: AI Agent - Automation */}
        <motion.div 
          className="absolute top-1/4 left-1/4"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl bg-white border border-indigo-100 flex items-center justify-center shadow-lg shadow-indigo-100/50">
              <Bot className="w-8 h-8 text-indigo-600" />
            </div>
            <span className="text-xs text-indigo-600 font-mono font-semibold">Auto-Agent</span>
          </div>
          {/* Connection Line */}
          <svg className="absolute top-8 left-16 w-32 h-32 -z-10 overflow-visible">
             <motion.path 
               d="M 0 0 L 100 80" 
               fill="none" 
               stroke="url(#gradient-line)" 
               strokeWidth="2"
               strokeDasharray="5 5"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 0.5 }}
               transition={{ duration: 1.5, delay: 0.5 }}
             />
          </svg>
        </motion.div>

        {/* Node 2: Human Specialist - Creative */}
        <motion.div 
          className="absolute top-1/3 right-1/4"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl bg-white border border-emerald-100 flex items-center justify-center shadow-lg shadow-emerald-100/50">
              <Brain className="w-8 h-8 text-emerald-600" />
            </div>
            <span className="text-xs text-emerald-600 font-mono font-semibold">Creative Lead</span>
          </div>
          <svg className="absolute top-8 right-16 w-40 h-40 -z-10 overflow-visible">
             <motion.path 
               d="M 0 0 L -120 60" 
               fill="none" 
               stroke="url(#gradient-line-2)" 
               strokeWidth="2"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 0.5 }}
               transition={{ duration: 1.5, delay: 0.8 }}
             />
          </svg>
        </motion.div>

        {/* Node 3: Task - Processing */}
        <motion.div 
          className="absolute bottom-1/4 left-1/3"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-xl bg-white border border-purple-100 flex items-center justify-center shadow-lg shadow-purple-100/50">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xs text-purple-600 font-mono font-semibold">Processing</span>
          </div>
          <svg className="absolute bottom-14 left-14 w-32 h-32 -z-10 overflow-visible">
             <motion.path 
               d="M 0 0 L 60 -80" 
               fill="none" 
               stroke="rgba(168, 85, 247, 0.3)" 
               strokeWidth="2"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 0.5 }}
               transition={{ duration: 1.5, delay: 1.2 }}
             />
          </svg>
        </motion.div>
        
        {/* Floating Particles */}
        <motion.div 
           className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full blur-[1px]"
           animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
           transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
         <motion.div 
           className="absolute bottom-20 left-10 w-3 h-3 bg-indigo-400 rounded-full blur-[2px]"
           animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
           transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
      </div>

      {/* Defs for gradients */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="gradient-line-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
