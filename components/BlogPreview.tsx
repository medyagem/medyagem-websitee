'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'

const blogPosts = [
  {
    title: 'Google Ads\'te Sahte Tıklamaları Nasıl Engellersiniz?',
    excerpt: 'Reklam bütçenizin %20\'sine kadar sahte tıklamalarla kaybolabilir. Bu yazıda sahte tıklamaları tespit etme ve engelleme yöntemlerini öğrenin.',
    date: '15 Ocak 2025',
    category: 'Google Ads',
    readTime: '5 dk',
    image: '📊',
  },
  {
    title: 'Yerel İşletmeler İçin SEO Stratejisi',
    excerpt: 'Yerel SEO ile Google\'da ilk sayfada yer alın. Google My Business optimizasyonu, yerel anahtar kelimeler ve backlink stratejileri.',
    date: '10 Ocak 2025',
    category: 'SEO',
    readTime: '7 dk',
    image: '🔍',
  },
  {
    title: 'ROI\'nizi 3 Ayda 2\'ye Katlayın',
    excerpt: 'Doğru reklam stratejisi ile reklam harcamalarınızın geri dönüşünü artırın. Kanıtlanmış teknikler ve örnek vakalar.',
    date: '5 Ocak 2025',
    category: 'Strateji',
    readTime: '6 dk',
    image: '📈',
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Dijital Pazarlama <span className="text-gradient">İpuçları</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            En güncel dijital pazarlama stratejileri ve ipuçları
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href="#"
              className="glass-card p-6 hover:shadow-card-glow transition-all group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{post.image}</div>
              <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                <span className="bg-accent-primary/20 text-accent-primary px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={12} />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-accent-primary text-sm font-medium group-hover:gap-3 transition-all">
                Devamını Oku
                <ArrowRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#" className="btn-primary inline-block">
            Tüm Yazıları Görüntüle
          </a>
        </motion.div>
      </div>
    </section>
  )
}

