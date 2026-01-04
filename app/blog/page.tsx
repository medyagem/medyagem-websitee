'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, BookOpen, Search } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

const blogPosts = [
  // Google Ads Yazıları
  {
    title: 'Google Ads Nedir? Başlangıç Rehberi',
    slug: 'google-ads-nedir-baslangic-rehberi',
    excerpt: 'Google Ads nedir, nasıl çalışır? Başlangıç seviyesinden ileri seviyeye kadar Google Ads rehberi. Kampanya oluşturma, anahtar kelime seçimi ve optimizasyon ipuçları.',
    date: '20 Ocak 2025',
    category: 'Google Ads',
    readTime: '10 dk',
    image: '📊',
    featured: true,
  },
  {
    title: 'Google Ads Maliyetleri: 2025\'te Ne Kadar Bütçe Ayırmalısınız?',
    slug: 'google-ads-maliyetleri-2025-butce',
    excerpt: 'Google Ads maliyetleri 2025 yılında ne kadar? Sektör bazlı bütçe önerileri, CPC analizi ve ROI hesaplama rehberi.',
    date: '18 Ocak 2025',
    category: 'Google Ads',
    readTime: '8 dk',
    image: '💰',
    featured: false,
  },
  {
    title: 'Google Ads\'te Dönüşüm Oranı Nasıl Artırılır?',
    slug: 'google-ads-donusum-orani-artirma',
    excerpt: 'Google Ads dönüşüm oranını artırma teknikleri. Landing page optimizasyonu, reklam metinleri ve hedef kitle stratejileri.',
    date: '16 Ocak 2025',
    category: 'Google Ads',
    readTime: '9 dk',
    image: '📈',
    featured: false,
  },
  {
    title: 'Yerel İşletmeler İçin Google Ads Stratejileri',
    slug: 'yerel-isletmeler-google-ads-stratejileri',
    excerpt: 'Yerel işletmeler için Google Ads kampanya stratejileri. Yerel anahtar kelimeler, coğrafi hedefleme ve yerel reklam uzantıları.',
    date: '14 Ocak 2025',
    category: 'Google Ads',
    readTime: '7 dk',
    image: '📍',
    featured: false,
  },
  {
    title: 'Google Ads\'te Tıklama Dolandırıcılığı Nedir ve Nasıl Önlenir?',
    slug: 'google-ads-tiklama-dolandiriciligi-onleme',
    excerpt: 'Google Ads tıklama dolandırıcılığı nedir? Sahte tıklamaları tespit etme ve engelleme yöntemleri. %60\'a kadar bütçe koruması.',
    date: '12 Ocak 2025',
    category: 'Google Ads',
    readTime: '8 dk',
    image: '🛡️',
    featured: false,
  },
  {
    title: 'Google Ads vs Facebook Ads: Hangisi Daha Etkili?',
    slug: 'google-ads-vs-facebook-ads-karsilastirma',
    excerpt: 'Google Ads ve Facebook Ads karşılaştırması. Hangi platform ne zaman kullanılmalı? ROI, hedef kitle ve kampanya türleri analizi.',
    date: '10 Ocak 2025',
    category: 'Google Ads',
    readTime: '9 dk',
    image: '⚖️',
    featured: false,
  },
  {
    title: 'Google Ads Kalite Puanı Nasıl Yükseltilir?',
    slug: 'google-ads-kalite-puani-yukseltme',
    excerpt: 'Google Ads kalite puanını yükseltme rehberi. CTR artırma, reklam alaka düzeyi ve landing page deneyimi optimizasyonu.',
    date: '8 Ocak 2025',
    category: 'Google Ads',
    readTime: '7 dk',
    image: '⭐',
    featured: false,
  },
  {
    title: 'Google Ads Remarketing Nedir? Nasıl Kurulur?',
    slug: 'google-ads-remarketing-nedir-kurulum',
    excerpt: 'Google Ads remarketing nedir? Remarketing kampanyası kurulumu, hedef kitle oluşturma ve optimizasyon stratejileri.',
    date: '6 Ocak 2025',
    category: 'Google Ads',
    readTime: '8 dk',
    image: '🔄',
    featured: false,
  },
  {
    title: 'Google Ads\'te Negatif Anahtar Kelime Kullanımı',
    slug: 'google-ads-negatif-anahtar-kelime',
    excerpt: 'Google Ads negatif anahtar kelime stratejisi. Gereksiz tıklamaları engelleme, bütçe optimizasyonu ve negatif kelime listesi oluşturma.',
    date: '4 Ocak 2025',
    category: 'Google Ads',
    readTime: '6 dk',
    image: '🚫',
    featured: false,
  },
  {
    title: 'Google Ads Raporları Nasıl Okunur?',
    slug: 'google-ads-raporlari-nasil-okunur',
    excerpt: 'Google Ads raporlarını okuma ve analiz etme rehberi. Metrikler, KPI\'lar, performans analizi ve optimizasyon önerileri.',
    date: '2 Ocak 2025',
    category: 'Google Ads',
    readTime: '8 dk',
    image: '📊',
    featured: false,
  },
  // SEO Yazıları
  {
    title: 'SEO Nedir? 2025 Güncel Rehberi',
    slug: 'seo-nedir-2025-guncel-rehberi',
    excerpt: 'SEO nedir, nasıl çalışır? 2025 yılı güncel SEO rehberi. Arama motoru optimizasyonu temelleri, algoritma güncellemeleri ve best practices.',
    date: '19 Ocak 2025',
    category: 'SEO',
    readTime: '12 dk',
    image: '🔍',
    featured: false,
  },
  {
    title: 'Yerel SEO Nedir? Küçük İşletmeler İçin Önemi',
    slug: 'yerel-seo-nedir-kucuk-isletmeler',
    excerpt: 'Yerel SEO nedir ve küçük işletmeler için neden önemli? Google Business Profile optimizasyonu, yerel anahtar kelimeler ve sıralama faktörleri.',
    date: '17 Ocak 2025',
    category: 'SEO',
    readTime: '10 dk',
    image: '📍',
    featured: false,
  },
  {
    title: 'Google\'da İlk Sayfaya Çıkmak İçin 10 SEO İpucu',
    slug: 'google-ilk-sayfaya-cikmak-10-seo-ipucu',
    excerpt: 'Google\'da ilk sayfaya çıkmak için kanıtlanmış 10 SEO ipucu. Teknik SEO, içerik optimizasyonu ve link building stratejileri.',
    date: '15 Ocak 2025',
    category: 'SEO',
    readTime: '9 dk',
    image: '🎯',
    featured: false,
  },
  {
    title: 'Anahtar Kelime Araştırması Nasıl Yapılır?',
    slug: 'anahtar-kelime-arastirmasi-nasil-yapilir',
    excerpt: 'Anahtar kelime araştırması rehberi. Araçlar, stratejiler, arama hacmi analizi ve anahtar kelime haritalama teknikleri.',
    date: '13 Ocak 2025',
    category: 'SEO',
    readTime: '11 dk',
    image: '🔑',
    featured: false,
  },
  {
    title: 'Teknik SEO Nedir? Kontrol Listesi',
    slug: 'teknik-seo-nedir-kontrol-listesi',
    excerpt: 'Teknik SEO nedir? Site hızı, mobil uyumluluk, robots.txt, sitemap, schema markup ve Core Web Vitals kontrol listesi.',
    date: '11 Ocak 2025',
    category: 'SEO',
    readTime: '10 dk',
    image: '⚙️',
    featured: false,
  },
  {
    title: 'Backlink Nedir? Kaliteli Backlink Nasıl Alınır?',
    slug: 'backlink-nedir-kaliteli-backlink-alma',
    excerpt: 'Backlink nedir ve SEO\'ya etkisi? Kaliteli backlink alma stratejileri, link building teknikleri ve toxic link tespiti.',
    date: '9 Ocak 2025',
    category: 'SEO',
    readTime: '9 dk',
    image: '🔗',
    featured: false,
  },
  {
    title: 'İçerik SEO\'su: Google\'ın Sevdiği İçerikler',
    slug: 'icerik-seo-google-sevdigi-icerikler',
    excerpt: 'İçerik SEO optimizasyonu rehberi. Google\'ın sevdiği içerik türleri, topic clusters, E-E-A-T kriterleri ve içerik stratejisi.',
    date: '7 Ocak 2025',
    category: 'SEO',
    readTime: '10 dk',
    image: '📝',
    featured: false,
  },
  {
    title: 'Sayfa Hızı SEO\'yu Nasıl Etkiler?',
    slug: 'sayfa-hizi-seo-etkisi',
    excerpt: 'Sayfa hızı SEO\'yu nasıl etkiler? Core Web Vitals, LCP, FID, CLS optimizasyonu ve site hızlandırma teknikleri.',
    date: '5 Ocak 2025',
    category: 'SEO',
    readTime: '8 dk',
    image: '⚡',
    featured: false,
  },
  {
    title: 'Mobile SEO: Mobil Uyumlu Site Neden Önemli?',
    slug: 'mobile-seo-mobil-uyumlu-site',
    excerpt: 'Mobile SEO nedir ve neden önemli? Mobil-first indexing, responsive tasarım, AMP ve mobil kullanıcı deneyimi optimizasyonu.',
    date: '3 Ocak 2025',
    category: 'SEO',
    readTime: '7 dk',
    image: '📱',
    featured: false,
  },
  {
    title: 'E-E-A-T Nedir? Google\'ın Güven Kriterleri',
    slug: 'e-e-a-t-nedir-google-guven-kriterleri',
    excerpt: 'E-E-A-T nedir? Experience, Expertise, Authoritativeness, Trustworthiness. Google\'ın içerik kalitesi değerlendirme kriterleri ve uygulama rehberi.',
    date: '1 Ocak 2025',
    category: 'SEO',
    readTime: '11 dk',
    image: '✅',
    featured: false,
  },
  // Google Business Profile Yazıları
  {
    title: 'Google Business Profile Nasıl Oluşturulur?',
    slug: 'google-business-profile-nasil-olusturulur',
    excerpt: 'Google Business Profile oluşturma rehberi. Adım adım kurulum, doğrulama süreci, profil optimizasyonu ve en iyi uygulamalar.',
    date: '21 Ocak 2025',
    category: 'Google Business Profile',
    readTime: '8 dk',
    image: '🏢',
    featured: false,
  },
  {
    title: 'Google Haritalar\'da Üst Sıralara Çıkma Rehberi',
    slug: 'google-haritalarda-ust-siralara-cikma',
    excerpt: 'Google Haritalar\'da üst sıralara çıkma stratejileri. Yerel SEO, yorum yönetimi, GBP optimizasyonu ve sıralama faktörleri.',
    date: '22 Ocak 2025',
    category: 'Google Business Profile',
    readTime: '9 dk',
    image: '🗺️',
    featured: false,
  },
  {
    title: 'Google Yorumları Nasıl Artırılır?',
    slug: 'google-yorumlari-nasil-artirilir',
    excerpt: 'Google yorumlarını artırma stratejileri. Müşteri yorumu talep etme, yorum yanıtlama ve yorum yönetimi best practices.',
    date: '23 Ocak 2025',
    category: 'Google Business Profile',
    readTime: '7 dk',
    image: '⭐',
    featured: false,
  },
  {
    title: 'Google Business Profile Optimizasyonu: Adım Adım',
    slug: 'google-business-profile-optimizasyonu',
    excerpt: 'Google Business Profile optimizasyon rehberi. Kategori seçimi, açıklama yazma, fotoğraf yükleme ve gönderi stratejileri.',
    date: '24 Ocak 2025',
    category: 'Google Business Profile',
    readTime: '8 dk',
    image: '📋',
    featured: false,
  },
]

