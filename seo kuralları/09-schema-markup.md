# Schema Markup (Yapısal Veri) Rehberi

## Schema Markup Nedir?

Schema Markup, web sayfalarındaki içeriğin ne anlama geldiğini arama motorlarına açıklayan yapılandırılmış veri formatıdır. Schema.org standardını kullanarak, sayfanızdaki bilgilerin (kişi, işletme, ürün, etkinlik vb.) arama motorları tarafından daha iyi anlaşılmasını sağlar.

## Schema'nın SEO'ya Etkileri

### Doğrudan Etkiler
- **Rich Snippets:** Arama sonuçlarında zengin görünüm
- **Knowledge Panel:** Marka bilgi paneli
- **Featured Snippets:** Öne çıkan snippet'larda avantaj
- **Voice Search:** Sesli aramada tercih edilme

### Dolaylı Etkiler
- **CTR artışı:** Göze çarpan sonuçlar daha çok tıklanır
- **Entity tanıma:** Google işletmenizi/markanızı daha iyi anlar
- **Güvenilirlik:** Profesyonel görünüm

## Schema Formatları

### 1. JSON-LD (Önerilen)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Su Tesisatçısı Berat"
}
</script>
```
**Avantajları:**
- HTML'den bağımsız
- Kolay ekleme/güncelleme
- Google'ın önerdiği format

### 2. Microdata
```html
<div itemscope itemtype="https://schema.org/LocalBusiness">
  <span itemprop="name">Su Tesisatçısı Berat</span>
</div>
```

### 3. RDFa
```html
<div vocab="https://schema.org/" typeof="LocalBusiness">
  <span property="name">Su Tesisatçısı Berat</span>
</div>
```

## Temel Schema Türleri

### 1. LocalBusiness Schema

#### Temel LocalBusiness
```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Su Tesisatçısı Berat",
  "image": "https://sutesisatcisiberat.com/logo.jpg",
  "url": "https://sutesisatcisiberat.com",
  "telephone": "+90-534-383-7758",
  "email": "info@sutesisatcisiberat.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Örnek Mahallesi, Örnek Sokak No:1",
    "addressLocality": "Ataşehir",
    "addressRegion": "İstanbul",
    "postalCode": "34758",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.9876",
    "longitude": "29.1234"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "İstanbul"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/sutesisatcisiberat",
    "https://www.instagram.com/sutesisatcisiberat"
  ]
}
```

#### LocalBusiness Alt Türleri
```
LocalBusiness
├── Plumber (Tesisatçı)
├── Electrician (Elektrikçi)
├── HomeAndConstructionBusiness
├── ProfessionalService
├── Store
│   ├── HardwareStore
│   └── HomeGoodsStore
├── AutomotiveBusiness
└── HealthAndBeautyBusiness
```

### 2. Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Su Kaçağı Tespiti",
  "description": "Kameralı ve termal sistemlerle su kaçağı tespit hizmeti",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Su Tesisatçısı Berat"
  },
  "areaServed": {
    "@type": "City",
    "name": "İstanbul"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Su Kaçağı Tespit Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kameralı Tespit"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Termal Tespit"
        }
      }
    ]
  }
}
```

### 3. Article Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Su Kaçağı Nasıl Tespit Edilir? Kapsamlı Rehber",
  "description": "Evde su kaçağını tespit etmenin 10 yolu ve profesyonel çözümler",
  "image": [
    "https://site.com/images/su-kacagi-1x1.jpg",
    "https://site.com/images/su-kacagi-4x3.jpg",
    "https://site.com/images/su-kacagi-16x9.jpg"
  ],
  "author": {
    "@type": "Person",
    "name": "Berat Akbulut",
    "url": "https://site.com/yazar/berat-akbulut/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Su Tesisatçısı Berat",
    "logo": {
      "@type": "ImageObject",
      "url": "https://site.com/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2025-01-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://site.com/blog/su-kacagi-nasil-tespit-edilir/"
  }
}
```

### 4. FAQPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Su kaçağı nasıl anlaşılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Su kaçağının belirtileri: 1) Fatura artışı, 2) Duvarlarda nem lekesi, 3) Su sayacının sürekli dönmesi, 4) Su sesi duyulması, 5) Küf kokusu."
      }
    },
    {
      "@type": "Question",
      "name": "Su kaçağı tespiti ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern kameralı ve termal sistemlerle su kaçağı tespiti genellikle 30 dakika ile 2 saat arasında tamamlanır."
      }
    },
    {
      "@type": "Question",
      "name": "Su kaçağı tamiri fiyatları ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Su kaçağı tamiri fiyatları 2025 yılında basit tamirler için 500-1000 TL, kapsamlı işler için 2000-5000 TL arasında değişmektedir."
      }
    }
  ]
}
```

