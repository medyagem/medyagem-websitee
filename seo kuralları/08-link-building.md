# Link Building (Backlink) Rehberi

## Backlink Nedir?

Backlink, başka bir web sitesinden sizin sitenize verilen köprüdür (hyperlink). Google için hâlâ en önemli sıralama faktörlerinden biridir çünkü kaliteli sitelerden alınan linkler "güven oyu" olarak değerlendirilir.

## Backlink'in Önemi

### Google'ın Link Değerlendirmesi (2025)

Google'ın sızdırılan belgelerine göre:
- **PageRank** hâlâ aktif ve önemli
- **Homepage PageRank** ayrı olarak değerlendiriliyor
- **Anchor text** profili internal/external ayrı analiz ediliyor
- **Link kalitesi** > Link miktarı

### Link Değeri Formülü
```
Link Değeri = Kaynak Site Otoritesi × Sayfa Otoritesi × Alaka × Dofollow Durumu
```

## Link Türleri

### Dofollow vs Nofollow

| Özellik | Dofollow | Nofollow |
|---------|----------|----------|
| SEO değeri | Yüksek | Düşük (dolaylı) |
| PageRank aktarımı | Evet | Hayır |
| HTML | `<a href="...">` | `<a href="..." rel="nofollow">` |
| Kullanım | Editöryal linkler | Ücretli, UGC, güvenilmez |

### Diğer rel Değerleri
```html
rel="sponsored" → Ücretli/sponsorlu linkler
rel="ugc"       → Kullanıcı tarafından oluşturulan içerik
rel="noopener"  → Güvenlik amaçlı (SEO etkisi yok)
```

### Link Kaynağına Göre Türler

#### Editorial Links (En Değerli)
- Doğal olarak kazanılan
- İçerik kalitesi nedeniyle verilen
- Editöryal kararla eklenen

#### Outreach Links
- Aktif olarak talep edilen
- Guest post, broken link building
- İlişki kurarak kazanılan

#### Self-Created Links
- Profil linkleri
- Forum imzaları
- Yorum linkleri
- Genellikle düşük değerli

## Link Kalite Kriterleri

### Yüksek Kaliteli Link Özellikleri
```
✓ Otoriter site (DA/DR 40+)
✓ Alakalı sektör/konu
✓ Editöryal içerikten
✓ Dofollow
✓ Doğal anchor text
✓ Trafik alan sayfa
✓ Unique referring domain
```

### Düşük Kaliteli/Riskli Link Özellikleri
```
✗ Spam siteler
✗ Link farm'lar
✗ PBN (Private Blog Network)
✗ Aşırı optimize anchor text
✗ Satın alınmış linkler
✗ Alakasız siteler
✗ Sitewide linkler (footer, sidebar)
```

## Link Building Stratejileri

### 1. İçerik Temelli Stratejiler

#### Skyscraper Tekniği
```
ADIMLAR:
1. Sektörde popüler içerik bul
2. Çok daha iyi versiyonunu oluştur
3. Orijinale link veren siteleri bul
4. Yeni içeriğini tanıt ve link iste
```

**Örnek:**
```
Rakip içerik: "10 Su Kaçağı Belirtisi" (50 backlink)
Senin içerik: "25 Su Kaçağı Belirtisi + Çözüm Rehberi + İnfografik"
→ Rakibe link verenlere ulaş
```

#### Orijinal Araştırma
- Anket sonuçları
- Sektör istatistikleri
- Vaka çalışmaları
- Trend raporları

**Örnek:** "2025 İstanbul Tesisat Hizmetleri Fiyat Araştırması"

#### Kapsamlı Rehberler
- Ultimate guide'lar
- A-Z rehberler
- Başlangıç kılavuzları

### 2. İlişki Temelli Stratejiler

#### Guest Posting (Misafir Yazarlık)
```
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
```

#### HARO (Help A Reporter Out)
```
Gazeteci soruları yanıtla → Medyada yer al → Kaliteli backlink kazan
```

#### Podcast/Röportajlar
- Sektörel podcast'lere konuk ol
- Röportaj ver
- Show notes'dan link al

### 3. Teknik Stratejiler

#### Broken Link Building
```
SÜREÇ:
1. Rakip siteleri Ahrefs'te tara
2. 404 veren sayfaları bul
3. Bu sayfalara link veren siteleri tespit et
4. Kendi alternatif içeriğini oluştur
5. Site sahiplerine ulaş, kırık linki bildir
6. Alternatif olarak kendi içeriğini öner
```

