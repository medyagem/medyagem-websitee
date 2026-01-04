'use client'

import { motion } from 'framer-motion'

const platforms = [
  { name: 'Google Ads', logo: '/platforms/google-ads.svg' },
  { name: 'Google Analytics', logo: '/platforms/google-analytics.svg' },
  { name: 'Meta Ads', logo: '/platforms/meta.svg' },
  { name: 'ClickCease', logo: '/platforms/clickcease.svg' },
  { name: 'Google My Business', logo: '/platforms/google-my-business.svg' },
  { name: 'Search Console', logo: '/platforms/search-console.svg' },
  { name: 'WordPress', logo: '/platforms/wordpress.svg' },
  { name: 'Yandex', logo: '/platforms/yandex.svg' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Çalıştığımız <span className="text-gradient">Platformlar</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Dijital pazarlama ekosistemindeki tüm önemli platformlarla entegre çalışıyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="glass-card p-6 text-center hover:shadow-card-glow transition-all flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <img 
                src={platform.logo} 
                alt={platform.name}
                className="h-12 w-auto mb-3 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <div className="text-sm font-medium text-text-secondary">{platform.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

