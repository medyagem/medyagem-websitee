'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedContent from '@/components/RelatedContent'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Shield, BarChart3, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function GoogleAdsPage() {
    const relatedServices = [
        {
            title: 'Sahte Tıklama Engelleme',
            description: 'Yapay zeka destekli özel yazılımımızla reklam bütçenizi sahte tıklamalardan koruyoruz.',
            href: '/hizmetler/sahte-tiklama-engelleme',
            category: 'Hizmet'
        },
        {
            title: 'SEO Optimizasyonu',
            description: 'Yerel ve organik SEO çalışmaları ile Google\'da üst sıralara çıkmanızı sağlıyoruz.',
            href: '/hizmetler/seo',
            category: 'Hizmet'
        },
        {
            title: 'Google Ads Bütçenizi Nasıl Optimize Edersiniz?',
            description: 'Google Ads kampanyalarınızdan maksimum verim almak için bütçe optimizasyonu ipuçları.',
            href: '/blog/google-ads-butcenizi-nasil-optimize-edersiniz',
            category: 'Blog',
            readTime: '8 dk'
        }
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
                        <Target className="text-accent-primary" size={48} />
                    </div>
                    <h1 className="text-hero-title font-heading font-bold mb-6">
                        <span className="text-gradient">Google Ads</span> Yönetimi
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        ROI odaklı Google Ads kampanyaları ile işletmenize nitelikli müşteriler kazandırıyoruz
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link href="/iletisim" className="btn-primary">
                            Ücretsiz Analiz Al
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
                            Neler Yapıyoruz?
                        </h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Google Ads kampanyalarınızı baştan sona yönetiyoruz
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Target,
                                title: 'Kampanya Kurulumu',
                                description: 'Sektörünüze özel kampanya yapısı ve hedefleme stratejisi'
                            },
                            {
                                icon: BarChart3,
                                title: 'Anahtar Kelime Araştırması',
                                description: 'Detaylı rekabet analizi ve karlı anahtar kelime seçimi'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Sürekli Optimizasyon',
                                description: 'Haftalık performans analizi ve iyileştirmeler'
                            },
                            {
                                icon: Shield,
                                title: 'Sahte Tıklama Koruması',
                                description: 'Yapay zeka destekli yazılımımızla bütçe koruması'
                            },
                            {
                                icon: CheckCircle2,
                                title: 'Reklam Metni Yazımı',
                                description: 'Yüksek tıklama oranı sağlayan profesyonel metinler'
                            },
                            {
                                icon: BarChart3,
                                title: 'Detaylı Raporlama',
                                description: 'Aylık performans raporları ve ROI analizi'
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
                                    'Ortalama %35 daha düşük tıklama başına maliyet',
                                    'İlk 30 günde gözle görülür sonuçlar',
                                    'Yapay zeka destekli sahte tıklama engelleme',
                                    'Şeffaf raporlama ve tam kontrol',
                                    'Sektör uzmanı hesap yöneticisi',
                                    'Para iade garantisi (ilk 30 gün)'
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
                            <h3 className="text-2xl font-bold mb-6">Başarı Hikayesi</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-text-muted mb-2">Sektör</div>
                                    <div className="font-semibold">Tesisat Hizmetleri</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-background-tertiary p-4 rounded-lg">
                                        <div className="text-3xl font-bold text-accent-primary mb-1">%320</div>
                                        <div className="text-xs text-text-muted">Dönüşüm Artışı</div>
                                    </div>
                                    <div className="bg-background-tertiary p-4 rounded-lg">
                                        <div className="text-3xl font-bold text-accent-primary mb-1">%42</div>
                                        <div className="text-xs text-text-muted">Maliyet Düşüşü</div>
                                    </div>
                                </div>
                                <p className="text-text-secondary text-sm italic">
                                    "MedyaGem ile çalışmaya başladıktan sonra aylık müşteri sayımız 3 katına çıktı.
                                    Sahte tıklama koruması sayesinde bütçemizi çok daha verimli kullanıyoruz."
                                </p>
                                <div className="text-sm">
                                    <div className="font-semibold">Mehmet Yılmaz</div>
                                    <div className="text-text-muted">Yılmaz Tesisat</div>
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
                            Çalışma Sürecimiz
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                step: '01',
                                title: 'Analiz ve Strateji',
                                description: 'İşletmenizi, hedef kitlenizi ve rakiplerinizi analiz ediyoruz. Size özel kampanya stratejisi oluşturuyoruz.'
                            },
                            {
                                step: '02',
                                title: 'Kampanya Kurulumu',
                                description: 'Google Ads hesabınızı kuruyoruz, anahtar kelimeleri belirliyoruz ve reklam metinlerini yazıyoruz.'
                            },
                            {
                                step: '03',
                                title: 'Yayına Alma',
                                description: 'Kampanyalarınızı yayına alıyoruz ve ilk sonuçları takip ediyoruz.'
                            },
                            {
                                step: '04',
                                title: 'Optimizasyon',
                                description: 'Haftalık performans analizleri yapıyor, sürekli iyileştirmeler uyguluyoruz.'
                            },
                            {
                                step: '05',
                                title: 'Raporlama',
                                description: 'Aylık detaylı raporlar sunuyor, bir sonraki ay için stratejinizi belirliyoruz.'
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
                            Google Ads ile Büyümeye Hazır mısınız?
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                            Mevcut kampanyalarınızı ücretsiz analiz edelim ve size özel optimizasyon önerileri sunalım.
                        </p>
                        <Link href="/iletisim" className="btn-primary inline-block">
                            Ücretsiz Analiz İste
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Related Content */}
            <RelatedContent
                items={relatedServices}
                title="İlgili Hizmetler ve İçerikler"
            />

            <Footer />
        </main>
    )
}
