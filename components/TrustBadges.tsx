'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Award, CheckCircle } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    title: 'SSL Güvenli',
    description: 'Tüm verileriniz şifrelenmiş',
  },
  {
    icon: Lock,
    title: 'Veri Koruma',
    description: 'GDPR uyumlu',
  },
  {
    icon: Award,
    title: 'Sertifikalı',
    description: 'Google Partner',
  },
  {
    icon: CheckCircle,
    title: 'Garanti',
    description: '30 gün para iade garantisi',
  },
]

export default function TrustBadges() {
  return (
    <section className="py-16 relative bg-background-secondary/20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.title}
                className="glass-card p-6 text-center hover:shadow-card-glow transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mx-auto mb-3">
                  <Icon className="text-accent-primary" size={24} />
                </div>
                <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
                <p className="text-text-muted text-xs">{badge.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

