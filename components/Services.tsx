'use client'

import { motion } from 'framer-motion'
import { Globe, Target, Shield, Search, BarChart, Share2 } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Sahte Tıklama Engelleme',
    description: 'Yapay zeka destekli özel yazılımımızla sahte tıklama koruması',
    featured: true,
  },
  {
    icon: Target,
    title: 'Google Ads Yönetimi',
    description: 'ROI odaklı reklam kampanyaları ve optimizasyon',
  },
  {
    icon: Globe,
    title: 'Web Sitesi Kurulumu',
    description: 'SEO uyumlu, mobil öncelikli profesyonel web siteleri',
  },
  {
    icon: Search,
    title: 'SEO Optimizasyonu',
    description: 'Yerel SEO ve organik trafik artışı',
  },
  {
    icon: BarChart,
    title: 'Performans Analizi',
    description: 'Detaylı raporlama ve dönüşüm takibi',
  },
  {
    icon: Share2,
    title: 'Sosyal Medya Reklamları',
    description: 'Facebook, Instagram reklam yönetimi',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Dijital Pazarlama <span className="text-gradient">Ortağınız</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            İşletmenizin dijital varlığını güçlendiren kapsamlı hizmetler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className={`glass-card p-8 hover:shadow-card-glow transition-all group relative ${
                  service.featured ? 'ring-2 ring-accent-primary/50 bg-accent-primary/5' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {service.featured && (
                  <span className="absolute -top-3 -right-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ÖNE ÇIKAN
                  </span>
                )}
                <div className={`p-3 rounded-lg w-fit mb-4 group-hover:bg-accent-primary/30 transition-colors ${
                  service.featured ? 'bg-accent-primary/30' : 'bg-accent-primary/20'
                }`}>
                  <Icon className="text-accent-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

