# Yerel SEO (Local SEO) Rehberi

## Yerel SEO Nedir?

Yerel SEO, bir işletmenin coğrafi olarak belirli bir bölgedeki aramalarda görünürlüğünü artırmak için yapılan optimizasyon çalışmalarıdır. "Yakınımdaki su tesisatçısı" veya "İstanbul tıkanıklık açma" gibi aramalar yerel niyetli aramalardır.

## Yerel SEO Neden Önemlidir?

- **%46** mobil aramanın yerel niyet taşıdığı belirtilmektedir
- **%88** yerel işletme arayanların 24 saat içinde işletmeyi ziyaret ettiği veya aradığı gözlemlenmektedir
- **%72** yerel arama yapanların 8 km içindeki işletmeleri ziyaret ettiği raporlanmaktadır

## Google'ın Yerel Sıralama Faktörleri

### 1. Alaka (Relevance)
İşletmenizin arama sorgusuyla ne kadar alakalı olduğu:
- Google Business Profile kategorisi
- İşletme açıklaması
- Web sitesi içeriği
- Hizmet/ürün listesi

### 2. Mesafe (Distance)
Arayanın konumu ile işletme arasındaki fiziksel mesafe:
- Kullanıcının GPS konumu
- Aramada belirtilen konum
- "Yakınımda" sorguları

### 3. Önem (Prominence)
İşletmenin çevrimiçi ve çevrimdışı tanınırlığı:
- Yorum sayısı ve puanı
- Backlink profili
- Marka bahisleri
- Sosyal medya varlığı

## Google Business Profile (GBP) Optimizasyonu

### Temel Bilgiler
```
İşletme Adı: [Tam ve tutarlı isim]
Adres: [Doğru ve doğrulanmış adres]
Telefon: [Yerel alan kodlu numara]
Web sitesi: [HTTPS URL]
Çalışma saatleri: [Güncel ve doğru]
Kategori: [Ana + Yan kategoriler]
```

### Profil Tamamlama Kontrol Listesi
- [ ] İşletme doğrulaması yapıldı
- [ ] Tüm kategoriler seçildi
- [ ] Açılış/kapanış saatleri girildi
- [ ] Tatil saatleri güncellendi
- [ ] Hizmet alanı belirlendi
- [ ] Ürün/hizmet listesi eklendi
- [ ] Yüksek kaliteli fotoğraflar yüklendi
- [ ] İşletme açıklaması yazıldı (anahtar kelimelerle)
- [ ] Mesajlaşma aktifleştirildi
- [ ] Sık sorulan sorular eklendi

### GBP Gönderi Stratejisi
**Gönderi Türleri:**
1. **Güncelleme gönderileri**: Haberler, duyurular
2. **Etkinlik gönderileri**: Özel günler, kampanyalar
3. **Teklif gönderileri**: İndirimler, promosyonlar
4. **Ürün gönderileri**: Yeni hizmetler

**Gönderi Sıklığı:** Haftada 1-2 gönderi önerilir

## NAP Tutarlılığı

NAP = Name (İsim) + Address (Adres) + Phone (Telefon)

### Tutarlılık Kuralları
```
DOĞRU FORMAT:
Su Tesisatçısı Berat
Ataşehir, İstanbul
0534 383 7758

YANLIŞ FORMAT:
Su Tesisatçısı B.
Ataşehir / İst.
+90 534 383 77 58
```

### NAP Kontrol Noktaları
- Google Business Profile
- Web sitesi footer
- İletişim sayfası
- Sosyal medya profilleri
- Yerel dizinler
- İş ortaklığı siteleri

## LocalBusiness Schema Markup

### Temel LocalBusiness Şeması
```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Su Tesisatçısı Berat",
  "image": "https://example.com/logo.jpg",
  "telephone": "+90-534-383-7758",
  "email": "info@sutesisatcisiberat.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Örnek Mahallesi",
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
  "url": "https://www.sutesisatcisiberat.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": ["Ataşehir", "Kadıköy", "Üsküdar", "Maltepe"]
}
```

## Yerel Anahtar Kelime Stratejisi

### Anahtar Kelime Formülü
```
[Hizmet] + [Konum] = Yerel Anahtar Kelime

Örnekler:
- su tesisatçısı Ataşehir
- tıkanıklık açma Kadıköy
- su kaçağı tespiti İstanbul Anadolu Yakası
```

### Yerel Niyet Modifiyerleri
- "yakınımda" / "yakınındaki"
- "7/24" / "acil"
- "[ilçe adı]" / "[şehir adı]"
- "hemen" / "bugün"
- "en yakın"

### İlçe Bazlı Sayfa Yapısı
```
Ana Sayfa
├── /hizmetler/
│   ├── /su-kacagi-tespiti/
│   ├── /tikaniklik-acma/
│   └── /petek-temizleme/
└── /bolge/
    ├── /atasehir-su-tesisatcisi/
    ├── /kadikoy-su-tesisatcisi/
    ├── /maltepe-su-tesisatcisi/
    └── /pendik-su-tesisatcisi/
```

## Yorum Yönetimi

