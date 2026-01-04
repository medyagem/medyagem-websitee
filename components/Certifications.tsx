'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle, TrendingUp, BarChart, Facebook, ShieldCheck } from 'lucide-react'

const certifications = [
  {
    name: 'Google Ads Sertifikalı Uzman',
    issuer: 'Google',
    icon: TrendingUp,
    description: 'Google Ads platformunda uzman seviye sertifikasyon',
  },
  {
    name: 'Google Analytics Sertifikası',
    issuer: 'Google',
    icon: BarChart,
    description: 'Analitik ve veri analizi konusunda sertifikalı',
  },
  {
    name: 'Meta Business Partner',
    issuer: 'Meta',
    icon: Facebook,
    description: 'Facebook ve Instagram reklamları konusunda partner',
  },
  {
    name: 'ClickCease Partner',
    issuer: 'ClickCease',
    icon: ShieldCheck,
    description: 'Sahte tıklama koruması konusunda yetkili partner',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Sertifikalar ve <span className="text-gradient">Ödüller</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Dijital pazarlama alanındaki uzmanlığımızın kanıtı
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
            <motion.div
              key={cert.name}
              className="glass-card p-8 text-center hover:shadow-card-glow transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mx-auto mb-4">
                <IconComponent className="text-accent-primary" size={32} />
              </div>
              <div className="bg-background-card/50 p-2 rounded-lg w-fit mx-auto mb-4">
                <Award className="text-accent-primary/60" size={20} />
              </div>
              <h3 className="font-bold mb-2">{cert.name}</h3>
              <div className="text-sm text-accent-primary font-medium mb-2">
                {cert.issuer}
              </div>
              <p className="text-text-secondary text-sm">{cert.description}</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-accent-primary text-xs">
                <CheckCircle size={16} />
                <span>Doğrulandı</span>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

