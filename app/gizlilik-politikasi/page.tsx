'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
    return (
        <main className="relative">
            <ScrollProgress />
            <WhatsAppWidget />
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20">
                <div className="absolute inset-0 bg-hero-glow opacity-50" />

                <motion.div
                    className="container-custom relative z-10 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-hero-title font-heading font-bold mb-6">
                        <span className="text-gradient">Gizlilik Politikası</span>
                    </h1>
                    <p className="text-text-secondary">
                        Son güncelleme: 5 Aralık 2025
                    </p>
                </motion.div>
            </section>

            {/* Content */}
            <section className="section-padding bg-background-secondary/30">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        className="glass-card p-12 space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-4">1. Giriş</h2>
                            <p className="text-text-secondary leading-relaxed">
                                MedyaGem olarak, kişisel verilerinizin gizliliğine önem veriyoruz. Bu gizlilik politikası,
                                web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda kişisel bilgilerinizi
                                nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. Topladığımız Bilgiler</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Hizmetlerimizi sunabilmek için aşağıdaki bilgileri toplayabiliriz:
                            </p>
                            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                <li>Ad, soyad ve iletişim bilgileri (e-posta, telefon)</li>
                                <li>Şirket bilgileri ve sektör</li>
                                <li>Web sitesi kullanım verileri (IP adresi, tarayıcı bilgisi, ziyaret edilen sayfalar)</li>
                                <li>Çerez verileri</li>
                                <li>Google Ads kampanya verileri (müşterilerimiz için)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. Bilgilerin Kullanımı</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Topladığımız bilgileri şu amaçlarla kullanırız:
                            </p>
                            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                <li>Dijital pazarlama hizmetlerini sağlamak</li>
                                <li>Müşteri desteği sunmak</li>
                                <li>Hizmetlerimizi geliştirmek ve optimize etmek</li>
                                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                                <li>Size özel teklifler ve güncellemeler göndermek (izniniz dahilinde)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">4. Bilgi Güvenliği</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Kişisel verilerinizi yetkisiz erişim, değişiklik, ifşa veya imhaya karşı korumak için
                                endüstri standardı güvenlik önlemleri kullanıyoruz. Verileriniz şifreli bağlantılar
                                üzerinden iletilir ve güvenli sunucularda saklanır.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">5. Üçüncü Taraf Paylaşımı</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Kişisel bilgilerinizi üçüncü taraflarla satmıyoruz. Ancak hizmetlerimizi sunmak için
                                aşağıdaki durumlarda bilgi paylaşımı yapabiliriz:
                            </p>
                            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 mt-4">
                                <li>Google Ads ve diğer reklam platformları (kampanya yönetimi için)</li>
                                <li>Hosting ve altyapı sağlayıcıları</li>
                                <li>Analitik araçlar (Google Analytics vb.)</li>
                                <li>Yasal zorunluluklar gereği yetkili merciler</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">6. Çerezler (Cookies)</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için
                                çerezler kullanır. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya reddedebilirsiniz.
                                Ancak bu durumda bazı site özelliklerinin düzgün çalışmayabileceğini unutmayın.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">7. Haklarınız</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                                <li>Verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                                <li>Verilerin eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                                <li>Verilerin silinmesini veya yok edilmesini isteme</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">8. İletişim</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Gizlilik politikamız hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
                            </p>
                            <div className="mt-4 p-6 bg-background-tertiary rounded-lg">
                                <p className="text-text-secondary">
                                    <strong className="text-text-primary">E-posta:</strong> info@medyagem.com<br />
                                    <strong className="text-text-primary">Telefon:</strong> <a href="tel:+905386295834" className="hover:text-accent-primary transition-colors">0538 629 5834</a><br />
                                    <strong className="text-text-primary">Adres:</strong> İstanbul
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">9. Değişiklikler</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda
                                sizi bilgilendireceğiz. Politikayı düzenli olarak gözden geçirmenizi öneririz.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
