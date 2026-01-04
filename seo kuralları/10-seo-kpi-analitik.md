# SEO KPI ve Analitik Rehberi

## SEO Analitiğinin Önemi

SEO çalışmalarının başarısını ölçmek, stratejileri optimize etmek ve ROI'yi kanıtlamak için doğru metrikleri takip etmek şarttır.

## Temel SEO KPI'ları

### 1. Organik Trafik Metrikleri

| Metrik | Tanım | Hedef | Araç |
|--------|-------|-------|------|
| Organik Oturumlar | Aramadan gelen ziyaretler | Aylık %10-15 artış | GA4 |
| Organik Kullanıcılar | Benzersiz ziyaretçi | %60-70 yeni | GA4 |
| Sayfa Görüntüleme | Toplam sayfa görüntüleme | 2-3/kullanıcı | GA4 |

**GA4 Yolu:**
```
Reports > Acquisition > Traffic acquisition
Filtre: Session default channel group = Organic Search
```

### 2. Sıralama Metrikleri

| Metrik | Tanım | Hedef |
|--------|-------|-------|
| Top 3 Kelimeler | En değerli pozisyonlar | CTR %30+ |
| Top 10 Kelimeler | İlk sayfa | Ana hedef |
| Ortalama Pozisyon | Genel sıralama | < 15 |
| Sıralanan Kelime Sayısı | Toplam kelime | Artış trendi |

**GSC Yolu:**
```
Performance > Search results > Average position
```

### 3. Görünürlük Metrikleri

| Metrik | Tanım | Hedef |
|--------|-------|-------|
| İmpresyon | Gösterim sayısı | Aylık artış |
| CTR | Tıklama oranı | %3-5 genel |
| SERP Görünürlük | Toplam görünürlük skoru | Artış |

**CTR Hedefleri (Pozisyona Göre):**
- Pozisyon 1: %25-35
- Pozisyon 2-3: %10-20
- Pozisyon 4-10: %3-10

### 4. Etkileşim Metrikleri

| Metrik | Tanım | Hedef |
|--------|-------|-------|
| Oturum Süresi | Sitede geçirilen süre | > 2 dakika |
| Bounce Rate | Hemen çıkma | < %60 |
| Sayfa/Oturum | Oturum başına sayfa | > 2 |
| Engagement Rate | Etkileşim oranı | > %40 |

### 5. Dönüşüm Metrikleri

| Metrik | Tanım | Hedef |
|--------|-------|-------|
| Organik Dönüşümler | Form, çağrı, WhatsApp | Aylık artış |
| Dönüşüm Oranı | Dönüşüm/Oturum | %2-5 |
| Lead Maliyeti | Organik lead maliyeti | Düşüş trendi |

**Dönüşüm Türleri:**
- Form gönderimi
- Telefon tıklaması
- WhatsApp tıklaması
- E-posta tıklaması

### 6. Teknik SEO Metrikleri

| Metrik | Hedef | Araç |
|--------|-------|------|
| LCP | < 2.5s | PageSpeed |
| FID/INP | < 100ms | PageSpeed |
| CLS | < 0.1 | PageSpeed |
| Dizinlenen Sayfalar | %95+ | GSC |
| Crawl Hataları | 0 | GSC |

### 7. Backlink Metrikleri

| Metrik | Tanım | Hedef |
|--------|-------|-------|
| Referring Domains | Link veren domain | Aylık 5-10 yeni |
| DA/DR | Domain otoritesi | Rakiplerle eşit |
| Link Büyümesi | Net link kazanımı | Pozitif trend |
| Toxic Link Oranı | Zararlı link yüzdesi | < %5 |

## SEO Araçları

### Google Araçları (Ücretsiz)

| Araç | Kullanım |
|------|----------|
| Google Analytics 4 | Trafik, davranış, dönüşüm |
| Google Search Console | Arama performansı, teknik |
| PageSpeed Insights | Site hızı, Core Web Vitals |
| Google Trends | Kelime trendi |
| Keyword Planner | Kelime araştırması |

### Ücretli Araçlar

| Araç | Kullanım | Fiyat |
|------|----------|-------|
| Ahrefs | Backlink, kelime, rakip | $99+/ay |
| SEMrush | All-in-one SEO | $119+/ay |
| Moz Pro | DA, link analizi | $99+/ay |
| Screaming Frog | Teknik crawl | £149/yıl |

## Google Analytics 4 Kurulumu

### Organik Trafik Raporu
```
1. Reports > Acquisition > Traffic acquisition
2. Session default channel group = Organic Search
3. Add comparison: önceki dönem
```

### Dönüşüm Takibi
```
Admin > Events > Create event
Örnek: form_submit, phone_click, whatsapp_click
```

