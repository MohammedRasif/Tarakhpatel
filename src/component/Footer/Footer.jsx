"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import image from "../../image/freepik__upload.png";



export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-600 py-6 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={image} className="h-10" alt="Logo" />
          </div>

          <div className="text-center">
            <p className="text-gray-100 font-medium text-sm lg:text-base">Launching January 2026</p>
            <p className="text-gray-300 text-xs lg:text-sm">Limited early-access spots available.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-6 py-1.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors flex items-center border border-gray-300 w-full sm:w-auto justify-center"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
            <a
              href="/privacy"
              className="text-gray-200 hover:text-gray-50 text-sm font-medium hover:bg-gray-900 transition-colors border border-gray-300 px-6 py-1.5 rounded-full w-full sm:w-auto text-center"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
