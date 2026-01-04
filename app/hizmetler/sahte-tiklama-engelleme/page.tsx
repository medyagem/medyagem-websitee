'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedContent from '@/components/RelatedContent'
import { motion } from 'framer-motion'
import { Shield, AlertTriangle, BarChart3, CheckCircle2, Bot, Lock } from 'lucide-react'
import Link from 'next/link'

export default function SahteTiklamaPage() {
    const relatedServices = [
        {
            title: 'Google Ads Yönetimi',
            description: 'Sahte tıklama koruması ile birlikte Google Ads kampanyalarınızı yönetiyoruz.',
            href: '/hizmetler/google-ads',
            category: 'Hizmet'
        },
        {
            title: 'Performans Analizi',
            description: 'Sahte tıklamaları filtreleyerek gerçek performans analizi yapıyoruz.',
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
                        <Shield className="text-accent-primary" size={48} />
                    </div>
                    <h1 className="text-hero-title font-heading font-bold mb-6">
                        <span className="text-gradient">Sahte Tıklama</span> Engelleme
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Yapay zeka destekli özel yazılımımızla reklam bütçenizi sahte tıklamalardan koruyoruz
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
                            Nasıl Koruyoruz?
                        </h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Gelişmiş algoritmalarımız ile sahte tıklamaları anında tespit ediyoruz
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: AlertTriangle,
                                title: 'Gerçek Zamanlı Tespit',
                                description: 'Şüpheli tıklamalar anında tespit edilir ve engellenir'
                            },
                            {
                                icon: Bot,
                                title: 'Bot Engelleme',
                                description: 'Bot trafiği ve otomatik tıklamalar filtrelenir'
                            },
                            {
                                icon: Lock,
                                title: 'IP ve Cihaz Engelleme',
                                description: 'Rakip tıklamaları ve şüpheli IP\'ler otomatik engellenir'
                            },
                            {
                                icon: BarChart3,
                                title: 'Detaylı Raporlama',
                                description: 'Engellenen tıklamalar ve tasarruf edilen bütçe raporu'
                            },
                            {
                                icon: Shield,
                                title: 'Yapay Zeka Desteği',
                                description: 'Makine öğrenmesi ile sürekli gelişen koruma sistemi'
                            },
                            {
                                icon: CheckCircle2,
                                title: 'Otomatik Filtreleme',
                                description: 'Manuel müdahale gerektirmeden otomatik koruma'
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
                                    'Ortalama %15-25 bütçe tasarrufu',
                                    'Gerçek zamanlı tespit ve engelleme',
                                    'Yapay zeka destekli gelişmiş algoritma',
                                    'Detaylı raporlama ve analiz',
                                    'Otomatik IP ve cihaz engelleme',
                                    '7/24 aktif koruma sistemi'
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
                            <h3 className="text-2xl font-bold mb-6">Tasarruf Örneği</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-text-muted mb-2">Aylık Reklam Bütçesi</div>
                                    <div className="text-3xl font-bold text-accent-primary mb-4">₺50,000</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-background-tertiary p-4 rounded-lg">
                                        <div className="text-2xl font-bold text-accent-primary mb-1">%20</div>
                                        <div className="text-xs text-text-muted">Sahte Tıklama Oranı</div>
                                    </div>
                                    <div className="bg-background-tertiary p-4 rounded-lg">
                                        <div className="text-2xl font-bold text-accent-primary mb-1">₺10,000</div>
                                        <div className="text-xs text-text-muted">Aylık Tasarruf</div>
                                    </div>
                                </div>
                                <p className="text-text-secondary text-sm">
                                    Ortalama bir işletme ayda <span className="font-semibold text-accent-primary">₺10,000</span> tasarruf edebilir.
                                </p>
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
                            Nasıl Çalışır?
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                step: '01',
                                title: 'Kurulum',
                                description: 'Sisteminizi Google Ads hesabınıza entegre ediyoruz.'
                            },
                            {
                                step: '02',
                                title: 'İlk Analiz',
                                description: 'Mevcut kampanyalarınızı analiz ediyor, sahte tıklama oranını tespit ediyoruz.'
                            },
                            {
                                step: '03',
                                title: 'Koruma Aktif',
                                description: 'Yapay zeka destekli sistem devreye girer, şüpheli tıklamaları engeller.'
                            },
                            {
                                step: '04',
                                title: 'Sürekli İzleme',
                                description: '7/24 aktif izleme ve otomatik engelleme devam eder.'
                            },
                            {
                                step: '05',
                                title: 'Raporlama',
                                description: 'Aylık detaylı raporlar ile tasarruf edilen bütçeyi gösteririz.'
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
                            Reklam Bütçenizi Koruyun
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                            Kampanyalarınızı ücretsiz analiz edelim ve sahte tıklama oranınızı gösterelim.
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



