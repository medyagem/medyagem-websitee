'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

// Google Ads önizleme görselleri - kullanıcı public klasörüne ekleyebilir
const adPreviews = [
  {
    id: 1,
    title: 'Adıyaman Tesisatçı - Varyant 1',
    image: '/ad-previews/ad1.png', // Kullanıcı buraya görselleri ekleyecek
    description: '7/24 su tesisatçısı hizmeti',
    performance: {
      ctr: '3.8%',
      conversions: '89',
      roas: '4.2',
    },
  },
  {
    id: 2,
    title: 'Adıyaman Tesisatçı - Varyant 2',
    image: '/ad-previews/ad2.png',
    description: 'Kırmadan su kaçağı tespiti',
    performance: {
      ctr: '4.2%',
      conversions: '112',
      roas: '4.5',
    },
  },
  {
    id: 3,
    title: 'Adıyaman Tesisatçı - Varyant 3',
    image: '/ad-previews/ad3.png',
    description: 'Acil tesisatçı hizmeti',
    performance: {
      ctr: '3.5%',
      conversions: '78',
      roas: '3.9',
    },
  },
  {
    id: 4,
    title: 'Adıyaman Tesisatçı - Varyant 4',
    image: '/ad-previews/ad4.png',
    description: 'Tıkanıklık açma servisi',
    performance: {
      ctr: '4.8%',
      conversions: '145',
      roas: '5.1',
    },
  },
]

export default function AdShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Otomatik kaydırma
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % adPreviews.length)
    }, 5000) // 5 saniyede bir değişir

    return () => clearInterval(interval)
  }, [isAutoPlaying, adPreviews.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Manuel geçişte otomatik oynatmayı durdur
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % adPreviews.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + adPreviews.length) % adPreviews.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="ad-showcase" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Google Ads <span className="text-gradient">Önizlemeleri</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Müşterilerimiz için oluşturduğumuz reklam örnekleri
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="glass-card p-8">
                    {/* Ad Preview Image */}
                    <div className="relative mb-6 rounded-lg overflow-hidden bg-background-tertiary">
                      <div className="aspect-[9/16] max-h-[600px] mx-auto flex items-center justify-center">
                        {/* Görsel yoksa placeholder göster */}
                        <div className="w-full h-full flex items-center justify-center bg-background-tertiary relative">
                          <img
                            src={adPreviews[currentIndex].image}
                            alt={adPreviews[currentIndex].title}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // Görsel yüklenemezse placeholder göster
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              const placeholder = target.nextElementSibling as HTMLElement
                              if (placeholder) placeholder.style.display = 'flex'
                            }}
                          />
                          {/* Placeholder - Görsel yoksa bu gösterilir */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8" style={{ display: 'none' }}>
                            <div className="text-6xl mb-4">📱</div>
                            <div className="text-text-primary font-semibold mb-2">
                              {adPreviews[currentIndex].title}
                            </div>
                            <div className="text-text-secondary text-sm">
                              Görsel yükleniyor...<br />
                              <span className="text-text-muted text-xs mt-2 block">
                                Görseli public/ad-previews/ klasörüne ekleyin
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ad Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {adPreviews[currentIndex].title}
                        </h3>
                        <p className="text-text-secondary mb-4">
                          {adPreviews[currentIndex].description}
                        </p>
                      </div>

                      {/* Performance Metrics */}
                      <div className="code-editor neon-border">
                        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                          </div>
                          <div className="flex-1 text-center text-xs text-code-line-numbers">
                            Performans Metrikleri
                          </div>
                        </div>

                        <div className="space-y-2 font-mono text-xs">
                          <div>
                            <span className="text-code-syntax-purple">const</span>{' '}
                            <span className="text-code-syntax-blue">metrics</span> = {'{'}
                          </div>
                          <div className="pl-4">
                            <span className="text-code-syntax-blue">ctr</span>:{' '}
                            <span className="text-code-syntax-orange">
                              {adPreviews[currentIndex].performance.ctr}
                            </span>,
                          </div>
                          <div className="pl-4">
                            <span className="text-code-syntax-blue">conversions</span>:{' '}
                            <span className="text-code-syntax-orange">
                              {adPreviews[currentIndex].performance.conversions}
                            </span>,
                          </div>
                          <div className="pl-4">
                            <span className="text-code-syntax-blue">roas</span>:{' '}
                            <span className="text-code-syntax-orange">
                              {adPreviews[currentIndex].performance.roas}
                            </span>
                          </div>
                          <div>{'}'}</div>
                        </div>

                        <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background-card/80 backdrop-blur-glass border border-background-card-border rounded-full p-3 hover:bg-background-card transition-all z-10"
                aria-label="Önceki"
              >
                <ChevronLeft className="text-text-primary" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background-card/80 backdrop-blur-glass border border-background-card-border rounded-full p-3 hover:bg-background-card transition-all z-10"
                aria-label="Sonraki"
              >
                <ChevronRight className="text-text-primary" size={24} />
              </button>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="glass-card p-3 hover:shadow-card-glow transition-all"
                aria-label={isAutoPlaying ? 'Duraklat' : 'Oynat'}
              >
                {isAutoPlaying ? (
                  <Pause className="text-accent-primary" size={20} />
                ) : (
                  <Play className="text-accent-primary" size={20} />
                )}
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {adPreviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-accent-primary'
                        : 'w-2 bg-background-card-border hover:bg-background-card'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="text-sm text-text-muted">
                {currentIndex + 1} / {adPreviews.length}
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <motion.div
            className="mt-8 grid grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {adPreviews.map((ad, index) => (
              <button
                key={ad.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-[9/16] rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-accent-primary shadow-card-glow'
                    : 'border-background-card-border hover:border-accent-primary/50'
                }`}
              >
                <div className="w-full h-full bg-background-tertiary flex items-center justify-center">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-accent-primary/20" />
                  )}
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

