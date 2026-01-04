'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Google Ads', icon: '🔵' },
  { name: 'Meta', icon: '📘' },
  { name: 'Google Analytics', icon: '📊' },
  { name: 'ClickCease', icon: '🛡️' },
  { name: 'WordPress', icon: '🌐' },
  { name: 'Yandex', icon: '🔍' },
  { name: 'Google My Business', icon: '📍' },
  { name: 'Search Console', icon: '⚙️' },
]

export default function LogoCarousel() {
  return (
    <section className="py-16 relative bg-background-secondary/20 overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-text-secondary mb-2">
            Çalıştığımız Platformlar
          </h3>
        </motion.div>

        <div className="relative">
          {/* Infinite Scroll Animation */}
          <div className="flex gap-8 overflow-hidden">
            {/* First Set */}
            <motion.div
              className="flex gap-8 flex-shrink-0"
              animate={{
                x: [0, -50 * logos.length * 2],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 glass-card p-6 w-32 h-32 flex items-center justify-center hover:shadow-card-glow transition-all"
                >
                  <div className="text-4xl">{logo.icon}</div>
                </div>
              ))}
            </motion.div>

            {/* Second Set for seamless loop */}
            <motion.div
              className="flex gap-8 flex-shrink-0"
              animate={{
                x: [0, -50 * logos.length * 2],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 glass-card p-6 w-32 h-32 flex items-center justify-center hover:shadow-card-glow transition-all"
                >
                  <div className="text-4xl">{logo.icon}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

