'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Phone } from 'lucide-react'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup was shown before (localStorage)
    const popupShown = localStorage.getItem('exitIntentShown')
    if (popupShown) {
      setHasShown(true)
      return
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (!hasShown && e.clientY <= 0) {
        setIsVisible(true)
        setHasShown(true)
        localStorage.setItem('exitIntentShown', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-card p-8 max-w-md w-full relative border-2 border-accent-primary/50">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Kapat"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <div className="bg-accent-primary/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <Gift className="text-accent-primary" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Bekle! Özel Teklif Kaçmasın
                </h3>
                <p className="text-text-secondary mb-6">
                  İlk 3 ay için <span className="text-accent-primary font-bold">%30 indirim</span> fırsatını kaçırmayın!
                </p>

                <div className="space-y-3">
                  <a
                    href="#contact"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    onClick={handleClose}
                  >
                    <Phone size={18} />
                    Hemen İletişime Geç
                  </a>
                  <a
                    href="tel:+905386295834"
                    className="block text-center text-text-secondary hover:text-accent-primary transition-colors text-sm"
                    onClick={handleClose}
                  >
                    📞 +90 538 629 58 34
                  </a>
                </div>

                <p className="text-xs text-text-muted mt-4">
                  * Kampanya sınırlı sayıda müşteri için geçerlidir
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}




