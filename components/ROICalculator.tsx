'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp } from 'lucide-react'

export default function ROICalculator() {
  const [budget, setBudget] = useState('10000')
  const [conversionRate, setConversionRate] = useState('3')
  const [averageOrder, setAverageOrder] = useState('500')
  const [costPerClick, setCostPerClick] = useState('5')

  const calculateROI = () => {
    const budgetNum = parseFloat(budget) || 0
    const conversionRateNum = parseFloat(conversionRate) || 0
    const averageOrderNum = parseFloat(averageOrder) || 0
    const costPerClickNum = parseFloat(costPerClick) || 0

    const clicks = budgetNum / costPerClickNum
    const conversions = (clicks * conversionRateNum) / 100
    const revenue = conversions * averageOrderNum
    const profit = revenue - budgetNum
    const roi = budgetNum > 0 ? ((profit / budgetNum) * 100).toFixed(1) : '0'

    return {
      clicks: Math.round(clicks),
      conversions: Math.round(conversions),
      revenue: Math.round(revenue),
      profit: Math.round(profit),
      roi: parseFloat(roi),
    }
  }

  const results = calculateROI()

  return (
    <section id="roi-calculator" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            ROI <span className="text-gradient">Hesaplayıcı</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Reklam bütçenizin potansiyel getirisini hesaplayın
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-accent-primary" size={24} />
              <h3 className="text-xl font-bold">Hesaplama Parametreleri</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Aylık Reklam Bütçesi (TL)
                </label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  placeholder="10000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Ortalama Tıklama Başına Maliyet (TL)
                </label>
                <input
                  type="number"
                  value={costPerClick}
                  onChange={(e) => setCostPerClick(e.target.value)}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  placeholder="5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Dönüşüm Oranı (%)
                </label>
                <input
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(e.target.value)}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  placeholder="3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Ortalama Sipariş Değeri (TL)
                </label>
                <input
                  type="number"
                  value={averageOrder}
                  onChange={(e) => setAverageOrder(e.target.value)}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  placeholder="500"
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Code Editor Result */}
            <div className="code-editor">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 text-center text-xs text-code-line-numbers">
                  ROI Calculation Result
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-code-syntax-purple">const</span>{' '}
                  <span className="text-code-syntax-blue">results</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-blue">clicks</span>:{' '}
                  <span className="text-code-syntax-orange">{results.clicks}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-blue">conversions</span>:{' '}
                  <span className="text-code-syntax-orange">{results.conversions}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-blue">revenue</span>:{' '}
                  <span className="text-code-syntax-green">"₺{results.revenue.toLocaleString()}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-blue">profit</span>:{' '}
                  <span className="text-code-syntax-green">"₺{results.profit.toLocaleString()}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-blue">roi</span>:{' '}
                  <span className="text-code-syntax-orange">{results.roi}</span>%
                </div>
                <div>{'}'}</div>
              </div>

              <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <TrendingUp className="text-accent-primary mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-gradient mb-1">
                  {results.roi}%
                </div>
                <div className="text-xs text-text-muted">ROI</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-2xl font-bold text-accent-primary mb-1">
                  ₺{results.revenue.toLocaleString()}
                </div>
                <div className="text-xs text-text-muted">Toplam Gelir</div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="text-sm text-text-secondary mb-4">
                <strong className="text-text-primary">Tahmini Sonuçlar:</strong>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tıklama:</span>
                  <span className="text-text-primary font-semibold">{results.clicks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Dönüşüm:</span>
                  <span className="text-text-primary font-semibold">{results.conversions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Kar:</span>
                  <span className="text-accent-primary font-semibold">
                    ₺{results.profit.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

