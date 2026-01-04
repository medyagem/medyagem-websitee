'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mehmet Yılmaz',
    company: 'Yılmaz Tesisat',
    role: 'İşletme Sahibi',
    content: 'MedyaGem sayesinde aylık müşteri sayımız 3 katına çıktı. Google Ads yönetimi ve sahte tıklama koruması ile bütçemiz çok daha verimli kullanılıyor.',
    rating: 5,
    image: '👨‍🔧',
  },
  {
    name: 'Ayşe Demir',
    company: 'Demir Klima Servisi',
    role: 'Genel Müdür',
    content: 'Profesyonel ekiple çalışmak harika. Her ay detaylı rapor alıyoruz ve kampanyalarımız sürekli optimize ediliyor. ROI %350 arttı!',
    rating: 5,
    image: '👩‍💼',
  },
  {
    name: 'Ali Kaya',
    company: 'Kaya Elektrik',
    role: 'Kurucu',
    content: 'Web sitesi kurulumu ve Google Ads yönetimi için MedyaGem\'i seçtik. Sonuçlar beklediğimizden çok daha iyi. Kesinlikle tavsiye ederim.',
    rating: 5,
    image: '👨‍💻',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Müşterilerimiz <span className="text-gradient">Ne Diyor?</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Başarı hikayelerimizden birkaçı
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass-card p-6 hover:shadow-card-glow transition-all relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="text-accent-primary/30 absolute top-6 right-6" size={40} />

              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">{testimonial.role}</div>
                  <div className="text-xs text-text-dim">{testimonial.company}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

