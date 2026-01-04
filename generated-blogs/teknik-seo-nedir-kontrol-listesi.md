# Teknik SEO Nedir? Kapsamlı Kontrol Listesi

Web sitenizin arama motorlarında görünürlüğünü artırmak için yalnızca harika içerikler üretmek yeterli değildir. Görünmez bir buzdağı gibi, sitenizin altında yatan teknik altyapı, başarınızın temelini oluşturur. İşte bu noktada **Teknik SEO** devreye girer. Bu detaylı rehberde, teknik SEO'nun ne olduğunu, neden kritik öneme sahip olduğunu ve sitenizin arama motorları tarafından kolayca bulunup dizine eklenmesini sağlamak için atmanız gereken adımları kapsamlı bir kontrol listesiyle birlikte inceleyeceğiz.

## Teknik SEO Nedir?

Teknik SEO, web sitenizin arama motoru botları tarafından daha verimli bir şekilde taranabilmesini, dizine eklenebilmesini ve anlaşılabilmesini sağlayan tüm optimizasyon süreçlerini kapsar. Bu, sitenizin arama motoru sıralamalarını doğrudan etkileyen ve kullanıcı deneyimini iyileştiren teknik unsurlara odaklanır. En iyi içeriğe veya en güçlü backlink profiline sahip olsanız bile, eğer teknik sorunlar sitenizin botlar tarafından erişimini engelliyorsa, arama sonuçlarında üst sıralarda yer almanız imkansız hale gelebilir.

Teknik SEO; site hızı, mobil uyumluluk, site yapısı, XML sitemap, robots.txt, canonical etiketleri, HTTPS kullanımı, yapısal veri işaretlemeleri ve daha fazlasını içeren geniş bir yelpazeyi kapsar. Amacı, arama motorlarının sitenizi en iyi şekilde anlamasını ve değerlendirmesini sağlayarak potansiyel sıralama engellerini ortadan kaldırmaktır.

## Crawl ve Index Temelleri

Arama motorlarının sitenizi anlamasının ilk iki adımı tarama (crawl) ve dizinleme (index) süreçleridir. Teknik SEO, bu süreçlerin sorunsuz işlemesini garantiler.

### Crawl (Tarama)
Arama motoru botları, özellikle Googlebot, internet üzerindeki milyarlarca web sayfasını sürekli olarak ziyaret eder. Bu ziyaretler sırasında sayfaların içeriğini okur, linkleri takip eder ve yeni sayfaları keşfederler. Bu sürece "tarama" denir. Tarama, sitenizin arama motorları tarafından keşfedilmesinin ilk ve en önemli adımıdır.

**Crawl Bütçesi:**
Google'ın sitenizi taramak için ayırdığı kaynak ve zaman miktarına "crawl bütçesi" denir. Bu bütçe, Googlebot'un sitenizde ne kadar süre kalacağını ve kaç sayfa tarayacağını belirler. Özellikle büyük sitelerde (on binlerce veya milyonlarca sayfaya sahip e-ticaret siteleri, haber portalları vb.) crawl bütçesi kritik öneme sahiptir. Eğer sitenizin crawl bütçesi düşükse, Googlebot tüm önemli sayfalarınızı düzenli olarak tarayamayabilir, bu da yeni içeriklerinizin veya güncellemelerinizin geç dizine eklenmesine yol açabilir.

Crawl bütçesini etkileyen faktörler:
*   **Site Hızı:** Yavaş yüklenen siteler, botların daha az sayfa taramasına neden olur.
*   **Hatalar:** Çok sayıda 4xx (sayfa bulunamadı) veya 5xx (sunucu hatası) hatası, botların sitenizden uzaklaşmasına neden olabilir.
*   **İçerik Kalitesi ve Yinelenen İçerik:** Düşük kaliteli veya yinelenen içeriklerle dolu sayfalar, botların değerli sayfalarınıza ulaşmasını zorlaştırır.
*   **Site Mimarisi:** Karmaşık ve derinlemesine bir site yapısı, botların tüm sayfalarınıza ulaşmasını zorlaştırabilir.
*   **robots.txt Dosyası:** Yanlış yapılandırılmış bir robots.txt dosyası, botların önemli sayfaları taramasını engelleyebilir.

Crawl bütçenizi optimize etmek, botların sitenizin en değerli bölümlerine odaklanmasını ve kaynaklarını daha verimli kullanmasını sağlar.

