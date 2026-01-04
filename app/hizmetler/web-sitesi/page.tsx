'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedContent from '@/components/RelatedContent'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Zap, Search, Shield, CheckCircle2, Code, Palette } from 'lucide-react'
import Link from 'next/link'

export default function WebSitesiPage() {
    const relatedServices = [
        {
            title: 'SEO Optimizasyonu',
            description: 'Web sitenizin Google\'da üst sıralara çıkması için SEO hizmetlerimiz.',
            href: '/hizmetler/seo',
            category: 'Hizmet'
        },
        {
            title: 'Google Ads Yönetimi',
            description: 'Web sitenize trafik çekmek için Google Ads kampanyaları.',
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
                        <Globe className="text-accent-primary" size={48} />
                    </div>
                    <h1 className="text-hero-title font-heading font-bold mb-6">
                        <span className="text-gradient">Web Sitesi</span> Kurulumu
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        SEO uyumlu, mobil öncelikli, hızlı yüklenen profesyonel web siteleri tasarlıyoruz
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link href="/iletisim" className="btn-primary">
                            Ücretsiz Teklif Al
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
                            Web sitenizi baştan sona profesyonelce kuruyoruz
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Palette,
                                title: 'Tasarım ve Geliştirme',
                                description: 'Modern, kullanıcı dostu ve markanıza özel tasarım'
                            },
                            {
                                icon: Smartphone,
                                title: 'Responsive Tasarım',
                                description: 'Tüm cihazlarda mükemmel görünüm (mobil, tablet, desktop)'
                            },
                            {
                                icon: Search,
                                title: 'SEO Optimizasyonu',
                                description: 'Google\'da üst sıralara çıkmak için SEO uyumlu yapı'
                            },
                            {
                                icon: Zap,
                                title: 'Hız Optimizasyonu',
                                description: 'Hızlı yüklenen, performanslı web siteleri'
                            },
                            {
                                icon: Shield,
                                title: 'Güvenlik',
                                description: 'SSL sertifikası ve güvenlik önlemleri'
                            },
                            {
                                icon: Code,
                                title: 'Teknik Destek',
                                description: '1 yıl ücretsiz hosting ve teknik destek'
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
                                    'SEO uyumlu yapı ile Google\'da üst sıralara çıkın',
                                    'Mobil öncelikli tasarım ile tüm cihazlarda mükemmel görünüm',
                                    'Hızlı yükleme süreleri ile kullanıcı deneyimi',
                                    '1 yıl ücretsiz hosting ve teknik destek',
                                    'Kolay içerik yönetimi sistemi',
                                    'Güvenlik ve yedekleme çözümleri'
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
                            <h3 className="text-2xl font-bold mb-6">Paket Özellikleri</h3>
                            <div className="space-y-4">
                                {[
                                    'Responsive Tasarım',
                                    'SEO Optimizasyonu',
                                    '1 Yıl Hosting',
                                    'SSL Sertifikası',
                                    'İçerik Yönetim Sistemi',
                                    'Teknik Destek',
                                    'Yedekleme Sistemi',
                                    'Hız Optimizasyonu'
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-accent-primary" size={20} />
                                        <span className="text-text-secondary">{feature}</span>
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
                            Çalışma Sürecimiz
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                step: '01',
                                title: 'İhtiyaç Analizi',
                                description: 'İşletmenizi ve hedeflerinizi analiz ediyor, size özel çözüm öneriyoruz.'
                            },
                            {
                                step: '02',
                                title: 'Tasarım ve Planlama',
                                description: 'Markanıza uygun tasarım konsepti oluşturuyor ve onayınıza sunuyoruz.'
                            },
                            {
                                step: '03',
                                title: 'Geliştirme',
                                description: 'SEO uyumlu, hızlı ve güvenli web sitenizi geliştiriyoruz.'
                            },
                            {
                                step: '04',
                                title: 'Test ve Optimizasyon',
                                description: 'Tüm cihazlarda test ediyor, performans optimizasyonu yapıyoruz.'
                            },
                            {
                                step: '05',
                                title: 'Yayına Alma',
                                description: 'Web sitenizi yayına alıyor, hosting ve teknik desteği sağlıyoruz.'
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
                            Profesyonel Web Siteniz Hazır Olsun
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                            Size özel web sitesi çözümü için ücretsiz teklif alın.
                        </p>
                        <Link href="/iletisim" className="btn-primary inline-block">
                            Ücretsiz Teklif İste
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