**E-posta Şablonu:**
```
Konu: [Site Adı]'nda Kırık Link Bildirimi

Merhaba [İsim],

[Makale adı] yazınızı okurken [kırık link]'in artık 
çalışmadığını fark ettim.

Bu konuda benzer bir kaynak hazırladım: [URL]
Belki okuyucularınız için faydalı olabilir.

İyi çalışmalar,
[İsim]
```

#### Resource Page Link Building
```
SÜREÇ:
1. "[sektör] kaynaklar" "faydalı linkler" ara
2. Kaynak sayfalarını listele
3. İçeriğinin uygun olup olmadığını kontrol et
4. Site sahibine ulaş ve ekleme talep et
```

#### Unlinked Mentions
```
SÜREÇ:
1. Marka adınızı Google Alerts'e ekle
2. Bahsedildiğiniz ama link verilmediği sayfaları bul
3. Site sahibine ulaş ve link iste
```

### 4. Yerel Link Building

#### Yerel Kaynaklar
- Ticaret odaları
- Yerel iş dernekleri
- Belediye siteleri
- Yerel haber siteleri
- Üniversite siteleri
- Hayır kurumları (sponsorluk)

#### Yerel İş Dizinleri
```
□ Google Business Profile
□ Bing Places
□ Yelp
□ Foursquare
□ Sikayetvar
□ Firmasec.com.tr
□ Sektörel dizinler
```

## Anchor Text Stratejisi

### Anchor Text Türleri

| Tür | Örnek | Önerilen Oran |
|-----|-------|---------------|
| Branded | "Su Tesisatçısı Berat" | %30-40 |
| URL | "sutesisatcisiberat.com" | %10-15 |
| Generic | "buraya tıklayın", "detay" | %15-20 |
| Exact match | "su kaçağı tespiti" | %5-10 |
| Partial match | "İstanbul su kaçağı servisi" | %10-15 |
| LSI/Related | "tesisat tamiri" | %10-15 |

### Doğal Anchor Profili
```
DOĞAL:
"Su Tesisatçısı Berat" (marka) - 35%
"bu siteye göz atın" (generic) - 20%
"sutesisatcisiberat.com" (URL) - 15%
"İstanbul'da tesisat hizmeti" (partial) - 15%
"su kaçağı tespiti" (exact) - 8%
"tesisat firması" (LSI) - 7%

SPAM (KAÇININ):
"su kaçağı tespiti" - 60%
"en iyi su tesisatçısı" - 25%
"ucuz tesisat" - 15%
```

## Link Building Outreach

### E-posta Best Practices

#### Konu Satırı Örnekleri
```
✓ "Soru: [Makale adı] hakkında"
✓ "[İsim], [konu] ile ilgili bir öneri"
✓ "Kaynakça için bir ekleme önerisi"

✗ "Link değişimi teklifi"
✗ "Backlink fırsatı!!!"
✗ "SEO için işbirliği"
```

#### E-posta Yapısı
```
1. Kişiselleştirilmiş açılış
   └── İçeriklerini okuduğunu göster

2. Değer önerisi
   └── Ne sunuyorsun, neden önemli

3. Spesifik talep
   └── Ne istediğini net söyle

4. Kolay aksiyon
   └── Link'i hazır ver, kolaylaştır

5. Profesyonel kapanış
```

#### Örnek Outreach E-postası
```
Konu: [Makale Adı] yazınız için kaynak önerisi

Merhaba [İsim],

"[Makale Adı]" yazınızı büyük ilgiyle okudum. Özellikle 
[spesifik nokta] bölümü çok faydalıydı.

Fark ettim ki [konu] hakkında detaylı bir bölüm yok. 
Bu konuda kapsamlı bir rehber hazırladım: [URL]

Okuyucularınız için faydalı olabileceğini düşündüm. 
Uygun görürseniz kaynaklar bölümüne ekleyebilirsiniz.

İyi çalışmalar,
[İsim]
[Site]
```

### Follow-up Stratejisi
```
Gün 0: İlk e-posta
Gün 5: Takip e-postası (yanıt yoksa)
Gün 12: Son takip
(3 e-postadan sonra bırak)
```

## Link Profile Analizi

### Backlink Audit Süreci

#### 1. Mevcut Linkleri Topla
```
Araçlar:
- Google Search Console (Links raporu)
- Ahrefs
- SEMrush
- Moz Link Explorer
```

#### 2. Link Kalitesini Değerlendir
```
Her link için kontrol:
□ Kaynak site DA/DR
□ Spam skoru
□ İçerik alakası
□ Link türü (dofollow/nofollow)
□ Anchor text
□ Link bağlamı
□ Site trafiği
```

