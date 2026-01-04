'use client'

import { motion } from 'framer-motion'
import { MapPin, FileText, Clock } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Yerel İşletme Uzmanlığı',
    description: 'Tesisat, klima, tadilat gibi yerel hizmet sektörlerinde kanıtlanmış başarı. Her sektörün dinamiklerini biliyoruz.',
  },
  {
    icon: FileText,
    title: 'Şeffaf Raporlama',
    description: 'Aylık detaylı performans raporları, tıklama analizleri ve ROI hesaplamaları. Her kuruşun nereye gittiğini görün.',
  },
  {
    icon: Clock,
    title: '7/24 Kampanya Takibi',
    description: 'Reklamlarınız sürekli optimize edilir. Bütçe aşımı olmaz, fırsatlar kaçmaz.',
  },
]

export default function WhyMedyagem() {
  return (
    <section id="why-medyagem" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Neden <span className="text-gradient">medyagem?</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={feature.title}
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:col-start-2 lg:order-2' : 'lg:order-1'}>
                  <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mb-6">
                    <Icon className="text-accent-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Visual - Code Editor */}
                <div className={!isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <motion.div
                    className="code-editor neon-border"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <div className="flex-1 text-center text-xs text-code-line-numbers">
                        Analytics Dashboard
                      </div>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                      <div>
                        <span className="text-code-syntax-gray">// {feature.title}</span>
                      </div>
                      <div>
                        <span className="text-code-syntax-purple">const</span>{' '}
                        <span className="text-code-syntax-blue">stats</span> = {'{'}
                      </div>
                      <div className="pl-4">
                        <span className="text-code-syntax-blue">performance</span>:{' '}
                        <span className="text-code-syntax-green">"+42%"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-code-syntax-blue">roi</span>:{' '}
                        <span className="text-code-syntax-orange">4.2</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-code-syntax-blue">satisfaction</span>:{' '}
                        <span className="text-code-syntax-green">"98%"</span>
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
    </section>
  )
}

