'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'Tesisat Firması - 3 Ayda %400 ROI',
    industry: 'Tesisat Hizmetleri',
    challenge: 'Yerel müşteri bulmakta zorlanan tesisat firması',
    solution: 'Google Ads kampanyası + Yerel SEO optimizasyonu',
    results: [
      { icon: TrendingUp, label: 'ROI Artışı', value: '%400' },
      { icon: Users, label: 'Aylık Müşteri', value: '+150' },
      { icon: DollarSign, label: 'Aylık Gelir', value: '+₺85K' },
    ],
    image: '🔧',
  },
  {
    title: 'Klima Servisi - Sahte Tıklama Koruması',
    industry: 'Klima Servisi',
    challenge: 'Reklam bütçesinin %25\'i sahte tıklamalara gidiyordu',
    solution: 'ClickCease entegrasyonu + Gelişmiş filtreleme',
    results: [
      { icon: DollarSign, label: 'Tasarruf', value: '₺12K/ay' },
      { icon: TrendingUp, label: 'Gerçek Tıklama', value: '+65%' },
      { icon: Users, label: 'Dönüşüm', value: '+40%' },
    ],
    image: '❄️',
  },
  {
    title: 'Elektrikçi - Web Sitesi + Google Ads',
    industry: 'Elektrik Hizmetleri',
    challenge: 'Dijital varlık yok, sadece telefon ile müşteri',
    solution: 'Profesyonel web sitesi + Google Ads kampanyası',
    results: [
      { icon: Users, label: 'Online Müşteri', value: '+200/ay' },
      { icon: TrendingUp, label: 'Web Trafiği', value: '+500%' },
      { icon: DollarSign, label: 'Gelir Artışı', value: '+₺120K' },
    ],
    image: '⚡',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Başarı <span className="text-gradient">Hikayeleri</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Gerçek sonuçlar, gerçek müşteriler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="glass-card p-8 hover:shadow-card-glow transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{study.image}</div>
              
              <div className="text-xs text-accent-primary font-semibold mb-2">
                {study.industry}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{study.title}</h3>
              
              <div className="mb-6 space-y-2">
                <div>
                  <div className="text-xs text-text-muted mb-1">Sorun:</div>
                  <p className="text-sm text-text-secondary">{study.challenge}</p>
                </div>
                <div>
                  <div className="text-xs text-text-muted mb-1">Çözüm:</div>
                  <p className="text-sm text-text-secondary">{study.solution}</p>
                </div>
              </div>

              <div className="border-t border-background-card-border pt-6 space-y-3">
                {study.results.map((result, i) => {
                  const Icon = result.icon
                  return (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="text-accent-primary" size={16} />
                        <span className="text-sm text-text-secondary">{result.label}</span>
                      </div>
                      <span className="text-sm font-semibold text-accent-primary">
                        {result.value}
                      </span>
                    </div>
                  )
                })}
              </div>

              <motion.a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm text-accent-primary hover:gap-3 transition-all group-hover:text-accent-primary-hover"
                whileHover={{ x: 5 }}
              >
                Detaylı İncele
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

