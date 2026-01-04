'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Percent, Sparkles } from 'lucide-react'

export default function Promotions() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="promotions" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-glow opacity-40" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent-primary/20 text-accent-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            Özel Kampanya
          </div>
          <h2 className="text-section-title font-heading font-bold mb-4">
            Sınırlı Süre <span className="text-gradient">%30 İndirim</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            İlk 3 ay için özel fiyat! Hemen başvurun, fırsatı kaçırmayın.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card p-8 border-2 border-accent-primary/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">{timeLeft.days}</div>
                <div className="text-sm text-text-muted">Gün</div>
              </div>
              <div className="text-2xl text-text-muted">:</div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">{timeLeft.hours}</div>
                <div className="text-sm text-text-muted">Saat</div>
              </div>
              <div className="text-2xl text-text-muted">:</div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">{timeLeft.minutes}</div>
                <div className="text-sm text-text-muted">Dakika</div>
              </div>
              <div className="text-2xl text-text-muted">:</div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">{timeLeft.seconds}</div>
                <div className="text-sm text-text-muted">Saniye</div>
              </div>
            </div>

            {/* Offer Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-background-tertiary rounded-lg">
                <Percent className="text-accent-primary mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gradient mb-2">%30</div>
                <div className="text-sm text-text-secondary">İndirim</div>
              </div>
              <div className="text-center p-6 bg-background-tertiary rounded-lg">
                <Clock className="text-accent-primary mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gradient mb-2">3 Ay</div>
                <div className="text-sm text-text-secondary">Geçerli</div>
              </div>
              <div className="text-center p-6 bg-background-tertiary rounded-lg">
                <Sparkles className="text-accent-primary mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gradient mb-2">+</div>
                <div className="text-sm text-text-secondary">Bonus Özellikler</div>
              </div>
            </div>

            {/* Code Editor with Campaign Code */}
            <div className="code-editor neon-border mb-6">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 text-center text-xs text-code-line-numbers">
                  Kampanya Kodu
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div>
                  <span className="text-code-syntax-purple">const</span>{' '}
                  <span className="text-code-syntax-blue">promoCode</span> ={' '}
                  <span className="text-code-syntax-green">"MEDYAGEM30"</span>;
                </div>
                <div>
                  <span className="text-code-syntax-purple">const</span>{' '}
                  <span className="text-code-syntax-blue">discount</span> ={' '}
                  <span className="text-code-syntax-orange">30</span>%;
                </div>
                <div>
                  <span className="text-code-syntax-purple">const</span>{' '}
                  <span className="text-code-syntax-blue">validUntil</span> ={' '}
                  <span className="text-code-syntax-green">"2025-02-15"</span>;
                </div>
              </div>

              <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
            </div>

            <div className="text-center">
              <a href="#contact" className="btn-primary inline-block text-lg px-8 py-4">
                Kampanyadan Yararlan
              </a>
              <p className="text-text-muted text-sm mt-4">
                * Kampanya sınırlı sayıda müşteri için geçerlidir
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

