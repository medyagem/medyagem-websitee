'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { motion } from 'framer-motion'

export default function TermsPage() {
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
                        <span className="text-gradient">Kullanım Koşulları</span>
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
                            <h2 className="text-2xl font-bold mb-4">1. Hizmet Koşullarının Kabulü</h2>
                            <p className="text-text-secondary leading-relaxed">
                                MedyaGem web sitesini kullanarak veya hizmetlerimizden yararlanarak, bu kullanım koşullarını
                                kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız, lütfen sitemizi kullanmayın.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. Hizmet Tanımı</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                MedyaGem aşağıdaki dijital pazarlama hizmetlerini sunar:
                            </p>
                            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                <li>Google Ads kampanya yönetimi ve optimizasyonu</li>
                                <li>Web sitesi tasarımı ve geliştirme</li>
                                <li>Yapay zeka destekli sahte tıklama engelleme</li>
                                <li>SEO (Arama Motoru Optimizasyonu)</li>
                                <li>Sosyal medya reklam yönetimi</li>
                                <li>Dijital pazarlama danışmanlığı</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. Sözleşme ve Ödeme Koşulları</h2>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    <strong className="text-text-primary">3.1. Sözleşme Süresi:</strong> Standart hizmet sözleşmelerimiz
                                    6 ay süreli olup, aksi belirtilmedikçe otomatik olarak yenilenir.
                                </p>
                                <p>
                                    <strong className="text-text-primary">3.2. Ödeme:</strong> Hizmet bedelleri aylık olarak tahsil edilir.
                                    Ödemeler her ayın ilk 5 günü içinde yapılmalıdır. Gecikme durumunda %2 gecikme faizi uygulanır.
                                </p>
                                <p>
                                    <strong className="text-text-primary">3.3. İptal ve İade:</strong> İlk 30 gün içinde memnun kalmazsanız,
                                    yönetim ücretinizi iade ediyoruz. Reklam bütçeleri Google'a doğrudan ödendiği için iade kapsamı dışındadır.
                                </p>
                                <p>
                                    <strong className="text-text-primary">3.4. Fesih:</strong> Sözleşmeyi 30 gün önceden yazılı bildirimle
                                    feshedebilirsiniz. İlk 3 ay içinde fesih durumunda kurulum ücretleri tahsil edilir.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">4. Müşteri Sorumlulukları</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Hizmetlerimizden faydalanırken aşağıdaki yükümlülüklere sahipsiniz:
                            </p>
                            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                <li>Doğru ve güncel bilgiler sağlamak</li>
                                <li>Gerekli erişim izinlerini (Google Ads hesabı, web sitesi vb.) vermek</li>
                                <li>Önerilen değişiklikleri makul sürede değerlendirmek</li>
                                <li>Ödeme yükümlülüklerini zamanında yerine getirmek</li>
                                <li>Yasal düzenlemelere uygun içerik ve hizmet sunmak</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">5. MedyaGem'in Sorumlulukları</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Biz de size karşı aşağıdaki taahhütlerde bulunuyoruz:
                            </p>
                            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                                <li>Hizmetleri profesyonel standartlarda sunmak</li>
                                <li>Düzenli raporlama ve şeffaf iletişim</li>
                                <li>Kişisel verilerinizi korumak</li>
                                <li>Sektör en iyi uygulamalarını takip etmek</li>
                                <li>Makul sürede destek sağlamak</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">6. Sorumluluk Sınırlamaları</h2>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    <strong className="text-text-primary">6.1. Garanti Dışı Durumlar:</strong> Google Ads ve diğer
                                    platformların politika değişiklikleri, algoritma güncellemeleri ve pazar koşulları nedeniyle
                                    sonuçlar değişebilir. Belirli bir ROI veya dönüşüm garantisi vermiyoruz.
                                </p>
                                <p>
                                    <strong className="text-text-primary">6.2. Üçüncü Taraf Hizmetler:</strong> Google, Facebook gibi
                                    üçüncü taraf platformların kesinti veya değişikliklerinden sorumlu değiliz.
                                </p>
                                <p>
                                    <strong className="text-text-primary">6.3. Veri Kaybı:</strong> Düzenli yedekleme yapsak da,
                                    teknik arızalar nedeniyle veri kaybı riskini tamamen ortadan kaldıramayız.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">7. Fikri Mülkiyet Hakları</h2>
                            <p className="text-text-secondary leading-relaxed">
                                MedyaGem tarafından oluşturulan tüm içerik, tasarım, kod ve yazılımların fikri mülkiyet hakları
                                MedyaGem'e aittir. Müşteriye özel hazırlanan materyaller (web sitesi, reklam metinleri vb.)
                                ödeme tamamlandıktan sonra müşteriye devredilir.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">8. Gizlilik</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Her iki taraf da sözleşme süresince ve sonrasında öğrendiği ticari sırları ve gizli bilgileri
                                korumakla yükümlüdür. Detaylar için <a href="/gizlilik-politikasi" className="text-accent-primary hover:underline">Gizlilik Politikamızı</a> inceleyebilirsiniz.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">9. Uyuşmazlık Çözümü</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Bu sözleşmeden doğan uyuşmazlıklar öncelikle dostane görüşmelerle çözülmeye çalışılır.
                                Çözülemediği takdirde İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">10. Değişiklikler</h2>
                            <p className="text-text-secondary leading-relaxed">
                                MedyaGem bu kullanım koşullarını önceden haber vermeksizin değiştirme hakkını saklı tutar.
                                Önemli değişiklikler e-posta ile bildirilir. Değişikliklerden sonra hizmeti kullanmaya devam
                                etmeniz, yeni koşulları kabul ettiğiniz anlamına gelir.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">11. İletişim</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Kullanım koşulları hakkında sorularınız için:
                            </p>
                            <div className="mt-4 p-6 bg-background-tertiary rounded-lg">
                                <p className="text-text-secondary">
                                    <strong className="text-text-primary">E-posta:</strong> info@medyagem.com<br />
                                    <strong className="text-text-primary">Telefon:</strong> <a href="tel:+905386295834" className="hover:text-accent-primary transition-colors">0538 629 5834</a><br />
                                    <strong className="text-text-primary">Adres:</strong> İstanbul
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
