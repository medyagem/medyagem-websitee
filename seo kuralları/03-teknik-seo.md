# Teknik SEO Rehberi

## Teknik SEO Nedir?

Teknik SEO, web sitesinin arama motorları tarafından taranabilir, dizinlenebilir ve anlaşılabilir olmasını sağlayan altyapı optimizasyonlarıdır. En iyi içerik bile teknik sorunlar varsa sıralanamaz.

## Crawl ve Index Temelleri

### Crawl (Tarama)
Arama motoru botları (Googlebot) web sitelerini ziyaret eder ve içerikleri okur.

**Crawl Bütçesi:**
- Google'ın sitenizi taramak için ayırdığı kaynak
- Büyük sitelerde kritik öneme sahip
- Site hızı, hatalar ve içerik kalitesi etkiler

### Index (Dizinleme)
Taranan sayfalar Google'ın veri tabanına eklenir.

**İndexleme Kontrol Yöntemleri:**
- robots.txt
- Meta robots etiketi
- X-Robots-Tag HTTP başlığı
- noindex direktifi

## robots.txt Dosyası

### robots.txt Nedir?
Web sitenizin kök dizininde bulunan ve arama motoru botlarına talimat veren metin dosyasıdır.

**Konum:** `https://siteadiniz.com/robots.txt`

### Temel Sözdizimi
```txt
# Tüm botlara izin ver
User-agent: *
Allow: /

# Belirli klasörü engelle
User-agent: *
Disallow: /admin/
Disallow: /private/

# Sadece Googlebot için kural
User-agent: Googlebot
Disallow: /test/

# Sitemap konumu
Sitemap: https://siteadiniz.com/sitemap.xml
```

### robots.txt Örnekleri

**WordPress için örnek:**
```txt
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-content/plugins/
Disallow: /wp-content/cache/
Disallow: /trackback/
Disallow: /feed/
Disallow: /comments/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://siteadiniz.com/sitemap_index.xml
```

**E-ticaret için örnek:**
```txt
User-agent: *
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /search/
Disallow: /*?*sort=
Disallow: /*?*filter=

Sitemap: https://siteadiniz.com/sitemap.xml
```

### robots.txt Kuralları
| Direktif | Açıklama |
|----------|----------|
| User-agent | Hangi bot için geçerli |
| Disallow | Engellenen yol |
| Allow | İzin verilen yol |
| Sitemap | Sitemap konumu |
| Crawl-delay | Tarama gecikmesi (Google desteklemez) |

### Yaygın Hatalar
- Yanlışlıkla tüm siteyi engellemek
- CSS/JS dosyalarını engellemek
- Önemli sayfaları engellemek
- Sitemap belirtmemek

## XML Sitemap

### Sitemap Nedir?
Web sitenizdeki önemli sayfaların listesini içeren XML dosyasıdır.

### Sitemap Yapısı
```xml
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
</urlset>
```

### Sitemap Index (Büyük siteler için)
```xml
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
</sitemapindex>
```

### Sitemap Best Practices
- Maksimum 50.000 URL veya 50MB
- Sadece canonical URL'leri ekle
- noindex sayfaları ekleme
- Düzenli güncelle
- Search Console'a gönder

## Meta Robots Etiketi

### Temel Kullanım
```html
<meta name="robots" content="index, follow">
```

### Direktifler
| Direktif | Açıklama |
|----------|----------|
| index | Sayfayı dizinle |
| noindex | Sayfayı dizinleme |
| follow | Linkleri takip et |
| nofollow | Linkleri takip etme |
| noarchive | Önbellek gösterme |
| nosnippet | Snippet gösterme |
| max-snippet:X | Maks snippet uzunluğu |
| max-image-preview | Görsel önizleme boyutu |

### Kullanım Örnekleri
```html
<!-- Dizinleme ama linkleri takip etme -->
<meta name="robots" content="index, nofollow">

<!-- Dizinleme yapma -->
<meta name="robots" content="noindex, follow">

<!-- Snippet uzunluğunu sınırla -->
<meta name="robots" content="max-snippet:150">

<!-- Sadece Google için -->
<meta name="googlebot" content="noindex">
```

