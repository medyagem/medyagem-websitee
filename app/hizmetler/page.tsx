'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { motion } from 'framer-motion'
import { Globe, Target, Shield, Search, BarChart, Share2 } from 'lucide-react'
import Link from 'next/link'

const services = [
    {
        icon: Target,
        title: 'Google Ads Yönetimi',
        description: 'ROI odaklı reklam kampanyaları ve sürekli optimizasyon ile işletmenize nitelikli müşteriler kazandırıyoruz.',
        features: ['Kampanya Kurulumu', 'Anahtar Kelime Araştırması', 'A/B Testing', 'Detaylı Raporlama'],
        link: '/hizmetler/google-ads'
    },
    {
        icon: Globe,
        title: 'Web Sitesi Kurulumu',
        description: 'SEO uyumlu, mobil öncelikli, hızlı yüklenen profesyonel web siteleri tasarlıyoruz.',
        features: ['Responsive Tasarım', 'SEO Optimizasyonu', 'Hız Optimizasyonu', '1 Yıl Hosting'],
        link: '/hizmetler/web-sitesi'
    },
    {
        icon: Shield,
        title: 'Sahte Tıklama Engelleme',
        description: 'Yapay zeka destekli özel yazılımımızla reklam bütçenizi sahte tıklamalardan koruyoruz.',
        features: ['Gerçek Zamanlı Tespit', 'Bot Engelleme', 'IP Filtreleme', 'Tasarruf Raporları'],
        link: '/hizmetler/sahte-tiklama-engelleme'
    },
    {
        icon: Search,
        title: 'SEO Optimizasyonu',
        description: 'Yerel ve organik SEO çalışmaları ile Google\'da üst sıralara çıkmanızı sağlıyoruz.',
        features: ['Anahtar Kelime Analizi', 'On-Page SEO', 'Teknik SEO', 'Link Building'],
        link: '/hizmetler/seo'
    },
    {
        icon: BarChart,
        title: 'Performans Analizi',
        description: 'Detaylı raporlama ve dönüşüm takibi ile kampanyalarınızın her anını izliyoruz.',
        features: ['Google Analytics', 'Dönüşüm Takibi', 'Aylık Raporlar', 'ROI Analizi'],
        link: '/hizmetler/performans-analizi'
    },
    {
        icon: Share2,
        title: 'Sosyal Medya Reklamları',
        description: 'Facebook, Instagram ve LinkedIn\'de hedef kitlenize ulaşan etkili reklam kampanyaları.',
        features: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Hedef Kitle Analizi'],
        link: '/hizmetler/sosyal-medya'
    },
]

export default function ServicesPage() {
    return (
        <main className="relative">
            <ScrollProgress />
            <WhatsAppWidget />
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20">
                <div className="absolute inset-0 bg-hero-glow opacity-50" />

                <motion.div
                    className="container-custom relative z-10 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-hero-title font-heading font-bold mb-6">
                        Dijital Pazarlama <span className="text-gradient">Hizmetlerimiz</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        İşletmenizin dijital dünyada başarılı olması için ihtiyaç duyduğu tüm hizmetler,
                        tek bir çatı altında. Türkiye'nin her yerinden online hizmet veriyoruz.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-background-secondary/30">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={service.title}
                                    className="glass-card p-8 hover:shadow-card-glow transition-all group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mb-6 group-hover:bg-accent-primary/30 transition-colors">
                                        <Icon className="text-accent-primary" size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-text-secondary mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-accent-primary font-semibold hover:gap-3 transition-all"
                                    >
                                        Detaylı Bilgi
                                        <span>→</span>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
                            Hangi Hizmete İhtiyacınız Var?
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                            Size en uygun paketi belirlemek ve ücretsiz analiz yapmak için bizimle iletişime geçin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/iletisim" className="btn-primary">
                                Ücretsiz Danışmanlık Al
                            </Link>
                            <Link
                                href="#pricing"
                                className="px-6 py-3 rounded-button border border-background-card-border hover:bg-background-card transition-all"
                            >
                                Paketleri İncele
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