#### 3. Toxic Linkleri Tespit Et
```
TOXIC LINK BELİRTİLERİ:
- Spam site (ilaç, kumar, yetişkin)
- PBN (benzer tasarım, içerik)
- Link farm
- Aşırı outbound link
- Alakasız dil/coğrafya
- Footer/sidebar linkleri
- Tamamen exact match anchor
```

#### 4. Disavow Dosyası (Gerekirse)
```
# Disavow dosyası örneği
# Domain bazlı
domain:spamsite.com
domain:linkfarm.net

# URL bazlı
https://example.com/spam-page/
```

**Uyarı:** Disavow sadece gerçekten zararlı linkler için kullanılmalı. Yanlış kullanım zarar verebilir.

## Link Building Araçları

### Araştırma Araçları
| Araç | Kullanım |
|------|----------|
| Ahrefs | Backlink analizi, content explorer |
| SEMrush | Rakip link analizi |
| Moz | Link explorer, spam score |
| Majestic | Trust/Citation flow |
| BuzzSumo | Viral içerik bulma |

### Outreach Araçları
| Araç | Kullanım |
|------|----------|
| Hunter.io | E-posta bulma |
| Pitchbox | Outreach yönetimi |
| BuzzStream | İlişki yönetimi |
| Mailshake | E-posta otomasyonu |

### Takip Araçları
| Araç | Kullanım |
|------|----------|
| Google Alerts | Marka mention takibi |
| Mention | Sosyal mention takibi |
| Linkody | Backlink monitoring |

## Link Building KPI'ları

### Ölçülecek Metrikler
```
AYLIK TAKİP:
□ Yeni referring domain sayısı
□ Toplam backlink artışı
□ Ortalama kaynak DA/DR
□ Dofollow/Nofollow oranı
□ Anchor text dağılımı
□ Lost links (kaybedilen)
□ Outreach yanıt oranı
□ Link kazanım maliyeti
```

### Başarı Kriterleri
```
HEDEFLER:
- Aylık 5-10 yeni referring domain
- Ortalama kaynak DA > 30
- Dofollow oranı > %70
- Spam link oranı < %5
- Outreach yanıt oranı > %10
```

## Kaçınılması Gereken Uygulamalar

### Google Spam Politikaları İhlalleri

#### 1. Link Schemes (Link Planları)
```
❌ Link satın alma/satma
❌ Aşırı link değişimi
❌ Otomatik link oluşturma
❌ Düşük kaliteli dizin spam'i
❌ Forum/yorum spam'i
❌ Widget/embed link manipülasyonu
```

#### 2. Private Blog Networks (PBN)
```
❌ Sadece link için oluşturulan siteler
❌ Benzer tasarım/içerik pattern'ı
❌ Aynı hosting/IP
❌ Düşük kaliteli içerik
```

#### 3. Ücretli Linkler (Belirtilmemiş)
```
❌ Sponsorlu içerik (rel="sponsored" olmadan)
❌ Ücretli guest post (dofollow)
❌ Link kiralama
```

### Ceza Riskleri
- **Manuel ceza:** Google Search Console'da bildirim
- **Algoritmik ceza:** Penguin güncellemesi etkisi
- **Sonuç:** Sıralama düşüşü veya indeks çıkışı

## Link Building Checklist

### Strateji Planlama
- [ ] Mevcut backlink profili analiz edildi
- [ ] Rakip backlink'leri incelendi
- [ ] Link gap analizi yapıldı
- [ ] Hedef siteler belirlendi
- [ ] Anchor text stratejisi oluşturuldu

### İçerik Hazırlık
- [ ] Link-worthy içerik oluşturuldu
- [ ] Skyscraper içerik hazırlandı
- [ ] Orijinal araştırma/veri toplandı
- [ ] İnfografik/görsel içerik üretildi

### Outreach Süreci
- [ ] Hedef site listesi oluşturuldu
- [ ] İletişim bilgileri bulundu
- [ ] E-posta şablonları hazırlandı
- [ ] Kişiselleştirilmiş e-postalar gönderildi
- [ ] Follow-up takibi yapıldı

### Takip ve Analiz
- [ ] Yeni linkler izleniyor
- [ ] Kayıp linkler takip ediliyor
- [ ] Anchor text dağılımı kontrol ediliyor
- [ ] Aylık rapor hazırlanıyor

---

*Son güncelleme: 2025*
*Kaynak: Claude SEO Master Instructions v4.0*