## Canonical Etiketi

### Canonical Nedir?
Yinelenen içerik sorunlarını çözmek için tercih edilen URL'yi belirtir.

### Kullanım
```html
<link rel="canonical" href="https://siteadiniz.com/sayfa/">
```

### Ne Zaman Kullanılır?
- www ve www'siz versiyonlar
- HTTP ve HTTPS versiyonları
- Parametre varyasyonları (?sort=, ?filter=)
- Print versiyonları
- AMP sayfaları

### Self-referencing Canonical
Her sayfa kendi URL'sini canonical olarak belirtmelidir:
```html
<!-- https://site.com/urun/ sayfasında -->
<link rel="canonical" href="https://site.com/urun/">
```

## Site Hızı ve Core Web Vitals

### Core Web Vitals Metrikleri

#### LCP (Largest Contentful Paint)
En büyük içerik öğesinin yüklenme süresi.
- **İyi:** < 2.5 saniye
- **İyileştirme gerekli:** 2.5 - 4 saniye
- **Kötü:** > 4 saniye

#### FID (First Input Delay) / INP (Interaction to Next Paint)
Kullanıcı etkileşimine yanıt süresi.
- **İyi:** < 100ms (FID) / < 200ms (INP)
- **Kötü:** > 300ms (FID) / > 500ms (INP)

#### CLS (Cumulative Layout Shift)
Görsel kararlılık - içeriklerin kayma miktarı.
- **İyi:** < 0.1
- **İyileştirme gerekli:** 0.1 - 0.25
- **Kötü:** > 0.25

### Hız Optimizasyonu Teknikleri

**Görsel Optimizasyonu:**
```html
<!-- Lazy loading -->
<img src="resim.jpg" loading="lazy" alt="Açıklama">

<!-- WebP format -->
<picture>
  <source srcset="resim.webp" type="image/webp">
  <img src="resim.jpg" alt="Açıklama">
</picture>

<!-- Boyut belirtme (CLS için) -->
<img src="resim.jpg" width="800" height="600" alt="Açıklama">
```

**Kritik CSS:**
```html
<style>
  /* Kritik CSS - fold üstü için */
  .header { ... }
  .hero { ... }
</style>
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
```

**Resource Hints:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://analytics.google.com">
<link rel="preload" href="kritik-font.woff2" as="font" crossorigin>
```

## Mobil Optimizasyon

### Mobile-First Indexing
Google, sitenizin mobil versiyonunu öncelikli olarak kullanır.

### Responsive Tasarım
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Mobil Uyumluluk Kontrol Listesi
- [ ] Responsive tasarım
- [ ] Okunabilir yazı boyutu (16px minimum)
- [ ] Tıklanabilir alanlar yeterli büyüklükte
- [ ] Yatay kaydırma yok
- [ ] Flash kullanılmıyor
- [ ] Pop-up'lar engelleyici değil

## HTTPS ve Güvenlik

### SSL Sertifikası
- Google sıralama faktörü
- Kullanıcı güveni
- Veri güvenliği

### HTTP'den HTTPS'e Geçiş
1. SSL sertifikası al
2. Tüm HTTP URL'leri HTTPS'e yönlendir (301)
3. iç linkleri güncelle
4. Canonical etiketlerini güncelle
5. robots.txt ve sitemap'i güncelle
6. Search Console'a yeni property ekle

### Güvenlik Başlıkları
```
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
```

## Site Yapısı

### İdeal Site Mimarisi
```
Ana Sayfa (Depth 0)
├── Kategori 1 (Depth 1)
│   ├── Alt Kategori 1.1 (Depth 2)
│   │   └── Sayfa (Depth 3)
│   └── Alt Kategori 1.2 (Depth 2)
├── Kategori 2 (Depth 1)
└── Kategori 3 (Depth 1)
```

### Kurallar
- Maksimum 3 tıklama derinliği
- Mantıksal kategori yapısı
- Düz (flat) yapı tercih edilir
- Orphan sayfa olmamalı

### URL Yapısı
```
DOĞRU:
https://site.com/kategori/alt-kategori/sayfa-adi/

