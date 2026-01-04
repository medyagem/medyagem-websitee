'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Aktif Kampanya', value: 127, suffix: '' },
  { icon: TrendingUp, label: 'Bugün Tıklama', value: 2341, suffix: '' },
  { icon: DollarSign, label: 'Bugün Harcama', value: 12450, suffix: ' TL' },
  { icon: Target, label: 'Dönüşüm Oranı', value: 3.8, suffix: '%' },
]

export default function LiveStats() {
  const [currentStats, setCurrentStats] = useState(stats)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats((prev) =>
        prev.map((stat) => ({
          ...stat,
          value: stat.value + Math.floor(Math.random() * 10 - 5),
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent-primary/20 text-accent-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
            Canlı İstatistikler
          </div>
          <h3 className="text-2xl font-bold mb-2">Şu Anda Yönetilen Kampanyalar</h3>
          <p className="text-text-secondary text-sm">
            Örnek performans verileri - Gerçek zamanlı veriler müşteri dashboard'unda görüntülenir
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="text-accent-primary mx-auto mb-3" size={28} />
                <div className="text-2xl font-bold text-gradient mb-1">
                  {typeof stat.value === 'number' && stat.value > 1000
                    ? (stat.value / 1000).toFixed(1) + 'K'
                    : stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