### 5. HowTo Schema

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Tıkanıklık Nasıl Açılır?",
  "description": "Evde lavabo ve tuvalet tıkanıklığını açma adımları",
  "image": "https://site.com/images/tikaniklik-acma.jpg",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "TRY",
    "value": "50"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Pompa"
    },
    {
      "@type": "HowToSupply",
      "name": "Lastik eldiven"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Lavabo açıcı"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Suyu kesin",
      "text": "Önce musluktan akan suyu kapatın.",
      "image": "https://site.com/images/adim1.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Pompa kullanın",
      "text": "Pompa ile gidere basınç uygulayın.",
      "image": "https://site.com/images/adim2.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Sıcak su dökün",
      "text": "Kaynar su dökerek yağ birikintilerini eritin.",
      "image": "https://site.com/images/adim3.jpg"
    }
  ]
}
```

### 6. Review ve AggregateRating Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Su Tesisatçısı Berat",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "156"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Ahmet Y."
      },
      "datePublished": "2024-12-15",
      "reviewBody": "Çok hızlı ve profesyonel hizmet aldık. Teşekkürler.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    }
  ]
}
```

### 7. BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://sutesisatcisiberat.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Hizmetler",
      "item": "https://sutesisatcisiberat.com/hizmetler/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Su Kaçağı Tespiti",
      "item": "https://sutesisatcisiberat.com/hizmetler/su-kacagi-tespiti/"
    }
  ]
}
```

### 8. Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Su Tesisatçısı Berat",
  "alternateName": "Berat Tesisat",
  "url": "https://sutesisatcisiberat.com",
  "logo": "https://sutesisatcisiberat.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-534-383-7758",
    "contactType": "customer service",
    "availableLanguage": "Turkish"
  },
  "sameAs": [
    "https://www.facebook.com/sutesisatcisiberat",
    "https://www.instagram.com/sutesisatcisiberat",
    "https://www.linkedin.com/company/sutesisatcisiberat"
  ],
  "foundingDate": "2010",
  "founder": {
    "@type": "Person",
    "name": "Berat Akbulut"
  }
}
```

### 9. Person Schema (Yazar)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Berat Akbulut",
  "jobTitle": "Su Tesisat Uzmanı",
  "description": "15 yıllık deneyimli tesisat ustası, İSKİ onaylı tesisatçı",
  "image": "https://site.com/images/berat-akbulut.jpg",
  "url": "https://site.com/yazar/berat-akbulut/",
  "email": "berat@sutesisatcisiberat.com",
  "telephone": "+90-534-383-7758",
  "sameAs": [
    "https://www.linkedin.com/in/beratakbulut",
    "https://twitter.com/beratakbulut"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Su Tesisatçısı Berat"
  },
  "knowsAbout": [
    "Su Tesisatı",
    "Kaçak Tespiti",
    "Tıkanıklık Açma",
    "Petek Temizleme"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "İstanbul Teknik Eğitim Merkezi"
  }
}
```

### 10. WebSite Schema (Arama Kutusu için)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Su Tesisatçısı Berat",
  "url": "https://sutesisatcisiberat.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://sutesisatcisiberat.com/arama?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

## Sayfa Türlerine Göre Schema

### Ana Sayfa
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "Su Tesisatçısı Berat",
      "url": "https://sutesisatcisiberat.com"
    },
    {
      "@type": "Organization",
      "name": "Su Tesisatçısı Berat",
      "url": "https://sutesisatcisiberat.com",
      "logo": "https://sutesisatcisiberat.com/logo.png"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://sutesisatcisiberat.com/#localbusiness",
      "name": "Su Tesisatçısı Berat",
      ...
    }
  ]
}
```

### Hizmet Sayfası
```
Schema türleri:
- Service
- LocalBusiness (referans)
- BreadcrumbList
- FAQPage (varsa)
```

