'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { motion } from 'framer-motion'
import { Target, Lightbulb } from 'lucide-react'

export default function AboutPage() {
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
                        Dijital Pazarlamada <span className="text-gradient">Yeni Nesil</span> Çözümler
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        MedyaGem olarak, işletmelerin dijital dünyada başarılı olması için
                        özel geliştirdiğimiz yapay zeka destekli çözümler sunuyoruz.
                    </p>
                </motion.div>
            </section>

            {/* Story Section */}
            <section className="section-padding bg-background-secondary/30">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        className="glass-card p-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-section-title font-heading font-bold mb-6">
                            Hikayemiz
                        </h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <p>
                                MedyaGem, dijital pazarlama dünyasında fark yaratmak amacıyla kuruldu.
                                Küçük ve orta ölçekli işletmelerin, büyük bütçeli şirketlerle rekabet edebilmesi
                                için teknoloji ve uzmanlığı bir araya getirdik.
                            </p>
                            <p>
                                Reklam bütçelerinin büyük bir kısmının sahte tıklamalar nedeniyle boşa gittiğini
                                gördük ve bu soruna çözüm bulmak için kendi yapay zeka destekli yazılımımızı geliştirdik.
                                Bugün, yüzlerce işletmenin reklam bütçesini koruyarak daha fazla müşteriye ulaşmasına
                                yardımcı oluyoruz.
                            </p>
                            <p>
                                Sadece bir ajans değil, işletmelerin dijital dönüşüm yolculuğunda güvenilir
                                bir teknoloji ortağıyız.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            className="glass-card p-10"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mb-6">
                                <Target className="text-accent-primary" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Küçük ve orta ölçekli işletmelerin dijital pazarlama gücünü demokratikleştirmek.
                                Yapay zeka ve otomasyon teknolojileriyle, her işletmenin bütçesine uygun,
                                etkili ve ölçülebilir dijital pazarlama çözümleri sunmak.
                            </p>
                        </motion.div>

                        <motion.div
                            className="glass-card p-10"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mb-6">
                                <Lightbulb className="text-accent-primary" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Türkiye'nin en yenilikçi dijital pazarlama teknoloji şirketi olmak.
                                Yapay zeka destekli çözümlerimizle, işletmelerin dijital dünyada
                                sürdürülebilir başarı elde etmesini sağlamak.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-background-secondary/30">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-section-title font-heading font-bold mb-4">
                            Değerlerimiz
                        </h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Çalışma prensiplerimizin temeli
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: '🎯',
                                title: 'Sonuç Odaklılık',
                                description: 'Her kampanyada ölçülebilir sonuçlar hedefliyoruz'
                            },
                            {
                                icon: '🔒',
                                title: 'Şeffaflık',
                                description: 'Tüm süreçlerde açık ve net iletişim'
                            },
                            {
                                icon: '💡',
                                title: 'İnovasyon',
                                description: 'Sürekli gelişen teknoloji ve yöntemler'
                            },
                            {
                                icon: '🤝',
                                title: 'Güvenilirlik',
                                description: 'Müşteri memnuniyeti ve uzun vadeli ortaklıklar'
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-8 text-center hover:shadow-card-glow transition-all"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-text-secondary text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        className="glass-card p-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-section-title font-heading font-bold mb-4">
                                Rakamlarla MedyaGem
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { number: '500+', label: 'Aktif Müşteri' },
                                { number: '%98', label: 'Müşteri Memnuniyeti' },
                                { number: '₺12M+', label: 'Yönetilen Bütçe' },
                                { number: '5+', label: 'Yıllık Deneyim' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                                    <div className="text-text-muted text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