### Özel Rapor Oluşturma
```
Explore > Free form
Dimensions: Landing page, Source/medium
Metrics: Sessions, Conversions, Engagement rate
```

## Google Search Console Kullanımı

### Performans Raporu
```
Performance > Search results
- Total clicks
- Total impressions
- Average CTR
- Average position
```

### Filtreleme
```
+ New > Query contains: [anahtar kelime]
+ New > Page: [sayfa URL'si]
+ New > Country: Turkey
+ New > Device: Mobile
```

### Sayfa Dizinleme
```
Pages > See data about indexed pages
- Indexed: Tamamlandı
- Not indexed: Sebepleri incele
```

### Temel Sorunlar
```
Experience > Core Web Vitals
- Mobile
- Desktop
```

## Raporlama

### Haftalık Rapor Şablonu
```
HAFTALIK SEO RAPORU
Tarih: [Hafta]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TRAFİK
├── Organik Oturumlar: X (+%Y)
├── Organik Kullanıcılar: X (+%Y)
└── Sayfa Görüntüleme: X

SIRALAMA
├── Top 3 Kelime Sayısı: X
├── Top 10 Kelime Sayısı: X
└── Ortalama Pozisyon: X

DÖNÜŞÜM
├── Toplam Lead: X
├── Dönüşüm Oranı: %X
└── Telefon Çağrısı: X

NOTLAR
- [Önemli değişiklik]
- [Yapılan çalışma]
- [Gelecek hafta planı]
```

### Aylık Rapor Şablonu
```
AYLIK SEO RAPORU
Ay: [Ay/Yıl]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ÖZET
├── Organik Trafik: X (+%Y YoY)
├── Yeni Backlink: X domain
├── Top 10 Kelime: X (+Y)
└── Toplam Dönüşüm: X

DETAYLI ANALİZ
1. Trafik Analizi
   - Kaynak dağılımı
   - Cihaz dağılımı
   - Lokasyon dağılımı

2. Sıralama Analizi
   - Yükselen kelimeler
   - Düşen kelimeler
   - Yeni fırsatlar

3. İçerik Performansı
   - En çok trafik alan sayfalar
   - En yüksek dönüşüm oranı
   - Düşük performanslı sayfalar

4. Teknik Durum
   - Core Web Vitals
   - Dizinleme durumu
   - Crawl hataları

ÖNERİLER
- [Öneri 1]
- [Öneri 2]
- [Öneri 3]

GELECEK AY PLANI
- [Plan 1]
- [Plan 2]
- [Plan 3]
```

## SEO Dashboard Metrikleri

### Temel Dashboard
```
┌─────────────────────────────────────────────────────┐
│                   SEO DASHBOARD                      │
├─────────────────┬─────────────────┬─────────────────┤
│ Organik Trafik  │ Top 10 Kelime   │ Dönüşümler      │
│     12,450      │      45         │      156        │
│    (+15.2%)     │    (+8)         │    (+12%)       │
├─────────────────┼─────────────────┼─────────────────┤
│ Ortalama Poz.   │ CTR             │ Referring Dom.  │
│      8.3        │    4.2%         │      89         │
│    (-1.2)       │   (+0.3%)       │    (+5)         │
└─────────────────┴─────────────────┴─────────────────┘
```

## KPI Takip Takvimi

### Günlük
- Sıralama değişiklikleri (önemli kelimeler)
- Crawl hataları
- Site erişilebilirliği

### Haftalık
- Organik trafik
- Dönüşümler
- Yeni backlink'ler
- İçerik performansı

### Aylık
- Tüm KPI'ların detaylı analizi
- YoY karşılaştırma
- Rakip analizi
- Strateji güncelleme

### Üç Aylık
- Kapsamlı SEO audit
- ROI hesaplama
- Yıllık hedef revizyonu

## Checklist

### Araç Kurulumu
- [ ] GA4 kurulu ve yapılandırılmış
- [ ] GSC bağlı ve doğrulanmış
- [ ] Dönüşüm hedefleri tanımlı
- [ ] Backlink takip aracı aktif

### Raporlama
- [ ] Haftalık rapor şablonu hazır
- [ ] Aylık rapor şablonu hazır
- [ ] Dashboard oluşturuldu
- [ ] Otomatik uyarılar kurulu

### Takip
- [ ] KPI hedefleri belirlendi
- [ ] Baseline veriler kaydedildi
- [ ] Karşılaştırma dönemleri ayarlandı
- [ ] Raporlama takvimi oluşturuldu

---

*Son güncelleme: 2025*
*Kaynak: Claude SEO Master Instructions v4.0*
