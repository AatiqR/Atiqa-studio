"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 bg-black/90 backdrop-blur-md shadow-lg" : "py-4 bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-orange-500 p-2 rounded-md mr-2">
              <div className="w-5 h-5"></div>
            </div>
            <span className="font-bold text-white text-lg hidden sm:block">WebsitePro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Reviews", "Service", "FAQs"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-neutral-300 hover:text-orange-500 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-golden-500 text-black font-medium px-5 py-2 rounded-full hover:bg-orange-400 transition-colors duration-300 shadow-[0_0_10px_rgba(62,250,140,0.3)]"
            >
              Book a call
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-md border border-neutral-800 hover:border-orange-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-neutral-800 mt-2"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {["Reviews", "Service", "FAQs"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-neutral-300 hover:text-orange-500 transition-colors duration-300 py-2 border-b border-neutral-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-orange-500 text-black font-medium px-5 py-2 rounded-full hover:bg-orange-400 transition-colors duration-300 mt-2 shadow-[0_0_10px_rgba(62,250,140,0.3)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a call
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

