'use client'

import { motion } from 'framer-motion'
import { Shield, AlertTriangle, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: AlertTriangle,
    title: 'Gerçek Zamanlı Tespit',
    description: 'Şüpheli tıklamalar anında tespit edilir ve engellenir',
  },
  {
    icon: Shield,
    title: 'IP ve Cihaz Engelleme',
    description: 'Bot trafiği ve rakip tıklamaları otomatik filtrelenir',
  },
  {
    icon: BarChart3,
    title: 'Detaylı Raporlama',
    description: 'Engellenen tıklamalar ve tasarruf edilen bütçe raporu',
  },
]

export default function ClickFraudProtection() {
  return (
    <section id="click-fraud-protection" className="section-padding relative bg-background-secondary/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="inline-block bg-accent-primary/20 text-accent-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ ÖNE ÇIKAN HİZMET
              </span>
            </div>
            <h2 className="text-section-title font-heading font-bold mb-4">
              Sahte Tıklamalardan <span className="text-gradient">Korunun</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Reklam bütçenizin <strong className="text-accent-primary">%60'a kadarını sahte tıklamalardan koruyoruz</strong>.
              MedyaGem'in <strong>özel geliştirdiği yapay zeka destekli yazılımı</strong> ile
              bot trafiğini, rakip tıklamalarını ve sahte ziyaretçileri gerçek zamanlı tespit edip engelleyin.
              <br /><br />
              <span className="text-accent-primary font-semibold">Türkiye'de sadece MedyaGem'de!</span> Kendi yazılımımızla 
              reklam bütçenizi koruyun ve gerçek müşterilere ulaşın.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    className="glass-card p-6 flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="bg-accent-primary/20 p-3 rounded-lg h-fit">
                      <Icon className="text-accent-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-text-secondary text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Visual - Code Editor */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="code-editor neon-border">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 text-center text-xs text-code-line-numbers">
                  Click Fraud Detection
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-code-syntax-purple">function</span>{' '}
                  <span className="text-code-syntax-blue">detectFraud</span>(click) {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-purple">if</span> (
                  <span className="text-code-syntax-blue">click</span>.
                  <span className="text-code-syntax-blue">isBot</span> ||{' '}
                </div>
                <div className="pl-8">
                  <span className="text-code-syntax-blue">click</span>.
                  <span className="text-code-syntax-blue">isCompetitor</span>) {'{'}
                </div>
                <div className="pl-12">
                  <span className="text-code-syntax-purple">return</span>{' '}
                  <span className="text-code-syntax-green">"BLOCKED"</span>;
                </div>
                <div className="pl-8">{'}'}</div>
                <div className="pl-4">
                  <span className="text-code-syntax-purple">return</span>{' '}
                  <span className="text-code-syntax-green">"ALLOWED"</span>;
                </div>
                <div>{'}'}</div>
                <div className="pt-4 border-t border-code-border">
                  <span className="text-code-syntax-gray">// Son 24 saat:</span>
                </div>
                <div>
                  <span className="text-code-syntax-blue">blocked</span>:{' '}
                  <span className="text-code-syntax-orange">127</span>{' '}
                  <span className="text-code-syntax-gray">tıklama</span>
                </div>
                <div>
                  <span className="text-code-syntax-blue">saved</span>:{' '}
                  <span className="text-code-syntax-green">"₺2,340"</span>
                </div>
              </div>

              <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

