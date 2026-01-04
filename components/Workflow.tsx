'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Settings, BarChart, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Analiz ve Strateji',
    description: 'İşletmenizi analiz ediyoruz, hedef kitleyi belirliyoruz ve özel strateji hazırlıyoruz.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Kampanya Kurulumu',
    description: 'Google Ads hesabınızı kuruyoruz, anahtar kelimeleri optimize ediyoruz ve reklamları yayınlıyoruz.',
  },
  {
    number: '03',
    icon: Settings,
    title: 'Optimizasyon',
    description: 'Kampanyalarınızı sürekli izliyor, test ediyor ve performansı artırıyoruz.',
  },
  {
    number: '04',
    icon: BarChart,
    title: 'Raporlama',
    description: 'Aylık detaylı raporlar sunuyor, ROI ve dönüşümleri takip ediyoruz.',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Büyüme',
    description: 'Sonuçları değerlendirip stratejiyi geliştiriyor, sürekli büyüme sağlıyoruz.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Nasıl <span className="text-gradient">Çalışıyoruz?</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Adım adım sürecimiz
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-background-card-border transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={step.number}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-2 lg:order-2' : 'lg:order-1'}>
                    <div className="glass-card p-8 hover:shadow-card-glow transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-accent-primary/20 p-4 rounded-lg">
                          <Icon className="text-accent-primary" size={32} />
                        </div>
                        <div className="text-4xl font-bold text-accent-primary/30">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Code Editor Visual */}
                  <div className={!isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <motion.div
                      className="code-editor neon-border"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 text-center text-xs text-code-line-numbers">
                          {step.title}
                        </div>
                      </div>

                      <div className="space-y-2 font-mono text-xs">
                        <div>
                          <span className="text-code-syntax-purple">function</span>{' '}
                          <span className="text-code-syntax-blue">processStep</span>{' '}
                          <span className="text-code-syntax-gray">({step.number})</span> {'{'}
                        </div>
                        <div className="pl-4">
                          <span className="text-code-syntax-blue">status</span> ={' '}
                          <span className="text-code-syntax-green">"completed"</span>;
                        </div>
                        <div className="pl-4">
                          <span className="text-code-syntax-blue">progress</span> ={' '}
                          <span className="text-code-syntax-orange">{(index + 1) * 20}</span>%;
                        </div>
                        <div>{'}'}</div>
                      </div>

                      <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

