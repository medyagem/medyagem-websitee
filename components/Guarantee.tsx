'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowRight, CheckCircle } from 'lucide-react'

const guarantees = [
  {
    icon: Shield,
    title: '30 Gün Para İade Garantisi',
    description: 'Memnun kalmazsanız ilk 30 gün içinde tam iade',
  },
  {
    icon: CheckCircle,
    title: 'Sonuç Garantisi',
    description: '3 ay içinde sonuç alamazsanız ücretsiz çalışmaya devam ediyoruz',
  },
  {
    icon: ArrowRight,
    title: 'Ücretsiz Analiz',
    description: 'Hesap analizi ve strateji görüşmesi tamamen ücretsiz',
  },
]

export default function Guarantee() {
  return (
    <section id="guarantee" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Garantilerimiz <span className="text-gradient">ve Taahhütlerimiz</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Müşteri memnuniyeti bizim önceliğimiz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <motion.div
                key={guarantee.title}
                className="glass-card p-8 text-center border-2 border-accent-primary/30 hover:border-accent-primary transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-accent-primary/20 p-4 rounded-full w-fit mx-auto mb-6">
                  <Icon className="text-accent-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {guarantee.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

