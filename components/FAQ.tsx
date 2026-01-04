'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const questions = [
  {
    q: 'Google Ads ne kadar sürede sonuç verir?',
    a: 'Reklamlar anında yayınlanır, ilk sonuçlar 24-48 saat içinde görülür. Optimizasyon için 2-4 hafta öneriyoruz.',
  },
  {
    q: 'Sahte tıklama koruması nasıl çalışır?',
    a: 'Gelişmiş algoritmalarımız bot trafiğini, rakip tıklamalarını ve şüpheli aktiviteleri tespit ederek otomatik engeller.',
  },
  {
    q: 'Minimum reklam bütçesi ne kadar olmalı?',
    a: 'Sektöre göre değişir. Yerel hizmetler için aylık 3.000-5.000 TL ile etkili sonuçlar alınabilir.',
  },
  {
    q: 'Web sitesi kurulumu ne kadar sürer?',
    a: 'Standart kurumsal siteler 5-7 iş günü, e-ticaret siteleri 2-3 hafta içinde tamamlanır.',
  },
  {
    q: 'Sözleşme zorunlu mu?',
    a: 'Aylık çalışma modeli sunuyoruz. Minimum 3 aylık taahhüt öneriyoruz ancak zorunlu değil.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom max-w-3xl">
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

        <div className="space-y-4">
          {questions.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 flex items-center justify-between text-left hover:bg-background-card/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold pr-4">{item.q}</span>
                <ChevronDown
                  className={`flex-shrink-0 text-text-muted transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
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

