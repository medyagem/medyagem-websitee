'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Hizmetler', href: '/hizmetler' },
    { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Blog', href: '/blog' },
    { label: 'SSS', href: '/sss' },
    { label: 'İletişim', href: '/iletisim' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background-primary/80 backdrop-blur-glass border-b border-background-card-border'
        : 'bg-transparent'
        }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Logo görseli - dosya public/medyagem-logo.png veya public/medyagem logo.png olmalı */}
            <img
              src="/medyagem-logo.png"
              alt="MedyaGem Logo"
              className="h-10 w-auto max-w-[200px]"
              style={{ display: 'none' }}
              onLoad={(e) => {
                // Logo yüklendiğinde göster
                const target = e.target as HTMLImageElement
                target.style.display = 'block'
                const fallback = target.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'none'
              }}
              onError={(e) => {
                // Logo yüklenemezse fallback göster
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
            {/* Fallback - Logo yüklenemezse bu gösterilir */}
            <span className="text-2xl font-bold text-white">
              <span className="text-accent-primary">Medya</span>Gem
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+905386295834"
              className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-medium flex items-center gap-2"
            >
              <span>📞</span>
              <span className="hidden lg:inline">+90 538 629 58 34</span>
              <span className="lg:hidden">Ara</span>
            </a>
            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Ücretsiz Analiz Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-secondary border-t border-background-card-border"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+905386295834"
                className="text-text-secondary hover:text-accent-primary transition-colors flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>📞</span>
                <span>+90 538 629 58 34</span>
              </a>
              <a
                href="#contact"
                className="btn-primary text-sm text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ücretsiz Analiz Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

