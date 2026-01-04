'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'

const faqCategories = [
  {
    category: 'Google Ads',
    icon: '🎯',
    questions: [
      {
        q: 'Google Ads ne kadar sürede sonuç verir?',
        a: 'Reklamlar anında yayınlanır, ilk sonuçlar 24-48 saat içinde görülür. Optimizasyon için 2-4 hafta öneriyoruz.',
      },
      {
        q: 'Minimum reklam bütçesi ne kadar olmalı?',
        a: 'Sektöre göre değişir. Yerel hizmetler için aylık 3.000-5.000 TL ile etkili sonuçlar alınabilir.',
      },
      {
        q: 'Kampanyalarımı ne sıklıkla optimize ediyorsunuz?',
        a: 'Haftalık optimizasyon yapıyoruz. Acil durumlarda günlük müdahale ediyoruz.',
      },
    ],
  },
  {
    category: 'Sahte Tıklama',
    icon: '🛡️',
    questions: [
      {
        q: 'Sahte tıklama koruması nasıl çalışır?',
        a: 'Gelişmiş algoritmalarımız bot trafiğini, rakip tıklamalarını ve şüpheli aktiviteleri tespit ederek otomatik engeller.',
      },
      {
        q: 'Ne kadar tasarruf sağlayabilirim?',
        a: 'Ortalama %15-25 bütçe tasarrufu sağlanır. Bazı sektörlerde bu oran %40\'a çıkabilir.',
      },
    ],
  },
  {
    category: 'Web Sitesi',
    icon: '🌐',
    questions: [
      {
        q: 'Web sitesi kurulumu ne kadar sürer?',
        a: 'Standart kurumsal siteler 5-7 iş günü, e-ticaret siteleri 2-3 hafta içinde tamamlanır.',
      },
      {
        q: 'SEO uyumlu mu?',
        a: 'Evet, tüm web sitelerimiz SEO uyumlu olarak kurulur ve Google standartlarına uygundur.',
      },
    ],
  },
  {
    category: 'Genel',
    icon: '❓',
    questions: [
      {
        q: 'Sözleşme zorunlu mu?',
        a: 'Aylık çalışma modeli sunuyoruz. Minimum 3 aylık taahhüt öneriyoruz ancak zorunlu değil.',
      },
      {
        q: 'Raporlama nasıl yapılıyor?',
        a: 'Aylık detaylı raporlar e-posta ile gönderilir. İsterseniz online dashboard\'a da erişim sağlanır.',
      },
    ],
  },
]

export default function FAQEnhanced() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = faqCategories.filter((cat) => {
    if (selectedCategory && cat.category !== selectedCategory) return false
    if (!searchQuery) return true
    return cat.questions.some(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <section id="faq" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Sık Sorulan <span className="text-gradient">Sorular</span>
          </h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Sorularınızı arayın..."
              className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-12 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-accent-primary text-white'
                : 'bg-background-card text-text-secondary hover:bg-background-tertiary'
            }`}
          >
            Tümü
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat.category
                  ? 'bg-accent-primary text-white'
                  : 'bg-background-card text-text-secondary hover:bg-background-tertiary'
              }`}
            >
              {cat.icon} {cat.category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>{category.icon}</span>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const globalIndex = catIndex * 10 + index
                  return (
                    <motion.div
                      key={index}
                      className="glass-card overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (catIndex * 0.1) + (index * 0.05) }}
                    >
                      <button
                        className="w-full p-6 flex items-center justify-between text-left hover:bg-background-card/50 transition-colors"
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                      >
                        <span className="font-semibold pr-4">{item.q}</span>
                        <ChevronDown
                          className={`flex-shrink-0 text-text-muted transition-transform ${
                            openIndex === globalIndex ? 'rotate-180' : ''
                          }`}
                          size={20}
                        />
                      </button>
                      <AnimatePresence>
                        {openIndex === globalIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-text-secondary mb-4">Daha fazla sorunuz mu var?</p>
          <a href="#contact" className="btn-primary inline-block">
            İletişime Geç
          </a>
        </motion.div>
      </div>
    </section>
  )
}