YANLIŞ:
https://site.com/p?id=123&cat=456
https://site.com/category/sub/sub/sub/sub/page
```

## Yönlendirmeler

### 301 (Kalıcı Yönlendirme)
```
# .htaccess
Redirect 301 /eski-sayfa/ https://site.com/yeni-sayfa/

# nginx
rewrite ^/eski-sayfa/$ /yeni-sayfa/ permanent;
```

### 302 (Geçici Yönlendirme)
- A/B testleri
- Geçici bakım sayfaları
- SEO değeri aktarmaz

### Yönlendirme Zincirleri
```
KÖTÜ: A → B → C → D (3 yönlendirme)
İYİ: A → D (doğrudan)
```

## Hata Sayfaları

### 404 Sayfası Best Practices
- Kullanıcı dostu mesaj
- Site navigasyonu
- Arama kutusu
- Popüler sayfalar linki
- Ana sayfaya link

### 404 Yönetimi
1. Search Console'da 404'leri izle
2. Önemli sayfalar için 301 yönlendirme
3. Soft 404'leri düzelt
4. Custom 404 sayfası oluştur

## Hreflang (Çok Dilli Siteler)

### Kullanım
```html
<link rel="alternate" hreflang="tr" href="https://site.com/tr/sayfa/">
<link rel="alternate" hreflang="en" href="https://site.com/en/page/">
<link rel="alternate" hreflang="x-default" href="https://site.com/en/page/">
```

### Kurallar
- Karşılıklı referans (her dil birbirini göstermeli)
- x-default tanımla
- Sitemap'te de belirt
- Doğru dil kodları kullan (ISO 639-1)

## JavaScript SEO

### Render Stratejileri
1. **Server-Side Rendering (SSR)** - En iyi SEO için
2. **Static Site Generation (SSG)** - Çok iyi SEO için
3. **Client-Side Rendering (CSR)** - SEO zorlukları var

### JavaScript SEO Kontrol Listesi
- [ ] Önemli içerik HTML'de
- [ ] Meta etiketler server-side render
- [ ] Lazy loading düzgün çalışıyor
- [ ] Internal linkler crawl edilebilir
- [ ] JavaScript hataları yok

### URL Inspection Tool Kullanımı
1. Search Console'da URL'yi test et
2. "Live Test" çalıştır
3. Rendered HTML'i kontrol et
4. JavaScript hatalarını incele

## Teknik SEO Araçları

| Araç | Kullanım Alanı |
|------|----------------|
| Google Search Console | İndexleme, hatalar, performans |
| Google PageSpeed Insights | Site hızı, Core Web Vitals |
| Screaming Frog | Site taraması, teknik denetim |
| GTmetrix | Performans analizi |
| Mobile-Friendly Test | Mobil uyumluluk |
| Rich Results Test | Yapısal veri testi |
| Lighthouse | Kapsamlı site denetimi |

## Teknik SEO Checklist

### Taranabilirlik
- [ ] robots.txt doğru yapılandırıldı
- [ ] XML sitemap oluşturuldu ve gönderildi
- [ ] Önemli sayfalar taranabilir
- [ ] JavaScript düzgün render ediliyor

### İndekslenebilirlik
- [ ] Canonical etiketleri doğru
- [ ] Meta robots doğru kullanılıyor
- [ ] Yinelenen içerik çözüldü
- [ ] 404 hataları düzeltildi

### Performans
- [ ] LCP < 2.5s
- [ ] FID/INP < 100ms/200ms
- [ ] CLS < 0.1
- [ ] Görseller optimize

### Güvenlik
- [ ] HTTPS aktif
- [ ] SSL sertifikası geçerli
- [ ] Mixed content yok

### Mobil
- [ ] Responsive tasarım
- [ ] Mobil uyumlu
- [ ] Touch hedefleri yeterli

---

*Son güncelleme: 2025*
*Kaynak: Claude SEO Master Instructions v4.0*
