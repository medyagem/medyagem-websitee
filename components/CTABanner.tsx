'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section id="cta-banner" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-6">
            Dijital Büyümenize <span className="text-gradient">Bugün Başlayın</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Ücretsiz hesap analizi ve strateji görüşmesi için hemen iletişime geçin.
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ücretsiz Analiz Al
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

