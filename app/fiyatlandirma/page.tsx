'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, Shield, Zap, TrendingUp } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

const packages = [
  {
    name: 'Başlangıç',
    monthlyPrice: '3.500',
    yearlyPrice: '2.975',
    yearlyDiscount: '15%',
    features: [
      'Google Ads Kurulumu',
      'Temel Anahtar Kelime Araştırması',
      'Aylık Performans Raporu',
      'E-posta Destek',
      '1 Reklam Hesabı',
      'Temel Optimizasyon',
    ],
    cta: 'Başla',
    highlighted: false,
    icon: Sparkles,
    color: 'blue',
  },
  {
    name: 'Profesyonel',
    monthlyPrice: '5.000',
    yearlyPrice: '4.250',
    yearlyDiscount: '15%',
    features: [
      'Google Ads + Sahte Tıklama Koruması',
      'Gelişmiş Anahtar Kelime Stratejisi',
      'Haftalık Optimizasyon',
      'Detaylı Aylık Rapor',
      'WhatsApp Destek',
      '3 Reklam Hesabı',
      'A/B Test Desteği',
      'Öncelikli Destek',
    ],
    cta: 'En Popüler',
    highlighted: true,
    icon: TrendingUp,
    color: 'purple',
    badge: 'En Popüler',
  },
  {
    name: 'Kurumsal',
    monthlyPrice: null, // Fiyat gösterilmeyecek
    yearlyPrice: null,
    yearlyDiscount: '15%',
    features: [
      'Tüm Profesyonel Özellikler',
      'Web Sitesi Kurulumu Dahil',
      'SEO Optimizasyonu',
      'Sosyal Medya Reklamları',
      'Özel Müşteri Temsilcisi',
      'Sınırsız Reklam Hesabı',
      '7/24 Acil Destek',
      'Özel Raporlama',
      'Strateji Danışmanlığı',
    ],
    cta: 'İletişime Geç',
    highlighted: false,
    icon: Shield,
    color: 'gold',
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <main className="relative min-h-screen">
      <WhatsAppWidget />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-primary/50 via-background-primary/30 to-background-primary" />
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="bg-accent-primary/20 text-accent-primary px-4 py-2 rounded-full text-sm font-semibold">
                Şeffaf Fiyatlandırma
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">Net Fiyatlandırma</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              MedyaGem, işletmenizin her seviyesine uygun planlar sunarak kurumsal düzeyde yetenekleri basitlikle birleştirir. 
              Şeffaf fiyatlandırma ile ne ödeyeceğinizi önceden bilin.
            </p>

            {/* Toggle Switch */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className={`text-sm font-medium ${!isYearly ? 'text-text-primary' : 'text-text-muted'}`}>
                Aylık
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  isYearly ? 'bg-accent-primary' : 'bg-background-tertiary'
                }`}
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg"
                  animate={{ x: isYearly ? 32 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${isYearly ? 'text-text-primary' : 'text-text-muted'}`}>
                  Yıllık
                </span>
                {isYearly && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-1 rounded"
                  >
                    %15 Tasarruf
                  </motion.span>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon
              const price = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice
              const showPrice = pkg.monthlyPrice !== null
              
              return (
                <motion.div
                  key={pkg.name}
                  className={`glass-card p-8 relative ${
                    pkg.highlighted
                      ? 'border-2 border-accent-primary shadow-card-glow scale-105 md:scale-110'
                      : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: pkg.highlighted ? 1.12 : 1.02 }}
                >
                  {pkg.highlighted && pkg.badge && (
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-primary text-white text-xs font-semibold px-4 py-1 rounded-full"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {pkg.badge}
                    </motion.div>
                  )}

                  {/* Icon */}
                  <div className={`bg-accent-primary/20 p-4 rounded-lg w-fit mb-6 ${
                    pkg.color === 'purple' ? 'bg-purple-500/20' : 
                    pkg.color === 'gold' ? 'bg-yellow-500/20' : ''
                  }`}>
                    <Icon className={`text-accent-primary ${
                      pkg.color === 'purple' ? 'text-purple-400' : 
                      pkg.color === 'gold' ? 'text-yellow-400' : ''
                    }`} size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  
                  {showPrice ? (
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">{price}</span>
                        <span className="text-text-muted">₺</span>
                        <span className="text-text-muted text-sm">/ay</span>
                      </div>
                      {isYearly && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-text-muted mt-2"
                        >
                          <span className="line-through text-text-dim">{pkg.monthlyPrice}₺</span>
                          {' '}yerine
                        </motion.p>
                      )}
                      {isYearly && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-green-400 mt-1"
                        >
                          Yıllık ödemede {pkg.yearlyDiscount} indirim
                        </motion.p>
                      )}
                    </div>
                  ) : (
                    <div className="mb-6">
                      <p className="text-text-secondary text-lg">Özel fiyatlandırma için iletişime geçin</p>
                    </div>
                  )}

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <Check className="text-accent-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </motion.li>
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
              )
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Tüm Paketlerde Ortak Özellikler</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <Check className="text-accent-primary" size={16} />
                  <span>30 gün para iade garantisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent-primary" size={16} />
                  <span>İstediğin zaman iptal et</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent-primary" size={16} />
                  <span>Şeffaf fiyatlandırma</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent-primary" size={16} />
                  <span>Profesyonel destek</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