### Index (Dizinleme)
Taranan sayfalar, Google'ın devasa veri tabanına eklenir. Bu sürece "dizinleme" denir. Bir sayfa dizine eklendikten sonra, ilgili arama sorgularında gösterilme potansiyeline sahip olur. Dizinlenmemiş bir sayfa, arama sonuçlarında asla görünmez.

**İndexleme Kontrol Yöntemleri:**
Sitenizdeki hangi sayfaların dizine eklenip eklenmeyeceğini kontrol etmek için çeşitli teknikler mevcuttur:

*   **robots.txt:** Botların bir sayfayı veya dizini *tarayıp taramayacağını* kontrol eder, ancak dizinlemeyi doğrudan engellemez. Tarama engellenirse, bot içeriği göremeyeceği için dizine ekleyemez.
*   **Meta robots etiketi:** `<head>` bölümünde yer alan bu HTML etiketi, arama motorlarına belirli bir sayfanın dizine eklenip eklenmeyeceği (index/noindex) ve linklerinin takip edilip edilmeyeceği (follow/nofollow) konusunda doğrudan talimat verir. En yaygın ve etkili kontrol yöntemidir.
*   **X-Robots-Tag HTTP başlığı:** Meta robots etiketinin HTTP yanıt başlığı versiyonudur. Özellikle HTML dışındaki dosyalar (PDF, resimler) veya dinamik olarak oluşturulan sayfalar için kullanışlıdır. Sunucu tarafında yapılandırılır.
*   **noindex direktifi:** Hem meta robots etiketinde hem de X-Robots-Tag başlığında kullanılabilen `noindex` direktifi, arama motorlarına "bu sayfayı dizine ekleme" talimatını verir. Bu direktif, bir sayfanın arama sonuçlarında görünmesini tamamen engeller.

Bu yöntemleri doğru bir şekilde kullanarak, arama motorlarının sitenizdeki en önemli içeriklere odaklanmasını sağlayabilir ve gereksiz veya düşük kaliteli sayfaların dizine eklenmesini önleyebilirsiniz.

## robots.txt Dosyası

robots.txt dosyası, teknik SEO'nun temel taşlarından biridir ve arama motoru botlarının sitenizde nasıl davranacağını yönlendiren bir trafik polisi gibidir.

### robots.txt Nedir?
robots.txt, web sitenizin kök dizininde bulunan ve arama motoru botlarına sitenizdeki hangi alanları tarayabilecekleri veya tarayamayacakları konusunda talimat veren düz metin dosyasıdır. Botlar bir siteyi taramadan önce her zaman robots.txt dosyasını kontrol ederler. Bu dosya, hassas bilgilerin bulunduğu dizinleri, yinelenen içerik barındıran sayfaları veya arama motorlarında görünmesini istemediğiniz diğer alanları botlardan gizlemek için kullanılır.

**Konum:** Her zaman sitenizin ana dizininde bulunur. Örneğin, `https://siteadiniz.com/robots.txt`.

### Temel Sözdizimi
robots.txt dosyası basit bir yapıya sahiptir: `User-agent` direktifi ile hangi bot için kuralın geçerli olduğu belirtilir, ardından `Allow` veya `Disallow` direktifleri ile belirli yollara izin verilir veya engellenir.

```txt
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
```

### robots.txt Örnekleri

**WordPress için örnek:**
WordPress siteleri, genellikle yönetim paneli, eklenti dizinleri ve önbellek dosyaları gibi arama motorlarının dizine eklemesini istemediğimiz birçok alana sahiptir.

```txt
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
```
Bu örnek, sitenizin performansını etkilemeden ve gereksiz sayfaların dizine eklenmesini önleyerek WordPress sitenizin botlar tarafından daha verimli taranmasını sağlar.

**E-ticaret için örnek:**
E-ticaret siteleri, genellikle filtreleme, sıralama ve alışveriş sepeti gibi birçok parametreli URL ve işlevsel sayfa barındırır. Bu sayfaların çoğu yinelenen içerik oluşturur veya arama motorlarında görünmesi istenmez.

```txt
User-agent: *
Disallow: /cart/            # Alışveriş sepeti sayfasını engeller
Disallow: /checkout/        # Ödeme sayfasını engeller
Disallow: /my-account/      # Kullanıcı hesap sayfasını engeller
Disallow: /search/          # Site içi arama sonuç sayfalarını engeller
Disallow: /*?*sort=         # Sıralama parametresi içeren tüm URL'leri engeller
Disallow: /*?*filter=       # Filtreleme parametresi içeren tüm URL'leri engeller

Sitemap: https://siteadiniz.com/sitemap.xml # E-ticaret siteleri için sitemap konumu
```
Bu örnek, e-ticaret sitelerinin tarama bütçesini ürün ve kategori sayfaları gibi değerli içeriklere odaklamasına yardımcı olurken, kullanıcıya özel veya parametreli sayfaların dizine eklenmesini engeller.

