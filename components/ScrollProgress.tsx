'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const progress = (scrolled / windowHeight) * 100
      setScrollProgress(progress)
      setShowBackToTop(scrolled > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-background-secondary z-50">
        <motion.div
          className="h-full bg-button-gradient"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-accent-primary text-white p-4 rounded-full shadow-button z-50 hover:bg-accent-primary-hover transition-all"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Yukarı çık"
      >
        <ArrowUp size={20} />
      </motion.button>
    </>
  )
}

