'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedContent from '@/components/RelatedContent'
import { motion } from 'framer-motion'
import { Search, TrendingUp, FileText, Link2, CheckCircle2, Target, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function SEOPage() {
  const relatedServices = [
    {
      title: 'Web Sitesi Kurulumu',
      description: 'SEO uyumlu web sitesi kurulumu ile organik trafik kazanın.',
      href: '/hizmetler/web-sitesi',
      category: 'Hizmet'
    },
    {
      title: 'Google Ads Yönetimi',
      description: 'SEO ile birlikte Google Ads ile hızlı sonuçlar alın.',
      href: '/hizmetler/google-ads',
      category: 'Hizmet'
    },
  ]

  return (
    <main className="relative">
      <ScrollProgress />
      <WhatsAppWidget />
      <Header />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 bg-hero-glow opacity-50" />

        <motion.div
          className="container-custom relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-accent-primary/20 p-6 rounded-full w-fit mx-auto mb-6">
            <Search className="text-accent-primary" size={48} />
          </div>
          <h1 className="text-hero-title font-heading font-bold mb-6">
            <span className="text-gradient">SEO</span> Optimizasyonu
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Yerel ve organik SEO çalışmaları ile Google'da üst sıralara çıkmanızı sağlıyoruz
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/iletisim" className="btn-primary">
              Ücretsiz SEO Analizi
            </Link>
            <Link href="#pricing" className="px-6 py-3 rounded-button border border-background-card-border hover:bg-background-card transition-all">
              Paketleri İncele
            </Link>
          </div>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-background-secondary/30">
        <div className="container-custom max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title font-heading font-bold mb-4">
              SEO Hizmetlerimiz
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Web sitenizi Google'da üst sıralara taşıyoruz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Anahtar Kelime Analizi',
                description: 'Sektörünüze özel karlı anahtar kelimeleri belirliyoruz'
              },
              {
                icon: FileText,
                title: 'On-Page SEO',
                description: 'İçerik optimizasyonu ve meta tag düzenlemeleri'
              },
              {
                icon: BarChart3,
                title: 'Teknik SEO',
                description: 'Site hızı, mobil uyumluluk ve yapısal iyileştirmeler'
              },
              {
                icon: Link2,
                title: 'Link Building',
                description: 'Kaliteli backlink kazanımı ve domain otoritesi artırma'
              },
              {
                icon: Search,
                title: 'Yerel SEO',
                description: 'Google My Business optimizasyonu ve yerel aramalar'
              },
              {
                icon: TrendingUp,
                title: 'İçerik Stratejisi',
                description: 'SEO uyumlu blog yazıları ve içerik planlaması'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="glass-card p-8 hover:shadow-card-glow transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-accent-primary/20 p-3 rounded-lg w-fit mb-4">
                    <Icon className="text-accent-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-section-title font-heading font-bold mb-6">
                Neden <span className="text-gradient">MedyaGem</span>?
              </h2>
              <div className="space-y-4">
                {[
                  'Google\'da ilk sayfada görünürlük',
                  'Organik trafik artışı ve dönüşüm',
                  'Yerel SEO ile bölgesel müşteri kazanımı',
                  'Uzun vadeli ve sürdürülebilir sonuçlar',
                  'Detaylı raporlama ve analiz',
                  'Sektör uzmanı SEO danışmanları'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="text-accent-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-text-secondary">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">SEO Başarı Metrikleri</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background-tertiary p-4 rounded-lg">
                    <div className="text-3xl font-bold text-accent-primary mb-1">+250%</div>
                    <div className="text-xs text-text-muted">Organik Trafik</div>
                  </div>
                  <div className="bg-background-tertiary p-4 rounded-lg">
                    <div className="text-3xl font-bold text-accent-primary mb-1">1. Sayfa</div>
                    <div className="text-xs text-text-muted">Ortalama Sıralama</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background-tertiary p-4 rounded-lg">
                    <div className="text-3xl font-bold text-accent-primary mb-1">+180%</div>
                    <div className="text-xs text-text-muted">Dönüşüm Artışı</div>
                  </div>
                  <div className="bg-background-tertiary p-4 rounded-lg">
                    <div className="text-3xl font-bold text-accent-primary mb-1">6 Ay</div>
                    <div className="text-xs text-text-muted">İlk Sonuçlar</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background-secondary/30">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title font-heading font-bold mb-4">
              SEO Sürecimiz
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'SEO Audit',
                description: 'Mevcut durumunuzu analiz ediyor, iyileştirme alanlarını belirliyoruz.'
              },
              {
                step: '02',
                title: 'Anahtar Kelime Stratejisi',
                description: 'Sektörünüze özel karlı anahtar kelimeleri belirliyoruz.'
              },
              {
                step: '03',
                title: 'Teknik Optimizasyon',
                description: 'Site hızı, mobil uyumluluk ve yapısal iyileştirmeler yapıyoruz.'
              },
              {
                step: '04',
                title: 'İçerik Optimizasyonu',
                description: 'SEO uyumlu içerikler oluşturuyor ve mevcut içerikleri optimize ediyoruz.'
              },
              {
                step: '05',
                title: 'Link Building',
                description: 'Kaliteli backlink kazanımı ve domain otoritesi artırma çalışmaları.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 flex gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-accent-primary/20">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="glass-card p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Google'da Üst Sıralara Çıkın
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Web sitenizi ücretsiz SEO analizi yapalım ve size özel strateji sunalım.
            </p>
            <Link href="/iletisim" className="btn-primary inline-block">
              Ücretsiz SEO Analizi İste
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent
        items={relatedServices}
        title="İlgili Hizmetler"
      />

      <Footer />
    </main>
  )
}