### robots.txt Kuralları
| Direktif     | Açıklama                                                |
|--------------|---------------------------------------------------------|
| `User-agent` | Hangi arama motoru botu için geçerli olduğunu belirtir. `*` tüm botlar için geçerlidir. |
| `Disallow`   | Botların taramasını engellediği yolu belirtir. Tam bir dizin veya belirli bir dosya olabilir. |
| `Allow`      | `Disallow` kuralı tarafından engellenen bir dizin içindeki belirli bir dosyaya veya alt dizine izin verir. |
| `Sitemap`    | XML sitemap dosyasının URL'sini belirtir. Botların sitenizin tüm önemli sayfalarını kolayca bulmasına yardımcı olur. |
| `Crawl-delay`| Botların bir sonraki sayfa isteğinden önce ne kadar beklemesi gerektiğini belirtir (saniye cinsinden). **Google bu direktifi artık desteklemiyor.** |

### Yaygın Hatalar
robots.txt dosyası güçlü bir araçtır, ancak yanlış kullanımı sitenizin arama motorlarındaki görünürlüğüne ciddi zararlar verebilir:
*   **Yanlışlıkla tüm siteyi engellemek:** `Disallow: /` kuralını `User-agent: *` ile kullanmak, sitenizin tamamının taranmasını ve dizine eklenmesini engeller. Bu, sitenizin arama sonuçlarından tamamen kaybolmasına neden olur.
*   **CSS/JS dosyalarını engellemek:** Arama motorları, sayfalarınızı kullanıcılar gibi render etmek için CSS ve JavaScript dosyalarına ihtiyaç duyar. Bu dosyaları engellemek, Google'ın sitenizi doğru şekilde anlamasını ve mobil uyumluluk gibi faktörleri değerlendirmesini engeller.
*   **Önemli sayfaları engellemek:** Yanlışlıkla ürün sayfaları, kategori sayfaları veya blog yazıları gibi önemli içerikleri engellemek, bu sayfaların asla dizine eklenmemesine yol açar.
*   **Sitemap belirtmemek:** Sitemap URL'sini robots.txt'ye eklememek, Google'ın sitenizin tüm önemli sayfalarını bulmasını zorlaştırabilir.

robots.txt dosyanızı düzenlerken her zaman dikkatli olmalı ve değişiklikleri Google Search Console'daki robots.txt test aracı ile doğrulamalısınız.

## XML Sitemap

Sitemap (site haritası), arama motorlarına sitenizdeki önemli sayfaları anlatan bir yol haritasıdır.

### Sitemap Nedir?
XML sitemap, web sitenizdeki tüm önemli sayfaların (veya dizine eklenmesini istediğiniz sayfaların) bir listesini içeren yapılandırılmış bir XML dosyasıdır. robots.txt botlara neyi taramamaları gerektiğini söylerken, sitemap botlara neyi *tarayabileceklerini* ve *önemli olduğunu* gösterir. Özellikle yeni siteler, büyük siteler veya karmaşık site yapılarına sahip siteler için arama motorlarının tüm sayfaları keşfetmesine yardımcı olur.

### Sitemap Yapısı
Bir XML sitemap dosyası, `urlset` etiketi içinde her bir URL için `url` etiketleri barındırır. Her `url` etiketi içinde ise sayfanın konumu (`loc`), son değiştirilme tarihi (`lastmod`), değişim sıklığı (`changefreq`) ve önceliği (`priority`) gibi bilgiler bulunur.

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
  <url>
    <loc>https://siteadiniz.com/blog/teknik-seo-nedir/</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```
*   `<loc>`: Sayfanın URL'si. Zorunludur.
*   `<lastmod>`: Sayfanın en son değiştirildiği tarih. Botların ne sıklıkla tekrar taraması gerektiği konusunda ipucu verir.
*   `<changefreq>`: Sayfanın tahmini değişim sıklığı (always, hourly, daily, weekly, monthly, yearly, never). Botlar için bir ipucudur, kesin bir talimat değildir.
*   `<priority>`: Sitenizdeki diğer URL'lere göre bu sayfanın önceliği (0.0'dan 1.0'a kadar). Yine, botlar için bir ipucudur.

