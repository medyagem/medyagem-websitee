# Google Ads ve SEM Rehberi

## SEM Nedir?

SEM (Search Engine Marketing), arama motoru pazarlamasıdır. SEO'dan farkı ücretli reklamları kapsamasıdır.

```
Dijital Pazarlama
├── SEO (Organik)
└── SEM (Ücretli)
    └── Google Ads
    └── Bing Ads
```

## Google Ads Temelleri

### Hesap Yapısı
```
Google Ads Hesabı
├── Kampanya 1 (Bütçe, hedefleme)
│   ├── Reklam Grubu 1 (Kelime grubu)
│   │   ├── Anahtar kelimeler
│   │   └── Reklamlar
│   └── Reklam Grubu 2
└── Kampanya 2
```

### Kampanya Türleri

| Tür | Kullanım | Format |
|-----|----------|--------|
| Search | Arama sonuçları | Metin |
| Display | Web siteleri | Banner |
| Shopping | Ürün listeleme | Görsel+fiyat |
| Video | YouTube | Video |
| Performance Max | Otomatik | Karma |

## Arama Kampanyaları

### Anahtar Kelime Eşleme Türleri

| Tür | Sembol | Örnek | Tetikler |
|-----|--------|-------|----------|
| Broad | kelime | su tesisatçısı | ilgili tüm aramalar |
| Phrase | "kelime" | "su tesisatçısı" | sıralı kelime içeren |
| Exact | [kelime] | [su tesisatçısı] | tam eşleşme |

### Örnek Anahtar Kelime Yapısı
```
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
```

### Negatif Anahtar Kelimeler
```
Örnek negatif liste:
- ücretsiz
- bedava
- staj
- iş ilanı
- kurs
- eğitim
- nasıl yapılır (bilgilendirici niyet)
```

## Reklam Yazımı

### Responsive Search Ads (RSA)
```
Başlıklar (max 30 karakter, 15 adet):
1. Su Kaçağı Tespiti İstanbul
2. 7/24 Acil Tesisat Servisi
3. Kameralı Kaçak Tespiti
4. 15 Yıllık Deneyim
5. Aynı Gün Müdahale
...

Açıklamalar (max 90 karakter, 4 adet):
1. İstanbul'un her yerine 30 dakikada ulaşım. Ücretsiz keşif. Hemen arayın!
2. Profesyonel ekip, modern ekipman. Garantili hizmet. 0534 383 7758
...
```

### Reklam Yazım İpuçları
```
✓ Anahtar kelimeyi başlıkta kullan
✓ Benzersiz değer önerisi sun
✓ CTA (Call to Action) ekle
✓ Rakamlar kullan (15 yıl, 7/24)
✓ Aciliyet oluştur
✓ Güven unsurları ekle
```

### Reklam Uzantıları

| Uzantı | Kullanım |
|--------|----------|
| Sitelink | Alt sayfa linkleri |
| Callout | Özellik vurgulama |
| Call | Telefon numarası |
| Location | Adres ve harita |
| Price | Fiyat listesi |
| Structured Snippet | Hizmet listesi |

## Teklif Stratejileri

### Manuel Teklif
```
Avantaj: Tam kontrol
Dezavantaj: Zaman alıcı
Kullanım: Küçük hesaplar, test aşaması
```

### Otomatik Stratejiler

| Strateji | Amaç | Ne Zaman |
|----------|------|----------|
| Maximize Clicks | En çok tıklama | Trafik odaklı |
| Maximize Conversions | En çok dönüşüm | Dönüşüm odaklı |
| Target CPA | Hedef maliyet/dönüşüm | Maliyet kontrolü |
| Target ROAS | Hedef getiri | E-ticaret |

## Landing Page Optimizasyonu

### Landing Page Kriterleri
```
□ Anahtar kelime uyumu
□ Net değer önerisi
□ Görünür CTA
□ Mobil uyumluluk
□ Hızlı yükleme (< 3s)
□ Güven unsurları
□ Form kısa ve basit
```

### Landing Page Yapısı
```
┌─────────────────────────────────────┐
│ LOGO          TELEFON NUMARASI      │
├─────────────────────────────────────┤
│                                     │
│     BAŞLIK (Anahtar kelime)         │
│     Alt başlık (Değer önerisi)      │
│                                     │
│     [ANA CTA BUTONU]                │
│                                     │
├─────────────────────────────────────┤
│ Özellik 1 │ Özellik 2 │ Özellik 3  │
├─────────────────────────────────────┤
│                                     │
│     Hizmet Detayları                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│     Müşteri Yorumları               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│     SSS                             │
│                                     │
├─────────────────────────────────────┤
│     [SON CTA]                       │
└─────────────────────────────────────┘
```

