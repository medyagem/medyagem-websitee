'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Dosya adından Türkçe başlık oluştur
function formatTitle(filename: string): string {
    const nameWithoutExt = filename.replace(/\.(png|jpg|jpeg|webp)$/i, '')
    const words = nameWithoutExt.split(/[-_]/)
    const formatted = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
    return formatted
}

interface Props {
    initialReferences: string[]
}

export default function CustomerReferencesClient({ initialReferences }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const references = initialReferences

    // Referans yoksa gösterme
    if (!references || references.length === 0) return null

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % references.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + references.length) % references.length)
    }

    // Otomatik kaydırma
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [references.length])

    return (
        <section className="section-padding bg-background-secondary/30 overflow-hidden">
            <div className="container-custom">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-section-title font-heading font-bold mb-4">
                        Müşterilerimizden <span className="text-gradient">Referanslar</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Türkiye'nin dört bir yanından müşterilerimizin başarı hikayeleri
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Main Image */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass-card">
                        <Image
                            src={`/ad-previews/${references[currentIndex]}`}
                            alt={formatTitle(references[currentIndex])}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            priority
                        />

                        {/* Gradient Overlay Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-primary/90 to-transparent p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {formatTitle(references[currentIndex])}
                            </h3>
                            <p className="text-text-secondary">
                                Google Ads Kampanyası
                            </p>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    {references.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full hover:bg-accent-primary/20 transition-all group z-10"
                                aria-label="Önceki"
                            >
                                <ChevronLeft className="text-white group-hover:text-accent-primary transition-colors" size={24} />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full hover:bg-accent-primary/20 transition-all group z-10"
                                aria-label="Sonraki"
                            >
                                <ChevronRight className="text-white group-hover:text-accent-primary transition-colors" size={24} />
                            </button>
                        </>
                    )}

                    {/* Dots Indicator */}
                    {references.length > 1 && (
                        <div className="flex justify-center gap-2 mt-6">
                            {references.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'w-8 bg-accent-primary'
                                            : 'w-2 bg-background-card-border hover:bg-accent-primary/50'
                                        }`}
                                    aria-label={`Referans ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Thumbnails */}
                {references.length > 1 && (
                    <div className="flex gap-4 justify-center mt-8 overflow-x-auto pb-4 px-4 scrollbar-hide">
                        {references.map((filename, index) => (
                            <button
                                key={filename}
                                onClick={() => setCurrentIndex(index)}
                                className={`relative flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden transition-all ${index === currentIndex
                                        ? 'ring-2 ring-accent-primary scale-105'
                                        : 'opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <Image
                                    src={`/ad-previews/${filename}`}
                                    alt={formatTitle(filename)}
                                    fill
                                    className="object-cover"
                                    sizes="128px"
                                />
                            </button>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-text-muted mb-4">
                        Sizin de başarı hikayenizi yazmak ister misiniz?
                    </p>
                    <a href="/iletisim" className="btn-primary inline-block">
                        Ücretsiz Görüşme Talep Et
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