### Blog Yazısı
```
Schema türleri:
- Article / BlogPosting
- BreadcrumbList
- Person (yazar)
- FAQPage (varsa)
- HowTo (uygunsa)
```

### İletişim Sayfası
```
Schema türleri:
- LocalBusiness
- ContactPage
- BreadcrumbList
```

### Bölge Sayfası
```
Schema türleri:
- LocalBusiness (areaServed ile)
- Service
- BreadcrumbList
```

## Schema Test ve Doğrulama

### Test Araçları

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - En güncel ve güvenilir

2. **Schema.org Validator**
   - URL: https://validator.schema.org
   - Detaylı hata raporları

3. **Google Search Console**
   - Enhancements raporları
   - Canlı hata takibi

### Yaygın Hatalar

#### 1. Eksik Zorunlu Alanlar
```json
// HATALI - name eksik
{
  "@type": "LocalBusiness",
  "telephone": "+90-534-383-7758"
}

// DOĞRU
{
  "@type": "LocalBusiness",
  "name": "Su Tesisatçısı Berat",
  "telephone": "+90-534-383-7758"
}
```

#### 2. Yanlış Veri Türü
```json
// HATALI - sayı string olarak
{
  "ratingValue": "4.9"  // Bazı durumlarda sorun
}

// DOĞRU
{
  "ratingValue": 4.9
}
```

#### 3. URL Hataları
```json
// HATALI - eksik protokol
{
  "url": "sutesisatcisiberat.com"
}

// DOĞRU
{
  "url": "https://sutesisatcisiberat.com"
}
```

#### 4. Sahte/Manipülatif Veri
```json
// YANLIŞ - var olmayan rating
{
  "aggregateRating": {
    "ratingValue": "5.0",
    "reviewCount": "1000"  // Gerçekte yok
  }
}
```
**Uyarı:** Google sahte schema verisini tespit edebilir ve cezalandırabilir.

## WordPress için Schema

### Yoast SEO ile Schema
Yoast SEO otomatik olarak temel schema ekler:
- Organization/Person
- WebSite
- WebPage
- Article/BlogPosting
- BreadcrumbList

### Manuel Ekleme (Yoast)
```
Yoast SEO > Search Appearance > Content Types
- Her içerik türü için schema ayarları
```

### Rank Math ile Schema
```
Rank Math > Titles & Meta > [İçerik Türü]
- Schema Type seçimi
- Özel alanlar
```

### Manuel Schema Ekleme
```php
// functions.php veya özel plugin
function add_local_business_schema() {
  if (is_front_page()) {
    ?>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      ...
    }
    </script>
    <?php
  }
}
add_action('wp_head', 'add_local_business_schema');
```

## Schema Best Practices

### 1. Tutarlılık
- NAP bilgileri tüm schema'larda aynı olmalı
- Logo URL'si tutarlı olmalı

### 2. Güncellik
- Çalışma saatlerini güncel tut
- Fiyat bilgilerini güncelle
- Yorum sayısını senkronize et

### 3. Doğruluk
- Sadece gerçek verileri kullan
- Sahte rating ekleme
- Var olmayan özellikler ekleme

### 4. Kapsam
- Tüm önemli sayfalara schema ekle
- Birden fazla schema türünü @graph ile birleştir

## Schema Checklist

### Temel Kurulum
- [ ] LocalBusiness schema ana sayfada
- [ ] Organization schema eklendi
- [ ] WebSite schema eklendi
- [ ] Logo ve temel bilgiler doğru

### Sayfa Bazlı
- [ ] Hizmet sayfalarında Service schema
- [ ] Blog yazılarında Article schema
- [ ] SSS bölümlerinde FAQPage schema
- [ ] Rehber içeriklerde HowTo schema

### Test ve Doğrulama
- [ ] Rich Results Test ile kontrol
- [ ] Search Console hataları temiz
- [ ] Mobil ve masaüstü test
- [ ] Tüm URL'ler doğru

### İzleme
- [ ] Search Console zengin sonuç takibi
- [ ] CTR değişimi izleme
- [ ] Hata bildirimleri aktif

---

*Son güncelleme: 2025*
*Kaynak: Claude SEO Master Instructions v4.0, Schema.org*