### Sitemap Index (Büyük siteler için)
Büyük siteler, tek bir sitemap dosyasının limitlerini (50.000 URL veya 50MB) aşabilir. Bu durumda, birden fazla sitemap dosyasını içeren bir "sitemap index" dosyası kullanılır. Bu index dosyası, diğer sitemap dosyalarını referans gösterir.

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
  <sitemap>
    <loc>https://siteadiniz.com/sitemap-products.xml</loc>
    <lastmod>2025-01-01</lastmod>
  </sitemap>
</sitemapindex>
```
Bu yapı, sitenizin farklı bölümleri için ayrı sitemap'ler oluşturmanıza ve bunları merkezi bir index dosyasında yönetmenize olanak tanır.

### Sitemap Best Practices
*   **Maksimum Limitler:** Her sitemap dosyası en fazla 50.000 URL içermeli veya 50MB boyutunda olmalıdır (sıkıştırılmamış hali). Bu limitler aşılırsa, sitemap'inizi birden fazla dosyaya bölmelisiniz.
*   **Sadece Canonical URL'leri Ekle:** Sitemap'inize yalnızca sitenizin tercih edilen (canonical) URL'lerini dahil edin. Yinelenen içerik barındıran veya parametreli URL'leri eklemekten kaçının.
*   **noindex Sayfaları Ekleme:** `noindex` etiketiyle dizine eklenmesini engellediğiniz sayfaları sitemap'inize dahil etmeyin. Bu, arama motorlarına çelişkili sinyaller gönderebilir.
*   **Düzenli Güncelleme:** Yeni sayfalar eklediğinizde veya mevcut sayfaları güncellediğinizde sitemap'inizi de güncelleyin. Çoğu modern CMS ve SEO eklentisi (örn: Yoast SEO, Rank Math) bu işlemi otomatik olarak yapar.
*   **Search Console'a Gönder:** XML sitemap'inizi Google Search Console'a (ve diğer arama motorlarının webmaster araçlarına) göndererek arama motorlarının sitenizin haritasına kolayca erişmesini sağlayın. Bu, yeni sayfalarınızın daha hızlı keşfedilmesine yardımcı olur.
*   **robots.txt'de Belirt:** Yukarıda bahsedildiği gibi, sitemap URL'nizi robots.txt dosyanızda da belirtmek iyi bir uygulamadır.

## Meta Robots Etiketi

robots.txt dosyasının aksine, meta robots etiketi sayfa bazında direktifler vererek, bir sayfanın dizine eklenip eklenmeyeceğini ve linklerinin takip edilip edilmeyeceğini doğrudan kontrol eder.

### Temel Kullanım
Meta robots etiketi, bir HTML sayfasının `<head>` bölümüne yerleştirilir:

```html
<meta name="robots" content="index, follow">
```
Bu etiket, arama motorlarına "bu sayfayı dizine ekle ve üzerindeki linkleri takip et" talimatını verir. Bu, varsayılan davranıştır ve çoğu sayfa için idealdir.

### Direktifler
Meta robots etiketinde kullanılabilecek çeşitli direktifler bulunur:

| Direktif            | Açıklama                                                                                                                              |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `index`             | Sayfayı arama motoru dizinine ekle. (Varsayılan)                                                                                       |
| `noindex`           | Sayfayı arama motoru dizinine ekleme. Sayfa arama sonuçlarında görünmez.                                                              |
| `follow`            | Sayfadaki tüm linkleri takip et ve link değerlerini aktar. (Varsayılan)                                                                |
| `nofollow`          | Sayfadaki linkleri takip etme ve link değerlerini aktarma.                                                                            |
| `noarchive`         | Arama motorlarının bu sayfanın önbelleğe alınmış (cached) bir sürümünü göstermesini engelle.                                           |
| `nosnippet`         | Arama sonuçlarında bu sayfa için metin snippet'i veya video önizlemesi gösterme.                                                      |
| `max-snippet:X`     | Arama sonuçlarında gösterilecek metin snippet'inin maksimum karakter uzunluğunu (X) belirle. `-1` sınırsız, `0` hiçbiri anlamına gelir. |
| `max-image-preview` | Arama sonuçlarında gösterilecek görsel önizlemesinin maksimum boyutunu belirle (none, standard, large).                               |
| `unavailable_after` | Sayfanın belirli bir tarihten sonra arama sonuçlarında görünmemesini sağla.                                                           |

### Kullanım Örnekleri
Meta robots etiketlerinin doğru kullanımı, sitenizin SEO performansını önemli ölçüde etkileyebilir:

```html
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
```
`noindex` direktifi, özellikle teşekkür sayfaları, kullanıcı profilleri, dahili arama sonuçları, filtreleme sayfaları veya geliştirme aşamasındaki sayfalar gibi arama motorlarında görünmesini istemediğiniz içerikler için hayati öneme sahiptir. Yanlışlıkla önemli bir sayfaya `noindex` eklemek, o sayfanın arama sonuçlarından tamamen kaybolmasına neden olacaktır.

## Canonical Etiketi

Yinelenen içerik, arama motorları için büyük bir sorundur çünkü hangi sayfanın "orijinal" veya "tercih edilen" sürüm olduğunu anlamakta zorlanırlar. Canonical etiketleri bu sorunu çözmek için tasarlanmıştır.

### Canonical Nedir?
Canonical etiket (`<link rel="canonical" href="...">`), arama motorlarına bir sayfanın tercih edilen (orijinal) URL'sini bildiren bir HTML etiketi veya HTTP başlığıdır. Yinelenen içerik sorunlarını çözmek ve link değerini (link equity) doğru sayfaya yönlendirmek için kullanılır. Bu, arama motorlarına "Bu sayfa, belirtilen URL'nin kopyası veya çok benzeridir; lütfen tüm değeri o URL'ye atfedin" mesajını verir.

### Kullanım
Canonical etiket, sayfanın `<head>` bölümüne yerleştirilir:

```html
<link rel="canonical" href="https://siteadiniz.com/tercih-edilen-sayfa/">
```
Bu etiketi kullanan sayfa, arama motorlarına `https://siteadiniz.com/tercih-edilen-sayfa/` adresinin bu içeriğin ana versiyonu olduğunu söyler.

