'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqCategories = [
    {
        category: 'Genel',
        questions: [
            {
                question: 'MedyaGem nedir ve ne tür hizmetler sunuyor?',
                answer: 'MedyaGem, küçük ve orta ölçekli işletmelere özel dijital pazarlama çözümleri sunan bir teknoloji şirketidir. Google Ads yönetimi, web sitesi kurulumu, yapay zeka destekli sahte tıklama engelleme, SEO optimizasyonu ve sosyal medya reklamları konularında hizmet veriyoruz.'
            },
            {
                question: 'Hangi sektörlere hizmet veriyorsunuz?',
                answer: 'Tesisat, elektrik, klima servisi, tadilat, inşaat gibi yerel hizmet sağlayıcılardan e-ticaret sitelerine kadar geniş bir yelpazede işletmelere hizmet veriyoruz. Her sektörün kendine özgü ihtiyaçlarına göre özelleştirilmiş çözümler sunuyoruz.'
            },
            {
                question: 'Diğer ajanslardan farkınız nedir?',
                answer: 'Kendi geliştirdiğimiz yapay zeka destekli sahte tıklama engelleme yazılımımız, şeffaf raporlama sistemimiz ve sonuç odaklı yaklaşımımız bizi farklı kılıyor. Sadece reklam yönetimi değil, teknoloji ortağınız oluyoruz.'
            }
        ]
    },
    {
        category: 'Google Ads',
        questions: [
            {
                question: 'Google Ads kampanyası kurmak ne kadar sürer?',
                answer: 'Temel bir Google Ads kampanyası 2-3 iş günü içinde kurulup yayına alınabilir. Ancak detaylı anahtar kelime araştırması ve optimizasyon süreci devam eder. İlk sonuçları genellikle 7-14 gün içinde görmeye başlarsınız.'
            },
            {
                question: 'Minimum reklam bütçesi ne kadar olmalı?',
                answer: 'Etkili sonuçlar için aylık minimum 5.000 TL reklam bütçesi öneriyoruz. Ancak sektörünüze ve hedeflerinize göre bu miktar değişebilir. Ücretsiz danışmanlık görüşmesinde size özel bir bütçe önerisi sunuyoruz.'
            },
            {
                question: 'Kampanya yönetim ücreti nasıl hesaplanır?',
                answer: 'Yönetim ücretimiz, reklam bütçenizin %15-20\'si arasında değişir. Paket seçiminize ve hizmet kapsamına göre özel fiyatlandırma yapıyoruz. Tüm ücretler şeffaf şekilde paylaşılır, gizli maliyet yoktur.'
            },
            {
                question: 'Sonuçları ne zaman görmeye başlarım?',
                answer: 'İlk tıklamalar ve ziyaretler kampanya yayına alındıktan hemen sonra başlar. Anlamlı dönüşüm verileri için 2-4 hafta beklemeniz gerekir. Sürekli optimizasyon ile 2-3 ay içinde maksimum verimlilik sağlanır.'
            }
        ]
    },
    {
        category: 'Sahte Tıklama Engelleme',
        questions: [
            {
                question: 'Sahte tıklama engelleme nasıl çalışır?',
                answer: 'Yapay zeka destekli yazılımımız, her tıklamayı gerçek zamanlı analiz eder. Bot trafiği, rakip tıklamaları ve şüpheli davranış kalıplarını tespit edip otomatik olarak engeller. Engellenen her tıklama için detaylı rapor alırsınız.'
            },
            {
                question: 'Ne kadar tasarruf sağlar?',
                answer: 'Ortalama olarak reklam bütçenizin %15-25\'ini sahte tıklamalardan koruyoruz. Örneğin, aylık 10.000 TL bütçeniz varsa, 1.500-2.500 TL tasarruf sağlayabilirsiniz. Rakamlar sektöre ve rekabet yoğunluğuna göre değişir.'
            },
            {
                question: 'Yazılımınız ClickCease gibi araçlardan farklı mı?',
                answer: 'Evet, kendi geliştirdiğimiz özel yazılımımız Türkiye pazarına özel optimize edilmiştir. Yerel IP aralıkları, davranış kalıpları ve sektörel özellikler dikkate alınarak daha hassas tespit yapar.'
            }
        ]
    },
    {
        category: 'Web Sitesi',
        questions: [
            {
                question: 'Web sitesi kurulumu ne kadar sürer?',
                answer: 'Standart bir kurumsal web sitesi 7-14 gün içinde tamamlanır. E-ticaret siteleri için 3-4 hafta süre öngörüyoruz. Acil projeler için hızlandırılmış teslimat seçeneği de mevcuttur.'
            },
            {
                question: 'Web sitesi SEO uyumlu mu olur?',
                answer: 'Evet, tüm web sitelerimiz Google SEO standartlarına uygun olarak geliştirilir. Hız optimizasyonu, mobil uyumluluk, yapılandırılmış veri (schema markup) ve teknik SEO standart olarak dahildir.'
            },
            {
                question: 'Hosting ve domain dahil mi?',
                answer: 'İlk yıl hosting hizmeti paketlerimize dahildir. Domain (alan adı) maliyeti ayrıca hesaplanır. İsterseniz mevcut hosting ve domain\'inizi kullanabilir, sadece web sitesi geliştirme hizmeti alabilirsiniz.'
            }
        ]
    },
    {
        category: 'Sözleşme ve Ödeme',
        questions: [
            {
                question: 'Sözleşme süresi ne kadar?',
                answer: 'Standart sözleşmelerimiz 6 ay süreli olup, otomatik yenilenir. Dilediğiniz zaman 30 gün önceden bildirimle sözleşmeyi sonlandırabilirsiniz. İlk 3 ay içinde sonlandırma durumunda kurulum ücretleri tahsil edilir.'
            },
            {
                question: 'Ödeme nasıl yapılır?',
                answer: 'Aylık ödemeler banka havalesi veya kredi kartı ile yapılabilir. Reklam bütçesi doğrudan Google\'a, yönetim ücreti ise MedyaGem\'e ödenir. Otomatik ödeme talimatı da verebilirsiniz.'
            },
            {
                question: 'Memnun kalmazsam ne olur?',
                answer: 'İlk 30 gün içinde memnun kalmazsanız, yönetim ücretinizi iade ediyoruz. Tek şartımız, önerilerimizi uygulamış ve yeterli süre vermiş olmanızdır. Müşteri memnuniyeti bizim için önceliktir.'
            }
        ]
    }
]

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<string[]>([])

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

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
                        Sıkça Sorulan <span className="text-gradient">Sorular</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        MedyaGem hizmetleri hakkında merak ettikleriniz
                    </p>
                </motion.div>
            </section>

            {/* FAQ Content */}
            <section className="section-padding bg-background-secondary/30">
                <div className="container-custom max-w-4xl">
                    {faqCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            className="mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 text-gradient">
                                {category.category}
                            </h2>

                            <div className="space-y-4">
                                {category.questions.map((item, index) => {
                                    const itemId = `${category.category}-${index}`
                                    const isOpen = openItems.includes(itemId)

                                    return (
                                        <div
                                            key={itemId}
                                            className="glass-card overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleItem(itemId)}
                                                className="w-full p-6 text-left flex items-center justify-between hover:bg-background-tertiary/50 transition-colors"
                                            >
                                                <span className="font-semibold pr-4">{item.question}</span>
                                                <ChevronDown
                                                    className={`flex-shrink-0 text-accent-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                        }`}
                                                    size={20}
                                                />
                                            </button>

                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: isOpen ? 'auto' : 0,
                                                    opacity: isOpen ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA */}
                    <motion.div
                        className="glass-card p-10 text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            Sorunuza cevap bulamadınız mı?
                        </h3>
                        <p className="text-text-secondary mb-6">
                            Uzman ekibimiz size yardımcı olmak için hazır
                        </p>
                        <a href="/iletisim" className="btn-primary inline-block">
                            İletişime Geçin
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
