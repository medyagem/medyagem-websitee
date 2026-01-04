'use client'

import { motion } from 'framer-motion'
import { Star, ExternalLink, CheckCircle } from 'lucide-react'

const reviews = [
  {
    name: 'Mehmet Yılmaz',
    rating: 5,
    date: '2 hafta önce',
    review: 'Harika bir hizmet! Google Ads kampanyalarımız çok iyi sonuç verdi.',
    verified: true,
  },
  {
    name: 'Ayşe Demir',
    rating: 5,
    date: '1 ay önce',
    review: 'Profesyonel ekiple çalışmak çok keyifli. ROI %350 arttı!',
    verified: true,
  },
  {
    name: 'Ali Kaya',
    rating: 5,
    date: '2 ay önce',
    review: 'Web sitesi ve reklam yönetimi için mükemmel bir ajans. Kesinlikle tavsiye ederim.',
    verified: true,
  },
]

export default function SocialProof() {
  const averageRating = 5.0
  const totalReviews = 47

  return (
    <section id="social-proof" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Müşteri <span className="text-gradient">Değerlendirmeleri</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-5xl font-bold text-gradient">{averageRating}</div>
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
                ))}
              </div>
              <div className="text-text-secondary text-sm">
                {totalReviews} değerlendirme
              </div>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary-hover transition-colors text-sm"
          >
            Google'da Tümünü Gör
            <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-xs text-text-muted">{review.date}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                "{review.review}"
              </p>
              {review.verified && (
                <div className="flex items-center gap-2 text-xs text-accent-primary">
                  <CheckCircle size={14} />
                  <span>Doğrulanmış Müşteri</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