const categories = ['Tümü', 'Google Ads', 'SEO', 'Google Business Profile']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)

  return (
    <main className="relative min-h-screen">
      <WhatsAppWidget />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-primary/50 via-background-primary/30 to-background-primary" />
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="bg-accent-primary/20 text-accent-primary px-4 py-2 rounded-full text-sm font-semibold">
                MedyaGem Blog
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Sana yardımcı olacak <span className="text-gradient">içerikler</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              MedyaGem blog ile işletmenin büyümesine yardımcı olacak ipuçlarını bulabilir, trend ve güncel haberleri takip edebilirsin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding relative">
          <div className="container-custom">
            <motion.a
              href={`/blog/${featuredPost.slug || featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="glass-card p-8 md:p-12 block hover:shadow-card-glow transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="text-8xl flex-shrink-0">{featuredPost.image}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Öne Çıkan
                    </span>
                    <span className="bg-accent-primary/20 text-accent-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={16} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </section>
      )}

      {/* Search and Categories */}
      <section className="section-padding relative bg-background-secondary/30">
        <div className="container-custom">
          {/* Search Bar */}
          <motion.div
            className="mb-8 max-w-2xl mx-auto"
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
                placeholder="İçeriklerde ara..."
                className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-12 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
              />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent-primary text-white'
                    : 'bg-background-card text-text-secondary hover:bg-background-tertiary'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.a
                  key={post.title}
                  href={`/blog/${post.slug || post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="glass-card p-6 hover:shadow-card-glow transition-all group block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-5xl mb-4">{post.image}</div>
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

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-text-secondary">Aradığınız kriterlere uygun içerik bulunamadı.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
