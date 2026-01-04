'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparisonData = [
  {
    feature: 'Google Ads Yönetimi',
    medyagem: true,
    competitor: true,
  },
  {
    feature: 'Sahte Tıklama Koruması',
    medyagem: true,
    competitor: false,
  },
  {
    feature: '7/24 Kampanya Takibi',
    medyagem: true,
    competitor: false,
  },
  {
    feature: 'Detaylı Raporlama',
    medyagem: true,
    competitor: true,
  },
  {
    feature: 'Yerel SEO Uzmanlığı',
    medyagem: true,
    competitor: false,
  },
  {
    feature: 'Web Sitesi Kurulumu',
    medyagem: true,
    competitor: false,
  },
  {
    feature: 'WhatsApp Destek',
    medyagem: true,
    competitor: false,
  },
  {
    feature: 'Şeffaf Fiyatlandırma',
    medyagem: true,
    competitor: false,
  },
]

export default function Comparison() {
  return (
    <section id="comparison" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Biz vs. <span className="text-gradient">Rakipler</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Neden MedyaGem'i seçmelisiniz?
          </p>
        </motion.div>

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-background-card-border">
                  <th className="text-left p-6 font-semibold">Özellik</th>
                  <th className="text-center p-6 font-semibold">
                    <span className="text-gradient">MedyaGem</span>
                  </th>
                  <th className="text-center p-6 font-semibold text-text-muted">
                    Diğer Ajanslar
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    className="border-b border-background-card-border hover:bg-background-tertiary/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <td className="p-6 text-text-secondary">{row.feature}</td>
                    <td className="p-6 text-center">
                      {row.medyagem ? (
                        <Check className="text-accent-primary mx-auto" size={24} />
                      ) : (
                        <X className="text-text-muted mx-auto" size={24} />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {row.competitor ? (
                        <Check className="text-text-muted mx-auto" size={24} />
                      ) : (
                        <X className="text-text-muted mx-auto" size={24} />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className="btn-primary inline-block">
            Hemen Başlayın
          </a>
        </motion.div>
      </div>
    </section>
  )
}

