'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, ArrowRight } from 'lucide-react'

const industries = [
  'Tesisat',
  'Klima Servisi',
  'Elektrik',
  'Tadilat',
  'Temizlik',
  'Diğer',
]

const budgetRanges = [
  { label: '3.000 - 5.000 TL', value: 4000 },
  { label: '5.000 - 10.000 TL', value: 7500 },
  { label: '10.000 - 20.000 TL', value: 15000 },
  { label: '20.000+ TL', value: 25000 },
]

export default function QuickQuote() {
  const [industry, setIndustry] = useState('')
  const [budget, setBudget] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const calculateQuote = () => {
    if (!industry || !budget) return null

    // Basit hesaplama (gerçek hesaplama API'den gelebilir)
    const basePrice = 2000
    const industryMultiplier = industry === 'Tesisat' ? 1.2 : 1.0
    const budgetMultiplier = budget > 15000 ? 0.9 : 1.0

    const estimatedPrice = Math.round(basePrice * industryMultiplier * budgetMultiplier)
    const estimatedROI = Math.round(budget * 3.5)

    return {
      price: estimatedPrice,
      roi: estimatedROI,
      clicks: Math.round(budget / 5),
      conversions: Math.round((budget / 5) * 0.03),
    }
  }

  const result = calculateQuote()

  return (
    <section id="quick-quote" className="section-padding relative">
      <div className="container-custom max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Hızlı <span className="text-gradient">Teklif Alın</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sektör ve bütçenize göre anında teklif alın
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-accent-primary" size={24} />
              <h3 className="text-xl font-bold">Teklif Hesapla</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Sektörünüz</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                >
                  <option value="">Sektör seçin</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Aylık Reklam Bütçesi</label>
                <div className="grid grid-cols-2 gap-3">
                  {budgetRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setBudget(range.value)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        budget === range.value
                          ? 'border-accent-primary bg-accent-primary/20 text-accent-primary'
                          : 'border-background-card-border bg-background-tertiary text-text-secondary hover:border-accent-primary/50'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowResult(true)}
                disabled={!industry || !budget}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Teklif Hesapla
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Result */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {showResult && result ? (
              <>
                <div className="code-editor">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 text-center text-xs text-code-line-numbers">
                      Teklif Özeti
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <span className="text-code-syntax-purple">const</span>{' '}
                      <span className="text-code-syntax-blue">quote</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-code-syntax-blue">industry</span>:{' '}
                      <span className="text-code-syntax-green">"{industry}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-code-syntax-blue">monthlyFee</span>:{' '}
                      <span className="text-code-syntax-green">"₺{result.price.toLocaleString()}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-code-syntax-blue">estimatedROI</span>:{' '}
                      <span className="text-code-syntax-orange">{((result.roi / budget!) * 100).toFixed(0)}</span>%,
                    </div>
                    <div className="pl-4">
                      <span className="text-code-syntax-blue">monthlyClicks</span>:{' '}
                      <span className="text-code-syntax-orange">{result.clicks}</span>
                    </div>
                    <div>{'}'}</div>
                  </div>

                  <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
                </div>

                <div className="glass-card p-6">
                  <h4 className="font-bold mb-4">Tahmini Sonuçlar</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Aylık Yönetim Ücreti:</span>
                      <span className="font-semibold text-accent-primary">
                        ₺{result.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Tahmini Aylık Tıklama:</span>
                      <span className="font-semibold">{result.clicks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Tahmini Dönüşüm:</span>
                      <span className="font-semibold">{result.conversions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Tahmini ROI:</span>
                      <span className="font-semibold text-accent-primary">
                        {((result.roi / budget!) * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>

                <a href="#contact" className="btn-primary w-full block text-center">
                  Detaylı Teklif Al
                </a>
              </>
            ) : (
              <div className="glass-card p-8 text-center">
                <Calculator className="text-accent-primary mx-auto mb-4" size={48} />
                <p className="text-text-secondary">
                  Sektör ve bütçe seçerek teklifinizi hesaplayın
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

