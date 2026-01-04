'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Zap } from 'lucide-react'

const testResults = [
  {
    title: 'Başlık Optimizasyonu',
    description: 'Farklı başlık varyasyonlarının performans karşılaştırması',
    variantA: {
      name: 'Varyant A',
      ctr: 2.3,
      conversions: 45,
    },
    variantB: {
      name: 'Varyant B',
      ctr: 3.8,
      conversions: 78,
    },
    winner: 'B',
    improvement: '+65%',
    icon: Target,
  },
  {
    title: 'Hedef Kitle Segmentasyonu',
    description: 'Yaş ve ilgi alanı bazlı hedef kitle testi',
    variantA: {
      name: 'Geniş Kitle',
      ctr: 1.8,
      conversions: 32,
    },
    variantB: {
      name: 'Dar Kitle',
      ctr: 4.2,
      conversions: 89,
    },
    winner: 'B',
    improvement: '+133%',
    icon: TrendingUp,
  },
  {
    title: 'Reklam Formatı Testi',
    description: 'Görsel vs. Video reklam performans karşılaştırması',
    variantA: {
      name: 'Görsel',
      ctr: 2.1,
      conversions: 38,
    },
    variantB: {
      name: 'Video',
      ctr: 5.4,
      conversions: 112,
    },
    winner: 'B',
    improvement: '+157%',
    icon: Zap,
  },
]

export default function ABTestResults() {
  return (
    <section id="ab-test-results" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            A/B Test <span className="text-gradient">Sonuçları</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Veri odaklı optimizasyon ile başarılı sonuçlar
          </p>
        </motion.div>

        <div className="space-y-8">
          {testResults.map((test, index) => {
            const Icon = test.icon
            return (
              <motion.div
                key={test.title}
                className="glass-card p-8 hover:shadow-card-glow transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-accent-primary/20 p-3 rounded-lg">
                    <Icon className="text-accent-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{test.title}</h3>
                    <p className="text-text-secondary text-sm">{test.description}</p>
                  </div>
                  <div className="bg-accent-primary/20 text-accent-primary px-4 py-2 rounded-lg font-semibold">
                    {test.improvement} İyileşme
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Variant A */}
                  <div className="bg-background-tertiary p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-semibold">{test.variantA.name}</div>
                      <div className="text-xs text-text-muted">Kontrol</div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text-secondary">CTR</span>
                          <span className="font-semibold">{test.variantA.ctr}%</span>
                        </div>
                        <div className="w-full bg-background-card rounded-full h-2">
                          <div
                            className="bg-text-muted h-2 rounded-full"
                            style={{ width: `${(test.variantA.ctr / 6) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text-secondary">Dönüşüm</span>
                          <span className="font-semibold">{test.variantA.conversions}</span>
                        </div>
                        <div className="w-full bg-background-card rounded-full h-2">
                          <div
                            className="bg-text-muted h-2 rounded-full"
                            style={{ width: `${(test.variantA.conversions / 120) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Variant B */}
                  <div className="bg-accent-primary/10 border-2 border-accent-primary/30 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-semibold text-accent-primary">{test.variantB.name}</div>
                      <div className="bg-accent-primary text-white text-xs px-2 py-1 rounded">
                        Kazanan
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text-secondary">CTR</span>
                          <span className="font-semibold text-accent-primary">
                            {test.variantB.ctr}%
                          </span>
                        </div>
                        <div className="w-full bg-background-card rounded-full h-2">
                          <div
                            className="bg-accent-primary h-2 rounded-full"
                            style={{ width: `${(test.variantB.ctr / 6) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text-secondary">Dönüşüm</span>
                          <span className="font-semibold text-accent-primary">
                            {test.variantB.conversions}
                          </span>
                        </div>
                        <div className="w-full bg-background-card rounded-full h-2">
                          <div
                            className="bg-accent-primary h-2 rounded-full"
                            style={{ width: `${(test.variantB.conversions / 120) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Editor Result */}
                <div className="code-editor">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 text-center text-xs text-code-line-numbers">
                      Test Sonuçları
                    </div>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <div>
                      <span className="text-code-syntax-purple">const</span>{' '}
                      <span className="text-code-syntax-blue">testResult</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-code-syntax-blue">winner</span>:{' '}
                      <span className="text-code-syntax-green">"Variant {test.winner}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-code-syntax-blue">improvement</span>:{' '}
                      <span className="text-code-syntax-orange">{test.improvement}</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-code-syntax-blue">confidence</span>:{' '}
                      <span className="text-code-syntax-orange">95</span>%
                    </div>
                    <div>{'}'}</div>
                  </div>

                  <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

