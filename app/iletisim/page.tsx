'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
    return (
        <main className="relative">
            <ScrollProgress />
            <WhatsAppWidget />
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20">
                <div className="absolute inset-0 bg-hero-glow opacity-50" />

                <motion.div
                    className="container-custom relative z-10 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-hero-title font-heading font-bold mb-6">
                        <span className="text-gradient">İletişime Geçin</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Dijital pazarlama ihtiyaçlarınız için bizimle iletişime geçin.
                        Uzman ekibimiz size en uygun çözümü sunmak için hazır.
                    </p>
                </motion.div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-padding bg-background-secondary/30">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                icon: Mail,
                                title: 'E-posta',
                                content: 'info@medyagem.com',
                                link: 'mailto:info@medyagem.com'
                            },
                            {
                                icon: Phone,
                                title: 'Telefon',
                                content: '0538 629 5834',
                                link: 'tel:+905386295834'
                            },
                            {
                                icon: MapPin,
                                title: 'Adres',
                                content: 'İstanbul',
                                link: null
                            },
                            {
                                icon: Clock,
                                title: 'Çalışma Saatleri',
                                content: 'Pzt-Cum: 09:00-18:00',
                                link: null
                            }
                        ].map((item, index) => {
                            const Icon = item.icon
                            const content = item.link ? (
                                <a href={item.link} className="text-accent-primary hover:text-accent-primary-hover transition-colors">
                                    {item.content}
                                </a>
                            ) : (
                                <span className="text-text-secondary">{item.content}</span>
                            )

                            return (
                                <motion.div
                                    key={index}
                                    className="glass-card p-8 text-center hover:shadow-card-glow transition-all"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mx-auto mb-4">
                                        <Icon className="text-accent-primary" size={24} />
                                    </div>
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <div className="text-sm">{content}</div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Contact Form Section */}
                    <ContactForm />
                </div>
            </section>

            {/* Map Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        className="glass-card p-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">Ofisimiz</h2>
                        <div className="aspect-video bg-background-tertiary rounded-lg flex items-center justify-center">
                            <div className="text-center text-text-muted">
                                <MapPin size={48} className="mx-auto mb-4 opacity-50" />
                                <p>Harita entegrasyonu</p>
                                <p className="text-sm mt-2">İstanbul</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
