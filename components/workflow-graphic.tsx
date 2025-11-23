"use client"

import { motion } from "framer-motion"
import { Bot, User, Brain, Zap } from "lucide-react"

export function WorkflowGraphic() {
  return (
    <div className="relative max-sm:hidden w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">

      {/* 
        Fixed coordinate system container 
        Desktop: 600x500
        Mobile: Scaled down
      */}
      <div className="relative w-[600px] h-[500px] scale-[0.52] sm:scale-[0.7] md:scale-100 origin-center flex-shrink-0">
        
        {/* Central Hub - The Manager */}
        {/* Center is at 300, 250 */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute left-[300px] top-[250px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-xl shadow-indigo-200 border border-white">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="mt-4 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200 text-sm font-medium text-zinc-900 shadow-sm whitespace-nowrap">
            AI Orchestrator
          </div>
        </motion.div>

        {/* Node 1: AI Agent - Automation */}
        {/* Pos: 120, 100 */}
        <motion.div 
          className="absolute left-[120px] top-[100px] z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2 relative z-10">
            <div className="w-16 h-16 rounded-xl bg-white border border-indigo-100 flex items-center justify-center shadow-lg shadow-indigo-100/50">
              <Bot className="w-8 h-8 text-indigo-600" />
            </div>
            <span className="text-xs text-indigo-600 font-mono font-semibold">Auto-Agent</span>
          </div>
          {/* Line to Center (300, 250) */}
          {/* Start relative: 32, 32 */}
          {/* End relative: 300-120=180, 250-100=150 */}
          <svg className="absolute top-0 left-0 w-[300px] h-[300px] -z-10 overflow-visible pointer-events-none">
             <motion.path 
               d="M 32 32 L 180 150" 
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
        {/* Pos: 450, 120 */}
        <motion.div 
          className="absolute left-[450px] top-[120px] z-10"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex flex-col items-center gap-2 relative z-10">
            <div className="w-16 h-16 rounded-xl bg-white border border-emerald-100 flex items-center justify-center shadow-lg shadow-emerald-100/50">
              <Brain className="w-8 h-8 text-emerald-600" />
            </div>
            <span className="text-xs text-emerald-600 font-mono font-semibold">Creative Lead</span>
          </div>
          {/* Line to Center (300, 250) */}
          {/* Start relative: 32, 32 */}
          {/* End relative: 300-450=-150, 250-120=130 */}
          <svg className="absolute top-0 left-0 w-[300px] h-[300px] -z-10 overflow-visible pointer-events-none">
             <motion.path 
               d="M 32 32 L -150 130" 
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
        {/* Pos: 180, 380 */}
        <motion.div 
          className="absolute left-[180px] top-[380px] z-10"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2 relative z-10">
            <div className="w-14 h-14 rounded-xl bg-white border border-purple-100 flex items-center justify-center shadow-lg shadow-purple-100/50">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xs text-purple-600 font-mono font-semibold">Processing</span>
          </div>
          {/* Line to Center (300, 250) */}
          {/* Start relative: 28, 28 */}
          {/* End relative: 300-180=120, 250-380=-130 */}
          <svg className="absolute top-0 left-0 w-[300px] h-[300px] -z-10 overflow-visible pointer-events-none">
             <motion.path 
               d="M 28 28 L 120 -130" 
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
    </div>
  )
}
