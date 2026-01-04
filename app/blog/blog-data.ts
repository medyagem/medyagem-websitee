import { Metadata } from 'next'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  featured: boolean
  metadata: Metadata
}

// Content'i ayrı yüklemek için helper function
export async function getBlogContent(slug: string): Promise<string> {
  try {
    const { readFileSync } = await import('fs')
    const { join } = await import('path')
    const contentPath = join(process.cwd(), 'generated-blogs', `${slug}.md`)
    return readFileSync(contentPath, 'utf-8')
  } catch (error) {
    console.error(`Blog content yüklenemedi: ${slug}`, error)
    return ''
  }
}

// SEO kurallarına göre oluşturulmuş blog yazıları
export const blogPosts: BlogPost[] = [
  // Google Ads Yazıları
  {
    slug: 'google-ads-nedir-baslangic-rehberi',
    title: 'Google Ads Nedir? Başlangıç Rehberi',
    excerpt: 'Google Ads nedir, nasıl çalışır? Başlangıç seviyesinden ileri seviyeye kadar Google Ads rehberi. Kampanya oluşturma, anahtar kelime seçimi ve optimizasyon ipuçları.',
    category: 'Google Ads',
    readTime: '10 dk',
    date: '20 Ocak 2025',
    image: '📊',
    featured: true,
    metadata: {
      title: 'Google Ads Nedir? Başlangıç Rehberi | MedyaGem',
      description: 'Google Ads nedir, nasıl çalışır? Başlangıç seviyesinden ileri seviyeye Google Ads rehberi. Kampanya oluşturma ve optimizasyon.',
      keywords: ['google ads', 'google ads nedir', 'ppc reklam', 'google ads başlangıç', 'reklam yönetimi', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/google-ads-nedir-baslangic-rehberi',
      },
    }\`\`
Dijital Pazarlama
├── SEO (Organik)
└── SEM (Ücretli)
    └── Google Ads
    └── Bing Ads
\`\`\`

Bu şemada da görüldüğü üzere, SEM'in altında Google Ads gibi ücretli reklam platformları yer alır. SEO ise, içeriğinizi ve teknik yapınızı optimize ederek arama motorlarında organik olarak daha üst sıralarda yer alma çabasıdır. Her iki yaklaşım da arama motoru kullanıcılarına ulaşmayı hedefler, ancak bunu farklı yollarla yaparlar. SEO uzun vadeli, sürdürülebilir sonuçlar sağlarken, SEM (özellikle ücretli reklamlar) anında görünürlük ve hızlı sonuçlar sunabilir. Etkili bir dijital pazarlama stratejisi genellikle hem SEO hem de SEM'i entegre bir şekilde kullanmayı gerektirir.

## Google Ads Temelleri

Google Ads, reklamverenlerin Google'ın geniş ağı üzerinde reklam yayınlamasına olanak tanıyan karmaşık ama güçlü bir platformdur. Bu platformu verimli kullanabilmek için temel hesap yapısını ve farklı kampanya türlerini anlamak kritik öneme sahiptir.

### Hesap Yapısı

Google Ads hesabınız, kampanyalarınızı düzenli ve yönetilebilir tutmak için belirli bir hiyerarşiye sahiptir. Bu hiyerarşiyi anlamak, bütçenizi etkili bir şekilde dağıtmanıza, hedeflemelerinizi hassaslaştırmanıza ve reklam performansınızı optimize etmenize yardımcı olur.

\`\`\`
Google Ads Hesabı
├── Kampanya 1 (Bütçe, hedefleme)
│   ├── Reklam Grubu 1 (Kelime grubu)
│   │   ├── Anahtar kelimeler
│   │   └── Reklamlar
│   └── Reklam Grubu 2
└── Kampanya 2
\`\`\`

Bu yapıyı detaylandıralım:

*   **Google Ads Hesabı:** En üst seviyedir ve tüm reklamcılık faaliyetlerinizi içerir. Faturalandırma bilgileri, kullanıcı erişimleri ve genel hesap ayarları burada bulunur.
*   **Kampanyalar:** Bir hesap içinde birden fazla kampanya oluşturabilirsiniz. Her kampanya, belirli bir pazarlama hedefine (örneğin, marka bilinirliği, satış artırma, potansiyel müşteri toplama) ve bütçeye sahiptir. Kampanya seviyesinde coğrafi hedefleme, dil ayarları, teklif stratejileri ve günlük bütçe belirlenir. Örneğin, "İstanbul Satış Kampanyası" veya "Yeni Ürün Tanıtım Kampanyası" gibi farklı kampanyalarınız olabilir.
*   **Reklam Grupları:** Her kampanya, bir veya daha fazla reklam grubundan oluşur. Reklam grupları, birbiriyle yakından ilgili anahtar kelimeleri ve bu anahtar kelimelerle alakalı reklam metinlerini bir araya getirir. Bu, reklamlarınızın arama yapan kişinin niyetiyle maksimum düzeyde eşleşmesini sağlar. Örneğin, bir "Su Kaçağı Tespiti" kampanyası içinde "Acil Su Kaçağı" ve "Bölgesel Su Kaçağı" gibi reklam grupları oluşturabilirsiniz.
*   **Anahtar Kelimeler:** Reklam grubu içindeki anahtar kelimeler, reklamlarınızın hangi aramalarda tetikleneceğini belirler. Kullanıcılar bu kelimeleri aradığında reklamlarınızın görünme potansiyeli oluşur. Her reklam grubundaki anahtar kelimeler, o reklam grubunun temasıyla yakından ilgili olmalıdır.
*   **Reklamlar:** Her reklam grubunda, anahtar kelimelerle ve açılış sayfasıyla uyumlu reklam metinleri (başlıklar ve açıklamalar) bulunur. Birden fazla reklam oluşturmak, Google'ın en iyi performansı gösteren reklamı otomatik olarak seçmesine olanak tanır.

Bu hiyerarşiyi doğru bir şekilde kurmak, reklamlarınızın alaka düzeyini artırır, kalite puanınızı iyileştirir ve reklam harcamalarınızdan en yüksek verimi almanızı sağlar.

### Kampanya Türleri

Google Ads, farklı pazarlama hedeflerine ve kullanıcı davranışlarına yönelik çeşitli kampanya türleri sunar. Doğru kampanya türünü seçmek, reklamlarınızın doğru kitleye, doğru zamanda ve doğru formatta ulaşmasını sağlar.

| Tür                       | Kullanım                                                 | Format                 |
| :------------------       | :---------------------------------------                 | :--------------------- |
| **Search (Arama)**        | Arama sonuçlarında görünürlük, potansiyel müşteri, satış | Metin                  |
| **Display (Görüntülü)**   | Marka bilinirliği, yeniden pazarlama, erişim             | Banner, metin, zengin medya |
| **Shopping (Alışveriş)**  | Ürün listeleme, e-ticaret satışları                      | Görsel+fiyat, ürün bilgisi |
| **Video**                 | Marka bilinirliği, ürün tanıtımı, erişim                 | Video                  |
| **Performance Max**       | Otomatik optimizasyon, tüm Google kanalları              | Karma (metin, görsel, video) |

Bu kampanya türlerini daha yakından inceleyelim:

*   **Search (Arama) Kampanyaları:** Google arama sonuç sayfalarında metin reklamlarınızı gösterir. Kullanıcılar belirli anahtar kelimeleri aradıklarında, alakalı reklamlarınız arama sonuçlarının üstünde veya altında görünür. Bu kampanya türü, belirli bir ihtiyacı olan ve aktif olarak çözüm arayan kullanıcılara ulaşmak için idealdir. Örneğin, "en iyi tesisatçı istanbul" arayan birine doğrudan hizmetinizi sunabilirsiniz.
*   **Display (Görüntülü) Kampanyaları:** Google Görüntülü Reklam Ağı'nda (GDN) yer alan milyonlarca web sitesinde, mobil uygulamada ve YouTube'da görsel veya metin reklamlarınızı gösterir. Bu kampanya türü, marka bilinirliği oluşturmak, geniş bir kitleye ulaşmak ve yeniden pazarlama (daha önce sitenizi ziyaret etmiş kullanıcılara tekrar ulaşmak) için etkilidir. Kullanıcıların ilgi alanlarına, demografik özelliklerine veya ziyaret ettikleri web sitelerinin içeriğine göre hedefleme yapabilirsiniz.
*   **Shopping (Alışveriş) Kampanyaları:** E-ticaret işletmeleri için özel olarak tasarlanmıştır. Ürünlerinizi doğrudan Google arama sonuçlarında, görselleri, fiyatları ve mağaza adlarıyla birlikte gösterir. Kullanıcılar bir ürün aradığında, ürününüzün görseli ve fiyatı ile birlikte doğrudan arama sonuçlarında belirir. Bu, ürün odaklı aramalar için yüksek dönüşüm oranları sağlayabilir.
*   **Video Kampanyaları:** YouTube ve Google Görüntülü Reklam Ağı'ndaki diğer video iş ortaklarında video reklamlarınızı yayınlar. Marka bilinirliği oluşturmak, ürün demoları göstermek veya hikaye anlatımı yoluyla izleyici kitlenizle bağlantı kurmak için güçlü bir araçtır. Reklamlarınız videoların öncesinde, sırasında veya sonrasında gösterilebilir.
*   **Performance Max Kampanyaları:** Google'ın en yeni ve en otomatikleşmiş kampanya türüdür. Tek bir kampanya ile tüm Google envanterine (Arama, Görüntülü, Keşfet, Gmail, Haritalar, YouTube) ulaşmanızı sağlar. Reklamverenlerin belirlediği hedeflere ulaşmak için makine öğreniminden faydalanarak otomatik olarak en iyi kanalları, reklamları ve teklifleri optimize eder. Özellikle e-ticaret ve potansiyel müşteri toplama hedefleri için güçlü bir seçenektir.

Her kampanya türünün kendi avantajları ve en iyi kullanım senaryoları vardır. Pazarlama hedeflerinize en uygun olanı seçmek, Google Ads başarınızın anahtarıdır.

## Arama Kampanyaları

Arama kampanyaları, Google Ads'in temelini oluşturur ve kullanıcıların aktif olarak bir ürün veya hizmet aradığı anlarda onlara ulaşmanın en doğrudan yoludur. Bu kampanyaların etkinliği, doğru anahtar kelime seçimi ve eşleme türlerinin stratejik kullanımıyla yakından ilişkilidir.

### Anahtar Kelime Eşleme Türleri

Anahtar kelime eşleme türleri, reklamlarınızın hangi arama sorgularına karşı tetikleneceğini belirleyen ayarlardır. Doğru eşleme türünü seçmek, reklamlarınızın alaka düzeyini artırır, gereksiz harcamaları önler ve yatırım getirinizi (ROI) iyileştirir.

| Tür       | Sembol   | Örnek             | Tetikler                                     | Açıklama                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
| **Broad (Geniş)** | kelime             | su tesisatçısı    | İlgili tüm aramalar                     | Geniş eşleme, anahtar kelimenizin eş anlamlılarını, tekil ve çoğul hallerini, kök kelimelerini, ilgili varyasyonlarını ve diğer alakalı aramaları tetikler. En geniş erişimi sağlar ancak en az kontrolü sunar.`\`\`
Google Ads Hesabı
├── Kampanya 1 (Bütçe, hedefleme)
│   ├── Reklam Grubu 1 (Kelime grubu)
│   │   ├── Anahtar kelimeler
│   │   └── Reklamlar
│   └── Reklam Grubu 2
└── Kampanya 2
\`\`\`

### Kampanya Türleri

| Tür | Kullanım | Format |
|-----|----------|--------|
| **Search** | Arama sonuçları | Metin reklamlar |
| **Display** | Web siteleri | Banner reklamlar |
| **Shopping** | Ürün listeleme | Görsel + fiyat |
| **Video** | YouTube | Video reklamlar |
| **Performance Max** | Otomatik | Karma format |

## Anahtar Kelime Eşleme Türleri

### 1. Geniş Eşleme (Broad Match)
- **Sembol**: kelime
- **Örnek**: su tesisatçısı
- **Tetikler**: İlgili tüm aramalar
- **Avantaj**: Yüksek trafik potansiyeli
- **Dezavantaj**: Düşük alaka düzeyi riski

### 2. İfade Eşleme (Phrase Match)
- **Sembol**: "kelime"
- **Örnek**: "su tesisatçısı"
- **Tetikler**: Sıralı kelime içeren aramalar
- **Avantaj**: Daha hedefli trafik
- **Dezavantaj**: Daha az trafik

### 3. Tam Eşleme (Exact Match)
- **Sembol**: [kelime]
- **Örnek**: [su tesisatçısı]
- **Tetikler**: Tam eşleşen aramalar
- **Avantaj**: En yüksek alaka düzeyi
- **Dezavantaj**: Çok düşük trafik

## İlk Kampanyanızı Oluşturma

### Adım 1: Hesap Oluşturma
1. [ads.google.com](https://ads.google.com) adresine gidin
2. Google hesabınızla giriş yapın
3. İşletme bilgilerinizi girin

### Adım 2: Kampanya Türü Seçimi
- **Yeni başlayanlar için**: Search (Arama) kampanyası önerilir
- **E-ticaret için**: Shopping kampanyası
- **Marka bilinirliği için**: Display kampanyası

### Adım 3: Anahtar Kelime Araştırması
- Google Keyword Planner kullanın
- Rakip analizi yapın
- Uzun kuyruk kelimelere odaklanın
- Negatif kelime listesi oluşturun

### Adım 4: Reklam Yazma
**Başlıklar (max 30 karakter):**
- Anahtar kelimeyi kullanın
- Benzersiz değer önerisi sunun
- CTA ekleyin

**Açıklamalar (max 90 karakter):**
- Sorunu çözün
- Farkınızı vurgulayın
- Aciliyet oluşturun

### Adım 5: Bütçe Belirleme
- **Günlük bütçe**: Aylık bütçe / 30.4
- **Başlangıç için**: Günde 100-200 TL önerilir
- **Test aşaması**: Düşük bütçe ile başlayın

## Google Ads Optimizasyon İpuçları

### 1. Kalite Puanını Artırın
Kalite puanı üç faktöre bağlıdır:
- **Beklenen CTR**: Reklamınızın tıklanma olasılığı
- **Reklam alaka düzeyi**: Anahtar kelime ile uyum
- **Açılış sayfası deneyimi**: Landing page kalitesi

### 2. Negatif Anahtar Kelimeler Kullanın
Gereksiz tıklamaları engellemek için:
- "ücretsiz", "bedava" gibi kelimeleri ekleyin
- Arama sorgu raporlarını inceleyin
- Düşük performanslı sorguları engelleyin

### 3. Reklam Uzantılarını Kullanın
- **Sitelink**: Alt sayfa linkleri
- **Callout**: Özellik vurgulama
- **Call**: Telefon numarası
- **Location**: Adres ve harita

### 4. Sahte Tıklamaları Engelleyin
Reklam bütçenizin **%60'a kadarını** sahte tıklamalar tüketebilir. MedyaGem'in yapay zeka destekli koruma sistemi ile bütçenizi koruyun.

## Yaygın Hatalar ve Çözümleri

### ❌ Hata 1: Çok Geniş Anahtar Kelimeler
**Sorun**: "su" gibi genel kelimeler
**Çözüm**: "İstanbul su tesisatçısı" gibi spesifik kelimeler

### ❌ Hata 2: Düşük Bütçe ile Çok Kelime
**Sorun**: Bütçe çok sayıda kelimeye dağılıyor
**Çözüm**: Odaklanın, az sayıda yüksek kaliteli kelime

### ❌ Hata 3: Landing Page Uyumsuzluğu
**Sorun**: Reklam ile sayfa içeriği uyumsuz
**Çözüm**: Reklam mesajı ile sayfa içeriğini eşleştirin

## Sonuç

Google Ads, doğru kullanıldığında güçlü bir müşteri kazanma aracıdır. Başarı için:

1. ✅ Doğru anahtar kelimeleri seçin
2. ✅ Kaliteli reklamlar yazın
3. ✅ Landing page'leri optimize edin
4. ✅ Düzenli analiz yapın
5. ✅ Sahte tıklamaları engelleyin

Profesyonel destek almak isterseniz, MedyaGem ekibi olarak size yardımcı olmaktan mutluluk duyarız.

---

**Ücretsiz Google Ads Analizi**: Mevcut kampanyalarınızı analiz edelim ve size özel optimizasyon önerileri sunalım. [İletişime geçin](/iletisim).
`
  },
  {
    slug: 'google-ads-maliyetleri-2025-butce',
    title: 'Google Ads Maliyetleri: 2025\'te Ne Kadar Bütçe Ayırmalısınız?',
    excerpt: 'Google Ads maliyetleri 2025 yılında ne kadar? Sektör bazlı bütçe önerileri, CPC analizi ve ROI hesaplama rehberi.',
    category: 'Google Ads',
    readTime: '8 dk',
    date: '18 Ocak 2025',
    image: '💰',
    featured: false,
    metadata: {
      title: 'Google Ads Maliyetleri 2025 | Bütçe Rehberi',
      description: 'Google Ads maliyetleri 2025 yılında ne kadar? Sektör bazlı bütçe önerileri, CPC analizi ve ROI hesaplama.',
      keywords: ['google ads maliyetleri', 'google ads fiyatları', 'ppc maliyet', 'reklam bütçesi', 'cpc analizi', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/google-ads-maliyetleri-2025-butce',
      },
    }\`\`
Dijital Pazarlama
├── SEO (Organik)
└── SEM (Ücretli)
    ├── Google Ads
    └── Bing Ads
\`\`\`

Yukarıdaki diyagramda da görüldüğü gibi, dijital pazarlama geniş bir alandır ve SEM bunun önemli bir parçasıdır. Google Ads ise SEM'in en dominant platformudur ve bu rehberin ana odağını oluşturmaktadır. İşletmeler, hedeflerine ve bütçelerine göre SEO ve SEM stratejilerini bir arada kullanarak maksimum verim elde etmeyi amaçlarlar. Özellikle yeni bir ürün veya hizmet lansmanında anında görünürlük sağlamak isteyenler için Google Ads vazgeçilmez bir araçtır.

## Google Ads Temelleri

Google Ads, dünya genelinde milyonlarca işletmenin kullandığı, Google tarafından sunulan bir çevrimiçi reklamcılık platformudur. Bu platform sayesinde reklamverenler, Google arama sonuçlarında, YouTube'da, Gmail'de, Google Haritalar'da ve binlerce iş ortağı web sitesinde reklamlarını yayınlayabilirler. İşletmenizin büyüklüğü ne olursa olsun, Google Ads doğru hedefleme ve bütçe yönetimiyle potansiyel müşterilere ulaşmanın en etkili yollarından biridir.

### Google Ads Nedir ve Neden Önemlidir?

Google Ads, reklamverenlerin belirli anahtar kelimeler için teklif vererek veya belirli demografik özelliklere sahip kullanıcılara reklam göstererek ürün ve hizmetlerini tanıtmalarını sağlar. Reklamlar genellikle tıklama başına ödeme (PPC - Pay-Per-Click) modeliyle çalışır, yani reklamverenler yalnızca reklamlarına tıklandığında ücret öderler. Bu, bütçenin daha verimli kullanılmasını sağlar.

Google Ads'in önemi, potansiyel müşterilere tam da ihtiyaç anında ulaşma yeteneğinden gelir. Bir kullanıcı Google'da "en iyi kahve makinesi" aradığında, kahve makinesi satan bir işletmenin reklamı tam da o anda kullanıcının karşısına çıkabilir. Bu, yüksek dönüşüm potansiyeli anlamına gelir. Ayrıca, detaylı raporlama ve hedefleme seçenekleri sayesinde reklam kampanyalarının performansı sürekli olarak takip edilebilir ve optimize edilebilir.

### Hesap Yapısı

Google Ads hesabının yapısı, kampanyalarınızı düzenli ve yönetilebilir tutmak için kritik öneme sahiptir. Doğru bir yapılandırma, bütçe kontrolü, hedefleme hassasiyeti ve reklam alaka düzeyinin artırılmasına yardımcı olur.

\`\`\`
Google Ads Hesabı
├── Kampanya 1 (Bütçe, hedefleme)
│   ├── Reklam Grubu 1 (Kelime grubu)
│   │   ├── Anahtar kelimeler
│   │   └── Reklamlar
│   └── Reklam Grubu 2
└── Kampanya 2
\`\`\`

*   **Google Ads Hesabı:** Tüm kampanyalarınızı, faturalandırma bilgilerinizi ve ayarlarınızı barındıran üst düzey yapıdır.
*   **Kampanyalar:** Her kampanya, belirli bir reklamcılık hedefine (örneğin, web sitesi trafiği, potansiyel müşteri edinme, satışlar) ve bir bütçeye sahiptir. Kampanya düzeyinde coğrafi hedefleme, dil ayarları, teklif stratejileri ve kampanya türü (Arama, Görüntülü vb.) belirlenir. Birden fazla ürün veya hizmetiniz varsa veya farklı bölgeleri hedefliyorsanız, birden fazla kampanya oluşturmak mantıklıdır.
*   **Reklam Grupları:** Her kampanya, bir veya daha fazla reklam grubuna ayrılır. Reklam grupları, birbiriyle yakından ilişkili anahtar kelimeler ve reklamlar içerir. Örneğin, bir ayakkabı mağazası kampanyasında "erkek spor ayakkabıları" ve "kadın spor ayakkabıları" için ayrı reklam grupları oluşturulabilir. Bu, reklamlarınızın aranan anahtar kelimelerle daha alakalı olmasını sağlar.
*   **Anahtar Kelimeler:** Reklam gruplarının içinde, reklamlarınızın hangi arama sorgularında gösterileceğini tetikleyen anahtar kelimeler bulunur.
*   **Reklamlar:** Her reklam grubunda, anahtar kelimelerle alakalı metinler, görseller veya videolar bulunur. Kullanıcılar bu reklamları gördüğünde tıklayarak web sitenize yönlendirilir.

Bu hiyerarşik yapı, reklam kampanyalarınızı mantıksal olarak düzenlemenize ve performanslarını daha etkili bir şekilde yönetmenize olanak tanır.

### Kampanya Türleri

Google Ads, farklı pazarlama hedeflerine ulaşmak için çeşitli kampanya türleri sunar. Doğru kampanya türünü seçmek, reklam bütçenizi en verimli şekilde kullanmanız ve istediğiniz sonuçlara ulaşmanız için kritik öneme sahiptir.

| Tür | Kullanım | Format |
|-----|----------|--------|
| Search (Arama) | Arama sonuçlarında metin reklamları | Metin |
| Display (Görüntülü) | Web siteleri ve uygulamalarda görsel reklamlar | Banner (Görsel), Metin, HTML5 |
| Shopping (Alışveriş) | Ürün listeleme reklamları (e-ticaret) | Görsel + Fiyat + Satıcı |
| Video | YouTube ve iş ortağı sitelerinde video reklamlar | Video |
| Performance Max | Tüm Google kanallarında otomatik, kapsamlı kampanya | Karma (Metin, Görsel, Video) |
| App (Uygulama) | Mobil uygulama indirmelerini artırmak | Metin, Görsel, Video |
| Local (Yerel) | Yerel işletmeler için mağaza ziyaretlerini artırmak | Harita, Arama, Görüntülü |

*   **Arama (Search) Kampanyaları:** Kullanıcıların Google'da belirli anahtar kelimeler aradığında gösterilen metin tabanlı reklamlardır. Hızlı dönüşüm elde etmek, belirli bir ürün veya hizmete yönelik talebi karşılamak için idealdir. Örneğin, "İstanbul su tesisatçısı" arayan birine doğrudan hizmet veren bir firmanın reklamını göstermek.
*   **Görüntülü (Display) Kampanyaları:** Google Görüntülü Reklam Ağı'nda (GDN) yer alan milyonlarca web sitesi, uygulama ve YouTube videolarında gösterilen görsel veya metin tabanlı reklamlardır. Marka bilinirliği oluşturmak, geniş kitlelere ulaşmak ve yeniden pazarlama (remarketing) yapmak için etkilidir.
*   **Alışveriş (Shopping) Kampanyaları:** E-ticaret işletmeleri için tasarlanmış bu kampanyalar, ürün görsellerini, fiyatlarını ve mağaza adlarını doğrudan Google arama sonuçlarında gösterir. Ürün satışlarını artırmak için çok güçlü bir araçtır.
*   **Video Kampanyaları:** YouTube ve Google Video İş Ortakları'nda yayınlanan video reklamlardır. Marka hikayesi anlatmak, ürün demoları göstermek ve geniş kitlelere video içeriğiyle ulaşmak için idealdir.
*   **Performance Max Kampanyaları:** Google'ın en yeni ve otomasyon odaklı kampanya türlerinden biridir. Tek bir kampanya ile tüm Google kanallarında (Arama, Görüntülü, Keşfet, Gmail, Haritalar, YouTube) reklamlarınızı yayınlamanıza olanak tanır. Belirli bir dönüşüm hedefi olan işletmeler için idealdir ve Google'ın makine öğrenimi algoritmaları sayesinde reklam bütçesini en verimli şekilde dağıtır.
*   **Uygulama (App) Kampanyaları:** Mobil uygulama indirmelerini artırmak ve uygulama içi etkileşimi teşvik etmek için tasarlanmıştır. Reklamlar Google Arama, Görüntülü Ağ, YouTube, Google Play ve diğer uygulama sitelerinde gösterilir.
*   **Yerel (Local) Kampanyalar:** Fiziksel mağazası olan işletmelerin mağaza ziyaretlerini artırmak amacıyla kullanılır. Google Haritalar, Arama, Görüntülü Ağ ve YouTube'da reklamlar gösterilir.

Doğru kampanya türü seçimi, bütçenizin 2025'te size en iyi getiriyi sağlaması için ilk ve en önemli adımlardan biridir.

## Arama Kampanyaları ve Anahtar Kelimeler

Google Ads maliyetlerinin en önemli belirleyicilerinden biri, arama kampanyalarınızda kullandığınız anahtar kelimeler ve bunların eşleme türleridir. Doğru anahtar kelimeleri seçmek ve bunları etkili bir şekilde yapılandırmak, reklamlarınızın alakalı kişilere ulaşmasını ve bütçenizin boşa gitmemesini sağlar.

### Anahtar Kelime Araştırması ve Seçimi

Anahtar kelime araştırması, başarılı bir Google Ads kampanyasının temelidir. Potansiyel müşterilerinizin ürün veya hizmetlerinizi ararken hangi kelime ve öbekleri kullandığını anlamak, reklamlarınızın doğru kitleye ulaşmasını sağlar.

*   **Amaç:** İşletmenizle ilgili en alakalı ve yüksek potansiyelli anahtar kelimeleri bulmak.
*   **Araçlar:** Google Keyword Planner, SEMrush, Ahrefs gibi araçlar anahtar kelime fikirleri, arama hacimleri ve rekabet seviyeleri hakkında değerli bilgiler sunar.
*   **Yaklaşım:**
    *   **Geniş Anahtar Kelimeler:** Geniş bir kitleye ulaşmak için genel terimler (örneğin "ayakkabı").
    *   **Uzun Kuyruklu Anahtar Kelimeler (Long-Tail Keywords):** Daha spesifik, genellikle 3 veya daha fazla kelimeden oluşan ifadeler (örneğin "erkek deri kışlık bot indirim"). Bunlar genellikle daha düşük rekabete ve daha yüksek dönüşüm oranlarına sahiptir.
    *   **Rakip Analizi:** Rakiplerinizin hangi anahtar kelimeleri hedeflediğini incelemek, size yeni fikirler verebilir.
    *   **Müşteri Dili:** Müşterilerinizin ürünlerinizi veya hizmetlerinizi kendi dilleriyle nasıl tanımladığını anlamak için müşteri yorumları, SSS ve sosyal medya gibi kaynaklardan yararlanın.

### Anahtar Kelime Eşleme Türleri

Anahtar kelime eşleme türleri, reklamlarınızın hangi arama sorgularında tetikleneceğini kontrol etmenizi sağlar. Doğru eşleme türünü kullanmak, bütçenizin gereksiz tıklamalara gitmesini engeller ve reklamlarınızın alaka düzeyini artırır.

| Tür | Sembol | Örnek | Tetikler | Açıklama |
|-----|--------|-------|----------|----------|
| **Geniş Eşleme (Broad Match)** | kelime | su tesisatçısı | ilgili tüm aramalar | Çok geniş bir kitleye ulaşır. Yazım hataları, eş anlamlılar, ilgili aramalar ve varyasyonları içerir. En az kontrolü sağlar, ancak en fazla gösterimi potansiyeline sahiptir. Yüksek bütçeli kampanyalar ve anahtar kelime keşfi için kullanılabilir. |
| **Sıralı Eşleme (Phrase Match)** | "kelime" | "su tesisatçısı" | sıralı kelime içeren | Tırnak içindeki anahtar kelime öbeğini içeren veya ona çok benzeyen aramaları tetikler. Kelime sırası önemlidir, ancak öbeğin öncesinde veya sonrasında başka kelimeler olabilir. Geniş eşlemeye göre daha fazla kontrol sağlar. |
| **Tam Eşleme (Exact Match)** | [kelime] | [su tesisatçısı] | tam eşleşme | Köşeli parantez içindeki anahtar kelime öbeğiyle tam olarak eşleşen veya çok yakın varyasyonlarını (tekil/çoğul, yazım hatası, eş anlamlılar) tetikler. En fazla kontrolü sağlar, en alakalı trafiği çeker ve genellikle en yüksek dönüşüm oranına sahiptir. |

**Örnek:** "su tesisatçısı" anahtar kelimesi için eşleme türlerinin tetikleyebileceği aramalar:

*   **Geniş Eşleme:** su kaçağı, tesisatçı arıyorum, acil tamir, banyo tadilatı, musluk değişimi
*   **Sıralı Eşleme:** acil su tesisatçısı, İstanbul su tesisatçısı, su tesisatçısı fiyatları
*   **Tam Eşleme:** su tesisatçısı, su tesisatçısı fiyat, tesisatçı su

### Örnek Anahtar Kelime Yapısı

Anahtar kelimelerinizi reklam grupları içinde mantıksal olarak düzenlemek, reklam alaka düzeyini artırmanın ve kalite puanını yükseltmenin anahtarıdır. Her reklam grubu, belirli bir tema etrafında toplanmış anahtar kelimeler ve bunlara özel reklam metinleri içermelidir.

\`\`\`
Kampanya: Su Kaçağı Tespiti İstanbul
├── Reklam Grubu: Genel Su Kaçağı Tespiti
│   ├── [su kaçağı tespiti]
│   ├── [su kaçağı tespiti istanbul]
│   └── "su kaçağı tespit"
│   └── su kaçağı bulma (Geniş eşleme, dikkatli kullanılmalı)
│
├── Reklam Grubu: Acil Su Kaçağı
│   ├── [acil su kaçağı]
│   ├── [7/24 su tesisatçısı]
│   └── "acil tesisatçı"
│   └── acil su kaçağı bulma (Sıralı eşleme)
│
└── Reklam Grubu: Bölgesel Su Kaçağı
    ├── [ataşehir su tesisatçısı]
    ├── [kadıköy su kaçağı]
    └── [pendik tesisatçı]
    └── "beşiktaş su kaçağı tespiti" (Sıralı eşleme)
\`\`\`

Bu yapılandırma, her reklam grubundaki anahtar kelimelerin birbirine çok yakın olmasını ve bu anahtar kelimeler için özel olarak hazırlanmış reklam metinlerinin gösterilmesini sağlar. Bu da kullanıcı deneyimini iyileştirir ve kalite puanınızı artırarak maliyetlerinizi düşürür.

### Negatif Anahtar Kelimeler: Bütçenizi Korumak

Negatif anahtar kelimeler, reklamlarınızın alakasız veya istenmeyen arama sorgularında gösterilmesini engelleyen kelime veya kelime öbekleridir. Bu, bütçenizin boşa harcanmasını önlemenin ve reklamlarınızın yalnızca doğru kitleye ulaşmasını sağlamanın en etkili yollarından biridir.

Örneğin, "satılık evler" reklamı veren bir emlakçı, "kiralık evler" aramasında reklamının görünmesini istemez. Bu durumda "kiralık" kelimesini negatif anahtar kelime olarak eklemelidir.

\`\`\`
Örnek negatif liste:
- ücretsiz
- bedava
- staj
- iş ilanı
- kurs
- eğitim
- nasıl yapılır (bilgilendirici niyet)
- forum
- pdf
- indir
- ikinci el
- ucuz (eğer premium bir hizmet sunuyorsanız)
\`\`\`

**Nasıl Bulunur ve Eklenir?**
1.  **Arama Terimleri Raporu:** Google Ads hesabınızda düzenli olarak "Arama Terimleri Raporu"nu inceleyin. Bu rapor, reklamlarınızın hangi arama sorgularında tetiklendiğini gösterir. Alakasız veya dönüşüm getirmeyen sorguları belirleyip negatif anahtar kelime olarak ekleyin.
2.  **Önceden Tahmin:** Kampanyalarınızı başlatmadan önce, ürün veya hizmetinizle ilgili olabilecek ancak hedef kitlenizin aramayacağı kelimeleri düşünün ve önceden bir negatif liste oluşturun.
3.  **Rekabet Analizi:** Rakiplerinizin sunduğu ürün veya hizmetlerden farklıysanız, rakiplerinizin markalarını negatif kelime olarak eklemeyi düşünebilirsiniz (eğer doğrudan rekabet sizin için maliyetli veya alakasızsa).

Negatif anahtar kelimeler, sürekli güncellenmesi gereken dinamik bir listedir. Düzenli optimizasyon, bütçenizin doğru yerlere harcanmasını garanti eder.

## Etkili Reklam Yazımı ve Uzantılar

Google Ads'te başarılı olmanın en önemli adımlarından biri, dikkat çekici ve ikna edici reklam metinleri yazmaktır. Reklamlarınız sadece doğru anahtar kelimelerle hedef kitlenize ulaşmakla kalmamalı, aynı zamanda onları tıklamaya ve dönüşüm yapmaya teşvik etmelidir.

### Responsive Search Ads (RSA) Oluşturma

Responsive Search Ads (Duyarlı Arama Ağı Reklamları - RSA), Google'ın sunduğu en esnek reklam formatlarından biridir. Bu format sayesinde, birden fazla başlık ve açıklama girerek Google'ın bunları farklı kombinasyonlarda test etmesini ve en iyi performans gösterenleri otomatik olarak kullanmasını sağlayabilirsiniz. Bu, reklamlarınızın arama sorgularıyla daha alakalı olmasını ve tıklama oranlarını (CTR) artırmasını sağlar.

\`\`\`
Başlıklar (max 30 karakter, 15 adet):
1. Su Kaçağı Tespiti İstanbul
2. 7/24 Acil Tesisat Servisi
3. Kameralı Kaçak Tespiti
4. 15 Yıllık Deneyim
5. Aynı Gün Müdahale
6. Güvenilir Tesisatçı Çağır
7. %100 Müşteri Memnuniyeti
8. Ücretsiz Keşif Fırsatı
9. Profesyonel Ekip İş Başında
10. İstanbul Geneli Hizmet
11. Hızlı ve Ekonomik Çözüm
12. Garantili İşçilikle
13. Son Teknoloji Ekipmanlar
14. Kırmadan Su Kaçağı Bulma
15. Hemen Randevu Alın!

Açıklamalar (max 90 karakter, 4 adet):
1. İstanbul'un her yerine 30 dakikada ulaşım. Ücretsiz keşif. Hemen arayın!
2. Profesyonel ekip, modern ekipman. Garantili hizmet. 0534 383 7758
3. Su kaçağı sorunlarınıza kesin çözüm. Hızlı, güvenilir ve uygun fiyatlı hizmet.
4. Kırmadan, dökmeden su kaçağı tespiti ile evinizi güvence altına alın.
\`\`\`

**RSA'nın Faydaları:**
*   **Otomatik Optimizasyon:** Google, en iyi performansı gösteren başlık ve açıklama kombinasyonlarını otomatik olarak belirler.
*   **Daha Fazla Alaka Düzeyi:** Reklamlarınızın, kullanıcının arama sorgusuyla daha alakalı olma olasılığı artar.
*   **Daha Geniş Kapsam:** Daha fazla kombinasyon sayesinde, daha fazla arama sorgusu için uygun reklamlar gösterebilirsiniz.
*   **Zaman Tasarrufu:** Tek tek reklam varyasyonları oluşturmak yerine, Google'ın sizin için test etmesine izin verirsiniz.

### Reklam Yazım İpuçları

Etkili bir reklam metni yazmak için bazı temel prensiplere uymak önemlidir:

\`\`\`
✓ Anahtar kelimeyi başlıkta kullan: Arama sorgusuyla doğrudan eşleşen başlıklar, kullanıcıların dikkatini çeker ve alaka düzeyini artırır.
✓ Benzersiz değer önerisi sun: Rakiplerinizden sizi ayıran nedir? Neden sizi seçmeliler? (örneğin, "Ücretsiz Kargo", "24 Saat Destek").
✓ CTA (Call to Action) ekle: Kullanıcıya ne yapması gerektiğini açıkça belirtin (örneğin, "Hemen Al", "Teklif Al", "Bizi Ara").
✓ Rakamlar kullan (15 yıl, 7/24): Somut veriler güvenilirlik ve aciliyet hissi yaratır.
✓ Aciliyet oluştur: Fırsatın veya hizmetin sınırlı olduğunu vurgulayın (örneğin, "Bugüne Özel İndirim").
✓ Güven unsurları ekle: Sertifikalar, ödüller, müşteri yorumları veya garanti gibi unsurlarla güven inşa edin.
✓ Mobil uyumlu reklamlar yaz: Mobil cihazlarda kısa ve öz metinler daha iyi performans gösterir.
✓ Duygusal tetikleyiciler kullan: Sorun çözme, rahatlama, mutluluk gibi duygulara hitap edin.
\`\`\`

Bu ipuçlarını uygulayarak, hem kullanıcıların dikkatini çekecek hem de Google'ın algoritmaları tarafından beğenilecek, yüksek performanslı reklamlar oluşturabilirsiniz.

### Reklam Uzantıları: Görünürlüğünüzü Artırın

Reklam uzantıları, reklamlarınızın altında ek bilgiler göstererek daha fazla yer kaplamasını, daha dikkat çekici olmasını ve kullanıcılara daha fazla değer sunmasını sağlar. Bu sayede tıklama oranları artar ve reklam maliyetleriniz düşebilir.

| Uzantı | Kullanım | Açıklama |
|--------|----------|----------|
| **Sitelink (Site Bağlantısı)** | Alt sayfa linkleri | Reklamınızın altında, web sitenizin belirli sayfalarına (örneğin "Hakkımızda", "Fiyatlar", "İletişim") doğrudan bağlantılar ekler. Kullanıcının aradığı bilgiye daha hızlı ulaşmasını sağlar. |
| **Callout (Ek Açıklama)** | Özellik vurgulama | İşletmenizin veya ürünlerinizin benzersiz özelliklerini, avantajlarını veya değer önerilerini kısa metinler halinde vurgular (örneğin, "Ücretsiz Kargo", "24/7 Destek", "15 Yıllık Deneyim"). Tıklanamaz. |
| **Call (Telefon)** | Telefon numarası | Reklamınızın yanında bir telefon numarası gösterir. Mobil cihazlarda kullanıcılar doğrudan reklamdan arama yapabilir. Telefonla dönüşüm almak isteyen işletmeler için idealdir. |
| **Location (Yer)** | Adres ve harita | Fiziksel konumunuzu, harita üzerinde göstermenizi sağlar. Mağaza ziyaretlerini artırmak isteyen yerel işletmeler için önemlidir. |
| **Price (Fiyat)** | Fiyat listesi | Ürün veya hizmetlerinizin fiyatlarını doğrudan reklamınızda gösterir. Kullanıcıların fiyat bilgisi almasını kolaylaştırır ve beklentiyi karşılar. |
| **Structured Snippet (Yapılandırılmış Snippet)** | Hizmet listesi | Belirli bir kategori altında (örneğin "Hizmet Türleri", "Destinasyonlar", "Modeller") ürün veya hizmetlerinizin bir listesini gösterir. |
| **Promotion (Promosyon)** | İndirim ve teklifler | Özel indirimleri, promosyonları veya teklifleri vurgular. Özellikle özel günler ve kampanya dönemleri için idealdir. |
| **Lead Form (Potansiyel Müşteri Formu)** | Doğrudan form | Kullanıcıların doğrudan Google arama sonuçlarından bir form doldurarak iletişim bilgilerini bırakmasını sağlar. |
| **Image (Görsel)** | Görsel ekleme | Arama ağı reklamlarınıza ilgili görseller ekleyerek daha dikkat çekici hale getirir. |

Reklam uzantıları, reklamınızın "kalite puanı"nı artırarak daha düşük maliyetlerle daha yüksek pozisyonlarda görünmenize yardımcı olabilir. Her bir uzantıyı stratejik olarak kullanarak reklamınızın değerini ve görünürlüğünü en üst düzeye çıkarın.

## Teklif Stratejileri ve Bütçe Yönetimi

Google Ads'te bütçenizi en verimli şekilde kullanmak ve belirlediğiniz hedeflere ulaşmak için doğru teklif stratejisini seçmek hayati önem taşır. Teklif stratejileri, reklamlarınızın ne kadar sıklıkta ve hangi maliyetle gösterileceğini belirler. 2025'te artan rekabet ve değişen pazar koşulları göz önüne alındığında, bu konuya özellikle dikkat etmek gerekmektedir.

### Teklif Stratejileri Nasıl Çalışır?

Teklif stratejileri, Google'a reklamlarınız için ne kadar ödeme yapmaya hazır olduğunuzu ve bu ödemenin hangi amaçla yapıldığını söyler. Google, bu bilgilere dayanarak reklamlarınızın açık artırmada nasıl performans göstereceğini belirler. Temel olarak iki ana teklif stratejisi türü vardır: manuel ve otomatik.

### Manuel Teklif

Manuel teklif stratejisi, reklamverenlere anahtar kelimeleri veya reklam grupları için teklifleri manuel olarak belirleme ve ayarlama imkanı sunar.

\`\`\`
Avantaj: Tam kontrol
Dezavantaj: Zaman alıcı
Kullanım: Küçük hesaplar, test aşaması, çok niş pazarlar, bütçe kısıtlamaları olanlar
\`\`\`

*   **Tam Kontrol:** Her anahtar kelime veya reklam grubu için maksimum tıklama başına maliyeti (CPC) kendiniz belirlersiniz.`\`\`
Günlük Bütçe = (Aylık Bütçe) / 30.4

Örnek:
Aylık bütçe: 10,000 TL
Günlük bütçe: 10,000 / 30.4 = ~329 TL
\`\`\`

## ROI Hesaplama

### Temel ROI Formülü
\`\`\`
ROI = (Gelir - Maliyet) / Maliyet × 100

Örnek:
Gelir: 50,000 TL
Maliyet: 10,000 TL
ROI = (50,000 - 10,000) / 10,000 × 100 = 400%
\`\`\`

### ROAS (Reklam Getirisi)
\`\`\`
ROAS = Gelir / Reklam Harcaması

Örnek:
Gelir: 50,000 TL
Harcama: 10,000 TL
ROAS = 50,000 / 10,000 = 5:1
\`\`\`

## Bütçe Optimizasyonu İpuçları

### 1. Test Aşaması
- İlk 1-2 ay düşük bütçe ile başlayın
- Performans verilerini toplayın
- Başarılı kampanyaları ölçeklendirin

### 2. Bütçe Dağılımı
\`\`\`
Toplam Bütçe: 10,000 TL/ay
├── Marka kampanyası: 1,000 TL (%10)
├── Ana hizmet: 5,000 TL (%50)
├── Bölgesel: 3,000 TL (%30)
└── Test: 1,000 TL (%10)
\`\`\`

### 3. Sahte Tıklama Koruması
Reklam bütçenizin **%60'a kadarını** sahte tıklamalar tüketebilir. MedyaGem'in koruma sistemi ile bütçenizi koruyun.

## Sektöre Özel Öneriler

### Yerel Hizmet İşletmeleri (Tesisat, Elektrik, vb.)
- **Önerilen bütçe**: 3.000-8.000 TL/ay
- **Odak**: Yerel anahtar kelimeler
- **Hedef**: Aynı gün dönüşümler

### E-ticaret Siteleri
- **Önerilen bütçe**: 10.000-50.000 TL/ay
- **Odak**: Ürün bazlı kampanyalar
- **Hedef**: Yüksek ROAS (3:1+)

### B2B Hizmetler
- **Önerilen bütçe**: 15.000-100.000 TL/ay
- **Odak**: Uzun kuyruk, düşük rekabetli kelimeler
- **Hedef**: Kaliteli lead'ler

## Bütçe Artırma Stratejisi

1. **Hafta 1-2**: Düşük bütçe ile test
2. **Hafta 3-4**: Başarılı kampanyaları %20 artır
3. **Ay 2**: Performansa göre ölçeklendir
4. **Ay 3+**: Sürekli optimizasyon

## Sonuç

Google Ads bütçesi, işletmenizin büyüklüğüne ve hedeflerine göre değişir. Önemli olan:

1. ✅ Gerçekçi bütçe belirlemek
2. ✅ Test aşamasında düşük başlamak
3. ✅ Performans verilerine göre ölçeklendirmek
4. ✅ Sahte tıklamaları engellemek
5. ✅ ROI'yi sürekli takip etmek

MedyaGem olarak, size en uygun bütçe stratejisini belirlemek için ücretsiz analiz sunuyoruz. [İletişime geçin](/iletisim).
`
  },
,
  {
    slug: 'google-ads-donusum-orani-artirma',
    title: 'Google Ads\'te Dönüşüm Oranı Nasıl Artırılır?',
    excerpt: 'SEO kurallarına göre hazırlanmış Google Ads konulu kapsamlı rehber. google ads'te dönüşüm oranı nasıl artırılır? hakkında detaylı bilgi.',
    category: 'Google Ads',
    readTime: '9 dk',
    date: '16 Ocak 2025',
    image: '📈',
    featured: false,
    metadata: {
      title: 'Google Ads\'te Dönüşüm Oranı Nasıl Artırılır? | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış Google Ads konulu kapsamlı rehber. google ads'te dönüşüm oranı nasıl artırılır? hakkında detaylı bilgi.',
      keywords: ['google ads donusum orani artirma', 'google ads', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/google-ads-donusum-orani-artirma',
      },
    }\`\`
Dijital Pazarlama
├── SEO (Organik)
└── SEM (Ücretli)
    └── Google Ads (Bu yazının ana konusu)
    └── Bing Ads
\`\`\`

Google Ads, markaların hedef kitlelerine tam da aradıkları anda ulaşmalarını sağlayarak, doğru stratejilerle uygulandığında yüksek dönüşüm potansiyeli sunar. Bu nedenle, Google Ads'te dönüşüm oranını artırmak, genel pazarlama başarınız için kritik öneme sahiptir.

## Google Ads Temelleri ve Dönüşüm İlişkisi

Google Ads kampanyalarınızın dönüşüm oranını artırmanın ilk adımı, platformun temel yapısını ve kampanya türlerini anlamaktır. Doğru bir hesap yapısı ve kampanya seçimi, optimizasyon çabalarınızın temelini oluşturur.

### Hesap Yapısı: Temelden Güçlü Bir Başlangıç

Etkili bir Google Ads hesabı, iyi organize edilmiş bir yapıyla başlar. Bu yapı, reklamlarınızın alaka düzeyini artırır ve dönüşüm oranınızı doğrudan etkiler.

\`\`\`
Google Ads Hesabı
├── Kampanya 1 (Bütçe, hedefleme)
│   ├── Reklam Grubu 1 (Kelime grubu)
│   │   ├── Anahtar kelimeler
│   │   └── Reklamlar
│   └── Reklam Grubu 2
└── Kampanya 2
\`\`\`

Her kampanya belirli bir bütçeye, coğrafi hedeflemeye ve teklif stratejisine sahiptir. Reklam grupları ise benzer anahtar kelimeleri ve bu anahtar kelimelerle alakalı reklam metinlerini bir araya getirerek reklam alaka düzeyini maksimize eder. Bu düzenli yapı, anahtar kelimelerinizle reklamlarınız arasında güçlü bir bağ kurarak dönüşüm potansiyelinizi artırır.

### Kampanya Türleri: Hedeflerinize Göre Doğru Seçim

Google Ads, farklı pazarlama hedeflerine ulaşmak için çeşitli kampanya türleri sunar. Dönüşüm oranını artırmak için doğru kampanya türünü seçmek hayati önem taşır.

| Tür | Kullanım | Format | Dönüşüm Oranı İlişkisi |
|-----|----------|--------|------------------------|
| Search | Arama sonuçları | Metin | Yüksek satın alma niyeti, doğrudan dönüşüm odaklı. |
| Display | Web siteleri | Banner | Marka bilinirliği artırır, yeniden pazarlama ile dönüşüme katkı sağlar. |
| Shopping | Ürün listeleme | Görsel+fiyat | Ürün odaklı e-ticaret siteleri için çok yüksek dönüşüm potansiyeli. |
| Video | YouTube | Video | Bilinirlik ve ilgi çekicilik, daha sonraki aşamalarda dönüşüme katkı. |
| Performance Max | Otomatik | Karma | Tüm Google kanallarında dönüşüm odaklı, yapay zeka ile optimize edilir. |

Dönüşüm oranını doğrudan artırmayı hedefliyorsanız, genellikle Search (Arama) ve Shopping (Alışveriş) kampanyaları en yüksek potansiyeli sunar. Performance Max ise gelişmiş otomasyonu ile tüm kanallarda dönüşüm hedeflerinize ulaşmanıza yardımcı olabilir.

## Dönüşüm Odaklı Anahtar Kelime Stratejileri

Dönüşüm oranını artırmanın temel taşlarından biri, doğru anahtar kelimeleri hedeflemektir. Yüksek niyetli anahtar kelimeler, ürün veya hizmetinizi aktif olarak arayan kullanıcıları size yönlendirir ve dönüşüm olasılığını artırır.

### Doğru Anahtar Kelime Seçimi: Niyet Önemlidir

Anahtar kelime araştırması yaparken, sadece popüler kelimelere odaklanmak yerine, kullanıcı niyetini anlamak çok daha önemlidir. "Bilgi edinme" amaçlı aramalar yerine "satın alma" veya "hizmet alma" niyetini gösteren kelimeleri hedefleyin.

*   **Yüksek Ticari Niyet:** "satın al", "fiyatları", "kiralık", "servis", "uzman", "en iyi", "hemen".
*   **Uzun Kuyruk Anahtar Kelimeler (Long-tail keywords):** Daha spesifik ve genellikle daha yüksek dönüşüm oranına sahip kelimelerdir. Örneğin, "İstanbul Kadıköy acil su kaçağı tespiti" gibi.

### Anahtar Kelime Eşleme Türleri: Trafiği Kontrol Edin

Anahtar kelime eşleme türleri, reklamlarınızın hangi aramalarda görüneceğini belirler ve bu da trafik kalitesini doğrudan etkiler. Doğru eşleme türü seçimi, bütçenizi verimli kullanmanızı ve dönüşüm oranınızı artırmanızı sağlar.

| Tür | Sembol | Örnek | Tetikler | Dönüşüm İlişkisi |
|-----|--------|-------|----------|------------------|
| Broad | kelime | su tesisatçısı | ilgili tüm aramalar (geniş, ancak düşük niyetli olabilecek aramaları da getirebilir) | Geniş kitleye ulaşır, ancak alakasız tıklamalarla dönüşüm düşebilir. |
| Phrase | "kelime" | "su tesisatçısı" | sıralı kelime içeren (belirli bir sırayla veya yakın varyasyonlarla) | Daha hedeflenmiş, orta düzeyde dönüşüm potansiyeli. |
| Exact | [kelime] | [su tesisatçısı] | tam eşleşme (çok spesifik, yüksek niyetli) | En hedeflenmiş trafik, genellikle en yüksek dönüşüm oranı. |

Dönüşüm oranını artırmak için genellikle "Phrase" ve "Exact" eşleme türlerine odaklanmak, bütçenizi yüksek niyetli kullanıcılara harcamanızı sağlar. "Broad" eşleme türünü ise dikkatli kullanmalı ve sürekli negatif anahtar kelime eklemeleriyle optimize etmelisiniz.

### Negatif Anahtar Kelimeler: Alakasız Trafiği Engelleyin

Negatif anahtar kelimeler, reklamlarınızın belirli aramalarda görünmesini engelleyerek alakasız tıklamaları ve dolayısıyla boşa harcanan bütçeyi önler. Bu, dönüşüm oranınızı doğrudan artıran kritik bir adımdır.

\`\`\`
Örnek negatif liste:
- ücretsiz (eğer hizmetiniz ücretliyse)
- bedava
- staj
- iş ilanı
- kurs
- eğitim
- nasıl yapılır (bilgilendirici niyet, eğer ürün/hizmet satıyorsanız)
- forum
- yorum (ürün/hizmet satışı yerine bilgi arayanlar için)
\`\`\`

Arama terimleri raporunu düzenli olarak inceleyerek, reklamlarınızın tetiklendiği alakasız kelimeleri belirlemeli ve bunları negatif listenize eklemelisiniz. Bu sürekli bir süreçtir.

### Örnek Anahtar Kelime Yapısı: Odaklanmış Reklam Grupları

Anahtar kelime yapınız ne kadar spesifik olursa, reklam metinleriniz o kadar alakalı olur ve bu da dönüşüm oranınızı artırır. Her reklam grubu, birbirine çok benzeyen anahtar kelimeleri içermelidir.

\`\`\`
Kampanya: Su Kaçağı Tespiti İstanbul
├── Reklam Grubu: Genel
│   ├── [su kaçağı tespiti]
│   ├── [su kaçağı tespiti istanbul]
│   └── "su kaçağı tespit"
│
├── Reklam Grubu: Acil
│   ├── [acil su kaçağı]
│   ├── [7/24 su tesisatçısı]
│   └── "acil tesisatçı"
│
└── Reklam Grubu: Bölgesel
    ├── [ataşehir su tesisatçısı]
    ├── [kadıköy su kaçağı]
    └── [pendik tesisatçı]
\`\`\`

Bu yapı, "Genel" aramalara genel bir reklamla, "Acil" aramalara aciliyeti vurgulayan bir reklamla ve "Bölgesel" aramalara ilgili bölgenin adını içeren bir reklamla yanıt vermenizi sağlar. Bu alaka düzeyi, kalite puanınızı artırır ve dönüşüm olasılığını yükseltir.

## Etkili Reklam Metni Yazımı

Reklam metinleriniz, potansiyel müşterilerinizin tıklamasını ve web sitenize gelmesini sağlayan ilk temas noktasıdır. Yüksek dönüşüm oranları için ilgi çekici, bilgilendirici ve harekete geçirici reklam metinleri yazmak şarttır.

### Responsive Search Ads (RSA): Yapay Zeka Destekli Optimizasyon

Responsive Search Ads (Duyarlı Arama Reklamları), Google'ın makine öğrenimi algoritmalarını kullanarak farklı başlık ve açıklama kombinasyonlarını test eder ve en iyi performansı gösterenleri otomatik olarak sunar. Bu, dönüşüm oranınızı artırmak için reklam alaka düzeyini ve tıklama oranını (CTR) iyileştirmenin etkili bir yoludur.

\`\`\`
Başlıklar (max 30 karakter, 15 adet):
1. Su Kaçağı Tespiti İstanbul (Anahtar kelime uyumu)
2. 7/24 Acil Tesisat Servisi (Aciliyet, değer önerisi)
3. Kameralı Kaçak Tespiti (Benzersiz özellik)
4. 15 Yıllık Deneyim (Güven, rakam)
5. Aynı Gün Müdahale (Hız, değer)
6. Garantili Hizmet (Güven)
7. Uygun Fiyatlar (Fiyat avantajı)
8. Profesyonel Ekip (Güven)
9. Ücretsiz Keşif (Değer, CTA)
10. İstanbul Geneli Hizmet (Hedefleme)
11. Hızlı ve Kesin Çözüm (Değer)
12. Tesisat Sorunlarına Son (Problem çözme)
13. Hemen Arayın! (CTA)
14. Uzman Tesisatçılar (Güven)
15. %100 Müşteri Memnuniyeti (Güven)

Açıklamalar (max 90 karakter, 4 adet):
1. İstanbul'un her yerine 30 dakikada ulaşım. Ücretsiz keşif. Hemen arayın! (Hız, değer, CTA)
2. Profesyonel ekip, modern ekipman. Garantili hizmet. 0534 383 7758 (Güven, özellik, telefon)
3. Kameralı sistemlerle kırmadan su kaçağı tespiti. Sorununuzu kökten çözelim. (Çözüm, özellik)
4. En uygun fiyatlarla kaliteli tesisat hizmeti. Memnuniyet garantisiyle arayın. (Fiyat, kalite, güven)
\`\`\`

Ne kadar çok ve çeşitli başlık/açıklama sağlarsanız, Google'ın en iyi kombinasyonları bulma şansı o kadar artar.

### Reklam Yazım İpuçları: Dönüşümü Teşvik Eden Unsurlar

Reklam metinlerinizi yazarken aşağıdaki ipuçlarını göz önünde bulundurarak potansiyel müşterilerinizi harekete geçirin:

\`\`\`
✓ Anahtar kelimeyi başlıkta kullan: Reklamlarınızın arama sorgusuyla alaka düzeyini artırır, kalite puanını yükseltir ve kullanıcının dikkatini çeker.
✓ Benzersiz değer önerisi sun: Rakiplerinizden sizi ayıran nedir? "Ücretsiz keşif", "aynı gün servis", "garantili hizmet" gibi avantajları vurgulayın.
✓ CTA (Call to Action) ekle: Kullanıcılara ne yapmaları gerektiğini açıkça söyleyin. "Hemen Ara", "Teklif Al", "Şimdi Satın Al", "Daha Fazla Bilgi Edinin" gibi ifadeler kullanın.
✓ Rakamlar kullan (15 yıl, 7/24): Somut veriler güvenilirlik sağlar ve dikkat çeker. "15 yıllık deneyim", "7/24 acil servis" gibi ifadelerle öne çıkın.
✓ Aciliyet oluştur: Bazı hizmetler veya ürünler için aciliyet yaratmak, kullanıcının karar verme sürecini hızlandırabilir. "Sınırlı Süreli Teklif", "Bugüne Özel Fırsat" gibi ifadeler kullanın.
✓ Güven unsurları ekle: Müşteri memnuniyeti garantisi, ödüller, sertifikalar veya "güvenilir" gibi kelimeler kullanarak markanızın itibarını pekiştirin.
\`\`\`

### Reklam Uzantıları: Reklamlarınıza Ek Değer Katın

Reklam uzantıları, reklam metninizi genişletir, daha fazla bilgi sunar ve tıklama oranınızı artırarak dönüşüm potansiyelinizi yükseltir.

| Uzantı | Kullanım | Dönüşüm İlişkisi |
|--------|----------|------------------|
| Sitelink | Alt sayfa linkleri | Kullanıcıyı doğrudan aradığı spesifik sayfaya yönlendirir, karar verme sürecini hızlandırır. |
| Callout | Özellik vurgulama | Ek avantajları veya özellikleri kısa ifadelerle vurgular, reklamı daha çekici hale getirir. |
| Call | Telefon numarası | Mobil kullanıcılarda doğrudan arama yapma imkanı sunar, özellikle acil servisler için kritiktir. |
| Location | Adres ve harita | Fiziksel bir mağazası olan işletmeler için yol tarifi sağlar, yerel dönüşümleri artırır. |
| Price | Fiyat listesi | Ürün veya hizmetlerinizin fiyatlarını doğrudan göstererek şeffaflık sağlar, doğru beklentilerle gelen kullanıcıların dönüşümünü kolaylaştırır. |
| Structured Snippet | Hizmet listesi | Belirli bir kategori altında hizmetlerinizi veya ürünlerinizi listeler, kullanıcının aradığı bilgiyi hızlıca bulmasını sağlar. |

Tüm ilgili uzantıları aktif olarak kullanmak, reklamlarınızın görünürlüğünü ve performansını önemli ölçüde artıracaktır.

## Yüksek Performanslı Açılış Sayfası (Landing Page) Optimizasyonu

Reklamlarınız potansiyel müşterileri sitenize getirse de, asıl dönüşüm açılış sayfasında gerçekleşir. Kötü optimize edilmiş bir açılış sayfası, en iyi reklam kampanyasını bile başarısız kılabilir. Dönüşüm oranı artışı için açılış sayfanızın mükemmel olması gerekir.

### Landing Page Kriterleri: Dönüşüm İçin Olmazsa Olmazlar

Açılış sayfanızın dönüşüm dostu olduğundan emin olmak için aşağıdaki kriterlere dikkat edin:

\`\`\`
□ Anahtar kelime uyumu: Reklamda kullanılan anahtar kelime veya teması, açılış sayfasının başlığında ve içeriğinde yer almalıdır. Bu, kullanıcı beklentisini karşılar ve alaka düzeyini artırır.
□ Net değer önerisi: Kullanıcı sayfaya geldiğinde, sunduğunuz ürün veya hizmetin ne olduğunu ve onlara ne fayda sağlayacağını hemen anlamalıdır.
□ Görünür CTA: Harekete geçirici mesajınız (Call to Action) kolayca görülebilir ve tıklanabilir olmalıdır. Sayfanın farklı yerlerinde stratejik olarak konumlandırılmalıdır.
□ Mobil uyumluluk: Günümüzde trafiğin büyük bir kısmı mobil cihazlardan gelmektedir. Sayfanızın tüm mobil cihazlarda sorunsuz çalışması ve iyi görünmesi şarttır.
□ Hızlı yükleme (< 3s): Kullanıcılar yavaş yüklenen sayfalardan sıkılır ve ayrılır. Sayfa hızını optimize etmek, dönüşüm oranını doğrudan etkiler.
□ Güven unsurları: Müşteri yorumları, referanslar, ödüller, sertifikalar, garanti bilgileri gibi güven artırıcı unsurlar dönüşümü teşvik eder.
□ Form kısa ve basit: Eğer bir form doldurulması gerekiyorsa, sadece gerekli bilgileri isteyin. Uzun ve karmaşık formlar kullanıcıları caydırır.
\`\`\`

### Landing Page Yapısı: Dönüşüme Giden Yol Haritası

İdeal bir açılış sayfası, kullanıcıyı adım adım dönüşüme yönlendiren mantıksal bir akışa sahip olmalıdır:

\`\`\`
┌─────────────────────────────────────┐
│ LOGO          TELEFON NUMARASI      │ (Marka kimliği ve acil iletişim)
├─────────────────────────────────────┤
│                                     │
│     BAŞLIK (Anahtar kelime)         │ (Alaka düzeyi, kullanıcıyı yakala)
│     Alt başlık (Değer önerisi)      │ (Fayda ve çözüm)
│                                     │
│     [ANA CTA BUTONU]                │ (En önemli eylem çağrısı, görünür ve cazip)
│                                     │
├─────────────────────────────────────┤
│ Özellik 1 │ Özellik 2 │ Özellik 3  │ (Hizmet/ürün avantajları, kolay anlaşılır)
├─────────────────────────────────────┤
│                                     │
│     Hizmet Detayları                │ (Ürünün/hizmetin derinlemesine açıklaması, faydaları)
│                                     │
├─────────────────────────────────────┤
│                                     │
│     Müşteri Yorumları               │ (Sosyal kanıt, güven inşa eder)
│                                     │
├─────────────────────────────────────┤
│                                     │
│     SSS                             │ (Potansiyel soruları yanıtlar, engelleri kaldırır)
│                                     │
├─────────────────────────────────────┤
│     [SON CTA]                       │ (Sayfanın sonunda tekrar harekete geçirici mesaj)
└─────────────────────────────────────┘
\`\`\`

Bu yapı, kullanıcının aklındaki soruları yanıtlar, güven oluşturur ve nihayetinde onları dönüşüm hedefine ulaştırır.

## Akıllı Teklif Stratejileri

Teklif stratejileri, reklamlarınızın ne kadar sıklıkla ve hangi maliyetle gösterileceğini belirler. Dönüşüm oranını artırmak için doğru teklif stratejisini seçmek, bütçenizi en verimli şekilde kullanmanızı sağlar.

### Manuel Teklif: Tam Kontrol, Yüksek Çaba

Manuel teklif stratejileri, her bir anahtar kelime veya reklam grubu için teklifleri manuel olarak belirlemenizi sağlar.

\`\`\`
Avantaj: Tam kontrol, bütçeyi çok spesifik alanlara odaklayabilirsiniz.
Dezavantaj: Zaman alıcı, sürekli izleme ve ayarlama gerektirir.
Kullanım: Küçük hesaplar, yeni kampanyaları test etme aşaması, çok niş pazarlar.
\`\`\`

### Otomatik Stratejiler: Yapay Zeka Destekli Optimizasyon

Google'ın otomatik teklif stratejileri, makine öğrenimini kullanarak dönüşüm hedeflerinize ulaşmak için teklifleri gerçek zamanlı olarak ayarlar. Dönüşüm oranını artırmak için genellikle otomatik stratejiler daha etkilidir.

| Strateji | Amaç | Ne Zaman Kullanılır? | Dönüşüm İlişkisi |
|----------|------|----------------------|------------------|
| Maximize Clicks | En çok tıklama | Trafik odaklı, marka bilinirliği veya yeni web sitesi için. | Dönüşümden ziyade trafik hacmine odaklanır. |
| Maximize Conversions | En çok dönüşüm | Belirlenen bütçe dahilinde en fazla dönüşümü elde etmek. | Doğrudan dönüşüm oranını artırmayı hedefler. |
| Target CPA | Hedef maliyet/dönüşüm | Belirli bir dönüşüm başına maliyet (CPA) hedefiniz varsa. | Dönüşüm maliyetini kontrol altında tutarak dönüşüm oranını optimize eder. |
| Target ROAS | Hedef getiri | E-ticaret siteleri için, reklam harcamanızın belirli bir getirisini (ROAS) hedefliyorsanız. | Reklam harcamasından elde edilen geliri maksimize ederek dönüşüm değerini artırır. |

Dönüşüm oranını artırmak için "Maximize Conversions", "Target CPA" ve e-ticaret için "Target ROAS" stratejileri en uygun seçeneklerdir. Bu stratejiler, Google'ın algoritmalarını kullanarak en yüksek dönüşüm potansiyeline sahip anlarda tekliflerinizi optimize eder.

## Doğru Dönüşüm Takibi Kurulumu

Dönüşüm takibi, Google Ads kampanyalarınızın başarısını ölçmek ve optimize etmek için vazgeçilmezdir. Doğru bir kurulum olmadan, hangi reklamların veya anahtar kelimelerin dönüşüm getirdiğini bilemez ve dönüşüm oranınızı artıramazsınız.

### Dönüşüm Türleri: Neyi Ölçtüğünüzü Bilin

İşletmenizin hedeflerine göre farklı dönüşüm türlerini takip edebilirsiniz:

\`\`\`
1. Form Gönderimi:
   - Contact form (İletişim formu)
   - Teklif formu (Fiyat teklifi alma)

2. Telefon Araması:
   - Website call (Web sitesinden yapılan aramalar)
   - Ad call extension (Reklam uzantısından yapılan aramalar)

3. WhatsApp Tıklaması:
   - Event tracking (WhatsApp ikonuna tıklama, mesaj gönderme)

4. Sayfa Görüntüleme:
   - Thank you page (Teşekkür sayfası ziyareti, bir işlemin tamamlandığını gösterir)
   - Fiyat sayfası (Fiyat sayfasının görüntülenmesi, yüksek niyet göstergesi olabilir)
\`\`\`

Her bir dönüşüm türünü doğru şekilde tanımlamak ve takip etmek, optimizasyon kararlarınız için sağlam bir veri tabanı oluşturur.

### Google Tag Manager (GTM) ile Kolay Kurulum

Google Tag Manager, web sitenize kod eklemeden dönüşüm etiketlerini yönetmenizi sağlayan güçlü bir araçtır. GTM kullanarak dönüşüm takibini hızlı ve hatasız bir şekilde kurabilirsiniz.

\`\`\`javascript
// Telefon tıklama takibi örneği (GTM üzerinden bir etiket ve tetikleyici ile entegre edilebilir)
document.querySelectorAll('a[href^="tel:"]').forEach(function(element) {
    element.addEventListener('click', function() {
        gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXX' // Kendi dönüşüm kimliğiniz
        });
    });
});
\`\`\`

Bu kod parçacığı, web sitenizdeki telefon numarası bağlantılarına yapılan tıklamaları bir Google Ads dönüşümü olarak kaydetmenizi sağlar. GTM ile bu tür olayları tetikleyiciler ve etiketler aracılığıyla kolayca yapılandırabilirsiniz.

## Kalite Puanı ve Dönüşüm Oranı İlişkisi

Kalite Puanı (Quality Score), Google'ın reklamlarınızın, anahtar kelimelerinizin ve açılış sayfanızın alaka düzeyini ve kalitesini 1'den 10'a kadar bir ölçekte değerlendirmesidir. Yüksek bir kalite puanı, daha düşük tıklama başına maliyet (CPC) ve daha iyi reklam sıralaması anlamına gelir. Bu da daha fazla ve daha nitelikli trafiği sitenize çekerek dönüşüm oranınızı artırır.

### Kalite Puanı Bileşenleri: Her Bir Parçanın Önemi

Kalite puanınız üç ana bileşenden oluşur:

\`\`\`
Kalite Puanı (1-10)
├── Beklenen CTR (Expected CTR): Reklamınızın belirli bir arama sorgusu için ne kadar tıklama alacağının tahmini.
├── Reklam Alaka Düzeyi (Ad Relevance): Reklam metninizin anahtar kelimenizle ne kadar alakalı olduğu.
└── Landing Page Deneyimi (Landing Page Experience): Açılış sayfanızın kullanıcıya ne kadar iyi bir deneyim sunduğu.
\`\`\`

Bu üç bileşenden herhangi birindeki düşüş, genel kalite puanınızı olumsuz etkiler ve dolayısıyla dönüşüm oranınız üzerinde dolaylı bir etki yaratır.

### Kalite Puanı İyileştirme: Dönüşüm İçin Kritik Adımlar

Kalite puanınızı iyileştirmek, dönüşüm oranınızı artırmanın en maliyet etkin yollarından biridir:

\`\`\`
CTR Artırma:
- Daha ilgi çekici başlıklar ve açıklamalar yazın.
- Güçlü harekete geçirici mesajlar (CTA) kullanın.
- Reklam uzantılarını aktif olarak kullanın.
- Alakasız aramaları engellemek için negatif anahtar kelimeler ekleyin.

Alaka Artırma:
- Anahtar kelimenizi reklam başlıklarında ve açıklamalarında kullanın.
- Reklam gruplarınızı daha dar ve spesifik hale getirin (örneğin, SKAG - Single Keyword Ad Group yaklaşımı).
- Reklam metinlerinizin anahtar kelimenizle doğrudan alakalı olduğundan emin olun.

Landing Page:
- Sayfa hızını artırın (mobil ve masaüstü için).
- Mobil`
  },
  {
    slug: 'seo-nedir-2025-guncel-rehberi',
    title: 'SEO Nedir? 2025 Güncel Rehberi',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. seo nedir? 2025 güncel rehberi hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '12 dk',
    date: '19 Ocak 2025',
    image: '🔍',
    featured: false,
    metadata: {
      title: 'SEO Nedir? 2025 Güncel Rehberi | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. seo nedir? 2025 güncel rehberi hakkında detaylı bilgi.',
      keywords: ['seo nedir 2025 guncel rehberi', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/seo-nedir-2025-guncel-rehberi',
      },
    }robots.txt\` dosyası ve XML sitemap'ler, botların sitenizi daha verimli bir şekilde taramasına yardımcı olan önemli araçlardır.

#### 2. Index (Dizinleme)

Taranan sayfalar, arama motorunun devasa veri tabanına eklenir ve burada işlenir. Bu aşamada:
*   İçerik analiz edilerek anahtar kelimeler, konular, görseller ve diğer medya öğeleri ile ilişkilendirilir.
*   Sayfanın konusu, kalitesi, otoritesi ve diğer yüzlerce sinyal değerlendirilir. Bu, arama motorunun bir sorguya yanıt verirken hangi sayfaları kullanacağını belirlemesine yardımcı olan kritik bir adımdır. Bir sayfanın dizine eklenmemesi, arama sonuçlarında asla görünemeyeceği anlamına gelir.

#### 3. Sıralama (Ranking)

Bir kullanıcı bir arama sorgusu yaptığında, arama motoru dizinindeki milyarlarca sayfa arasından en alakalı ve kaliteli sonuçları belirler. Bu süreçte:
*   Kullanıcı sorgusu ile en alakalı sonuçlar, algoritmalar tarafından belirlenir. Bu algoritmalar, kelime eşleşmesinden daha fazlasını dikkate alır; kullanıcı niyetini anlamaya çalışır.
*   Yüzlerce sıralama faktörü (yukarıda bahsedilen Q*, P*, T* sinyalleri gibi) kullanılarak sonuçlar sıralanır. En kaliteli, alakalı, güvenilir ve iyi bir kullanıcı deneyimi sunan içerikler üst sıralarda gösterilir. Bu aşama, SEO'nun nihai hedefidir: arama motoru sonuç sayfalarında (SERP) en görünür konuma ulaşmak.

## Google'ın 2025 Sıralama Sinyalleri

Google, algoritmalarını sürekli olarak güncellese de, temel amacı her zaman kullanıcılara en iyi ve en alakalı sonuçları sunmaktır. 2025 itibarıyla, Google'ın sıralama sinyalleri daha da sofistike hale gelmiş ve özellikle Q*, P* ve T* modelleri etrafında şekillenmiştir. Bu modellere, içeriğin güncelliğini vurgulayan Freshness sinyali de eşlik etmektedir.

### Q* (Quality Signal)

Q* (Kalite Sinyali), bir sitenin genel güvenilirliğini, uzmanlığını ve otoritesini değerlendiren bir çerçevedir. Bu sinyal, Google'ın uzun yıllardır üzerinde durduğu E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness – Deneyim, Uzmanlık, Otorite, Güvenilirlik) prensipleriyle doğrudan bağlantılıdır ve 2025'te önemi artarak devam etmektedir.

**Etkileyen faktörler:**
*   **Site otoritesi (siteAuthority):** Alan adının yaşı, aldığı backlinklerin kalitesi, marka bilinirliği ve genel itibarı gibi faktörlerle belirlenir. Güçlü bir site otoritesi, içeriğinizin güvenilirliğini artırır.
*   **İçerik kalitesi (contentEffort):** İçeriğin derinliği, kapsamlılığı, doğruluğu, özgünlüğü ve kullanıcıya sağladığı gerçek değer bu faktörün temelini oluşturur. Yüzeysel veya kopyalanmış içerikler yerine, araştırılmış ve uzmanlık içeren içerikler tercih edilir.
*   **Güvenilirlik sinyalleri:** SSL sertifikası, net iletişim bilgileri, gizlilik politikası, yazar biyografileri ve sitenin genel güvenlik duruşu gibi unsurlar güvenilirlik açısından kritik öneme sahiptir.
*   **YMYL (Your Money Your Life) uyumu:** Finans, sağlık, hukuk gibi hassas konularda bilgi veren siteler için uzmanlık, doğruluk ve güvenilirlik daha da büyük bir titizlikle değerlendirilir. Yanlış veya yanıltıcı bilgiler ciddi cezalara yol açabilir.

### P* (Popularity Signal)

P* (Popülerlik Sinyali), kullanıcı etkileşimlerini ve davranışsal verileri analiz ederek bir içeriğin veya sitenin ne kadar popüler ve kullanışlı olduğunu ölçer. Bu sinyal, kullanıcıların arama sonuçlarıyla ve sitenizle nasıl etkileşim kurduğunu anlamaya odaklanır.

**Ölçülen metrikler:**
*   **Tıklama oranları (CTR):** Arama sonuçlarında sayfanızın ne sıklıkla tıklandığı, başlık ve meta açıklamanızın çekiciliğini gösterir. Yüksek CTR, sayfanızın arama niyetiyle uyumlu olduğuna dair güçlü bir sinyaldir.
*   **Dwell time (sayfada kalma süresi):** Kullanıcının sayfanıza tıkladıktan sonra ne kadar süre kaldığı, içeriğinizin ne kadar ilgi çekici ve faydalı olduğunu gösterir. Uzun dwell time, olumlu bir sinyaldir.
*   **Bounce rate (hemen çıkma oranı):** Kullanıcının sitenize girdikten sonra tek bir sayfayı görüntüleyip hemen çıkması. Düşük hemen çıkma oranı, kullanıcıların sitenizde daha fazla etkileşimde bulunduğunu gösterir.
*   **Scroll derinliği:** Kullanıcıların sayfanızın ne kadarını aşağı kaydırdığı, içeriğinizin tamamını okuyup okumadıklarına dair bir fikir verir.
*   **Chrome tarayıcı verileri:** Google, Chrome kullanıcılarının anonimleştirilmiş gezinme verilerini (Core Web Vitals gibi) kullanarak sayfa deneyimi hakkında değerli bilgiler toplar.

### T* (Topicality Signal)

T* (Konusal Alaka Düzeyi Sinyali), içeriğin bir arama sorgusuyla ne kadar alakalı olduğunu ve belirli bir konuda ne kadar kapsamlı bilgi sunduğunu değerlendirir. Bu sinyal, içeriğin sadece anahtar kelime içermesi değil, aynı zamanda o konunun tüm yönlerini ele alması gerektiğini vurgular.

**Değerlendirme kriterleri:**
*   **Anahtar kelime uyumu:** İçeriğin ana anahtar kelimeleri ve ilgili uzun kuyruklu anahtar kelimeleri doğal bir şekilde içermesi. Anahtar kelime doldurmadan kaçınılmalıdır.
*   **Başlık etiketleri optimizasyonu:** H1, H2, H3 gibi başlıkların, içeriğin yapısını ve ana konularını net bir şekilde yansıtması ve anahtar kelimeleri içermesi.
*   **İçerik yapısı ve hiyerarşisi:** İçeriğin mantıksal bir akışa sahip olması, konuların alt başlıklarla düzenlenmesi ve okuyucunun bilgiyi kolayca sindirebilmesi.
*   **Konusal otorite (siteFocusScore):** Bir sitenin belirli bir konu alanında ne kadar derinlemesine ve tutarlı içerik ürettiği. Belirli bir niş içinde otorite oluşturmak, T* sinyalinizi güçlendirir.

### Freshness (Tazelik)

Freshness (Tazelik), içeriğin güncelliğini değerlendiren bir sinyaldir. Bazı arama sorgularında, en yeni ve güncel bilginin sunulması kritik öneme sahiptir. Google, bu tür sorgularda daha yeni yayınlanmış veya güncellenmiş içeriklere öncelik verir.

**Önemli olduğu durumlar:**
*   **Haber aramaları:** Güncel olaylar, son dakika haberleri.
*   **Trend konular:** Popüler kültür, yeni teknolojiler, mevsimsel aramalar.
*   **Yerel hizmet aramaları:** Açılış saatleri, güncel kampanyalar, etkinlikler.
*   **Teknoloji ve güncel olaylar:** Yazılım güncellemeleri, yeni çıkan ürünler, algoritmaların değişimi gibi sürekli güncellenen alanlar.

İçeriğinizi düzenli olarak gözden geçirmek, güncellemek ve eski bilgileri yenileriyle değiştirmek, Freshness sinyalini olumlu yönde etkiler.

### 2025'te Q*, P*, T* ve Freshness Nasıl Birleşiyor?

2025'te bu dört sinyal, Google'ın algoritmalarında ayrılmaz bir bütün olarak çalışmaktadır. Örneğin:
*   Yüksek **Q*** (güvenilir) bir siteden gelen **T*** (konuyla alakalı) bir içerik, yüksek **P*** (kullanıcı etkileşimi) oranlarına sahipse ve **Freshness** gerektiren bir konuda güncelse, arama motorlarında zirveye çıkma şansı çok daha yüksektir.
*   Bir içerik ne kadar alakalı olursa olsun (yüksek T*), eğer güvenilir bir kaynaktan gelmiyorsa (düşük Q*) veya kullanıcılar tarafından beğenilmiyorsa (düşük P*), iyi sıralamalar elde etmesi zordur.
*   Benzer şekilde, eski ve güncelliğini yitirmiş bir içerik (düşük Freshness), diğer sinyaller ne kadar iyi olursa olsun, belirli sorgularda geride kalabilir.

Bu bütüncül yaklaşım, SEO uzmanlarının sadece anahtar kelimelere odaklanmak yerine, kullanıcıya en iyi değeri sunan, teknik olarak sağlam ve sürekli güncellenen web siteleri inşa etmelerini gerektirir.

## SEO'nun Üç Ana Dalı

SEO, karmaşık bir disiplin olmasına rağmen, temel olarak üç ana dala ayrılabilir. Bu dallar, bir web sitesinin arama motorlarında başarılı olması için birlikte çalışır.

### 1. Site İçi SEO (On-Page SEO)

Site İçi SEO, web sitenizin kendi içinde, yani doğrudan kontrol edebileceğiniz unsurlar üzerinde yapılan optimizasyon çalışmalarını ifade eder. Amacı, arama motorlarına ve kullanıcılara içeriğinizin ne hakkında olduğunu ve ne kadar değerli olduğunu açıkça belirtmektir.

**Sitenin içindeki optimize edilebilir unsurlar:**
*   **Başlık etiketleri (Title Tags):** Her sayfanın tarayıcı sekmesinde görünen ve arama sonuçlarında tıklanabilir başlık olarak yer alan etiketidir. Anahtar kelimeleri içermeli ve 55-60 karakter arasında olmalıdır.
*   **Meta açıklamalar (Meta Descriptions):** Arama sonuçlarında başlığın altında görünen kısa özet metinlerdir. Doğrudan bir sıralama faktörü olmasa da, CTR üzerinde büyük etkisi vardır ve 150-160 karakter arasında olmalıdır.
*   **URL yapısı:** Kısa, açıklayıcı ve anahtar kelime içeren URL'ler tercih edilmelidir. \`www.siteadi.com/seo-nedir-2025-rehberi\` gibi.
*   **İçerik kalitesi ve optimizasyonu:** Kapsamlı, özgün, değerli ve kullanıcı niyetini karşılayan içerikler üretmek esastır. Anahtar kelimelerin doğal bir şekilde entegre edilmesi önemlidir.
*   **Başlık hiyerarşisi (H1-H6):** İçeriğinizi H1 (ana başlık), H2 (alt başlık), H3 (daha alt başlık) gibi etiketlerle yapılandırmak, hem okuyucular hem de arama motorları için içeriği daha anlaşılır hale getirir.
*   **Görsel optimizasyonu:** Görsellerin boyutunu optimize etmek, \`alt\` etiketleri kullanarak görselleri açıklamak ve anahtar kelimelerle ilişkilendirmek, hem site hızını artırır hem de görsel aramalarda görünürlüğü sağlar.
*   **İç bağlantı yapısı (Internal Linking):** Sitenizin farklı sayfaları arasında anlamlı bağlantılar kurmak, hem kullanıcıların sitede daha fazla gezinmesine yardımcı olur hem de sayfa otoritesinin siteniz içinde dağılmasını sağlar.
*   **Anahtar kelime araştırması:** Hedef kitlenizin ne aradığını anlamak ve bu kelimeleri içeriğinizde stratejik olarak kullanmak.

#### Başlık ve Meta Açıklama Optimizasyonu
Başlık etiketi (Title Tag), arama motorlarının bir sayfanın ne hakkında olduğunu anlaması için en önemli sinyallerden biridir. Anahtar kelimenizi başlığın başına yakın konumlandırmak ve çekici bir dil kullanmak, tıklama oranınızı (CTR) artırabilir. Meta açıklama ise, arama sonuçlarında kullanıcıların sayfanızı tıklayıp tıklamaması konusunda ikna edici bir rol oynar. Doğrudan bir sıralama faktörü olmasa da, yüksek CTR dolaylı olarak sıralamaları etkiler.

*Pratik Örnek:*
*   **Kötü Title:** \`Ana Sayfa\`
*   **İyi Title:** \`SEO Nedir? 2025 Güncel Rehberi | Arama Motoru Optimizasyonu Uzmanınız\`
*   **Kötü Meta:** \`Web siteme hoş geldiniz.\`
*   **İyi Meta:** \`2025'in en kapsamlı SEO rehberiyle arama motoru optimizasyonunun sırlarını keşfedin. Güncel Google sinyalleri, teknikler ve başarı formülleri burada!\`

#### İçerik Kalitesi ve Anahtar Kelime Stratejisi
İçerik, SEO'nun kalbidir. Kullanıcıların sorularına eksiksiz yanıt veren, derinlemesine bilgi sunan, özgün ve okunabilir içerikler her zaman ödüllendirilir. Anahtar kelimeleri doğal bir şekilde içeriğe yedirmek, "anahtar kelime doldurma"dan kaçınmak esastır. Semantik anahtar kelimeler ve LSI (Latent Semantic Indexing) anahtar kelimeleri kullanmak, içeriğinizin konusal alaka düzeyini artırır.

#### Görsel Optimizasyonu
Görsellerin \`alt\` metinleri (alternatif metin), hem görme engelli kullanıcılar için erişilebilirliği artırır hem de arama motorlarına görselin ne hakkında olduğunu bildirir. Görsel dosyası adları da anahtar kelimeler içerebilir. Ayrıca, görsellerin dosya boyutlarını optimize etmek, sayfa hızını önemli ölçüde etkiler.

#### İç Bağlantı Yapısı
İç bağlantılar, sitenizdeki otoriteyi dağıtmanın ve kullanıcıları ilgili içeriklere yönlendirmenin güçlü bir yoludur. Anahtar kelime açısından zengin çapa metinleri (anchor text) kullanarak önemli sayfalarınıza bağlantı vermek, hem SEO hem de kullanıcı deneyimi için faydalıdır.

### 2. Site Dışı SEO (Off-Page SEO)

Site Dışı SEO, web sitenizin dışında, yani doğrudan kontrol edemediğiniz ancak etkileyebileceğiniz faktörler üzerinde yapılan çalışmalardır. Bu çalışmalar, sitenizin internet üzerindeki itibarını ve otoritesini artırmayı hedefler.

**Sitenin dışında gerçekleştirilen çalışmalar:**
*   **Backlink oluşturma:** Diğer güvenilir ve alakalı web sitelerinden sitenize gelen bağlantılar (backlinkler), arama motorları için önemli bir otorite sinyalidir. Kaliteli backlinkler, sitenizin güvenilirliğini artırır.
*   **Marka bahisleri (Brand Mentions):** Sitenizin veya markanızın diğer web sitelerinde, sosyal medyada veya forumlarda adının geçmesi, doğrudan bağlantı olmasa bile bir otorite ve popülerlik sinyali olarak algılanabilir.
*   **Sosyal medya sinyalleri:** Sosyal medya paylaşımları, beğeniler ve etkileşimler doğrudan bir sıralama faktörü olmasa da, içeriğinizin keşfedilmesine, yayılmasına ve dolaylı olarak daha fazla backlink ve marka bahsi almasına yardımcı olabilir.
*   **Yerel dizin kayıtları:** Google Benim İşletmem, Yelp gibi yerel dizinlere kayıt olmak, özellikle yerel işletmeler için yerel SEO açısından kritik öneme sahiptir.
*   **Influencer pazarlaması:** Nişinizdeki etkileyicilerle işbirliği yaparak markanızın ve içeriğinizin daha geniş kitlelere ulaşmasını sağlamak.

#### Backlink Oluşturma Stratejileri
Kaliteli backlinkler, arama motorları için "oy" gibidir. Bir web sitesi, içeriğinize bağlantı vererek aslında içeriğinizin değerli olduğunu onaylar.
*   **Misafir yazarlık (Guest Blogging):** Nişinizle ilgili diğer sitelerde misafir yazar olmak ve sitenize bağlantı vermek.
*   **Kırık link inşası (Broken Link Building):** Diğer sitelerdeki kırık linkleri tespit edip, onlara kendi ilgili içeriğinizle bir alternatif sunmak.
*   **Kaynak sayfaları:** Sektörünüzdeki değerli kaynak sayfalarında yer almak.
*   **Basın bültenleri:** Önemli haberleriniz olduğunda basın bültenleri aracılığıyla bağlantı almak.
Unutulmamalıdır ki, backlinklerin kalitesi, sayısından daha önemlidir. Spam ve düşük kaliteli linklerden kaçınılmalıdır.

#### Marka Bahisleri ve Sosyal Medya
Markanızın online ortamda ne kadar konuşulduğu ve ne kadar etkileşim aldığı, Google için önemli bir sinyaldir. Sosyal medya platformlarında aktif olmak, içeriğinizi paylaşmak ve topluluklarla etkileşim kurmak, markanızın bilinirliğini artırırken dolaylı olarak SEO'ya katkı sağlar.

### 3. Teknik SEO

Teknik SEO, web sitenizin arama motorları tarafından daha kolay taranabilmesi ve dizine eklenebilmesi için yapılan teknik altyapı optimizasyonudur. Bu, sitenizin "görünür" olmasının temelini oluşturur.

**Sitenin teknik altyapısının optimizasyonudur:**
*   **Site hızı (Core Web Vitals):** Sayfaların hızlı yüklenmesi, iyi bir kullanıcı deneyimi sunar ve bir sıralama faktörüdür. Largest Contentful Paint (LCP), First Input Delay (FID) ve Cumulative Layout Shift (CLS) gibi Core Web Vitals metrikleri kritik öneme sahiptir.
*   **Mobil uyumluluk:** Sitenizin farklı ekran boyutlarına (telefon, tablet) otomatik olarak uyum sağlaması (responsive design), mobil öncelikli indeksleme çağında vazgeçilmezdir.
*   **robots.txt ve sitemap:** \`robots.txt\` dosyası, arama motoru botlarının sitenizin hangi bölümlerini tarayacağını yönlendirir. XML sitemap ise, sitenizdeki tüm önemli sayfaların bir listesini sunarak botların sitenizi daha verimli keşfetmesine yardımcı olur.
*   **Schema markup (Yapısal Veri İşaretleme):** Arama motorlarına içeriğinizin ne hakkında olduğunu daha iyi anlamaları için ek bağlam sağlayan kod parçacıklarıdır (örneğin, ürün incelemeleri, tarifler, etkinlikler için). Bu, zengin snippet'ler (rich snippets) olarak arama sonuçlarında daha çekici görünmenizi sağlayabilir.
*   **SSL sertifikası (HTTPS):** Sitenizin güvenli bir bağlantı kullanması (HTTPS), hem kullanıcı güvenliği hem de Google için bir sıralama faktörüdür.
*   **Crawl optimizasyonu:** Arama motoru botlarının sitenizi ne kadar etkin taradığını yönetmek. Gereksiz sayfaların taranmasını engellemek, crawl bütçesini önemli sayfalara yönlendirmeye yardımcı olur.
*   **Kanonikleştirme (Canonicalization):** Yinelenen içerik sorunlarını çözmek için kullanılır. Birden fazla URL'den erişilebilen aynı içeriğin hangi URL'sinin "asıl" olduğunu arama motorlarına bildirmek.

#### Site Hızı ve Core Web Vitals
Kullanıcılar hızlı yüklenen siteleri sever. Google, 2021'den bu yana Core Web Vitals'ı resmi bir sıralama faktörü olarak kullanmaktadır. Sayfaların hızlı yüklenmesi, görsel kararlılığı ve etkileşim hızı, kullanıcı deneyimini doğrudan etkiler ve SEO başarısı için hayati öneme sahiptir.

#### Mobil Uyumluluk ve Kullanıcı Deneyimi
Mobil cihazlardan yapılan aramaların artmasıyla, Google "mobil öncelikli indeksleme"ye geçmiştir. Bu, arama motorunun sitenizin mobil versiyonunu birincil olarak değerlendirdiği anlamına gelir. Responsive tasarım ve hızlı mobil sayfalar, hem kullanıcılar hem de arama motorları için olmazsa olmazdır.

#### Schema Markup ve Yapısal Veriler
Schema.org tarafından tanımlanan yapısal veriler, arama motorlarının içeriğinizi daha iyi anlamasına yardımcı olur. Örneğin, bir tarif sitesinde malzemeler, pişirme süresi, derecelendirme gibi bilgileri işaretleyerek, arama sonuçlarında daha zengin ve çekici bir görünüm elde edebilirsiniz (rich snippets). Bu, CTR'yi artırabilir.

#### Robots.txt, Sitemap ve Crawl Bütçesi
\`robots.txt\` dosyası, arama motoru botlarının sitenizde hangi bölümleri tarayıp taramayacağını kontrol etmenizi sağlar. \`sitemap.xml\` ise, sitenizdeki tüm önemli URL'leri listeleyerek botların sitenizi daha verimli keşfetmesine yardımcı olur. Özellikle büyük siteler için "crawl bütçesi" yönetimi, önemli sayfaların hızlıca dizine eklenmesi açısından kritik olabilir.

## SEO Faktörlerinin Birlikte Çalışması

SEO başarısı tek bir faktöre bağlı değildir. Tüm faktörler bir orkestra gibi birlikte çalışır. Bir alandaki mükemmeliyet, diğer alanlardaki eksiklikleri tamamen telafi edemez. Google'ın algoritmaları, web sitelerini bütünsel bir yaklaşımla değerlendirir.

\`\`\`
Toplam SEO Puanı = Site İçi + Site Dışı + Teknik SEO - Cezalar
\`\`\`

Bu formül, SEO'nun her bir bileşeninin birbiriyle nasıl etkileşimde olduğunu ve potansiyel cezaların genel performansı nasıl düşürebileceğini gösterir.

**Örnek senaryolar:**
*   **Mükemmel içerik + Yavaş site = Orta sıralama:** Harika bir içeriğiniz olabilir, ancak siteniz yavaş yükleniyorsa veya mobil uyumlu değilse, kullanıcılar sabırsızlanıp sitenizden ayrılacak, bu da sıralamalarınızı olumsuz etkileyecektir. Teknik eksiklikler, içeriğin değerini gölgeler.
*   **İyi içerik + Hızlı site + Kaliteli backlink = Üst sıralama:** Bu, ideal senaryoya yakın bir durumdur. Kaliteli içerik, sağlam bir teknik altyapı ve güvenilir dış bağlantılarla desteklendiğinde, arama motorlarında üst sıralara çıkmak çok daha olasıdır. Bu kombinasyon, hem arama motorlarına hem de kullanıcılara güven ve değer sinyali verir.
*   **Zayıf içerik + Spam backlink = Ceza riski:** Düşük kaliteli veya kopyalanmış içerik, spam niteliğindeki backlinklerle desteklendiğinde, Google tarafından kolayca tespit edilebilir ve sitenizin arama sonuçlarından tamamen çıkarılmasına kadar varan ciddi cezalara yol açabilir. Bu durum, "hızlı kazanım" peşinde koşanların sıklıkla düştüğü bir tuzaktır.

### Entegre Bir Yaklaşım Neden Önemli?

SEO'nun bu üç ana dalı arasındaki entegrasyon, sürdürülebilir başarı için hayati önem taşır. Örneğin:
*   Harika bir içeriğe sahip olsanız bile (Site İçi SEO), siteniz teknik olarak yavaşsa (Teknik SEO), kullanıcılar içeriğinize ulaşmakta zorlanacak ve sitenizi terk edecektir.
*   Siteniz teknik olarak kusursuz olsa da (Teknik SEO), içeriğiniz kalitesizse veya yeterli backlinke sahip değilse (Site İçi ve Site Dışı SEO), arama motorları sitenizi değerli bulmayacaktır.
*   Yüksek kaliteli backlinkler almanız (Site Dışı SEO), teknik sorunları olan veya kötü içeriğe sahip bir siteyi otomatik olarak üst sıralara taşımaz.

Bu nedenle, SEO stratejisi oluştururken her bir dalı ayrı ayrı ele almak yerine, onları birbirini tamamlayan unsurlar olarak görmek ve eş zamanlı olarak optimize etmek gerekmektedir. 2025 yılında, Google'ın algoritmaları bu entegre yaklaşımları daha iyi tanıyacak ve ödüllendirecektir.

## SEO İhlalleri ve Cezalar

Google, arama sonuçlarının kalitesini korumak için belirli kurallara uymayan web sitelerini cezalandırır. Bu cezalar, sitenizin sıralamalarını düşürmekten, arama sonuçlarından tamamen kaldırılmasına kadar gidebilir. "Black Hat SEO" olarak bilinen bu teknikler, kısa vadede sonuç verebilir gibi görünse de, uzun vadede siteniz için yıkıcı sonuçlar doğurur.

### Kesinlikle Kaçınılması Gerekenler

1.  **Anahtar kelime doldurma (Keyword stuffing)**
    *   **Doğal olmayan anahtar kelime yoğunluğu:** Bir sayfada anahtar kelimeleri anlamsızca tekrar etmek, okuyucunun deneyimini kötüleştirir ve arama motorları tarafından kolayca tespit edilir. Örneğin, "En iyi SEO hizmetleri için SEO hizmetleri arıyorsanız, SEO hizmetlerimizle en iyi SEO hizmetlerini sunuyoruz." gibi cümleler.
    *   **Gizli metin kullanımı:** Anahtar kelimeleri veya metin`
  },
  {
    slug: 'yerel-seo-nedir-kucuk-isletmeler',
    title: 'Yerel SEO Nedir? Küçük İşletmeler İçin Önemi',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. yerel seo nedir? küçük i̇şletmeler i̇çin önemi hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '10 dk',
    date: '17 Ocak 2025',
    image: '📍',
    featured: false,
    metadata: {
      title: 'Yerel SEO Nedir? Küçük İşletmeler İçin Önemi | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. yerel seo nedir? küçük i̇şletmeler i̇çin önemi hakkında detaylı bilgi.',
      keywords: ['yerel seo nedir kucuk isletmeler', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/yerel-seo-nedir-kucuk-isletmeler',
      },
    }Su Tesisatçısı Berat\`
*   **Adres:** Fiziksel adresinizi eksiksiz ve hatasız bir şekilde girin. Bu adresin Google tarafından doğrulanmış olması gerekmektedir.
*   **Telefon:** Müşterilerin size ulaşabileceği yerel alan kodlu bir telefon numarası kullanın. Bu numaranın her zaman aktif olduğundan emin olun.
*   **Web sitesi:** İşletmenizin web sitesinin HTTPS ile başlayan tam URL'sini girin. Sitenizin mobil uyumlu olduğundan emin olun.
*   **Çalışma saatleri:** İşletmenizin açılış ve kapanış saatlerini doğru bir şekilde belirtin. Tatil günleri ve özel çalışma saatleri için de güncellemeler yapmayı unutmayın.
*   **Kategori:** İşletmenizin ana faaliyet alanını en doğru şekilde yansıtan birincil kategoriyi seçin. Ardından, sunduğunuz diğer hizmetleri veya ürünleri kapsayan ikincil kategoriler ekleyin. Bu, alaka düzeyinizi artırır.

### Profil Tamamlama Kontrol Listesi

GBP'nizin potansiyelini tam olarak kullanmak için aşağıdaki kontrol listesini uygulayın:

*   [x] **İşletme doğrulaması yapıldı:** Posta yoluyla gelen kodu girerek veya telefon/e-posta yoluyla işletmenizi mutlaka doğrulayın. Doğrulanmamış bir profil tam işlevsellik sunmaz.
*   [x] **Tüm kategoriler seçildi:** Ana kategorinin yanı sıra, işletmenizin tüm hizmetlerini kapsayan ek kategorileri ekleyin.
*   [x] **Açılış/kapanış saatleri girildi:** Düzenli çalışma saatlerinizi doğru bir şekilde girin.
*   [x] **Tatil saatleri güncellendi:** Resmi tatillerde veya özel günlerde çalışma saatleriniz değişiyorsa, bunları önceden güncelleyin.
*   [x] **Hizmet alanı belirlendi:** Fiziksel bir mağazanız yoksa veya belirli bir bölgeye hizmet veriyorsanız (örneğin, mobil servis), hizmet verdiğiniz alanları harita üzerinde işaretleyin.
*   [x] **Ürün/hizmet listesi eklendi:** Sunduğunuz tüm ürün ve hizmetleri detaylı açıklamalar ve görsellerle listeleyin. Bu, potansiyel müşterilere ne sunduğunuzu açıkça gösterir.
*   [x] **Yüksek kaliteli fotoğraflar yüklendi:** İşletmenizin iç ve dış mekan fotoğraflarını, ürün/hizmet görsellerini ve ekip fotoğraflarını yükleyin. Kaliteli ve çekici görseller, profilinizi daha cazip hale getirir.
*   [x] **İşletme açıklaması yazıldı (anahtar kelimelerle):** İşletmenizin ne yaptığını, neyi farklı yaptığını ve hangi bölgelere hizmet verdiğini anlatan, anahtar kelimelerle zenginleştirilmiş, bilgilendirici bir açıklama yazın.
*   [x] **Mesajlaşma aktifleştirildi:** Müşterilerin size doğrudan GBP üzerinden mesaj göndermesine olanak tanıyın. Bu, hızlı iletişim kurmanın ve müşteri memnuniyetini artırmanın etkili bir yoludur.
*   [x] **Sık sorulan sorular eklendi:** Müşterilerin sıkça sorduğu soruları ve yanıtlarını ekleyerek, onların bilgiye daha hızlı ulaşmasını sağlayın ve destek yükünüzü azaltın.

### GBP Gönderi Stratejisi

Google İşletme Profiliniz sadece pasif bir bilgi kaynağı değildir; aynı zamanda aktif bir pazarlama aracıdır. Düzenli gönderilerle müşterilerinizle etkileşim kurabilir ve profilinizi güncel tutabilirsiniz.

**Gönderi Türleri:**

1.  **Güncelleme gönderileri:** İşletmenizle ilgili haberleri, duyuruları, yeni hizmetleri veya sektördeki gelişmeleri paylaşın. Örneğin, "Yeni ekipmanlarımızla daha hızlı servis!"
2.  **Etkinlik gönderileri:** Özel günler, kampanyalar, atölye çalışmaları veya yerel etkinliklere katılımınızı duyurun. Örneğin, "Anneler Günü'ne özel %15 indirim!"
3.  **Teklif gönderileri:** İndirimler, promosyonlar veya kuponlar sunarak müşterileri işletmenize çekin. Teklifin başlangıç ve bitiş tarihlerini belirtmeyi unutmayın. Örneğin, "İlk hizmete özel %10 indirim kuponu!"
4.  **Ürün gönderileri:** Yeni ürünlerinizin veya hizmetlerinizin tanıtımını yapın, özelliklerini ve faydalarını vurgulayın. Örneğin, "Yeni nesil akıllı ev güvenlik sistemleri şimdi stoklarımızda!"

**Gönderi Sıklığı:** Haftada 1-2 gönderi yapmak, profilinizi aktif tutmak ve Google'a işletmenizin güncel olduğunu göstermek için idealdir. Düzenli gönderiler, müşterilerinize sürekli yeni bilgiler sunar ve onlarla bağ kurmanıza yardımcı olur.

## NAP Tutarlılığı

NAP, Name (İsim), Address (Adres) ve Phone (Telefon) kelimelerinin baş harflerinden oluşan bir kısaltmadır. Yerel SEO'da NAP tutarlılığı, işletmenizin adının, adresinin ve telefon numarasının internet üzerindeki her yerde (Google İşletme Profili, web sitesi, sosyal medya, yerel dizinler vb.) birebir aynı formatta ve doğru bir şekilde listelenmesi anlamına gelir. Bu tutarlılık, Google'ın işletmenizin gerçekliğini ve güvenilirliğini teyit etmesi için kritik bir sinyaldir.

### Tutarlılık Kuralları

En ufak bir format veya yazım hatası bile Google'ın kafasını karıştırabilir ve sıralamanızı olumsuz etkileyebilir. İşte doğru ve yanlış format örnekleri:

\`\`\`
DOĞRU FORMAT:
İşletme Adı: Su Tesisatçısı Berat
Adres: Örnek Mahallesi, Örnek Caddesi No:10, Ataşehir, İstanbul, 34758
Telefon: 0534 383 7758
Web Sitesi: https://www.sutesisatcisiberat.com

YANLIŞ FORMAT:
İşletme Adı: Su Tesisatçısı B. (Kısaltma)
Adres: Örnek Mah. Örnek Cad. 10/A, Ataşehir / İst. (Kısaltma ve farklı format)
Telefon: +90 534 383 77 58 (Farklı format, boşluklar, ülke kodu)
Web Sitesi: sutesisatcisiberat.com (HTTPS eksik)
\`\`\`

Bu örneklerde görüldüğü gibi, işletmenizin adında kısaltmalar kullanmaktan, adreste "Mah." yerine "Mahallesi" veya "Cad." yerine "Caddesi" gibi tam yazımları tercih etmekten, telefon numarasını uluslararası kodlar veya boşluklarla değiştirmekten kaçınmalısınız. Seçtiğiniz formatı bir kez belirledikten sonra, tüm platformlarda buna sadık kalın.

### NAP Kontrol Noktaları

NAP bilgilerinizin tutarlı olup olmadığını kontrol etmeniz gereken başlıca yerler:

*   **Google Business Profile:** En önemli kontrol noktasıdır. Buradaki bilgileriniz diğer tüm platformlar için referans olmalıdır.
*   **Web sitesi footer:** Web sitenizin alt kısmında (footer) genellikle iletişim bilgileri bulunur. Buradaki NAP bilgilerinizin GBP ile aynı olduğundan emin olun.
*   **İletişim sayfası:** Web sitenizdeki iletişim sayfasında yer alan adres ve telefon bilgilerinin de birebir aynı olması gerekir.
*   **Sosyal medya profilleri:** Facebook, Instagram, LinkedIn gibi sosyal medya platformlarındaki işletme profillerinizdeki iletişim bilgilerini kontrol edin.
*   **Yerel dizinler:** Yelp, Foursquare, Yellow Pages gibi yerel işletme dizinlerindeki listelemelerinizi kontrol edin ve güncelleyin.
*   **İş ortaklığı siteleri:** Eğer diğer web siteleriyle iş ortaklığınız varsa veya ürün/hizmetleriniz başka platformlarda listeleniyorsa, buradaki bilgilerin de tutarlı olduğundan emin olun.
*   **Sektörel dernekler/siteler:** Üye olduğunuz sektörel derneklerin veya sektöre özel web sitelerinin sizinle ilgili yayınladığı bilgiler de önemlidir.

NAP tutarlılığı, Google'ın işletmenizin kimliğini doğrulamasına yardımcı olur, güvenilirliğinizi artırır ve yerel aramalarda daha iyi sıralamalar elde etmenizi sağlar. Düzenli olarak bu kontrol noktalarını gözden geçirmek, olası tutarsızlıkları erken fark etmenize yardımcı olacaktır.

## LocalBusiness Schema Markup

Schema Markup, web sitenizin içeriğini arama motorlarının daha iyi anlamasını sağlayan yapılandırılmış veri işaretlemesidir. Yerel SEO için "LocalBusiness" şeması, işletmenizin türü, adresi, telefon numarası, çalışma saatleri, yorumları ve daha fazlası hakkında doğrudan bilgi sağlayarak arama motorlarına önemli sinyaller gönderir. Bu, Rich Snippets (zengin snippet'ler) olarak bilinen, arama sonuçlarında ekstra bilgilerle (örneğin, yıldız derecelendirmeleri) görünmenize yardımcı olabilir.

### Temel LocalBusiness Şeması

Aşağıdaki JSON-LD formatındaki şema, bir web sitesinin \`<head>\` veya \`<body>\` etiketleri arasına eklenir. Bu örnek, bir tesisatçı işletmesi için temel bilgileri içermektedir:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Plumber", // İşletmenizin türünü belirtin (örneğin, Restaurant, Store, Dentist vb.)
  "name": "Su Tesisatçısı Berat", // İşletmenizin tam adı
  "image": "https://example.com/logo.jpg", // İşletmenizin logosu veya ana görseli
  "telephone": "+90-534-383-7758", // Yerel telefon numaranız
  "email": "info@sutesisatcisiberat.com", // İletişim e-posta adresiniz
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Örnek Mahallesi, Örnek Caddesi No:10", // Sokak adresi
    "addressLocality": "Ataşehir", // İlçe
    "addressRegion": "İstanbul", // İl
    "postalCode": "34758", // Posta kodu
    "addressCountry": "TR" // Ülke
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.9876", // İşletmenizin enlem koordinatı
    "longitude": "29.1234" // İşletmenizin boylam koordinatı
  },
  "url": "https://www.sutesisatcisiberat.com", // İşletmenizin web sitesi URL'si
  "openingHoursSpecification": [ // Çalışma saatleri
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$", // Fiyat aralığı (örneğin, $, $$, $$$)
  "areaServed": [ // Hizmet verilen bölgeler
    { "@type": "AdministrativeArea", "name": "Ataşehir" },
    { "@type": "AdministrativeArea", "name": "Kadıköy" },
    { "@type": "AdministrativeArea", "name": "Üsküdar" },
    { "@type": "AdministrativeArea", "name": "Maltepe" }
  ],
  "hasMap": "https://www.google.com/maps/place/Su+Tesisatçısı+Berat/@40.9876,29.1234,15z", // Google Haritalar linkiniz
  "sameAs": [ // Sosyal medya profilleriniz ve diğer önemli listelemeleriniz
    "https://www.facebook.com/sutesisatcisiberat",
    "https://twitter.com/sutesisatcisib",
    "https://www.instagram.com/sutesisatcisiberat"
  ]
}
\`\`\`

**Uygulama İpuçları:**

*   **Doğru \`@type\` seçimi:** İşletmenizin sektörüne en uygun Schema.org türünü seçtiğinizden emin olun (örneğin, \`Dentist\`, \`Restaurant\`, \`LocalBusiness\`, \`Store\`, \`AutomotiveRepair\` vb.).
*   **Tutarlılık:** Şemadaki tüm bilgilerin (isim, adres, telefon, web sitesi) Google İşletme Profiliniz ve web sitenizdeki diğer yerel bilgilerle tamamen tutarlı olduğundan emin olun. NAP tutarlılığı burada da çok önemlidir.
*   **Koordinatlar:** İşletmenizin enlem ve boylam koordinatlarını doğru bir şekilde girmek için Google Haritalar'ı kullanabilirsiniz.
*   **Doğrulama:** Şemayı web sitenize ekledikten sonra, Google'ın Yapılandırılmış Veri Test Aracı'nı kullanarak herhangi bir hata olup olmadığını kontrol edin.

LocalBusiness Schema Markup, arama motorlarına işletmeniz hakkında zengin ve yapılandırılmış bilgi sunarak hem arama sonuçlarında daha çekici görünmenizi sağlar hem de Google'ın işletmenizi daha iyi anlamasına yardımcı olur.

## Yerel Anahtar Kelime Stratejisi

Yerel anahtar kelimeler, potansiyel müşterilerin belirli bir coğrafi alanda hizmet veya ürün ararken kullandığı terimlerdir. Doğru yerel anahtar kelimeleri hedeflemek, doğru kitleye ulaşmanın anahtarıdır.

### Anahtar Kelime Formülü

En temel yerel anahtar kelime formülü şu şekildedir:

\`[Hizmet] + [Konum] = Yerel Anahtar Kelime\`

Bu formülü kullanarak, işletmenizin sunduğu hizmetleri ve faaliyet gösterdiği bölgeleri birleştirerek hedefleyebileceğiniz anahtar kelimeleri oluşturabilirsiniz.

**Örnekler:**

*   \`su tesisatçısı Ataşehir\`
*   \`tıkanıklık açma Kadıköy\`
*   \`su kaçağı tespiti İstanbul Anadolu Yakası\`
*   \`elektrikçi Ümraniye\`
*   \`oto tamir servisi Gebze\`
*   \`çiçekçi Bakırköy\`
*   \`diş hekimi Çekmeköy\`
*   \`kuaför Maltepe\`

Bu anahtar kelimeleri web sitenizin başlıklarında, meta açıklamalarında, sayfa içeriklerinde, Google İşletme Profilinizdeki açıklamalarda ve gönderilerinizde doğal bir şekilde kullanmalısınız.

### Yerel Niyet Modifiyerleri

Kullanıcılar yerel arama yaparken sadece hizmet ve konum belirtmekle kalmaz, bazen niyetlerini daha da netleştiren modifiyörler kullanırlar. Bu modifiyörleri anlamak, daha spesifik ve dönüşüm oranı yüksek anahtar kelimeleri hedeflemenizi sağlar.

*   **"yakınımda" / "yakınındaki":** Kullanıcının anlık konumuna göre arama yaptığını gösterir. Google İşletme Profilinizin optimizasyonu burada kritik öneme sahiptir.
*   **"7/24" / "acil":** Acil durum hizmetleri sunan işletmeler için bu modifiyörler çok değerlidir. Örneğin, "acil su tesisatçısı İstanbul".
*   **"[ilçe adı]" / "[şehir adı]":** En yaygın kullanılan yerel modifiyörlerdir. İşletmenizin hizmet verdiği tüm ilçe ve şehirleri anahtar kelimelerinizde kullanın.
*   **"hemen" / "bugün":** Anında hizmet arayan müşterileri hedefler.
*   **"en yakın":** Tıpkı "yakınımda" gibi, mesafe faktörünü vurgular.
*   **"fiyatları" / "ücretleri":** Fiyat odaklı arama yapan müşterileri hedefler. Örneğin, "su kaçağı tespiti fiyatları Kadıköy".
*   **"en iyi" / "uzman":** Kalite odaklı arama yapan müşterileri hedefler. Örneğin, "en iyi tesisatçı Ataşehir".

### İlçe Bazlı Sayfa Yapısı

Birden fazla bölgeye hizmet veren işletmeler için, her bir hizmet bölgesi için ayrı bir sayfa oluşturmak (veya mevcut hizmet sayfalarını bölgeye göre optimize etmek) son derece etkili bir yerel SEO stratejisidir. Bu, Google'ın her bölgedeki alaka düzeyinizi anlamasına yardımcı olur.

**Örnek Site Yapısı:**

\`\`\`
Ana Sayfa (Genel bilgi ve en önemli hizmetler)
├── /hizmetler/ (Hizmetlerinizin genel açıklamaları)
│   ├── /su-kacagi-tespiti/ (Su kaçağı tespiti hizmeti hakkında detaylı`
  },
  {
    slug: 'anahtar-kelime-arastirmasi-nasil-yapilir',
    title: 'Anahtar Kelime Araştırması Nasıl Yapılır?',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. anahtar kelime araştırması nasıl yapılır? hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '11 dk',
    date: '13 Ocak 2025',
    image: '🔑',
    featured: false,
    metadata: {
      title: 'Anahtar Kelime Araştırması Nasıl Yapılır? | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. anahtar kelime araştırması nasıl yapılır? hakkında detaylı bilgi.',
      keywords: ['anahtar kelime arastirmasi nasil yapilir', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/anahtar-kelime-arastirmasi-nasil-yapilir',
      },
    }\`\`
su tesisatçısı [_________]
├── su tesisatçısı İstanbul
├── su tesisatçısı fiyatları
├── su tesisatçısı 7/24
└── su tesisatçısı yakınımda
\`\`\`
Bu önerileri bir kenara not edin ve listenize ekleyin. Her bir öneriyi tekrar aratarak daha fazla derinlik elde edebilirsiniz.

#### "İlgili Aramalar" (SERP alt kısmı)
Bir arama yaptığınızda, Google sonuç sayfasının (SERP) en altında "İlgili aramalar" başlığı altında benzer veya ilişkili anahtar kelimeler listelenir. Bu liste, kullanıcıların ana sorgularıyla birlikte başka neler aradığını anlamanız için harika bir kaynaktır. Örneğin, "su kaçağı tespiti" aradığınızda, "su kaçağı bulma", "kameralı su kaçağı tespiti" gibi öneriler görebilirsiniz.

#### "İnsanlar şunu da soruyor" (People Also Ask)
Yine Google SERP üzerinde, genellikle ilk sonuçların altında yer alan "İnsanlar şunu da soruyor" kutusu, hedef kitlenizin zihnindeki soruları anlamak için paha biçilmezdir. Bu sorular, bilgilendirici blog yazıları veya SSS (Sıkça Sorulan Sorular) bölümleri oluşturmak için ideal anahtar kelime fikirleri sunar. Kutudaki bir soruya tıkladığınızda, genellikle daha fazla ilgili soru ortaya çıkar, bu da size daha fazla içerik fikri verir.

### Adım 3: Araçlarla Veri Toplama

Manuel yöntemlerle elde ettiğiniz anahtar kelimeleri nicel verilerle desteklemek için çeşitli araçlar kullanmanız gerekir. Bu araçlar, anahtar kelimelerin arama hacmi, rekabet düzeyi ve diğer önemli metrikleri hakkında bilgi sağlar.

#### Ücretsiz Araçlar
| Araç | Özellik | Kullanım Amacı |
|------|---------|---------------|
| Google Keyword Planner | Arama hacmi tahmini, rekabet düzeyi, yeni anahtar kelime fikirleri sunar. | Reklamcılık için tasarlanmış olsa da organik SEO için de değerli veriler sağlar. |
| Google Trends | Anahtar kelimelerin zaman içindeki popülerliğini, mevsimselliğini ve bölgesel ilgisini analiz eder. | Trendleri ve mevsimsel dalgalanmaları anlamak için idealdir. |
| Google Search Console | Sitenizin mevcut sıralandığı anahtar kelimeleri, gösterimlerini, tıklamalarını ve tıklama oranlarını gösterir. | Mevcut performansınızı değerlendirmek ve yeni fırsatlar bulmak için. |
| Answer The Public | Belirli bir konuyla ilgili tüm soruları, edatları, karşılaştırmaları ve alfabetik listeleri görsel bir harita şeklinde sunar. | Soru bazlı ve bilgilendirici anahtar kelimeler bulmak için harikadır. |
| Ubersuggest | Arama hacmi, zorluk, CPC gibi temel metrikleri sunar ve anahtar kelime fikirleri verir. Ücretsiz sürümü sınırlıdır. | Genel anahtar kelime araştırması ve rakip analizi için başlangıç seviyesinde kullanışlıdır. |

#### Ücretli Araçlar
| Araç | Özellik | Kullanım Amacı |
|------|---------|---------------|
| Ahrefs | Kapsamlı anahtar kelime analizi, rakip analizi, backlink analizi, site denetimi ve sıralama takibi. | Profesyonel SEO uzmanları ve büyük işletmeler için eksiksiz bir çözüm. |
| SEMrush | Rakip analizi, anahtar kelime araştırması, sıralama takibi, site denetimi, içerik pazarlaması araçları. | Pazarlama ve SEO stratejilerini kapsamlı bir şekilde yönetmek için. |
| Moz | Anahtar kelime araştırması, site denetimi, link analizi, alan adı otoritesi (DA) ve sayfa otoritesi (PA) ölçümleri. | Özellikle link inşası ve otorite analizi için güçlüdür. |

Bu araçlar, manuel olarak topladığınız anahtar kelimeleri zenginleştirecek ve size daha fazla veri odaklı karar verme imkanı sunacaktır.

### Adım 4: Metrikleri Değerlendirme

Topladığınız anahtar kelimelerin her birini belirli metrikler üzerinden değerlendirerek hangilerinin hedeflenmeye değer olduğunu belirlemelisiniz.

#### Temel Metrikler

**Arama Hacmi (Search Volume)**
*   **Tanım:** Bir anahtar kelimenin belirli bir zaman diliminde (genellikle aylık) ortalama kaç kez arandığını gösteren sayıdır.
*   **Değerlendirme:**
    *   Yüksek arama hacmi, daha fazla potansiyel trafik anlamına gelir, ancak genellikle daha yüksek rekabetle gelir.
    *   Mevsimsel dalgalanmaları değerlendirin: Bazı anahtar kelimeler yılın belirli dönemlerinde (örneğin "kombi bakımı" kış aylarında) daha fazla aranır.
    *   Yerel vs global ayrımı yapın: "Su tesisatçısı" kelimesinin global arama hacmi yüksek olabilirken, "su tesisatçısı Ataşehir" kelimesinin yerel arama hacmi çok daha spesifik ve düşük olacaktır. İşinizin kapsamına göre doğru arama hacmini değerlendirin.

**Anahtar Kelime Zorluğu (Keyword Difficulty - KD/KW Difficulty)**
*   **Tanım:** Bir anahtar kelimede arama motorlarında ilk sayfada sıralama almanın ne kadar zor olduğunu gösteren bir ölçüttür (genellikle 0-100 arası bir puan). Bu puan genellikle rakip sitelerin otoritesi, backlink profili ve içerik kalitesine göre belirlenir.
*   **Değerlendirme:**
    *   **0-30: Düşük zorluk:** Yeni siteler ve düşük otoriteye sahip siteler için uygun hedeflerdir. Hızlı sonuçlar elde etme potansiyeli yüksektir.
    *   **31-60: Orta zorluk:** Kurulu siteler ve orta düzeyde otoriteye sahip siteler için hedeflenebilir. Sıralama almak için daha fazla çaba ve kaliteli içerik gerektirir.
    *   **61-100: Yüksek zorluk:** Çok otoriter ve güçlü sitelerin domine ettiği alanlardır. Yeni veya küçük siteler için sıralama almak neredeyse imkansızdır, büyük bütçeler ve uzun vadeli stratejiler gerektirir.

**Tıklama Başına Maliyet (Cost Per Click - CPC)**
*   **Tanım:** Reklamverenlerin bir anahtar kelime için ortalama olarak ne kadar ödeme yaptığını gösteren bir metriktir.
*   **Değerlendirme:**
    *   Yüksek CPC, genellikle o anahtar kelimenin yüksek ticari değere sahip olduğunu gösterir. Reklamverenler, bu kelimeyi arayan kullanıcıların dönüşüm potansiyelinin yüksek olduğunu bildikleri için daha fazla para ödemeye isteklidirler.
    *   Organik SEO açısından, yüksek CPC'li anahtar kelimelerde sıralama almak, kaliteli ve dönüşüm getiren trafik elde etme potansiyelini artırır.

**Tıklama Potansiyeli (Click Potential)**
*   **Tanım:** Bir anahtar kelimenin arama hacmine rağmen ne kadar organik tıklama getirebileceğini ifade eder.
*   **Değerlendirme:**
    *   **Zero-click aramaları değerlendir:** Bazı aramalar için Google, doğrudan SERP üzerinde cevap verir (örneğin hava durumu, tanımlar). Bu tür aramalar, yüksek arama hacmine sahip olsa bile sitenize tıklama getirmeyebilir.
    *   **Featured snippet varsa tıklama azalabilir:** Eğer bir anahtar kelime için "öne çıkan snippet" (featured snippet) varsa, kullanıcılar cevabı doğrudan arama sonuçlarında bulup sitenize tıklamayabilir. Bu durum, arama hacmi yüksek olsa bile organik tıklama oranını düşürebilir. Bu nedenle, sadece arama hacmine değil, SERP özelliklerine de dikkat etmek önemlidir.

### Adım 5: Anahtar Kelime Önceliklendirme

Tüm bu verileri topladıktan sonra, hangi anahtar kelimelerin sizin için en değerli olduğunu belirlemek için bir önceliklendirme yapmanız gerekir.

#### Puanlama Matrisi
Anahtar kelimeleri daha objektif bir şekilde değerlendirmek için bir puanlama matrisi kullanabilirsiniz. Bu, özellikle çok sayıda anahtar kelimeyle çalışırken karar verme sürecini basitleştirir.

\`\`\`
Puan = (Arama Hacmi × Alaka) / Zorluk
\`\`\`
*   **Arama Hacmi:** Araçlardan aldığınız değeri kullanın.
*   **Alaka (Relevance):** Anahtar kelimenin işinizle veya hedeflediğiniz içerikle ne kadar ilgili olduğunu 1'den 10'a kadar bir puanla değerlendirin (10 en alakalı).
*   **Zorluk:** Anahtar kelime zorluk puanını kullanın.

**Örnek:**
"su tesisatçısı ataşehir"
*   Arama hacmi: 500 (aylık)
*   Alaka: 10/10 (işimizle çok alakalı, yerel hedefleme)
*   Zorluk: 30 (orta düzey, hedeflenebilir)

\`Puan = (500 × 10) / 30 = 166.7\`

Bu puanlama sistemi, farklı anahtar kelimeleri karşılaştırmanıza ve en yüksek potansiyele sahip olanları belirlemenize yardımcı olur.

#### Öncelik Kategorileri

Puanlama matrisinizi veya sezgisel değerlendirmenizi kullanarak anahtar kelimelerinizi öncelik kategorilerine ayırın:

**Yüksek Öncelik:**
*   Yüksek alaka: İşinizle doğrudan ilgili ve hedef kitlenizin ihtiyaçlarını karşılayan kelimeler.
*   Orta-yüksek hacim: Potansiyel trafik getirebilecek yeterli arama sayısına sahip.
*   Düşük-orta zorluk: Sitenizin mevcut otoritesiyle sıralama alabileceğiniz seviyede.
*   Yüksek dönüşüm potansiyeli: Ticari veya işlemsel niyete sahip, doğrudan satış veya hizmet talebine yol açabilecek kelimeler.
    *   *Örnek:* "Ataşehir acil su kaçağı tespiti"

**Orta Öncelik:**
*   Orta alaka: İşinizle dolaylı yoldan ilgili veya daha geniş kitleye hitap eden kelimeler.
*   Orta hacim: Makul miktarda trafik getirebilir.
*   Orta zorluk: Sıralama almak için biraz daha çaba gerektiren, ancak imkansız olmayan kelimeler.
    *   *Örnek:* "Su kaçağı nasıl anlaşılır" (Bilgilendirici niyet, ancak potansiyel müşteri çekebilir)

**Düşük Öncelik:**
*   Düşük alaka: İşinizle çok az ilgisi olan veya hedef kitlenizin dışındaki kelimeler.
*   Düşük hacim veya çok yüksek zorluk: Çok az trafik getirme potansiyeli olan veya sıralama almanın çok zor olduğu kelimeler. Bu kelimeleri şimdilik arka plana atabilir veya gelecekteki stratejiler için bir havuzda tutabilirsiniz.
    *   *Örnek:* "Su tesisatçısı maaşları" (Bilgi amaçlı ancak doğrudan hizmet satışıyla ilgili değil)

Bu önceliklendirme, kaynaklarınızı (zaman, bütçe, içerik üretimi) en verimli şekilde kullanmanızı sağlar.

## Anahtar Kelime Haritalama (Keyword Mapping)

Anahtar kelime araştırmasının en kritik adımlarından biri, belirlediğiniz anahtar kelimeleri web sitenizdeki belirli sayfalara eşlemektir. Bu işleme "anahtar kelime haritalama" denir. Doğru haritalama, hem arama motorlarının içeriğinizi anlamasına yardımcı olur hem de anahtar kelime kannibalizasyonunu (birden fazla sayfanın aynı anahtar kelime için rekabet etmesi) önler.

### Sayfa-Anahtar Kelime Eşleştirmesi

Her sayfanızın belirli bir birincil anahtar kelimeyi hedeflemesi ve bu birincil kelimeyi destekleyen ikincil ve uzun kuyruk anahtar kelimelere sahip olması gerekir.

\`\`\`
ANA SAYFA
├── Birincil: su tesisatçısı İstanbul (Genel ve bölgesel anahtar kelime, markanın temel hizmetini yansıtır.)
├── İkincil: 7/24 su tesisatçısı, acil tesisat servisi (Ana hizmeti destekleyen, daha spesifik kelimeler.)
└── Uzun kuyruk: İstanbul Anadolu yakası su tesisatçısı (Daha detaylı bölgesel arama niyeti.)

HİZMET SAYFASI: Su Kaçağı Tespiti (/hizmetler/su-kacagi-tespiti/)
├── Birincil: su kaçağı tespiti (Hizmetin kendisini tanımlayan temel kelime.)
├── İkincil: su kaçağı bulma, kaçak su tespiti (Birincil kelimenin eş anlamlıları veya varyasyonları.)
└── Uzun kuyruk: kameralı su kaçağı tespiti İstanbul (Hizmetin spesifik bir özelliğini ve bölgesel hedeflemeyi içeren uzun kuyruk.)

BÖLGE SAYFASI: Ataşehir (/bolge/atasehir/)
├── Birincil: su tesisatçısı Ataşehir (Belirli bir bölgedeki hizmeti hedefleyen temel kelime.)
├── İkincil: Ataşehir tıkanıklık açma (Bölgesel hizmetleri genişleten ikincil kelime.)
└── Uzun kuyruk: Ataşehir 7/24 acil su tesisatçısı (Bölgesel ve acil hizmeti vurgulayan çok spesifik bir arama.)
\`\`\`

Bu yapı, her sayfanın net bir odak noktasına sahip olmasını ve arama motorlarının sitenizin yapısını ve her sayfanın ne hakkında olduğunu daha iyi anlamasını sağlar.

### Kannibalizasyonu Önleme
Anahtar kelime kannibalizasyonu, web sitenizdeki iki veya daha fazla sayfanın aynı veya çok benzer bir anahtar kelime için rekabet etmesidir. Bu durum, arama motorlarının hangi sayfanızın daha alakalı olduğuna karar vermesini zorlaştırır, sonuç olarak her iki sayfanızın da sıralamasını düşürebilir ve sitenizin otoritesini dağıtabilir.

**Kannibalizasyon örneği (YANLIŞ):**
\`\`\`
/hizmetler/su-kacagi/ → "su kaçağı tespiti" (Ticari niyetli sayfa)
/blog/su-kacagi-nedir/ → "su kaçağı tespiti" (Bilgilendirici niyetli blog yazısı)
\`\`\`
Bu durumda, Google hangi sayfanın "su kaçağı tespiti" anahtar kelimesi için daha uygun olduğunu bilemez ve her iki sayfa da yüksek sıralama alamayabilir.

**Doğru yaklaşım:**
\`\`\`
/hizmetler/su-kacagi/ → "su kaçağı tespiti" (Ticari niyetli, hizmet odaklı sayfa)
/blog/su-kacagi-nedir/ → "su kaçağı nasıl anlaşılır" (Bilgilendirici niyetli, bilgi odaklı blog yazısı)
\`\`\`
Burada, her sayfa farklı bir kullanıcı niyetini ve dolayısıyla farklı bir anahtar kelimeyi hedeflemektedir. Hizmet sayfası, hizmet almak isteyen kullanıcıları hedeflerken, blog yazısı bilgi arayan kullanıcıları hedefler. Bu ayrım, her iki sayfanın da kendi hedef kitlesine ulaşmasını sağlar ve arama motorlarının sayfaların amacını net bir şekilde anlamasına yardımcı olur.

## Yerel Anahtar Kelime Stratejisi

Eğer bir işletmeniz fiziksel bir konumda hizmet veriyorsa (örneğin, bir tesisatçı, restoran, kuaför), yerel anahtar kelime araştırması sizin için hayati önem taşır. Yerel SEO, belirli bir coğrafi bölgedeki müşterileri hedeflemeyi amaçlar.

### Coğrafi Modifiyerler
Yerel anahtar kelimeler oluşturmanın en kolay yolu, hizmetlerinizle birlikte coğrafi modifiyerler kullanmaktır:
\`\`\`
[hizmet] + [şehir]          → su tesisatçısı İstanbul
[hizmet] + [ilçe]           → su tesisatçısı Ataşehir
[hizmet] + [mahalle]        → su tesisatçısı İçerenköy
[hizmet] + yakınımda        → su tesisatçısı yakınımda (Mobil aramalarda çok yaygın)
\`\`\`
Bu modifiyerler, aramanın coğrafi kapsamını daraltır ve yerel aramalarda görünmenizi sağlar.

### Yerel Anahtar Kelime Listesi Oluşturma

Yerel anahtar kelime listenizi sistematik olarak oluşturmak için bir şablon kullanabilirsiniz:

**Şablon:**
*   **Ana hizmet:** su tesisatçısı, su kaçağı tespiti, tıkanıklık açma
*   **Bölgeler:** Ataşehir, Kadıköy, Üsküdar, Maltepe, Pendik (Hizmet verdiğiniz tüm ilçe ve mahalleleri listeleyin)
*   **Modifiyerler:** 7/24, acil, uygun fiyatlı, en iyi, uzman

**Kombinasyonlar:**
*   su tesisatçısı Ataşehir
*   Ataşehir su tesisatçısı (Kelime sırası önemlidir, her ikisini de hedefleyin)
*   su tesisatçısı Kadıköy
*   7/24 su tesisatçısı Ataşehir
*   acil su tesisatçısı Üsküdar
*   Maltepe su kaçağı tespiti
*   Pendik tıkanıklık açma uzmanı

Bu kombinasyonlar, yerel aramalarda çok çeşitli sorgular`
  },
  {
    slug: 'teknik-seo-nedir-kontrol-listesi',
    title: 'Teknik SEO Nedir? Kontrol Listesi',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. teknik seo nedir? kontrol listesi hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '10 dk',
    date: '11 Ocak 2025',
    image: '⚙️',
    featured: false,
    metadata: {
      title: 'Teknik SEO Nedir? Kontrol Listesi | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. teknik seo nedir? kontrol listesi hakkında detaylı bilgi.',
      keywords: ['teknik seo nedir kontrol listesi', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/teknik-seo-nedir-kontrol-listesi',
      },
    }<head>\` bölümünde yer alan bu HTML etiketi, arama motorlarına belirli bir sayfanın dizine eklenip eklenmeyeceği (index/noindex) ve linklerinin takip edilip edilmeyeceği (follow/nofollow) konusunda doğrudan talimat verir. En yaygın ve etkili kontrol yöntemidir.
*   **X-Robots-Tag HTTP başlığı:** Meta robots etiketinin HTTP yanıt başlığı versiyonudur. Özellikle HTML dışındaki dosyalar (PDF, resimler) veya dinamik olarak oluşturulan sayfalar için kullanışlıdır. Sunucu tarafında yapılandırılır.
*   **noindex direktifi:** Hem meta robots etiketinde hem de X-Robots-Tag başlığında kullanılabilen \`noindex\` direktifi, arama motorlarına "bu sayfayı dizine ekleme" talimatını verir. Bu direktif, bir sayfanın arama sonuçlarında görünmesini tamamen engeller.

Bu yöntemleri doğru bir şekilde kullanarak, arama motorlarının sitenizdeki en önemli içeriklere odaklanmasını sağlayabilir ve gereksiz veya düşük kaliteli sayfaların dizine eklenmesini önleyebilirsiniz.

## robots.txt Dosyası

robots.txt dosyası, teknik SEO'nun temel taşlarından biridir ve arama motoru botlarının sitenizde nasıl davranacağını yönlendiren bir trafik polisi gibidir.

### robots.txt Nedir?
robots.txt, web sitenizin kök dizininde bulunan ve arama motoru botlarına sitenizdeki hangi alanları tarayabilecekleri veya tarayamayacakları konusunda talimat veren düz metin dosyasıdır. Botlar bir siteyi taramadan önce her zaman robots.txt dosyasını kontrol ederler. Bu dosya, hassas bilgilerin bulunduğu dizinleri, yinelenen içerik barındıran sayfaları veya arama motorlarında görünmesini istemediğiniz diğer alanları botlardan gizlemek için kullanılır.

**Konum:** Her zaman sitenizin ana dizininde bulunur. Örneğin, \`https://siteadiniz.com/robots.txt\`.

### Temel Sözdizimi
robots.txt dosyası basit bir yapıya sahiptir: \`User-agent\` direktifi ile hangi bot için kuralın geçerli olduğu belirtilir, ardından \`Allow\` veya \`Disallow\` direktifleri ile belirli yollara izin verilir veya engellenir.

\`\`\`txt
# Tüm botlara izin ver
User-agent: *
Allow: /

# Belirli klasörü engelle
User-agent: *
Disallow: /admin/
Disallow: /private/
# Tüm botların /admin/ ve /private/ klasörlerini taramasını engeller.

# Sadece Googlebot için kural
User-agent: Googlebot
Disallow: /test/
# Yalnızca Googlebot'un /test/ klasörünü taramasını engellerken, diğer botlar tarayabilir.

# Sitemap konumu
Sitemap: https://siteadiniz.com/sitemap.xml
# Arama motorlarına sitenizin XML sitemap'inin nerede olduğunu bildirir.
\`\`\`

### robots.txt Örnekleri

**WordPress için örnek:**
WordPress siteleri, genellikle yönetim paneli, eklenti dizinleri ve önbellek dosyaları gibi arama motorlarının dizine eklemesini istemediğimiz birçok alana sahiptir.

\`\`\`txt
User-agent: *
Disallow: /wp-admin/           # Yönetim panelini engeller
Disallow: /wp-includes/        # WordPress çekirdek dosyalarını engeller
Disallow: /wp-content/plugins/ # Eklenti dosyalarını engeller
Disallow: /wp-content/cache/   # Önbellek dosyalarını engeller
Disallow: /trackback/          # Geri izleme URL'lerini engeller
Disallow: /feed/               # RSS beslemelerini engeller (genellikle meta robots ile daha iyi yönetilir)
Disallow: /comments/           # Yorum sayfalarını engeller
Allow: /wp-admin/admin-ajax.php # Bazı AJAX işlevlerinin çalışması için izin verir

Sitemap: https://siteadiniz.com/sitemap_index.xml # WordPress SEO eklentileri genellikle bu formatta sitemap oluşturur.
\`\`\`
Bu örnek, sitenizin performansını etkilemeden ve gereksiz sayfaların dizine eklenmesini önleyerek WordPress sitenizin botlar tarafından daha verimli taranmasını sağlar.

**E-ticaret için örnek:**
E-ticaret siteleri, genellikle filtreleme, sıralama ve alışveriş sepeti gibi birçok parametreli URL ve işlevsel sayfa barındırır. Bu sayfaların çoğu yinelenen içerik oluşturur veya arama motorlarında görünmesi istenmez.

\`\`\`txt
User-agent: *
Disallow: /cart/            # Alışveriş sepeti sayfasını engeller
Disallow: /checkout/        # Ödeme sayfasını engeller
Disallow: /my-account/      # Kullanıcı hesap sayfasını engeller
Disallow: /search/          # Site içi arama sonuç sayfalarını engeller
Disallow: /*?*sort=         # Sıralama parametresi içeren tüm URL'leri engeller
Disallow: /*?*filter=       # Filtreleme parametresi içeren tüm URL'leri engeller

Sitemap: https://siteadiniz.com/sitemap.xml # E-ticaret siteleri için sitemap konumu
\`\`\`
Bu örnek, e-ticaret sitelerinin tarama bütçesini ürün ve kategori sayfaları gibi değerli içeriklere odaklamasına yardımcı olurken, kullanıcıya özel veya parametreli sayfaların dizine eklenmesini engeller.

### robots.txt Kuralları
| Direktif     | Açıklama                                                |
|--------------|---------------------------------------------------------|
| \`User-agent\` | Hangi arama motoru botu için geçerli olduğunu belirtir. \`*\` tüm botlar için geçerlidir. |
| \`Disallow\`   | Botların taramasını engellediği yolu belirtir. Tam bir dizin veya belirli bir dosya olabilir. |
| \`Allow\`      | \`Disallow\` kuralı tarafından engellenen bir dizin içindeki belirli bir dosyaya veya alt dizine izin verir. |
| \`Sitemap\`    | XML sitemap dosyasının URL'sini belirtir. Botların sitenizin tüm önemli sayfalarını kolayca bulmasına yardımcı olur. |
| \`Crawl-delay\`| Botların bir sonraki sayfa isteğinden önce ne kadar beklemesi gerektiğini belirtir (saniye cinsinden). **Google bu direktifi artık desteklemiyor.** |

### Yaygın Hatalar
robots.txt dosyası güçlü bir araçtır, ancak yanlış kullanımı sitenizin arama motorlarındaki görünürlüğüne ciddi zararlar verebilir:
*   **Yanlışlıkla tüm siteyi engellemek:** \`Disallow: /\` kuralını \`User-agent: *\` ile kullanmak, sitenizin tamamının taranmasını ve dizine eklenmesini engeller. Bu, sitenizin arama sonuçlarından tamamen kaybolmasına neden olur.
*   **CSS/JS dosyalarını engellemek:** Arama motorları, sayfalarınızı kullanıcılar gibi render etmek için CSS ve JavaScript dosyalarına ihtiyaç duyar. Bu dosyaları engellemek, Google'ın sitenizi doğru şekilde anlamasını ve mobil uyumluluk gibi faktörleri değerlendirmesini engeller.
*   **Önemli sayfaları engellemek:** Yanlışlıkla ürün sayfaları, kategori sayfaları veya blog yazıları gibi önemli içerikleri engellemek, bu sayfaların asla dizine eklenmemesine yol açar.
*   **Sitemap belirtmemek:** Sitemap URL'sini robots.txt'ye eklememek, Google'ın sitenizin tüm önemli sayfalarını bulmasını zorlaştırabilir.

robots.txt dosyanızı düzenlerken her zaman dikkatli olmalı ve değişiklikleri Google Search Console'daki robots.txt test aracı ile doğrulamalısınız.

## XML Sitemap

Sitemap (site haritası), arama motorlarına sitenizdeki önemli sayfaları anlatan bir yol haritasıdır.

### Sitemap Nedir?
XML sitemap, web sitenizdeki tüm önemli sayfaların (veya dizine eklenmesini istediğiniz sayfaların) bir listesini içeren yapılandırılmış bir XML dosyasıdır. robots.txt botlara neyi taramamaları gerektiğini söylerken, sitemap botlara neyi *tarayabileceklerini* ve *önemli olduğunu* gösterir. Özellikle yeni siteler, büyük siteler veya karmaşık site yapılarına sahip siteler için arama motorlarının tüm sayfaları keşfetmesine yardımcı olur.

### Sitemap Yapısı
Bir XML sitemap dosyası, \`urlset\` etiketi içinde her bir URL için \`url\` etiketleri barındırır. Her \`url\` etiketi içinde ise sayfanın konumu (\`loc\`), son değiştirilme tarihi (\`lastmod\`), değişim sıklığı (\`changefreq\`) ve önceliği (\`priority\`) gibi bilgiler bulunur.

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://siteadiniz.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://siteadiniz.com/hizmetler/</loc>
    <lastmod>2024-12-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://siteadiniz.com/blog/teknik-seo-nedir/</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
\`\`\`
*   \`<loc>\`: Sayfanın URL'si. Zorunludur.
*   \`<lastmod>\`: Sayfanın en son değiştirildiği tarih. Botların ne sıklıkla tekrar taraması gerektiği konusunda ipucu verir.
*   \`<changefreq>\`: Sayfanın tahmini değişim sıklığı (always, hourly, daily, weekly, monthly, yearly, never). Botlar için bir ipucudur, kesin bir talimat değildir.
*   \`<priority>\`: Sitenizdeki diğer URL'lere göre bu sayfanın önceliği (0.0'dan 1.0'a kadar). Yine, botlar için bir ipucudur.

### Sitemap Index (Büyük siteler için)
Büyük siteler, tek bir sitemap dosyasının limitlerini (50.000 URL veya 50MB) aşabilir. Bu durumda, birden fazla sitemap dosyasını içeren bir "sitemap index" dosyası kullanılır. Bu index dosyası, diğer sitemap dosyalarını referans gösterir.

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://siteadiniz.com/sitemap-pages.xml</loc>
    <lastmod>2025-01-01</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://siteadiniz.com/sitemap-posts.xml</loc>
    <lastmod>2025-01-01</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://siteadiniz.com/sitemap-products.xml</loc>
    <lastmod>2025-01-01</lastmod>
  </sitemap>
</sitemapindex>
\`\`\`
Bu yapı, sitenizin farklı bölümleri için ayrı sitemap'ler oluşturmanıza ve bunları merkezi bir index dosyasında yönetmenize olanak tanır.

### Sitemap Best Practices
*   **Maksimum Limitler:** Her sitemap dosyası en fazla 50.000 URL içermeli veya 50MB boyutunda olmalıdır (sıkıştırılmamış hali). Bu limitler aşılırsa, sitemap'inizi birden fazla dosyaya bölmelisiniz.
*   **Sadece Canonical URL'leri Ekle:** Sitemap'inize yalnızca sitenizin tercih edilen (canonical) URL'lerini dahil edin. Yinelenen içerik barındıran veya parametreli URL'leri eklemekten kaçının.
*   **noindex Sayfaları Ekleme:** \`noindex\` etiketiyle dizine eklenmesini engellediğiniz sayfaları sitemap'inize dahil etmeyin. Bu, arama motorlarına çelişkili sinyaller gönderebilir.
*   **Düzenli Güncelleme:** Yeni sayfalar eklediğinizde veya mevcut sayfaları güncellediğinizde sitemap'inizi de güncelleyin. Çoğu modern CMS ve SEO eklentisi (örn: Yoast SEO, Rank Math) bu işlemi otomatik olarak yapar.
*   **Search Console'a Gönder:** XML sitemap'inizi Google Search Console'a (ve diğer arama motorlarının webmaster araçlarına) göndererek arama motorlarının sitenizin haritasına kolayca erişmesini sağlayın. Bu, yeni sayfalarınızın daha hızlı keşfedilmesine yardımcı olur.
*   **robots.txt'de Belirt:** Yukarıda bahsedildiği gibi, sitemap URL'nizi robots.txt dosyanızda da belirtmek iyi bir uygulamadır.

## Meta Robots Etiketi

robots.txt dosyasının aksine, meta robots etiketi sayfa bazında direktifler vererek, bir sayfanın dizine eklenip eklenmeyeceğini ve linklerinin takip edilip edilmeyeceğini doğrudan kontrol eder.

### Temel Kullanım
Meta robots etiketi, bir HTML sayfasının \`<head>\` bölümüne yerleştirilir:

\`\`\`html
<meta name="robots" content="index, follow">
\`\`\`
Bu etiket, arama motorlarına "bu sayfayı dizine ekle ve üzerindeki linkleri takip et" talimatını verir. Bu, varsayılan davranıştır ve çoğu sayfa için idealdir.

### Direktifler
Meta robots etiketinde kullanılabilecek çeşitli direktifler bulunur:

| Direktif            | Açıklama                                                                                                                              |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| \`index\`             | Sayfayı arama motoru dizinine ekle. (Varsayılan)                                                                                       |
| \`noindex\`           | Sayfayı arama motoru dizinine ekleme. Sayfa arama sonuçlarında görünmez.                                                              |
| \`follow\`            | Sayfadaki tüm linkleri takip et ve link değerlerini aktar. (Varsayılan)                                                                |
| \`nofollow\`          | Sayfadaki linkleri takip etme ve link değerlerini aktarma.                                                                            |
| \`noarchive\`         | Arama motorlarının bu sayfanın önbelleğe alınmış (cached) bir sürümünü göstermesini engelle.                                           |
| \`nosnippet\`         | Arama sonuçlarında bu sayfa için metin snippet'i veya video önizlemesi gösterme.                                                      |
| \`max-snippet:X\`     | Arama sonuçlarında gösterilecek metin snippet'inin maksimum karakter uzunluğunu (X) belirle. \`-1\` sınırsız, \`0\` hiçbiri anlamına gelir. |
| \`max-image-preview\` | Arama sonuçlarında gösterilecek görsel önizlemesinin maksimum boyutunu belirle (none, standard, large).                               |
| \`unavailable_after\` | Sayfanın belirli bir tarihten sonra arama sonuçlarında görünmemesini sağla.                                                           |

### Kullanım Örnekleri
Meta robots etiketlerinin doğru kullanımı, sitenizin SEO performansını önemli ölçüde etkileyebilir:

\`\`\`html
<!-- Dizinleme ama linkleri takip etme -->
<meta name="robots" content="index, nofollow">
<!-- Bu sayfa dizine eklenecek ancak bu sayfadaki hiçbir dış veya iç link Google tarafından takip edilmeyecek. Genellikle yorum sayfaları veya kullanıcı tarafından oluşturulan içeriklerde spam linkleri önlemek için kullanılır. -->

<!-- Dizinleme yapma -->
<meta name="robots" content="noindex, follow">
<!-- Bu sayfa arama sonuçlarında görünmeyecek ancak üzerindeki linkler takip edilecek. Örneğin, bir teşekkür sayfası veya gizlilik politikası gibi önemli olmayan ancak link değerini aktarması gereken sayfalar için kullanılabilir. -->

<!-- Snippet uzunluğunu sınırla -->
<meta name="robots" content="max-snippet:150">
<!-- Bu, Google'ın arama sonuçlarında sayfanız için göstereceği açıklama metninin 150 karakterle sınırlı olmasını sağlar. -->

<!-- Sadece Google için -->
<meta name="googlebot" content="noindex">
<!-- Bu, sadece Googlebot'un bu sayfayı dizine eklemesini engellerken, diğer arama motorları (Bingbot, Yandexbot vb.) sayfayı dizine ekleyebilir. Belirli botlara özel kurallar tanımlamak için kullanılır. -->
\`\`\`
\`noindex\` direktifi, özellikle teşekkür sayfaları, kullanıcı profilleri, dahili arama sonuçları, filtreleme sayfaları veya geliştirme aşamasındaki sayfalar gibi arama motorlarında görünmesini istemediğiniz içerikler için hayati öneme sahiptir. Yanlışlıkla önemli bir sayfaya \`noindex\` eklemek, o sayfanın arama sonuçlarından tamamen kaybolmasına neden olacaktır.

## Canonical Etiketi

Yinelenen içerik, arama motorları için büyük bir sorundur çünkü hangi sayfanın "orijinal" veya "tercih edilen" sürüm olduğunu anlamakta zorlanırlar. Canonical etiketleri bu sorunu çözmek için tasarlanmıştır.

### Canonical Nedir?
Canonical etiket (\`<link rel="canonical" href="...">\`), arama motorlarına bir sayfanın tercih edilen (orijinal) URL'sini bildiren bir HTML etiketi veya HTTP başlığıdır. Yinelenen içerik sorunlarını çözmek ve link değerini (link equity) doğru sayfaya yönlendirmek için kullanılır. Bu, arama motorlarına "Bu sayfa, belirtilen URL'nin kopyası veya çok benzeridir; lütfen tüm değeri o URL'ye atfedin" mesajını verir.

### Kullanım
Canonical etiket, sayfanın \`<head>\` bölümüne yerleştirilir:

\`\`\`html
<link rel="canonical" href="https://siteadiniz.com/tercih-edilen-sayfa/">
\`\`\`
Bu etiketi kullanan sayfa, arama motorlarına \`https://siteadiniz.com/tercih-edilen-sayfa/\` adresinin bu içeriğin ana versiyonu olduğunu söyler.

### Ne Zaman Kullanılır?
Canonical etiketleri birçok senaryoda kritik öneme sahiptir:

*   **www ve www'siz versiyonlar:** \`https://www.siteadiniz.com/\` ve \`https://siteadiniz.com/\` gibi URL'ler teknik olarak farklı sayfalardır. Tercih edilen versiyonu belirlemek için kullanılır.
*   **HTTP ve HTTPS versiyonları:** Geçiş sonrası HTTP versiyonlarının hala erişilebilir olması durumunda, tüm HTTP sayfaları HTTPS versiyonlarına canonical olarak işaretlenmelidir.
*   **Parametre varyasyonları:** E-ticaret sitelerinde sıkça görülen \`https://siteadiniz.com/urun/?sort=price_asc\` veya \`https://siteadiniz.com/kategori/?filter=color-red\` gibi URL'ler, ana sayfanın (\`https://siteadiniz.com/urun/\` veya \`https://siteadiniz.com/kategori/\`) canonical'ı olarak işaretlenmelidir.
*   **Print versiyonları:** Yazdırılabilir sayfaların ana sayfaya canonical olarak işaretlenmesi.
*   **AMP sayfaları:** Hızlandırılmış Mobil Sayfalar (AMP) genellikle ana mobil sayfanın canonical'ı olarak işaretlenir.
*   **İçerik Sendikasyonu:** İçeriğinizi başka sitelerde yayınlıyorsanız, orijinal kaynağı belirtmek için canonical etiketi kullanmalarını isteyebilirsiniz.
*   **Büyük/Küçük Harf Farklılıkları:** Bazı sunucular URL'lerde büyük/küçük harf ayrımı yapabilir. Tercih edilen versiyonu belirtmek önemlidir.
*   **Sondaki Eğik Çizgi (Trailing Slash):** \`/sayfa/\` ve \`/sayfa\` gibi URL'ler farklı kabul edilebilir. Tutarlı bir yapı için canonical kullanılır.

### Self-referencing Canonical
Her sayfa, kendisinin tercih edilen versiyonu olduğunu belirten bir canonical etiketi içermelidir. Bu, herhangi bir parametre veya başka bir nedenle oluşan yinelenen içerik varyasyonlarına karşı bir güvence sağlar.

\`\`\`html
<!-- https://site.com/urun/ sayfasında, canonical kendisini işaret eder -->
<link rel="canonical" href="https://site.com/urun/">
\`\`\`
Bu uygulama, Google'a sayfanın orijinal olduğunu ve herhangi bir varyasyonunun bu URL'ye yönlendirilmesi gerektiğini açıkça belirtir. Yanlış canonical etiket kullanımı, önemli sayfalarınızın dizinden çıkarılmasına veya yanlış sayfanın sıralanmasına yol açabilir. Bu nedenle, canonical etiketlerini dikkatli ve doğru bir şekilde uygulamak kritik öneme sahiptir.

## Site Hızı ve Core Web Vitals

Site hızı, kullanıcı deneyimi ve dolayısıyla arama motoru sıralamaları için giderek daha önemli hale geliyor. Google, 2021'den itibaren Core Web Vitals (Temel Web Verileri) metriklerini sıralama faktörü olarak kullanmaya başladı.

### Core Web Vitals Metrikleri
Core Web Vitals, kullanıcı deneyiminin anahtar yönlerini ölçen üç temel metriktir.

#### LCP (Largest Contentful Paint)
Sayfanın ana içeriğinin (en büyük görsel veya metin bloğu) yüklenmesi için geçen süreyi ölçer. Bu, kullanıcının sayfanın ana içeriğini ne zaman gördüğünü gösterir.
*   **İyi:** < 2.5 saniye
*   **İyileştirme gerekli:** 2.5 - 4 saniye
*   **Kötü:** > 4 saniye

#### FID (First Input Delay) / INP (Interaction to Next Paint)
**FID (First Input Delay):** Kullanıcının sayfayla ilk etkileşime girmesi (bir düğmeye tıklama, form alanı doldurma) ile tarayıcının bu etkileşime yanıt vermeye başlaması arasındaki süreyi ölçer. Bu, sayfanın etkileşimli olma hızını gösterir.
**INP (Interaction to Next Paint):** FID'in yerini alacak olan INP, bir sayfadaki tüm kullanıcı etkileşimlerinin (tıklamalar, dokunmalar, klavye etkileşimleri) gecikmesini ölçer ve en uzun etkileşimi raporlar.
*   **İyi:** < 100ms (FID) / < 200ms (INP)
*   **Kötü:** > 300ms (FID) / > 500ms (INP)

#### CLS (Cumulative Layout Shift)
Sayfa yüklenirken veya kullanıcı etkileşimindeyken görsel öğelerin ne kadar kaydığını ölçer. Düşük CLS, kararlı bir sayfa düzeni anlamına gelir ve ani içerik kaymalarının neden olduğu kötü kullanıcı deneyimini önler.
*   **İyi:** < 0.1
*   **İyileştirme gerekli:** 0.1 - 0.25
*   **Kötü:** > 0.25

Bu metrikleri iyileştirmek, hem kullanıcı memnuniyetini artırır hem de SEO sıralamanıza olumlu etki eder.

### Hız Optimizasyonu Teknikleri
Site hızınızı ve Core Web Vitals skorlarınızı iyileştirmek için birçok teknik bulunmaktadır:

**Görsel Optimizasyonu:** Görseller genellikle bir sayfanın en büyük parçasıdır ve yüklenme süresini önemli ölçüde etkiler.
\`\`\`html
<!-- Lazy loading (Tembel Yükleme) -->
<img src="resim.jpg" loading="lazy" alt="Açıklama">
<!-- Görsel, kullanıcı ekranda görünene kadar yüklenmez, bu da ilk sayfa yükleme hızını artırır. -->

<!-- WebP formatı ve <picture> etiketi -->
<picture>
  <source srcset="resim.webp" type="image/webp">
  <img src="resim.jpg" alt="Açıklama">
</picture>
<!-- WebP gibi modern formatlar, JPEG/PNG'ye göre daha küçük dosya boyutları sunar. <picture> etiketi, tarayıcının desteklediği en iyi formatı seçmesini sağlar. -->

<!-- Boyut belirtme (CLS için) -->
<img src="resim.jpg" width="800" height="600" alt="Açıklama">
<!-- Görselin genişlik ve yükseklik değerlerini belirtmek, tarayıcının görsel için yer ayırmasını sağlar ve CLS'yi (layout shift)`
  },
  {
    slug: 'backlink-nedir-kaliteli-backlink-alma',
    title: 'Backlink Nedir? Kaliteli Backlink Nasıl Alınır?',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. backlink nedir? kaliteli backlink nasıl alınır? hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '9 dk',
    date: '9 Ocak 2025',
    image: '🔗',
    featured: false,
    metadata: {
      title: 'Backlink Nedir? Kaliteli Backlink Nasıl Alınır? | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. backlink nedir? kaliteli backlink nasıl alınır? hakkında detaylı bilgi.',
      keywords: ['backlink nedir kaliteli backlink alma', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/backlink-nedir-kaliteli-backlink-alma',
      },
    }\`\`
Link Değeri = Kaynak Site Otoritesi × Sayfa Otoritesi × Alaka × Dofollow Durumu
\`\`\`

Bu formüldeki her bir bileşen, bir linkin sitenize ne kadar fayda sağlayacağını belirler:
*   **Kaynak Site Otoritesi:** Linki veren sitenin genel gücü ve itibarıdır (Domain Authority - DA, Domain Rating - DR gibi metriklerle ölçülür). Yüksek otoriteli sitelerden gelen linkler daha değerlidir.
*   **Sayfa Otoritesi:** Linkin verildiği spesifik sayfanın gücü ve itibarıdır (Page Authority - PA gibi metriklerle ölçülür). Linkin geldiği sayfa ne kadar güçlü ve alakalıysa, o kadar değerlidir.
*   **Alaka:** Linki veren sitenin veya sayfanın sizin sitenizin veya linkin verildiği sayfanın konusuyla ne kadar ilgili olduğudur. Bir tesisat blogundan gelen link, bir moda blogundan gelen linke göre tesisat hizmeti veren bir site için çok daha alakalı ve değerlidir.
*   **Dofollow Durumu:** Linkin "dofollow" veya "nofollow" niteliğinde olup olmadığıdır. Dofollow linkler PageRank aktarırken, nofollow linkler doğrudan PageRank aktarmazlar ancak dolaylı faydaları olabilir.

## Link Türleri

Backlinkler farklı niteliklere ve kaynaklara göre sınıflandırılır. Bu sınıflandırmaları anlamak, hangi linklerin sitenize daha fazla değer katacağını ve hangilerinden kaçınmanız gerektiğini belirlemenize yardımcı olur.

### Dofollow vs Nofollow

Linklerin en temel ayrımı, arama motoru botlarına PageRank aktarıp aktarmadığına göre yapılır. Bu, \`rel\` niteliği ile belirlenir.

| Özellik        | Dofollow                                     | Nofollow                                        |
|----------------|----------------------------------------------|-------------------------------------------------|
| SEO değeri     | Yüksek (doğrudan PageRank aktarımı)          | Düşük (dolaylı/sinyal, doğrudan PageRank yok)    |
| PageRank aktarımı | Evet                                         | Hayır (Google tarafından bir ipucu olarak algılanabilir) |
| HTML           | \`<a href="https://siteadi.com">\`             | \`<a href="https://siteadi.com" rel="nofollow">\` |
| Kullanım       | Editöryal linkler, güvenilen kaynaklar       | Ücretli linkler, UGC (kullanıcı içeriği), güvenilmeyen siteler |

**Dofollow Linkler:** Bunlar, SEO değeri açısından en çok aranan linklerdir. Arama motoru botlarına, linkin verildiği sayfaya "güvenoyu" verildiğini ve PageRank'in aktarılması gerektiğini belirtir. Doğal olarak kazanılan editöryal linkler genellikle dofollow'dur.

**Nofollow Linkler:** Google, nofollow linkleri PageRank hesaplamasına doğrudan dahil etmez. Ancak bu, nofollow linklerin tamamen değersiz olduğu anlamına gelmez. Google, 2019'da nofollow'u bir "ipucu" haline getirdiğini duyurdu, yani botlar bu linkleri tarayabilir ve içeriği keşfetmek için kullanabilir. Ayrıca, nofollow linkler sitenize trafik çekebilir, marka bilinirliği sağlayabilir ve dolaylı olarak SEO'ya katkıda bulunabilir. Yorumlar, forum gönderileri, sosyal medya linkleri ve sponsorlu içerikler genellikle nofollow olarak işaretlenir.

### Diğer rel Değerleri
Google, linklerin amacını daha net belirtmek için yeni \`rel\` nitelikleri tanıttı:

\`\`\`html
rel="sponsored" → Ücretli/sponsorlu linkler (reklam veya ödeme karşılığı verilen linkler)
rel="ugc"       → Kullanıcı tarafından oluşturulan içerik (forum yorumları, blog yorumları, kullanıcı profilleri)
rel="noopener"  → Güvenlik amaçlı (yeni sekmede açılan linklerin potansiyel güvenlik açıklarını önler, SEO etkisi yok)
\`\`\`
Bu nitelikler, Google'ın linkleri daha doğru bir şekilde sınıflandırmasına yardımcı olur ve webmasterların link planlarından kaçınarak şeffaf olmalarını teşvik eder. Özellikle \`rel="sponsored"\` ve \`rel="ugc"\` kullanımı, link manipülasyonu şüphesini ortadan kaldırarak sitenizi cezalardan korur.

### Link Kaynağına Göre Türler
Linkler, nasıl elde edildiklerine göre de farklı kategorilere ayrılır:

#### Editorial Links (En Değerli)
Editöryal linkler, bir web sitesinin içeriğinizin kalitesi, değeri veya benzersizliği nedeniyle size doğal olarak, kendi inisiyatifiyle verdiği linklerdir. Bunlar, Google'ın en çok değer verdiği link türüdür çünkü doğal bir referansı temsil ederler.
*   **Nasıl Kazanılır:** Üstün kaliteli, bilgilendirici, orijinal araştırma içeren, ilgi çekici veya eğlenceli içerikler oluşturarak. Bir haber sitesi, blog veya sektör otoritesi, makalenize referans olarak link verebilir.
*   **Özellikleri:** Bağlamsal olarak ilgili, genellikle dofollow, doğal anchor text içerir.
*   **Örnek:** Bir sektör blogunun, sizin blogunuzdaki bir vaka çalışmasına veya istatistiksel araştırmaya referans vermesi.

#### Outreach Links
Outreach linkler, aktif olarak talep ederek veya ilişki kurarak kazanılan linklerdir. Bu stratejiler, doğal link akışını hızlandırmak ve kontrol edilebilir bir şekilde link profili oluşturmak için kullanılır.
*   **Nasıl Kazanılır:** Misafir yazarlık (guest posting), kırık link inşası (broken link building), kaynak sayfalarına eklenme talebi veya sektörel kişilerle ağ kurma yoluyla.
*   **Özellikleri:** Genellikle dofollow, belirli bir strateji dahilinde elde edilir, anchor text üzerinde bir miktar kontrol olabilir.
*   **Örnek:** Bir bloga misafir yazar olarak makale yazıp, makale içinde kendi sitenize link vermeniz.

#### Self-Created Links
Kendi oluşturduğunuz linkler, genellikle düşük değerli ve potansiyel olarak riskli olabilen linklerdir. Bunlar, sitenizin kontrolü dışındaki platformlarda kendi ellerinizle eklediğiniz linklerdir.
*   **Nasıl Kazanılır:** Profil linkleri (sosyal medya, forum profilleri), forum imzaları, blog yorumları, web dizinlerine manuel eklemeler.
*   **Özellikleri:** Çoğunlukla nofollow veya düşük otoriteli sitelerden gelir, kolayca manipüle edilebilir, spam riski taşır.
*   **Örnek:** Bir forumda profilinize sitenizin URL'sini eklemeniz veya bir blog yazısına yorum yaparken sitenize link vermeniz. Bu tür linkler, doğal bir profilin parçası olabilir ancak aşırıya kaçıldığında spam olarak algılanabilir.

## Link Kalite Kriterleri

Bir backlinkin sitenize değer katabilmesi için belirli kalite standartlarını karşılaması gerekir. Google, sitenize gelen her linki titizlikle inceler ve bu linklerin kalitesine göre sitenizin otoritesini belirler. Kaliteli linkler sitenizin sıralamasını yükseltirken, kalitesiz veya manipülatif linkler sitenizin sıralamasını düşürebilir ve hatta manuel cezalara yol açabilir.

### Yüksek Kaliteli Link Özellikleri
Bir backlinkin siteniz için gerçek anlamda faydalı olabilmesi için aşağıdaki özelliklere sahip olması idealdir:

\`\`\`
✓ Otoriter site (DA/DR 40+)
✓ Alakalı sektör/konu
✓ Editöryal içerikten
✓ Dofollow
✓ Doğal anchor text
✓ Trafik alan sayfa
✓ Unique referring domain
\`\`\`

*   **Otoriter site (DA/DR 40+):** Linkin geldiği sitenin genel otoritesi (Domain Authority - DA veya Domain Rating - DR gibi metriklerle ölçülür) ne kadar yüksekse, o link o kadar değerlidir. DA/DR 40 ve üzeri siteler genellikle güvenilir ve otoriter kabul edilir.
*   **Alakalı sektör/konu:** Linki veren sitenin veya sayfanın sizin sitenizin veya linkin verildiği sayfanın konusuyla ilgili olması kritik öneme sahiptir. Örneğin, bir evcil hayvan sitesi için bir veteriner kliniği blogundan gelen link, bir otomobil blogundan gelen linkten çok daha değerlidir.
*   **Editöryal içerikten:** Linkin, bir makale veya blog yazısının doğal akışı içinde, editöryal bir karar sonucunda verilmiş olması gerekir. Footer (altbilgi) veya sidebar (kenar çubuğu) gibi sitenin genelinde tekrar eden linkler genellikle daha az değerlidir.
*   **Dofollow:** PageRank ve link suyu aktarımı için dofollow linkler tercih edilir. Nofollow linklerin dolaylı faydaları olsa da, doğrudan SEO değeri aktarmazlar.
*   **Doğal anchor text:** Linkin üzerinde tıklandığında gidilecek sayfa hakkında bilgi veren metin (anchor text) doğal ve çeşitli olmalıdır. Aşırı optimize edilmiş anahtar kelime ağırlıklı anchor text kullanmaktan kaçınılmalıdır.
*   **Trafik alan sayfa:** Linkin geldiği sayfanın kendi başına organik trafik alıyor olması, o sayfanın Google gözünde değerli olduğunun bir işaretidir ve bu linkin sitenize daha fazla değer aktarmasına yardımcı olabilir.
*   **Unique referring domain:** Her yeni ve farklı bir domainden gelen link, sitenizin link profilini zenginleştirir. Aynı domainden gelen çok sayıda link yerine, farklı domainlerden gelen linkler daha değerlidir.

### Düşük Kaliteli/Riskli Link Özellikleri
Bu tür linkler sitenizin SEO performansına zarar verebilir ve Google cezalarına yol açabilir. Kaçınılması gereken link özellikleri şunlardır:

\`\`\`
✗ Spam siteler
✗ Link farm'lar
✗ PBN (Private Blog Network)
✗ Aşırı optimize anchor text
✗ Satın alınmış linkler
✗ Alakasız siteler
✗ Sitewide linkler (footer, sidebar)
\`\`\`

*   **Spam siteler:** Kumar, yetişkin içerik, ilaç veya düşük kaliteli ürünler satan, otomatik içerik üreten veya genel olarak güvenilmez sitelerden gelen linkler sitenize zarar verir.
*   **Link farm'lar:** Sadece link değişimi veya link satışı amacıyla oluşturulmuş, genellikle düşük kaliteli ve alakasız sitelerden oluşan ağlardır. Google bu ağları kolayca tespit eder.
*   **PBN (Private Blog Network):** Bir kişinin veya grubun sadece link inşası amacıyla kurduğu, farklı IP adresleri ve domainler kullanarak doğal görünmeye çalışan blog ağlarıdır. Google'ın spam politikalarına aykırıdır ve yakalandığında ciddi cezalara neden olur.
*   **Aşırı optimize anchor text:** Tüm linklerinizin aynı anahtar kelimeyi (exact match anchor) kullanması, arama motorlarına link manipülasyonu yaptığınız sinyalini verir. Bu, doğal olmayan bir profildir.
*   **Satın alınmış linkler:** Google, PageRank aktarımı amacıyla link satın alınmasını veya satılmasını spam politikalarına aykırı bulur. Bu tür linkler, \`rel="sponsored"\` olarak işaretlenmelidir. Aksi takdirde ceza riski vardır.
*   **Alakasız siteler:** Sektörünüzle veya içeriğinizle hiçbir ilgisi olmayan sitelerden gelen linkler, Google gözünde doğal değildir ve sitenize değer katmaz.
*   **Sitewide linkler (footer, sidebar):** Bir sitenin tüm sayfalarında (footer veya sidebar gibi alanlarda) tekrar eden linkler, genellikle editöryal olarak verilmez ve spam olarak algılanabilir. Özellikle exact match anchor text ile kullanıldığında risklidir.

## Link Building Stratejileri

Kaliteli backlinkler kazanmak, stratejik bir yaklaşım ve sabır gerektiren bir süreçtir. İşte en etkili ve etik link building stratejileri:

### 1. İçerik Temelli Stratejiler
En iyi backlinkler, genellikle oluşturduğunuz harika içerikler sayesinde doğal olarak kazanılır. "Link-worthy" (linke değer) içerik, link inşasının temelidir.

#### Skyscraper Tekniği
Bu teknik, mevcut popüler içeriği bulup, ondan çok daha iyi bir versiyonunu oluşturarak orijinal içeriğe link veren sitelerden link talep etmeye dayanır.

\`\`\`
ADIMLAR:
1. Sektörde popüler içerik bul
2. Çok daha iyi versiyonunu oluştur
3. Orijinale link veren siteleri bul
4. Yeni içeriğini tanıt ve link iste
\`\`\`

**Uygulama:**
1.  **Sektörde popüler içerik bul:** Ahrefs, SEMrush gibi araçlarla veya basit Google aramalarıyla (örneğin "en iyi [anahtar kelime] rehberi") sektörünüzdeki en çok link alan veya en popüler içerikleri bulun.
2.  **Çok daha iyi versiyonunu oluştur:** Bulduğunuz içerikten daha güncel, daha kapsamlı, daha görsel, daha detaylı, daha iyi araştırılmış bir içerik oluşturun. Eksiklerini tamamlayın, yeni bilgiler ekleyin, infografikler, videolar veya orijinal verilerle zenginleştirin.
3.  **Orijinale link veren siteleri bul:** Ahrefs veya SEMrush gibi araçların "Backlink Checker" özelliğini kullanarak orijinal içeriğe link veren tüm siteleri tespit edin.
4.  **Yeni içeriğini tanıt ve link iste:** Bu sitelerin webmasterlarına veya içerik editörlerine ulaşarak, orijinal içeriği okuduğunuzu, ancak sizin oluşturduğunuz yeni ve daha kapsamlı içeriğin okuyucuları için daha faydalı olabileceğini belirten kişiselleştirilmiş bir e-posta gönderin.

**Örnek:**
\`\`\`
Rakip içerik: "10 Su Kaçağı Belirtisi" (50 backlink almış, eski ve kısa)
Senin içerik: "25 Su Kaçağı Belirtisi + Nedenleri + Çözüm Rehberi + İnfografik" (Daha kapsamlı, güncel, görsel)
→ Rakibe link verenlere ulaş ve kendi içeriğini öner.
\`\`\`

#### Orijinal Araştırma
Kimsenin sahip olmadığı veriler ve bilgiler sunmak, sitenize doğal olarak link çekmenin en etkili yollarından biridir.
*   **Anket sonuçları:** Kendi sektörünüzle ilgili anketler yaparak benzersiz veriler elde edin ve sonuçları bir blog yazısı veya rapor halinde yayımlayın.
*   **Sektör istatistikleri:** Sektörünüze özel istatistikleri derleyin, analiz edin ve görselleştirin.
*   **Vaka çalışmaları:** Başarılı projelerinizi detaylı vaka çalışmaları halinde sunarak, sektördeki diğer profesyonellerin referans almasını sağlayın.
*   **Trend raporları:** Sektördeki güncel trendleri, geleceğe yönelik tahminleri içeren raporlar hazırlayın.

**Örnek:** "2025 İstanbul Tesisat Hizmetleri Fiyat Araştırması" - Bu tür bir araştırma, yerel haber siteleri veya sektör blogları için değerli bir kaynak olabilir.

#### Kapsamlı Rehberler
"Ultimate guide" veya "A-Z rehber" formatındaki içerikler, genellikle uzun ömürlü ve çok sayıda link çekme potansiyeli olan içeriklerdir.
*   **Ultimate guide'lar:** Bir konuyu baştan sona, tüm detaylarıyla ele alan kapsamlı rehberler.
*   **A-Z rehberler:** Bir konunun tüm alfabetik terimlerini açıklayan sözlük tarzı rehberler.
*   **Başlangıç kılavuzları:** Belirli bir konu hakkında yeni başlayanlar için adım adım yol gösteren içerikler.

### 2. İlişki Temelli Stratejiler
İlişki kurmak, link inşasının insani yüzüdür. Diğer webmasterlar, blog yazarları ve gazetecilerle bağlantı kurarak değerli linkler elde edebilirsiniz.

#### Guest Posting (Misafir Yazarlık)
Diğer alakalı sitelerde misafir yazar olarak içerik yayınlamak, hem marka bilinirliği hem de kaliteli backlinkler kazanmak için güçlü bir yöntemdir.

\`\`\`
SÜREÇ:
1. Hedef siteleri belirle
   └── Ahrefs'te "write for us" + [sektör] ara

2. Site kalitesini kontrol et
   └── DA/DR, trafik, spam skoru

3. Pitch e-postası gönder
   └── Kişiselleştirilmiş, değer odaklı

4. Kaliteli içerik yaz
   └── Sadece link için değil, değer için

5. Doğal link yerleştir
   └── İçerik içinde, bağlamsal
\`\`\`

**Uygulama:**
1.  **Hedef siteleri belirle:** Sektörünüzle alakalı, otoriter ve hedef kitlenize hitap eden blogları ve web sitelerini bulun. Google'da "write for us [sektörünüz]", "[sektörünüz] misafir yazar", "[sektörünüz] contribute" gibi aramalar yapın. Ahrefs Content Explorer gibi araçlar da size yardımcı olabilir.
2.  **Site kalitesini kontrol et:** Seçtiğiniz sitelerin DA/DR değerlerini, aylık organik trafiklerini, spam skorlarını ve yayınladıkları içeriğin kalitesini kontrol edin. Düşük kaliteli veya spam sitelerden uzak durun.
3.  **Pitch e-postası gönder:** Site sahibine veya içerik editörüne kişiselleştirilmiş, sitelerine nasıl değer katabileceğinizi açıklayan bir e-posta gönderin. Önerdiğiniz konu başlıklarını ve neden sizin bu konuda uzman olduğunuzu belirtin.
4.  **Kaliteli içerik yaz:** Tek amacınız link almak olmamalıdır. Okuyucular için gerçekten değerli, bilgilendirici ve iyi yazılmış bir içerik oluşturun. Misafir yazar olduğunuz sitenin yayın standartlarına uyun.
5.  **Doğal link yerleştir:** Kendi sitenize verdiğiniz linki, makalenin doğal akışı içinde, okuyucular için faydalı olacak şekilde ve ilgili bir anchor text ile yerleştirin. Genellikle yazar biyografisinde de bir link hakkı verilir.

#### HARO (Help A Reporter Out)
HARO, gazetecilerin ve içerik oluşturucuların belirli konularda uzman görüşü aradığı bir platformdur. Uzmanlığınızı paylaşarak medyada yer alabilir ve yüksek otoriteli sitelerden link kazanabilirsiniz.

\`\`\`
Gazeteci soruları yanıtla → Medyada yer al → Kaliteli backlink kazan
\`\`\`

**Uygulama:** HARO'ya kaydolun ve günlük olarak gelen e-postaları takip edin. Alanınızla ilgili bir soru gördüğünüzde, hızlı ve profesyonel bir yanıt hazırlayın. Yanıtınızın sonunda kendi uzmanlığınızı ve web sitenizi belirterek, gazetecinin size referans vermesini sağlayabilirsiniz.

#### Podcast/Röportajlar
Sektörel podcast'lere konuk olmak veya röportaj vermek, hem marka bilinirliği hem de link kazanımı için harika bir yoldur.
*   **Sektörel podcast'lere konuk ol:** Sektörünüzdeki popüler podcast'leri araştırın ve konuk olma talebinde bulunun.
*   **Röportaj ver:** Sektör blogları veya haber siteleri için röportajlar verin.
*   **Show notes'dan link al:** Genellikle podcast veya röportajların "show notes" (açıklamalar) bölümünde konukların web sitelerine link verilir. Bu linklerin dofollow olduğundan emin olun.

### 3. Teknik Stratejiler
Bu stratejiler, daha çok teknik SEO bilgisi ve araç kullanımını gerektirir ancak oldukça etkili olabilir.

#### Broken Link Building (Kırık Link İnşası)
Bu strateji, diğer sitelerdeki kırık linkleri (404 hatası veren linkler) tespit edip, kendi alakalı içeriğinizi kırık linkin yerine önermeye dayanır.

\`\`\`
SÜREÇ:
1. Rakip siteleri Ahrefs'te tara
2. 404 veren sayfaları bul
3. Bu sayfalara link veren siteleri tespit et
4. Kendi alternatif içeriğini oluştur
5. Site sahiplerine ulaş, kırık linki bildir
6. Alternatif olarak kendi içeriğini öner
\`\`\`

**Uygulama:**
1.  **Rakip siteleri Ahrefs'te tara:** Ahrefs Site Explorer veya SEMrush Site Audit gibi araçları kullanarak rakip sitelerin veya sektörünüzdeki büyük sitelerin backlink profillerini analiz edin.
2.  **404 veren sayfaları bul:** Bu araçların "Broken Backlinks" veya "Best by Links" raporlarında 404 hatası veren sayfaları tespit edin.
3.  **Bu sayfalara link veren siteleri tespit et:** Kırık linke hangi sitelerin link verdiğini bulun. Bu, sizin outreach hedef kitleniz olacaktır.
4.  **Kendi alternatif içeriğini oluştur:** Kırık linkin konusuna benzer veya daha iyi, kapsamlı bir içerik oluşturun.
5.  **Site sahiplerine ulaş, kırık linki bildir:** Kırık linki veren site sahiplerine nazik bir e-posta göndererek, sitelerindeki kırık linki bildirin.
6.  **Alternatif olarak kendi içeriğini öner:** Kırık linkin yerine, okuyucuları için faydalı olabileceğini düşündüğünüz kendi içeriğinizi alternatif olarak önerin.

**E-posta Şablonu:**
\`\`\`
Konu: [Site Adı]'nda Kırık Link Bildirimi

Merhaba [İsim],

"[Makale adı]" yazınızı okurken [kırık link URL]'nin artık
çalışmadığını fark ettim.

Bu konuda benzer ve daha`
  },
  {
    slug: 'icerik-seo-google-sevdigi-icerikler',
    title: 'İçerik SEO\'su: Google\'ın Sevdiği İçerikler',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. i̇çerik seo'su: google'ın sevdiği i̇çerikler hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '10 dk',
    date: '7 Ocak 2025',
    image: '📝',
    featured: false,
    metadata: {
      title: 'İçerik SEO\'su: Google\'ın Sevdiği İçerikler | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. i̇çerik seo'su: google'ın sevdiği i̇çerikler hakkında detaylı bilgi.',
      keywords: ['icerik seo google sevdigi icerikler', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/icerik-seo-google-sevdigi-icerikler',
      },
    }\`\`
Anahtar kelime: "su kaçağı"

SERP Analizi:
- Üst sonuçlar bilgilendirici içerik mi? → Bilgilendirici niyet (örn. "Su Kaçağı Belirtileri", "Su Kaçağı Nasıl Bulunur?")
- Üst sonuçlar hizmet sayfaları mı? → İşlemsel niyet (örn. "Su Kaçağı Tespiti Hizmeti", "Su Tesisatçısı")
- Karışık sonuçlar mı? → Karma niyet (hem bilgilendirici hem de işlemsel içerik üretmek gerekebilir)
\`\`\`

Bu analiz, hangi anahtar kelime için ne tür bir içerik üretmeniz gerektiği konusunda size net bir yol haritası sunar.

### 2. Konu Kümeleri (Topic Clusters): Google'ın Konusal Otoriteye Bakışı

Konu kümeleri stratejisi, web sitenizin belirli bir konuda derinlemesine uzmanlık ve otorite sergilemesine olanak tanır. Bu model, tekil anahtar kelimeler yerine geniş konular etrafında içerikler oluşturmayı hedefler. Bir ana (pillar) sayfa ve bu ana sayfayı destekleyen, daha spesifik alt (cluster) sayfalardan oluşur.

#### Topic Cluster Modeli

Bu model, bir ana konuyu ele alan kapsamlı bir pillar sayfa ve bu konunun alt başlıklarını detaylandıran cluster sayfalarından oluşur. Cluster sayfaları, pillar sayfaya ve birbirlerine iç linklerle bağlanır.

\`\`\`
                    ┌─────────────────┐
                    │   PILLAR PAGE   │
                    │  (Ana İçerik)   │
                    │ "Su Tesisatı    │
                    │  Rehberi"       │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ CLUSTER PAGE  │   │ CLUSTER PAGE  │   │ CLUSTER PAGE  │
│ "Su Kaçağı    │   │ "Tıkanıklık   │   │ "Petek        │
│  Tespiti"     │   │  Açma"        │   │  Temizleme"   │
└───────────────┘   └───────────────┘   └───────────────┘
        │                    │                    │
   ┌────┴────┐          ┌────┴────┐          ┌────┴────┐
   ▼         ▼          ▼         ▼          ▼         ▼
[Blog 1] [Blog 2]   [Blog 3] [Blog 4]   [Blog 5] [Blog 6]
\`\`\`

Bu yapıda, "Su Tesisatı Rehberi" pillar sayfa iken, "Su Kaçağı Tespiti", "Tıkanıklık Açma" ve "Petek Temizleme" cluster sayfalardır. Her bir cluster sayfa da kendi içinde daha spesifik blog yazılarıyla desteklenir.

#### Cluster Avantajları

1.  **Konusal otorite oluşturur (siteFocusScore):** Google, sitenizin belirli bir alanda uzman olduğunu anlar ve bu da genel sıralamanızı yükseltir.
2.  **İç linkler güçlenir:** Sistemli iç linkleme, sayfa yetkisini siteniz içinde dağıtır ve Google botlarının içeriğinizi daha iyi keşfetmesini sağlar.
3.  **Kullanıcı deneyimi artar:** Kullanıcılar, aradıkları bilgilere daha kolay ulaşır ve ilgili konuları keşfetmek için sitenizde daha fazla zaman geçirir.
4.  **Sıralama potansiyeli yükselir:** Birbirini destekleyen içerikler sayesinde, tekil anahtar kelimelerden ziyade geniş konu başlıklarında sıralama elde etme şansınız artar.

### 3. İçerik Piramidi: Yapısal Zenginlik

İçerik piramidi, farklı derinlik ve kapsamdaki içerik türlerini hiyerarşik bir düzende sunarak web sitenizin bilgi mimarisini zenginleştirir. Bu model, hem kullanıcılar hem de arama motorları için sitenizin değerini artırır.

\`\`\`
                    ▲
                   /│\\
                  / │ \\     CORNERSTONE
                 /  │  \\    (Temel içerikler)
                /───┼───\\   Kapsamlı, evergreen
               /    │    \\  
              /─────┼─────\\ PILLAR
             /      │      \\ (Destek içerikler)
            /───────┼───────\\ Orta derinlik
           /        │        \\
          /─────────┼─────────\\ CLUSTER
         /          │          \\ (Blog/makale)
        /───────────┼───────────\\ Spesifik konular
       ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
\`\`\`

*   **CORNERSTONE (Köşe Taşı) İçerikler:** Bunlar, sitenizin en önemli, en kapsamlı ve genellikle en uzun içerikleridir. Geniş bir konuyu derinlemesine ele alır ve zamanla değerini kaybetmeyen (evergreen) niteliktedir. Genellikle anahtar kelime araştırmanızdaki en geniş terimleri hedefler.
*   **PILLAR (Destek) İçerikler:** Köşe taşı içeriklerini destekleyen, ancak onlardan biraz daha spesifik olan içeriklerdir. Orta düzeyde derinliğe sahiptir ve genellikle konu kümesi yapısındaki ana sayfalar olarak işlev görür.
*   **CLUSTER (Küme) İçerikler:** Bunlar, en spesifik ve genellikle blog yazıları veya makaleler şeklinde olan içeriklerdir. Daha dar anahtar kelimeleri veya alt konuları hedefler ve pillar sayfalarına link verir.

Bu piramit yapısı, sitenizin her seviyede değerli bilgi sunduğunu gösterir ve Google'ın içeriğinizin kapsamını ve derinliğini anlamasına yardımcı olur.

## Google'ın Değer Verdiği İçerik Türleri

Google, farklı kullanıcı niyetlerine hitap eden çeşitli içerik türlerine değer verir. Bir içerik stratejisi, bu türleri dengeli bir şekilde kullanarak hem geniş bir kitleye ulaşmayı hem de farklı amaçlara hizmet etmeyi hedefler. İşte Google'ın özellikle önemsediği başlıca içerik türleri:

### 1. Evergreen İçerik: Zamansız Değer

Evergreen içerik, adından da anlaşılacağı gibi, zamanla değerini kaybetmeyen, her zaman güncelliğini koruyan ve sürekli trafik çekme potansiyeli olan içeriklerdir. Bu tür içerikler, genellikle "nasıl yapılır", "nedir", "rehber" veya "sözlük" formatında olur.

**Örnekler:**
- "Su Kaçağı Nasıl Tespit Edilir?" (rehber)
- "Tıkanıklık Açma Yöntemleri" (how-to)
- "Tesisat Terimleri Sözlüğü" (kaynak)

**Özellikleri:**
-   **Uzun ömürlü trafik:** Yıllarca organik trafik çekmeye devam eder.
-   **Link çekme potansiyeli yüksek:** Diğer siteler tarafından referans gösterilme ve link alma olasılığı fazladır.
-   **Düzenli güncelleme gerektirir:** Bilgiler eskidiğinde veya yeni gelişmeler olduğunda küçük güncellemelerle tazeliğini korumak önemlidir.
-   **Yüksek konumsal değer:** Sitenizin bir otorite kaynağı olmasını sağlar.

### 2. Güncel İçerik: Anlık İlgiyi Yakalama

Güncel içerikler, zamana duyarlı, trend konuları, haberleri veya mevsimsel olayları ele alan içeriklerdir. Bu içerikler, anlık ilgi ve hızlı trafik artışı sağlamak için idealdir.

**Örnekler:**
- "2025 İSKİ Tesisat Fiyatları"
- "Kış Aylarında Boru Donması Önleme"
- "Yeni Tesisat Yönetmeliği Değişiklikleri"

**Özellikleri:**
-   **Hızlı trafik spike'ı:** Kısa sürede yüksek organik trafik ve sosyal medya etkileşimi yaratabilir.
-   **Kısa ömürlü:** İlgisi genellikle kısa sürelidir ve zamanla azalır.
-   **Sosyal medya paylaşım potansiyeli:** Güncel konular, sosyal medyada hızla yayılma eğilimindedir.
-   **Marka bilinirliği:** Sektördeki gelişmeleri takip ettiğinizi ve güncel kaldığınızı gösterir.

### 3. Hizmet/Ürün Sayfaları: Dönüşüm Odaklı Yaklaşım

Hizmet ve ürün sayfaları, sitenizin doğrudan ticari hedeflerine hizmet eden, dönüşüm odaklı içeriklerdir. Bu sayfalar, potansiyel müşterileri bilgilendirerek ve ikna ederek satın alma veya hizmet alma eylemine yönlendirmelidir.

**Yapısı:**
1.  **Başlık (H1):** Anahtar kelime + Değer önerisi (örn. "İstanbul Su Kaçağı Tespiti - Kameralı ve Garantili Hizmet")
2.  **Hero section:** Ana mesaj + Güçlü bir CTA (Call to Action) (örn. "Hemen Ara!" veya "Teklif Al!")
3.  **Sorun tanımı:** Müşterinin acısını veya ihtiyacını vurgulama (örn. "Su faturanız yüksek mi geliyor?")
4.  **Çözüm sunumu:** Hizmet detayları, süreci ve faydaları açıklama.
5.  **Özellikler/Avantajlar:** Hizmetinizin veya ürününüzün öne çıkan yönleri.
6.  **Sosyal kanıt:** Müşteri yorumları, referanslar, vaka çalışmaları, logolar.
7.  **SSS bölümü:** Sıkça sorulan sorulara kısa ve net cevaplar.
8.  **Son CTA:** Sayfanın sonunda tekrar bir eylem çağrısı.

Bu sayfalar, kullanıcıların arama niyetleri işlemsel olduğunda Google'ın tercih ettiği içerik türlerindendir.

### 4. Blog İçerikleri: Sürekli Değer Üretimi

Blog içerikleri, yukarıda bahsedilen evergreen ve güncel içerik türlerinin bir kombinasyonunu barındırabilir. Sitenizin organik trafiğini artırmak, konusal otorite oluşturmak ve hedef kitlenizle düzenli etkileşim kurmak için vazgeçilmezdir.

#### Blog Yazısı Şablonu

\`\`\`markdown
# [Başlık - 60 karakter, anahtar kelime içeren]
İçerik SEO'su: Google'ın Sevdiği İçerikler Nasıl Oluşturulur?

[Meta açıklama - 155 karakter]
Google'ın algoritmalarını memnun eden, kullanıcı odaklı ve yüksek kaliteli içerikler oluşturmanın sırlarını keşfedin. Detaylı rehberimizle SEO başarınızı artırın!

## Giriş (100-150 kelime)
Dijital pazarlamanın kalbinde yer alan içerik SEO'su, web sitenizin Google'da görünürlüğünü artırmanın anahtarıdır. Ancak sadece içerik üretmek yeterli değildir; Google'ın gerçekten "sevdiği" ve üst sıralara taşıdığı içerikleri oluşturmak stratejik bir yaklaşım gerektirir. Bu yazımızda, arama motorlarının neden bazı içerikleri diğerlerinden daha fazla ödüllendirdiğini, kaliteli içeriğin tanımını ve kendi web siteniz için Google dostu içerikler üretmenin pratik yollarını adım adım inceleyeceğiz. Eğer web sitenizin organik trafiğini artırmak, otoritenizi sağlamlaştırmak ve daha fazla dönüşüm elde etmek istiyorsanız, doğru yerdesiniz.

## Google Neden Bazı İçerikleri Daha Çok Sever?
Google'ın amacı, kullanıcının arama sorgusuna en alakalı, güvenilir ve kapsamlı cevabı sunmaktır. Bu nedenle, sadece anahtar kelimelerle doldurulmuş metinler yerine, gerçek değer sunan, okunabilirliği yüksek ve kullanıcı niyetini tam olarak karşılayan içerikleri tercih eder. Bir içeriğin Google tarafından sevilmesi için, kullanıcıların sorularını eksiksiz yanıtlaması, güvenilir kaynaklara dayanması ve benzersiz bir bakış açısı sunması gerekir.

### Kullanıcı Deneyimi Odaklılık
Google, içeriğin sadece metin kalitesine değil, aynı zamanda sayfanın genel kullanıcı deneyimine de bakar. Hızlı yüklenen sayfalar, mobil uyumluluk, kolay okunabilir yazı tipleri ve düzenli başlık hiyerarşisi gibi faktörler, içeriğinizin Google tarafından daha iyi değerlendirilmesini sağlar. Kullanıcılar sitenizde ne kadar uzun süre kalırsa, ne kadar çok sayfayı ziyaret ederse ve geri dönme oranı ne kadar düşük olursa, Google içeriğinizin o kadar değerli olduğunu düşünür.

### Kapsamlılık ve Derinlik
Yüzeysel bilgiler sunan içerikler yerine, bir konuyu tüm yönleriyle ele alan, derinlemesine bilgi sağlayan içerikler Google tarafından daha çok takdir edilir. Bu, sadece uzunluk anlamına gelmez; aynı zamanda konunun farklı alt başlıklarını, ilgili soruları ve pratik örnekleri kapsamasını da ifade eder. Kapsamlı içerikler, kullanıcıların başka bir kaynağa gitme ihtiyacı duymadan tüm bilgilerini tek bir yerden almasını sağlar.

## İçerik Optimizasyonu: Google'ın Algoritmasını Beslemek

İçerik oluşturmak kadar, bu içeriği arama motorları için optimize etmek de büyük önem taşır. İçerik optimizasyonu (On-Page SEO), sayfa içi faktörleri düzenleyerek Google'ın içeriğinizi daha iyi anlamasını ve sıralamasını sağlar.

### On-Page SEO Faktörleri

#### Title Tag (Başlık Etiketi)
Title tag, arama sonuçlarında görünen ve sayfanızın ne hakkında olduğunu Google'a ve kullanıcılara bildiren en önemli SEO faktörlerinden biridir.

\`\`\`
Format: [Birincil Anahtar Kelime] - [İkincil/Marka] | [Site Adı]
Uzunluk: 50-60 karakter

Örnek:
"Su Kaçağı Tespiti İstanbul - 7/24 Acil Servis | Berat Tesisat"
\`\`\`
Anahtar kelimenizi başlığın başına yakın yerleştirmek, alaka düzeyini artırır. Başlığınız hem açıklayıcı hem de tıklama çekici olmalıdır.

#### Meta Description
Meta açıklama, arama sonuçlarında başlığın altında görünen kısa bir özet metindir. Doğrudan sıralama faktörü olmasa da, tıklama oranını (CTR) etkileyerek dolaylı yoldan SEO'ya katkı sağlar.

\`\`\`
Format: [Sorun] + [Çözüm] + [CTA]
Uzunluk: 150-160 karakter

Örnek:
"İstanbul'da su kaçağı mı var? Kameralı tespit sistemiyle kaynağı 
30 dakikada buluyoruz. 7/24 acil servis. Hemen arayın: 0534 383 7758"
\`\`\`
Meta açıklamanızda anahtar kelimenizi kullanmak, arama sonuçlarında kalın görünmesini sağlayabilir ve kullanıcının dikkatini çekebilir.

#### Başlık Hiyerarşisi
HTML başlık etiketleri (H1-H6), içeriğinizi yapılandırmak ve okunabilirliğini artırmak için kullanılır. Google, bu hiyerarşiyi içeriğinizin ana konularını ve alt konularını anlamak için kullanır.

\`\`\`html
<h1>Su Kaçağı Tespiti İstanbul</h1>
  <h2>Su Kaçağı Belirtileri</h2>
    <h3>Görünür Belirtiler</h3>
    <h3>Gizli Belirtiler</h3>
  <h2>Tespit Yöntemlerimiz</h2>
    <h3>Kameralı Tespit</h3>
    <h3>Termal Tespit</h3>
  <h2>Hizmet Bölgelerimiz</h2>
  <h2>Sık Sorulan Sorular</h2>
\`\`\`
Her sayfada yalnızca bir H1 etiketi olmalı ve bu etiket sayfanın ana konusunu yansıtmalıdır. H2, H3 gibi alt başlıklar ise ana konunun detaylarını ve alt bölümlerini belirtir.

#### İçerik Uzunluğu Rehberi
İçerik uzunluğu, konunun derinliği ve kullanıcı niyetine bağlı olarak değişir. Ancak genel olarak, Google kapsamlı içerikleri sever.

| İçerik Türü       | Önerilen Uzunluk |
| ----------------- | ---------------- |
| Blog yazısı       | 1.500-2.500 kelime |
| Hizmet sayfası    | 800-1.500 kelime |
| Pillar page       | 3.000-5.000 kelime |
| Ürün açıklaması   | 300-500 kelime   |
| SSS cevabı        | 50-200 kelime    |

Bu uzunluklar sadece bir rehberdir; önemli olan, konuyu eksiksiz ve değerli bir şekilde ele almaktır, sırf uzun olsun diye doldurma içerik üretmekten kaçınılmalıdır.

### Görsel Optimizasyonu: Google İçin Görsel Anlaşılırlık

Görseller, içeriği zenginleştirir, okunabilirliği artırır ve kullanıcı deneyimini iyileştirir. Ancak görsellerin SEO'ya katkı sağlaması için doğru şekilde optimize edilmesi gerekir.

#### Görsel SEO Checklist
\`\`\`
□ Dosya adı optimize (su-kacagi-tespiti.jpg)
□ Alt text eklendi (açıklayıcı, anahtar kelimeli)
□ Boyut sıkıştırıldı (WebP formatı önerilir)
□ Boyutlar belirtildi (width, height)
□ Lazy loading aktif (sayfa hızını artırır)
□ Responsive görseller kullanıldı (mobil uyumluluk)
\`\`\`

#### Alt Text Örnekleri
Alt metin (alt text), görsel yüklenemediğinde veya ekran okuyucular tarafından kullanıldığında görseli açıklayan metindir. Google botları da görselleri bu metinler aracılığıyla anlar.

\`\`\`html
<!-- KÖTÜ -->
<img src="img1.jpg" alt="resim">
<img src="foto.jpg" alt="su kaçağı su kaçağı tespiti kaçak su">

<!-- İYİ -->
<img src="su-kacagi-tespiti-termal-kamera.jpg" 
     alt="Termal kamera ile duvardaki su kaçağı tespiti işlemi">
\`\`\`
Alt metinlerinizde anahtar kelimelerinizi doğal bir şekilde kullanmaya özen gösterin.

### İç Link Stratejisi: Site İçi Akış ve Otorite

İç linkler, web sitenizdeki bir sayfadan başka bir sayfaya verilen linklerdir. Bu linkler, Google botlarının sitenizi taramasına, sayfalarınız arasındaki ilişkiyi anlamasına ve sayfa otoritesini dağıtmasına yardımcı olur.

#### İç Link Kuralları
1.  **Doğal yerleştir:** Kullanıcı deneyimini düşünerek, alakalı noktalara link verin.
2.  **Alakalı sayfalara link ver:** Bağlantı verilen sayfanın, link veren sayfayla konusal olarak ilişkili olması önemlidir.
3.  **Açıklayıcı anchor text kullan:** Linkin hangi sayfaya gittiğini ve ne hakkında olduğunu anlatan anahtar kelimeler içeren metinler kullanın.
4.  **Önemli sayfalara daha çok link ver:** Pillar sayfalarınız veya dönüşüm odaklı sayfalarınız daha fazla iç link almalıdır.
5.  **Orphan sayfa bırakma:** Her sayfanın en az 1 iç link alarak sitenizin genel yapısına dahil olduğundan emin olun.

#### İç Link Yapısı Örneği
\`\`\`
/su-tesisati-rehberi/ (Pillar)
    ↓ link verir
/su-kacagi-tespiti/ (Cluster)
    ↓ link verir
/blog/su-kacagi-belirtileri/ (Supporting)
    ↓ link verir
/bolge/atasehir-su-tesisatcisi/ (Location)
\`\`\`
Bu yapı, Google'a sitenizin güçlü bir iç bağlantı ağına sahip olduğunu ve otoritenin sayfalar arasında dengeli bir şekilde dağıldığını gösterir.

## Sürekli Başarı İçin İçerik Yönetimi

İçerik oluşturmak tek seferlik bir iş değildir. Google'da sürekli üst sıralarda kalmak ve otoritenizi sürdürmek için düzenli bir içerik yönetimi ve güncelleme stratejisi şarttır.

### İçerik Takvimi: Planlı ve Düzenli Üretim

Bir içerik takvimi, ne zaman, hangi konuda ve hangi formatta içerik üreteceğinizi planlamanıza yardımcı olur. Bu, tutarlılık sağlar ve stratejinizi sürdürülebilir kılar.

#### Aylık İçerik Planı Şablonu

\`\`\`
AY: OCAK 2025
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HAFTA 1
├── Pazartesi: Blog - "Kış Aylarında Boru Donması Önleme" (Güncel)
├── Çarşamba: Sosyal medya paylaşımı (Blog tanıtımı)
└── Cuma: Mevcut içerik güncelleme (Eski bir rehber)

HAFTA 2
├── Pazartesi: Hizmet sayfası optimizasyonu (Anahtar kelime ve içerik geliştirme)
├── Çarşamba: Blog - "Su Sayacı Okuma Rehberi" (Evergreen)
└── Cuma: GBP gönderisi (Yerel SEO için)

HAFTA 3
├── Pazartesi: Yeni bölge sayfası (Pendik Tesisatçı)
├── Çarşamba: SSS güncelleme (Mevcut sayfalara yeni sorular ekleme)
└── Cuma: Müşteri vaka çalışması (Dönüşüm odaklı)

HAFTA 4
├── Pazartesi: Blog - "2025 Tesisat Fiyatları" (Güncel, trend)
├── Çarşamba: İnfografik oluşturma (Mevcut blog yazısından)
└── Cuma: Ay sonu analiz ve planlama (Performans değerlendirme)
\`\`\`

#### İçerik Türü Dağılımı
Takviminizde farklı içerik türlerine yer vermek, hem farklı kullanıcı niyetlerine hitap etmenizi hem de sitenizin dinamik kalmasını sağlar.

\`\`\`
Aylık İçerik Dağılımı (Örnek):
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Blog yazıları:     4 adet (40%)
Hizmet sayfaları:  1 adet (10%)
Bölge sayfaları:   2 adet (20%)
Güncellemeler:     2 adet (20%)
Vaka çalışması:    1 adet (10%)
\`\`\`

### İçerik Kalite Kriterleri: 10x Content ve Google Sinyalleri

Google, içeriğin kalitesini değerlendirirken birçok sinyale bakar. "10x Content" yaklaşımı, içeriğinizin rakiplerinizden en az 10 kat daha iyi olmasını hedefler.

#### 10x Content Framework
İçeriğinizin rakiplerden 10 kat daha iyi olması için şu kontrol listesini göz önünde bulundurun:

\`\`\`
KONTROL LİSTESİ:
□ Daha kapsamlı mı?
□ Daha güncel mi?`
  },
  {
    slug: 'e-e-a-t-nedir-google-guven-kriterleri',
    title: 'E-E-A-T Nedir? Google\'ın Güven Kriterleri',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. e-e-a-t nedir? google'ın güven kriterleri hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '11 dk',
    date: '1 Ocak 2025',
    image: '✅',
    featured: false,
    metadata: {
      title: 'E-E-A-T Nedir? Google\'ın Güven Kriterleri | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. e-e-a-t nedir? google'ın güven kriterleri hakkında detaylı bilgi.',
      keywords: ['e e a t nedir google guven kriterleri', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/e-e-a-t-nedir-google-guven-kriterleri',
      },
    }\`\`
ZAYIF DENEYİM:
"Su kaçağı tespiti önemlidir. Profesyonel ekipmanlar kullanılır. Kaçaklar, evinizin yapısına zarar verebilir."

GÜÇLÜ DENEYİM:
"15 yıllık tesisat deneyimimde, en zorlu vakalardan biri Ataşehir'de yaşandı. Müşterinin evi sular altındaydı ama kaynak bir türlü bulunamıyordu. Termal kameramızla duvardaki gizli boruyu tespit edene kadar 3 saat uğraştık ve sonunda sorunu çözdük. Bu deneyimden sonra, her işe mutlaka nem ölçer ile başlıyorum; çünkü görsel olarak belirgin olmayan nemin ne kadar büyük sorunlara yol açabileceğini bizzat tecrübe ettim. Bu tür gizli kaçaklar, evin temeline bile zarar verebilir, bu yüzden erken teşhis hayati."
\`\`\`
İkinci örnek, yazarın hem bilgisini hem de bu bilgiyi nasıl edindiğini, karşılaştığı zorlukları ve bunlardan çıkardığı dersleri açıkça gösteriyor. Bu, okuyucu için çok daha değerli ve güvenilir bir içeriktir.

#### Deneyim Kanıtları
Deneyiminizi kanıtlamak için kullanabileceğiniz yollar:
*   **Proje fotoğrafları (öncesi/sonrası):** Hizmet verdiğiniz projelerden gerçek görseller paylaşın.
*   **Müşteri yorumları ve referanslar:** Gerçek müşterilerin deneyimlerinizi anlattığı yorumları sitenizde sergileyin.
*   **Vaka çalışmaları (case studies):** Yaptığınız işleri, karşılaştığınız sorunları ve çözümlerinizi detaylıca anlatan örnekler sunun.
*   **Video içerikler:** Ürünleri kullanırken, hizmetleri sunarken veya bir süreci açıklarken kendinizi gösteren videolar çekin.
*   **Tarihli belgeler:** İşinizin başlangıç tarihini, sertifikalarınızı veya katıldığınız eğitimleri gösteren belgelerle deneyiminizi pekiştirin.

### 2. Expertise (Uzmanlık)

**Tanım:** Uzmanlık, içerik oluşturucunun konudaki bilgi, beceri ve yetkinlik düzeyini ifade eder. Bu, bir alanda derinlemesine bilgiye sahip olmak, karmaşık konuları anlayabilmek ve doğru, detaylı bilgiler sunabilmek anlamına gelir.

#### Uzmanlık Türleri
Uzmanlık sadece resmi eğitimlerle sınırlı değildir; farklı şekillerde kendini gösterebilir:

**Formal Uzmanlık:**
*   **Akademik dereceler:** Üniversite diplomaları, yüksek lisans, doktora.
*   **Mesleki sertifikalar:** Alanınızla ilgili yetkinliğinizi gösteren resmi belgeler (örn. PMP, Google Ads sertifikası, tesisat ustalık belgesi).
*   **Lisanslar ve yetkiler:** Doktorluk, avukatlık gibi meslekleri icra etmek için gereken resmi izinler.

**Yaşam Uzmanlığı (Everyday Expertise):**
*   **Yılların deneyimi:** Bir alanda uzun yıllar çalışmış olmak ve pratik bilgi birikimine sahip olmak.
*   **Hobi bazlı uzmanlık:** Bir konuda tutkulu olmak ve bu konuda derinlemesine bilgi edinmek (örn. amatör bir fotoğrafçı, bahçıvan).
*   **Topluluk tanınırlığı:** Bir topluluk içinde bir konuda bilgi sahibi olarak kabul edilmek ve sıkça danışılan kişi olmak.

#### Uzmanlık Göstergeleri
Bir yazarın uzmanlığını net bir şekilde göstermek için yazar profilleri kritik öneme sahiptir.
\`\`\`
Yazar Profili Örneği:
━━━━━━━━━━━━━━━━━━━━━
Berat Akbulut
Su Tesisat Uzmanı | 15 Yıllık Deneyim

✓ Tesisat Ustası Belgesi (Milli Eğitim Bakanlığı Onaylı)
✓ İSKİ Onaylı Tesisatçı Belgesi
✓ 5000+ Başarılı Müdahale ve Müşteri Memnuniyeti
✓ Akbulut Tesisat kurucusu ve yöneticisi

LinkedIn: linkedin.com/in/beratakbulut
Web Sitesi: sutesisatcisiberat.com
━━━━━━━━━━━━━━━━━━━━━
\`\`\`
Bu örnek, yazarın hem formal hem de yaşam uzmanlığını bir arada sunarak okuyucuya güven veriyor.

#### Uzmanlığı Kanıtlama Yolları
1.  **Yazar sayfaları oluştur:** Her yazarınız için detaylı bir biyografi, deneyim, eğitim ve sertifikalarını içeren özel sayfalar hazırlayın.
2.  **Kimlik bilgileri ekle:** Makalelerin başında veya sonunda yazarın adını, unvanını ve ilgili sertifikalarını kısaca belirtin.
3.  **Referanslar ve kaynaklar kullan:** İçeriğinizdeki iddiaları desteklemek için güvenilir, bilimsel veya sektörel kaynaklara atıfta bulunun.
4.  **Detaylı teknik bilgi sun:** Konuyu yüzeysel geçmek yerine, derinlemesine teknik detaylar ve açıklamalar sunarak uzmanlığınızı gösterin.
5.  **Güncel bilgi sağla:** Alanınızdaki en son gelişmeleri, araştırmaları ve değişiklikleri içeriğinize yansıtarak bilginizin güncel olduğunu gösterin.

### 3. Authoritativeness (Otorite)

**Tanım:** Otorite, sitenizin, markanızın veya yazarınızın sektöründe ne kadar tanınır, saygın ve güvenilir olduğunu ifade eder. Bir otorite olmak, sadece bilgi sahibi olmak değil, aynı zamanda bu bilgiyi başkaları tarafından da kabul edilmiş ve referans gösterilmiş olmaktır.

#### Otorite Sinyalleri
Bir web sitesi veya yazarın otoriter olduğunu gösteren bazı ana sinyaller şunlardır:
*   **Yüksek kaliteli backlink'ler:** Sektörünüzdeki diğer saygın ve otoriter sitelerden gelen bağlantılar.
*   **Marka bahisleri (mention):** Markanızın veya adınızın internet üzerinde, özellikle haber sitelerinde, forumlarda veya sosyal medyada referans gösterilmesi.
*   **Sektörel yayınlarda yer alma:** Alanınızdaki önde gelen dergilerde, bloglarda veya haber portallarında makalelerinizin yayınlanması.
*   **Ödüller ve sertifikalar:** Sektörel başarılarınız için aldığınız ödüller veya tanınırlık sertifikaları.
*   **Sosyal medya takipçi/etkileşim:** Sosyal medya platformlarında geniş bir kitleye sahip olmak ve etkileşim oranlarınızın yüksek olması.

#### Otorite Oluşturma Stratejileri

**Backlink Temelli:**
*   **Sektörel sitelerden link:** Alanınızdaki diğer otoriter bloglar, dergiler veya kurumlarla iş birliği yaparak linkler edinin.
*   **Haber sitelerinde yer alma:** PR çalışmaları yaparak veya ilgi çekici içerikler üreterek haber sitelerinde yer alın ve link kazanın.
*   **Üniversite/kurum sitelerinden referans:** Eğer içeriğiniz akademik veya bilimsel değere sahipse, üniversite veya araştırma kurumlarından link alma potansiyeliniz olabilir.
*   **Kaliteli dizin kayıtları:** Sektörel ve niş dizinlere kaydolmak, otoritenizi artırabilir (genel dizinlerden kaçının).

**Marka Temelli:**
*   **Markalı arama hacmi artışı:** Kullanıcıların doğrudan markanızın adını arama motorlarında araması, markanızın tanındığını ve otoriter olduğunu gösterir.
*   **Sosyal medya varlığı:** Aktif ve etkileşimli bir sosyal medya varlığı oluşturarak marka bilinirliğinizi artırın.
*   **PR çalışmaları:** Medya ilişkileri kurarak markanızın basında yer almasını sağlayın.
*   **Konferans/etkinlik katılımı:** Sektörel etkinliklerde konuşmacı olmak veya katılımcı olarak yer almak, markanızın otoritesini pekiştirir.

**İçerik Temelli:**
*   **Orijinal araştırmalar:** Alanınızda yeni veriler veya içgörüler sunan orijinal araştırmalar yaparak referans kaynağı olun.
*   **Kapsamlı rehberler:** Bir konuyu baştan sona ele alan, en detaylı ve güncel rehberleri oluşturun.
*   **Endüstri raporları:** Sektörünüzle ilgili periyodik raporlar yayınlayarak lider konumunuzu güçlendirin.
*   **Uzman görüşleri:** Alanınızdaki diğer uzmanlarla röportajlar yaparak veya onların görüşlerini içeriğinize dahil ederek içeriğinizin değerini ve otoritesini artırın.

### 4. Trustworthiness (Güvenilirlik)

**Tanım:** Güvenilirlik, sitenin, içeriğin ve yazarın genel olarak doğru, şeffaf ve dürüst olmasıdır. Google için "Güven", E-E-A-T'nin en kritik bileşenidir çünkü güvenilir olmayan bir kaynak, diğer tüm yetkinliklere sahip olsa bile kullanıcıya zarar verebilir.

Google'ın kendisi bu konuda çok net bir ifade kullanır:
> "Trust, E-E-A-T'ın en önemli üyesidir çünkü güvenilir olmayan sayfalar, ne kadar deneyimli, uzman veya otoriter görünseler de düşük E-E-A-T'a sahiptir." - Google Search Quality Rater Guidelines

Bu ifade, güvenilirliğin diğer üç bileşenin temelini oluşturduğunu açıkça ortaya koymaktadır. Güvenilir olmayan bir web sitesi, diğer tüm çabalarına rağmen Google'ın gözünde düşük kaliteli olarak değerlendirilecektir.

#### Güvenilirlik Faktörleri
Güvenilirliği artırmak için hem site düzeyinde hem de içerik düzeyinde atılabilecek adımlar vardır:

**Site Düzeyinde:**
*   **HTTPS (SSL sertifikası):** Web sitenizin güvenli bir bağlantı üzerinden yayınlandığını gösterir (URL'nin başında "https://" olması).
*   **Gizlilik politikası:** Kullanıcı verilerinin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
*   **Kullanım şartları:** Sitenizi kullanırken uyulması gereken kuralları ve sorumlulukları belirtir.
*   **İletişim bilgileri (adres, telefon, e-posta):** Kullanıcıların size kolayca ulaşabilmesini sağlar.
*   **Hakkımızda sayfası:** Kim olduğunuzu, ne yaptığınızı ve misyonunuzu açıkça belirtir.

**İçerik Düzeyinde:**
*   **Doğru ve güncel bilgi:** İçeriğinizdeki tüm bilgilerin doğru ve en son verilerle güncellenmiş olması.
*   **Kaynak gösterme:** İçeriğinizdeki iddiaları destekleyen güvenilir kaynaklara (bilimsel araştırmalar, resmi kurumlar) link verme.
*   **Açık yazar kimliği:** İçeriği kimin yazdığını net bir şekilde belirtme (yazar kutusu, yazar sayfası).
*   **Tarih bilgisi (yayın/güncelleme):** İçeriğin ne zaman yayınlandığını ve en son ne zaman güncellendiğini gösterme.
*   **Düzeltme politikası:** Yanlış bilgi tespit edildiğinde nasıl düzeltileceğine dair bir politika.

**İşletme Düzeyinde:**
*   **Müşteri yorumları:** Google Benim İşletmem, Trustpilot gibi platformlardaki olumlu müşteri yorumları.
*   **Ticaret odası üyelikleri:** İşletmenizin resmi bir kuruluşa kayıtlı olduğunu gösteren belgeler.
*   **Fiziksel adres:** İşletmenizin fiziksel bir konuma sahip olması.
*   **Şikayet yönetimi:** Müşteri şikayetlerine hızlı ve etkili bir şekilde yanıt verme.

## E-E-A-T Uygulama Stratejileri

E-E-A-T'yi web sitenize entegre etmek, sadece tek bir bölümü optimize etmekle kalmaz, tüm site genelinde ve her içerikte tutarlı bir yaklaşım gerektirir.

### Site Genelinde Uygulamalar

Web sitenizin genel yapısı ve temel sayfaları, E-E-A-T'yi göstermenin en etkili yollarından biridir.

#### 1. Yazar Sayfaları Oluşturma
Her içerik oluşturucunuz için detaylı bir yazar sayfası oluşturmak, hem deneyimi hem de uzmanlığı doğrudan kanıtlar. Bu sayfalar, yazarın kim olduğunu, neden güvenilir olduğunu ve konuda neden yetkin olduğunu gösterir.

\`\`\`
URL Örneği: /yazar/berat-akbulut/

SAYFA İÇERİĞİNDE OLMASI GEREKENLER:
━━━━━━━━━━━━━━━
□   **Profesyonel fotoğraf:** Yazarın güven veren, profesyonel bir fotoğrafı.
□   **Kapsamlı biyografi (300+ kelime):** Yazarın kariyer yolculuğunu, ilgi alanlarını, başarılarını ve konuyla ilgili deneyimlerini anlatan detaylı bir metin.
□   **Deneyim ve geçmiş:** Çalıştığı kurumlar, üstlendiği projeler, sektördeki yılları.
□   **Eğitim ve sertifikalar:** Aldığı diplomalar, katıldığı eğitimler, sahip olduğu mesleki sertifikalar.
□   **Yazdığı makaleler listesi:** Sitede yazdığı tüm makalelere bağlantılar.
□   **Sosyal medya linkleri:** LinkedIn, Twitter gibi profesyonel sosyal medya profillerine bağlantılar.
□   **İletişim bilgileri:** Yazarla iletişime geçilebilecek bir e-posta adresi (isteğe bağlı, ancak şeffaflığı artırır).

SCHEMA: Person schema ile işaretle. Bu, arama motorlarına yazarın kimlik bilgilerini yapılandırılmış veri olarak sunar.
\`\`\`

#### 2. Hakkımızda Sayfası
Şirketinizin veya markanızın hikayesini, misyonunu ve değerlerini anlatan kapsamlı bir "Hakkımızda" sayfası, otorite ve güvenilirlik için olmazsa olmazdır.

\`\`\`
URL Örneği: /hakkimizda/

İÇERMESİ GEREKENLER:
━━━━━━━━━━━━━━━━━━
□   **Şirket hikayesi:** Kuruluş amacınız, vizyonunuz ve zaman içindeki gelişiminiz.
□   **Misyon ve vizyon:** Ne için var olduğunuz ve gelecekte neyi başarmayı hedeflediğiniz.
□   **Ekip tanıtımı:** Kurucular, yöneticiler ve anahtar çalışanların kısa biyografileri ve fotoğrafları (yazar sayfaları ile entegre edilebilir).
□   **Fiziksel adres:** İşletmenizin resmi adresi (varsa).
□   **İletişim bilgileri:** Telefon numarası, e-posta adresi.
□   **Sertifikalar ve belgeler:** Aldığınız kalite belgeleri, mesleki onaylar, ödüller.
□   **Müşteri logoları:** Çalıştığınız önemli markaların veya memnun müşterilerin logoları.
□   **Medya bahisleri:** Basında çıkan haberleriniz, röportajlarınız.
\`\`\`

#### 3. İletişim Sayfası
Kullanıcıların size kolayca ulaşabilmesi, güvenilirliğin temel bir göstergesidir. Detaylı bir iletişim sayfası, bu şeffaflığı sağlar.

\`\`\`
URL Örneği: /iletisim/

İÇERMESİ GEREKENLER:
━━━━━━━━━━━━━━━━━━
□   **Telefon numarası:** Müşteri hizmetleri veya genel iletişim için.
□   **E-posta adresi:** Hızlı ve yazılı iletişim için.
□   **Fiziksel adres:** İşletmenizin konumu (Google Haritalar ile entegre edilebilir).
□   **Google Maps embed:** Harita üzerinde konumunuzu gösteren etkileşimli bir harita.
□   **Çalışma saatleri:** İşletmenizin açık olduğu saatler.
□   **İletişim formu:** Kullanıcıların kolayca mesaj gönderebileceği bir form.
□   **Sosyal medya linkleri:** İşletmenizin sosyal medya profillerine bağlantılar.
\`\`\`

### İçerik Düzeyinde Uygulamalar

Her bir içerik parçasının içinde de E-E-A-T'yi güçlendirecek unsurlar bulunmalıdır.

#### 1. Yazar Kutusu (Author Box)
Her makalenin sonunda veya başında, ilgili yazar hakkında kısa bir bilgi kutusu eklemek, uzmanlığı ve güvenilirliği artırır.

\`\`\`html
<div class="author-box">
  <img src="yazar-foto.jpg" alt="Berat Akbulut'un Profesyonel Fotoğrafı" width="96" height="96">
  <h4>Berat Akbulut</h4>
  <p class="title">Su Tesisat Uzmanı | Akbulut Tesisat Kurucusu</p>
  <p class="bio">15 yıllık deneyimiyle İstanbul'da profesyonel su tesisatı hizmeti sunmaktadır. İSKİ onaylı tesisatçı belgesi ve Milli Eğitim Bakanlığı ustalık belgesi bulunmaktadır. Özellikle gizli su kaçağı tespiti ve tıkanıklık açma konularında uzmandır.</p>
  <a href="/yazar/berat-akbulut/" class="read-more-author">Tüm yazıları →</a>
  <div class="author-social-links">
    <a href="https://www.linkedin.com/in/beratakbulut" target="_blank" rel="nofollow noopener">LinkedIn</a>
    <!-- Diğer sosyal medya linkleri eklenebilir -->
  </div>
</div>
\`\`\`

#### 2. İçerik Güncelleme Bildirimi
İçeriğinizin güncel olduğunu göstermek, özellikle hızla değişen konularda güvenilirliği artırır.

\`\`\`html
<div class="article-meta">
  <p><strong>Son güncelleme:</strong> 1 Ocak 2025</p>
  <p><strong>İlk yayın:</strong> 15 Mart 2023</p>
  <p><strong>Yazar:</strong> 
    <a href="/yazar/berat-akbulut/">Berat Akbulut</a>
  </p>
  <!-- Yazarın unvanı veya kısa bir bilgisi de eklenebilir -->
  <p class="author-title">Su Tesisat Uzmanı</p>
</div>
\`\`\`

#### 3. Kaynak Gösterme
İçeriğinizdeki bilgilerin nereden geldiğini açıkça belirtmek, güvenilirliği ve uzmanlığı pekiştirir. Özellikle YMYL konularında bu hayati öneme sahiptir.

\`\`\`html
<section class="sources">
  <h3>Kaynaklar ve Referanslar</h3>
  <ol>
    <li><a href="https://www.iski.gov.tr/web/tr/kurumsal/mevzuat/yonetmelikler" target="_blank" rel="nofollow noopener">İSKİ Tesisat Yönetmeliği</a> - İstanbul Su ve Kanalizasyon İdaresi'nin resmi yönetmeliği.</li>
    <li><a href="https://www.tsmmmo.org.tr/yayinlar/raporlar" target="_blank" rel="nofollow noopener">TMMOB Tesisat Mühendisliği Standartları</a> - Türk Mühendis ve Mimar Odaları Birliği'nin tesisat standartları raporları.</li>
    <li><a href="https://www.xylem.com/tr-tr/applications/water-leak-detection/" target="_blank" rel="nofollow noopener">Xylem Global Water Solutions - Su Kaçağı Tespit Teknolojileri</a> - Sektör lideri bir firmadan teknik bilgiler.</li>
  </ol>
</section>
\`\`\`
Kaynakları detaylı açıklamak ve "nofollow" veya "noopener" etiketlerini kullanmak iyi bir uygulamadır.

## Schema Markup ile E-E-A-T

Schema markup, arama motorlarının içeriğinizi daha iyi anlamasına yardımcı olan yapılandırılmış veri işaretlemeleridir. E-E-A-T sinyallerini Google'a doğrudan iletmek için Schema markup kullanmak oldukça etkilidir.

### Person Schema (Yazar için)
Yazar sayfalarınızda veya yazar kutularında yazarınızın kimlik bilgilerini belirtmek için Person Schema kullanın.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Berat Akbulut",
  "jobTitle": "Su Tesisat Uzmanı",
  "description": "15 yıllık deneyimli, İSKİ onaylı tesisat ustası ve Akbulut Tesisat'ın kurucusu. Özellikle gizli su kaçağı tespiti ve tıkanıklık açma konularında uzmandır.",
  "image": "https://site.com`
  },
]

