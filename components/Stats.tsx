'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { TrendingUp, Users, Award, Zap } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '150+',
    label: 'Mutlu Müşteri',
    suffix: '',
  },
  {
    icon: TrendingUp,
    value: '420',
    label: 'Ortalama ROI Artışı',
    suffix: '%',
  },
  {
    icon: Zap,
    value: '2.5M+',
    label: 'Yönetilen Reklam Bütçesi',
    suffix: ' TL',
  },
  {
    icon: Award,
    value: '98',
    label: 'Müşteri Memnuniyeti',
    suffix: '%',
  },
]

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Parse value to determine if it's a number
  const numValue = value.replace(/[^0-9.]/g, '')
  const hasPlus = value.includes('+')
  const hasM = value.includes('M')
  const hasK = value.includes('K')
  
  // Convert to number for animation
  let targetNum = 0
  if (numValue) {
    targetNum = parseFloat(numValue)
    if (hasM) targetNum *= 1000000
    else if (hasK) targetNum *= 1000
  }

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetNum / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current += increment
      
      if (step >= steps || current >= targetNum) {
        setDisplayValue(targetNum)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, targetNum])

  const formatValue = (val: number) => {
    if (hasM && val >= 1000000) return (val / 1000000).toFixed(1) + 'M'
    if (hasK && val >= 1000) return (val / 1000).toFixed(1) + 'K'
    return Math.floor(val).toString()
  }

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {hasPlus && '+'}
      {isInView ? formatValue(displayValue) : '0'}
      {suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section-padding relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Rakamlarla <span className="text-gradient">MedyaGem</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Başarılarımızı sayılarla gösteriyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="glass-card p-8 text-center hover:shadow-card-glow transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Icon className="text-accent-primary" size={32} />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-text-secondary mt-2 text-sm">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