### Yorum Stratejisi
1. **Aktif talep**: Her işten sonra yorum isteyin
2. **Kolaylaştırma**: Doğrudan yorum linki sağlayın
3. **Yanıtlama**: Tüm yorumlara 24-48 saat içinde yanıt verin
4. **Olumsuz yorum yönetimi**: Profesyonel ve çözüm odaklı yaklaşın

### Yorum Yanıt Şablonları

**Olumlu yorum yanıtı:**
```
[Müşteri Adı] Bey/Hanım, güzel değerlendirmeniz için teşekkür ederiz. 
Sizinle çalışmak bizim için de keyifli oldu. İleride herhangi bir 
tesisat ihtiyacınızda yine bize ulaşabilirsiniz. İyi günler dileriz!
```

**Olumsuz yorum yanıtı:**
```
[Müşteri Adı] Bey/Hanım, yaşadığınız olumsuz deneyim için özür dileriz. 
Müşteri memnuniyeti bizim için çok önemlidir. Sorunu çözmek için 
lütfen 0534 383 7758 numarasından bize ulaşın. Durumu telafi etmek istiyoruz.
```

## brickAndMortarStrength Skoru

Google, yerel işletmelerin fiziksel varlık gücünü puanlar:

### Skoru Artıran Faktörler
1. **GBP tamamlılığı ve doğrulaması**
2. **Yorum hacmi ve kalitesi**
3. **Kullanıcı fotoğraf yüklemeleri**
4. **GBP etkileşimleri** (tıklama, yön tarifi, arama)
5. **Fiziksel konum ziyaretleri** (Google Maps check-in)

## Çoklu Konum SEO Stratejisi

### Her Konum İçin
- Benzersiz GBP profili
- Özel açılış sayfası
- Yerel içerik
- Konum spesifik yorumlar

### Site Yapısı
```
domain.com/
├── /istanbul-anadolu/
│   ├── /atasehir/
│   ├── /kadikoy/
│   └── /maltepe/
└── /kocaeli/
    ├── /gebze/
    ├── /darica/
    └── /cayirova/
```

## Yerel Link Building

### Yerel Link Kaynakları
1. **Ticaret odaları**
2. **Yerel iş dizinleri**
3. **Sektörel dernekler**
4. **Yerel haber siteleri**
5. **Bölgesel bloglar**
6. **Üniversite ve okul siteleri**
7. **Belediye siteleri**

### Yerel Dizin Listesi (Türkiye)
- Google Business Profile
- Bing Places
- Yandex Business
- Foursquare
- Yelp
- Sikayetvar
- İşyerim.com
- Firmasec.com.tr

## Yerel Sayfa İçerik Yapısı

### Şablon
```markdown
# [Hizmet] [Konum] - [CTA]

## [Konum]'da [Hizmet] Hizmeti

[Konum] ve çevresinde profesyonel [hizmet] hizmeti sunuyoruz.
[Özgün yerel içerik - bölge özellikleri, yerel referanslar]

### Hizmet Bölgelerimiz
- [Alt bölge 1]
- [Alt bölge 2]
- [Alt bölge 3]

### Neden Bizi Tercih Etmelisiniz?
- 7/24 hizmet
- [X] yıllık deneyim
- Garantili işçilik
- Uygun fiyat

### Müşteri Yorumları
[Yerel müşteri yorumları]

### İletişim
📞 [Telefon]
📍 [Adres]
⏰ [Çalışma saatleri]

[CTA Butonu: Hemen Arayın!]
```

## Yerel SEO KPI'ları

| Metrik | Hedef | Ölçüm Aracı |
|--------|-------|-------------|
| GBP görüntülenme | Aylık %10 artış | GBP Insights |
| Yön tarifi tıklamaları | Aylık %15 artış | GBP Insights |
| Arama tıklamaları | Aylık %20 artış | GBP Insights |
| Yorum puanı | 4.5+ | GBP |
| Yerel sıralama | İlk 3 (Map Pack) | Manuel kontrol |
| Organik yerel trafik | Aylık %15 artış | Google Analytics |

## Yaygın Yerel SEO Hataları

1. **NAP tutarsızlığı** - Her yerde farklı bilgi
2. **GBP kategorisi yanlış** - Alakasız kategori seçimi
3. **Sahte yorumlar** - Google cezası riski
4. **Yinelenen profiller** - Otorite bölünmesi
5. **Güncel olmayan bilgiler** - Yanlış saat/adres
6. **Yerel içerik eksikliği** - Genel içerik kullanımı
7. **Mobil optimizasyon eksikliği** - Yerel aramalar çoğunlukla mobil

## Yerel SEO Checklist

### Aylık Görevler
- [ ] GBP istatistiklerini incele
- [ ] Yeni yorumları yanıtla
- [ ] 2-4 GBP gönderisi paylaş
- [ ] Rakip profillerini kontrol et
- [ ] NAP tutarlılığını doğrula

### Üç Aylık Görevler
- [ ] GBP fotoğraflarını güncelle
- [ ] Hizmet listesini gözden geçir
- [ ] Yerel link fırsatlarını araştır
- [ ] Yerel içerikleri güncelle

### Yıllık Görevler
- [ ] Tam strateji değerlendirmesi
- [ ] Rakip analizi
- [ ] Yeni konum fırsatları
- [ ] GBP kategori güncellemesi

---

*Son güncelleme: 2025*
*Kaynak: Claude SEO Master Instructions v4.0*
