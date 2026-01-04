'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedContent from '@/components/RelatedContent'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Target, CheckCircle2, PieChart, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PerformansAnaliziPage() {
    const relatedServices = [
        {
            title: 'Google Ads Yönetimi',
            description: 'Performans analizi ile birlikte Google Ads kampanyalarınızı yönetiyoruz.',
            href: '/hizmetler/google-ads',
            category: 'Hizmet'
        },
        {
            title: 'SEO Optimizasyonu',
            description: 'Organik trafik performansını analiz ediyoruz.',
            href: '/hizmetler/seo',
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
                        <BarChart3 className="text-accent-primary" size={48} />
                    </div>
                    <h1 className="text-hero-title font-heading font-bold mb-6">
                        <span className="text-gradient">Performans</span> Analizi
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Detaylı raporlama ve dönüşüm takibi ile kampanyalarınızın her anını izliyoruz
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
                            Analiz Hizmetlerimiz
                        </h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Kampanyalarınızı detaylıca analiz ediyoruz
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: BarChart3,
                                title: 'Google Analytics',
                                description: 'Detaylı trafik analizi ve kullanıcı davranışları'
                            },
                            {
                                icon: Target,
                                title: 'Dönüşüm Takibi',
                                description: 'Form gönderimleri, telefon aramaları ve satış takibi'
                            },
                            {
                                icon: TrendingUp,
                                title: 'ROI Analizi',
                                description: 'Yatırım getirisi hesaplama ve karlılık analizi'
                            },
                            {
                                icon: PieChart,
                                title: 'Kanal Analizi',
                                description: 'Hangi kanallardan müşteri geldiğini tespit etme'
                            },
                            {
                                icon: FileText,
                                title: 'Aylık Raporlar',
                                description: 'Detaylı performans raporları ve öneriler'
                            },
                            {
                                icon: CheckCircle2,
                                title: 'Hedef Belirleme',
                                description: 'Gerçekçi hedefler belirleme ve takip'
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
                                    'Gerçek zamanlı performans takibi',
                                    'Detaylı dönüşüm analizi ve optimizasyon',
                                    'Aylık kapsamlı raporlar',
                                    'ROI ve karlılık hesaplamaları',
                                    'Hedef kitle davranış analizi',
                                    'Rekabet analizi ve benchmarking'
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
                            <h3 className="text-2xl font-bold mb-6">Rapor İçeriği</h3>
                            <div className="space-y-4">
                                {[
                                    'Trafik kaynakları analizi',
                                    'Dönüşüm kanalları',
                                    'ROI ve karlılık metrikleri',
                                    'Kullanıcı davranış analizi',
                                    'Rekabet karşılaştırması',
                                    'İyileştirme önerileri'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-accent-primary" size={20} />
                                        <span className="text-text-secondary">{item}</span>
                                    </div>
                                ))}
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
                            Analiz Sürecimiz
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                step: '01',
                                title: 'Veri Toplama',
                                description: 'Google Analytics, Google Ads ve diğer platformlardan veri topluyoruz.'
                            },
                            {
                                step: '02',
                                title: 'Analiz ve Değerlendirme',
                                description: 'Toplanan verileri analiz ediyor, performans metriklerini değerlendiriyoruz.'
                            },
                            {
                                step: '03',
                                title: 'Raporlama',
                                description: 'Detaylı raporlar hazırlıyor, görselleştirmeler oluşturuyoruz.'
                            },
                            {
                                step: '04',
                                title: 'Öneriler',
                                description: 'İyileştirme önerileri sunuyor, optimizasyon stratejileri belirliyoruz.'
                            },
                            {
                                step: '05',
                                title: 'Takip ve Güncelleme',
                                description: 'Düzenli takip yapıyor, raporları güncelliyoruz.'
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
                            Kampanyalarınızı Detaylıca Analiz Edelim
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                            Ücretsiz performans analizi yapalım ve size özel rapor sunalım.
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
                title="İlgili Hizmetler"
            />

            <Footer />
        </main>
    )
}