## Dönüşüm Takibi

### Dönüşüm Türleri
```
1. Form Gönderimi
   - Contact form
   - Teklif formu

2. Telefon Araması
   - Website call
   - Ad call extension

3. WhatsApp Tıklaması
   - Event tracking

4. Sayfa Görüntüleme
   - Thank you page
   - Fiyat sayfası
```

### Google Tag Manager Kurulumu
```javascript
// Telefon tıklama takibi
document.querySelectorAll('a[href^="tel:"]').forEach(function(element) {
    element.addEventListener('click', function() {
        gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXX'
        });
    });
});
```

## Kalite Puanı

### Kalite Puanı Bileşenleri
```
Kalite Puanı (1-10)
├── Beklenen CTR (Expected CTR)
├── Reklam Alaka Düzeyi (Ad Relevance)
└── Landing Page Deneyimi (Landing Page Experience)
```

### Kalite Puanı İyileştirme
```
CTR Artırma:
- Daha ilgi çekici başlıklar
- Uzantıları aktif kullan
- Negatif kelimeler ekle

Alaka Artırma:
- Anahtar kelimeyi reklamda kullan
- Reklam gruplarını daralt
- SKAG (Single Keyword Ad Group)

Landing Page:
- Sayfa hızını artır
- Mobil uyumlu yap
- Anahtar kelime uyumu sağla
```

## Bütçe Yönetimi

### Bütçe Hesaplama
```
Günlük Bütçe = (Aylık Bütçe) / 30.4

Örnek:
Aylık bütçe: 10,000 TL
Günlük bütçe: 10,000 / 30.4 = ~329 TL
```

### Bütçe Dağılımı
```
Toplam Bütçe: 10,000 TL/ay
├── Marka kampanyası: 1,000 TL (%10)
├── Ana hizmet: 5,000 TL (%50)
├── Bölgesel: 3,000 TL (%30)
└── Test: 1,000 TL (%10)
```

## Raporlama ve Optimizasyon

### Temel Metrikler

| Metrik | Tanım | Hedef |
|--------|-------|-------|
| CTR | Tıklama oranı | > %5 |
| CPC | Tıklama maliyeti | Sektör ortalaması |
| Conv. Rate | Dönüşüm oranı | > %5 |
| CPA | Dönüşüm maliyeti | ROI pozitif |
| ROAS | Reklam getirisi | > 300% |

### Haftalık Kontrol Listesi
```
□ Arama terimleri raporu → negatif kelime ekle
□ Düşük CTR reklamlar → test et veya duraklat
□ Yüksek CPA kelimeler → teklif düşür
□ Kalite puanı düşükler → optimizasyon yap
□ Bütçe kontrolü → aşım var mı?
```

### A/B Test Stratejisi
```
Test edilecekler:
1. Başlık varyasyonları
2. CTA ifadeleri
3. Landing page tasarımı
4. Teklif stratejileri
5. Hedefleme seçenekleri
```

## SEO vs Google Ads Karşılaştırması

| Faktör | SEO | Google Ads |
|--------|-----|------------|
| Maliyet | Zaman/çaba | Doğrudan ödeme |
| Süre | 3-6 ay | Anında |
| Sürdürülebilirlik | Uzun vadeli | Bütçe bitince durur |
| Güvenilirlik | Daha yüksek | Reklam etiketi |
| Kontrol | Sınırlı | Tam kontrol |
| Ölçüm | Dolaylı | Doğrudan |

### Entegre Strateji
```
Kısa vade (0-3 ay): Google Ads ağırlıklı
Orta vade (3-6 ay): Google Ads + SEO
Uzun vade (6+ ay): SEO ağırlıklı, Ads destekli
```

## Google Ads Checklist

### Kurulum
- [ ] Hesap yapısı planlandı
- [ ] Dönüşüm takibi kuruldu
- [ ] Kampanyalar oluşturuldu
- [ ] Reklam grupları düzenlendi
- [ ] Anahtar kelimeler eklendi
- [ ] Negatif kelimeler belirlendi
- [ ] Reklamlar yazıldı
- [ ] Uzantılar eklendi

### Optimizasyon
- [ ] Landing page optimize
- [ ] Kalite puanı kontrol
- [ ] Teklif stratejisi belirlendi
- [ ] Bütçe dağıtıldı
- [ ] A/B testler planlandı

### Takip
- [ ] Haftalık rapor şablonu hazır
- [ ] KPI hedefleri belirlendi
- [ ] Alarm/bildirimler kurulu

---

*Son güncelleme: 2025*
*Kaynak: Claude SEO Master Instructions v4.0*
