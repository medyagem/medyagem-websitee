'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Başlangıç',
    price: 'Teklif Al',
    features: [
      'Google Ads Kurulumu',
      'Temel Anahtar Kelime Araştırması',
      'Aylık Performans Raporu',
      'E-posta Destek',
    ],
    cta: 'Başla',
    highlighted: false,
  },
  {
    name: 'Profesyonel',
    price: 'Teklif Al',
    features: [
      'Google Ads + Sahte Tıklama Koruması',
      'Gelişmiş Anahtar Kelime Stratejisi',
      'Haftalık Optimizasyon',
      'Detaylı Aylık Rapor',
      'WhatsApp Destek',
    ],
    cta: 'En Popüler',
    highlighted: true,
  },
  {
    name: 'Kurumsal',
    price: 'Teklif Al',
    features: [
      'Tüm Profesyonel Özellikler',
      'Web Sitesi Kurulumu Dahil',
      'SEO Optimizasyonu',
      'Sosyal Medya Reklamları',
      'Özel Müşteri Temsilcisi',
    ],
    cta: 'İletişime Geç',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-accent-primary/20 text-accent-primary px-4 py-2 rounded-full text-sm font-semibold">
              Şeffaf Fiyatlandırma
            </span>
          </motion.div>
          <h2 className="text-section-title font-heading font-bold mb-4">
            <span className="text-gradient">Paketler</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            İşletmenizin ihtiyacına uygun paketi seçin. Tüm detaylar için{' '}
            <a href="/fiyatlandirma" className="text-accent-primary hover:underline">
              fiyatlandırma sayfasını
            </a>{' '}
            ziyaret edin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`glass-card p-8 relative ${
                pkg.highlighted
                  ? 'border-2 border-accent-primary shadow-card-glow scale-105'
                  : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                  En Popüler
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">{pkg.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="text-accent-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-button font-semibold transition-all ${
                  pkg.highlighted
                    ? 'btn-primary'
                    : 'border border-background-card-border hover:bg-background-card'
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