### Ne Zaman Kullanılır?
Canonical etiketleri birçok senaryoda kritik öneme sahiptir:

*   **www ve www'siz versiyonlar:** `https://www.siteadiniz.com/` ve `https://siteadiniz.com/` gibi URL'ler teknik olarak farklı sayfalardır. Tercih edilen versiyonu belirlemek için kullanılır.
*   **HTTP ve HTTPS versiyonları:** Geçiş sonrası HTTP versiyonlarının hala erişilebilir olması durumunda, tüm HTTP sayfaları HTTPS versiyonlarına canonical olarak işaretlenmelidir.
*   **Parametre varyasyonları:** E-ticaret sitelerinde sıkça görülen `https://siteadiniz.com/urun/?sort=price_asc` veya `https://siteadiniz.com/kategori/?filter=color-red` gibi URL'ler, ana sayfanın (`https://siteadiniz.com/urun/` veya `https://siteadiniz.com/kategori/`) canonical'ı olarak işaretlenmelidir.
*   **Print versiyonları:** Yazdırılabilir sayfaların ana sayfaya canonical olarak işaretlenmesi.
*   **AMP sayfaları:** Hızlandırılmış Mobil Sayfalar (AMP) genellikle ana mobil sayfanın canonical'ı olarak işaretlenir.
*   **İçerik Sendikasyonu:** İçeriğinizi başka sitelerde yayınlıyorsanız, orijinal kaynağı belirtmek için canonical etiketi kullanmalarını isteyebilirsiniz.
*   **Büyük/Küçük Harf Farklılıkları:** Bazı sunucular URL'lerde büyük/küçük harf ayrımı yapabilir. Tercih edilen versiyonu belirtmek önemlidir.
*   **Sondaki Eğik Çizgi (Trailing Slash):** `/sayfa/` ve `/sayfa` gibi URL'ler farklı kabul edilebilir. Tutarlı bir yapı için canonical kullanılır.

### Self-referencing Canonical
Her sayfa, kendisinin tercih edilen versiyonu olduğunu belirten bir canonical etiketi içermelidir. Bu, herhangi bir parametre veya başka bir nedenle oluşan yinelenen içerik varyasyonlarına karşı bir güvence sağlar.

```html
<!-- https://site.com/urun/ sayfasında, canonical kendisini işaret eder -->
<link rel="canonical" href="https://site.com/urun/">
```
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
```html
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
<!-- Görselin genişlik ve yükseklik değerlerini belirtmek, tarayıcının görsel için yer ayırmasını sağlar ve CLS'yi (layout shift)