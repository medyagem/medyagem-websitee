'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedContent from '@/components/RelatedContent'
import { motion } from 'framer-motion'
import { Share2, Target, Users, TrendingUp, CheckCircle2, BarChart3, Image } from 'lucide-react'
import Link from 'next/link'

export default function SosyalMedyaPage() {
    const relatedServices = [
        {
            title: 'Google Ads Yönetimi',
            description: 'Sosyal medya ile birlikte Google Ads ile çoklu kanal stratejisi.',
            href: '/hizmetler/google-ads',
            category: 'Hizmet'
        },
        {
            title: 'Performans Analizi',
            description: 'Sosyal medya kampanyalarınızın performansını analiz ediyoruz.',
            href: '/hizmetler/performans-analizi',
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
                        <Share2 className="text-accent-primary" size={48} />
                    </div>
                    <h1 className="text-hero-title font-heading font-bold mb-6">
                        <span className="text-gradient">Sosyal Medya</span> Reklamları
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Facebook, Instagram ve LinkedIn\'de hedef kitlenize ulaşan etkili reklam kampanyaları
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
                            Platformlar
                        </h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Tüm önemli sosyal medya platformlarında reklam yönetimi
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Share2,
                                title: 'Facebook Ads',
                                description: 'Hedef kitle odaklı Facebook reklam kampanyaları'
                            },
                            {
                                icon: Image,
                                title: 'Instagram Ads',
                                description: 'Görsel odaklı Instagram reklamları ve hikaye reklamları'
                            },
                            {
                                icon: Users,
                                title: 'LinkedIn Ads',
                                description: 'B2B hedefleme ile LinkedIn reklam yönetimi'
                            },
                            {
                                icon: Target,
                                title: 'Hedef Kitle Analizi',
                                description: 'Detaylı hedef kitle araştırması ve segmentasyon'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Kampanya Optimizasyonu',
                                description: 'Sürekli A/B testleri ve performans iyileştirmeleri'
                            },
                            {
                                icon: BarChart3,
                                title: 'Dönüşüm Takibi',
                                description: 'Pixel kurulumu ve dönüşüm optimizasyonu'
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
                                    'Meta Business Partner sertifikalı uzmanlar',
                                    'Hedef kitle odaklı reklam stratejisi',
                                    'Görsel ve video içerik üretimi',
                                    'Dönüşüm odaklı kampanya yönetimi',
                                    'Detaylı raporlama ve analiz',
                                    'Çoklu platform yönetimi'
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
                            <h3 className="text-2xl font-bold mb-6">Kampanya Türleri</h3>
                            <div className="space-y-4">
                                {[
                                    'Marka Bilinirliği',
                                    'Traffic (Trafik)',
                                    'Engagement (Etkileşim)',
                                    'Lead Generation',
                                    'Conversions (Dönüşüm)',
                                    'Video Views',
                                    'App Installs'
                                ].map((type, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-accent-primary" size={20} />
                                        <span className="text-text-secondary">{type}</span>
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
                            Kampanya Sürecimiz
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                step: '01',
                                title: 'Hedef Kitle Analizi',
                                description: 'Hedef kitlenizi analiz ediyor, en uygun segmentasyonu belirliyoruz.'
                            },
                            {
                                step: '02',
                                title: 'İçerik ve Tasarım',
                                description: 'Etkili görseller ve videolar hazırlıyoruz.'
                            },
                            {
                                step: '03',
                                title: 'Kampanya Kurulumu',
                                description: 'Platformlarda kampanyalarınızı kuruyor, hedeflemeleri yapıyoruz.'
                            },
                            {
                                step: '04',
                                title: 'Yayına Alma',
                                description: 'Kampanyalarınızı yayına alıyor, ilk sonuçları takip ediyoruz.'
                            },
                            {
                                step: '05',
                                title: 'Optimizasyon',
                                description: 'Sürekli A/B testleri yapıyor, performansı iyileştiriyoruz.'
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
                            Sosyal Medyada Görünür Olun
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                            Hedef kitlenize ulaşan etkili sosyal medya reklamları için bizimle iletişime geçin.
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



