# 🚀 Web Sitesini Canlıya Alma Rehberi

## 📋 İçindekiler
1. [Hosting Seçenekleri](#hosting-seçenekleri)
2. [Vercel ile Yayınlama (ÖNERİLEN)](#vercel-ile-yayınlama)
3. [Netlify ile Yayınlama](#netlify-ile-yayınlama)
4. [Geleneksel Hosting](#geleneksel-hosting)
5. [Domain Bağlama](#domain-bağlama)
6. [Son Kontroller](#son-kontroller)

---

## 🎯 Hosting Seçenekleri

### **1. Vercel (ÖNERİLEN) ⭐**
- ✅ **Ücretsiz:** Sınırsız bant genişliği
- ✅ **Hızlı:** Otomatik CDN
- ✅ **Kolay:** 5 dakikada yayında
- ✅ **Next.js Optimizasyonu:** En iyi performans
- ✅ **SSL:** Otomatik HTTPS
- ✅ **Git Entegrasyonu:** Her commit'te otomatik deploy

### **2. Netlify**
- ✅ Ücretsiz plan
- ✅ Kolay kullanım
- ✅ Otomatik SSL
- ⚠️ Next.js için Vercel kadar optimize değil

### **3. Geleneksel Hosting (cPanel)**
- ✅ Türk hosting firmaları
- ⚠️ Manuel kurulum gerekli
- ⚠️ Node.js desteği şart
- 💰 Ücretli (₺50-200/ay)

---

## 🚀 Vercel ile Yayınlama (ÖNERİLEN)

### **Adım 1: GitHub'a Yükle**

1. **GitHub hesabı oluştur** (yoksa): https://github.com

2. **Yeni repository oluştur:**
   - GitHub'da "New Repository" tıkla
   - İsim: `medyagem-website`
   - Public veya Private seç
   - "Create repository" tıkla

3. **Projeyi GitHub'a yükle:**

```bash
# Terminal'i aç (projenizin klasöründe)
cd "C:\Users\Berat Akbulut\Desktop\curesor web sitesi - Kopya"

# Git başlat (ilk kez ise)
git init

# Tüm dosyaları ekle
git add .

# Commit yap
git commit -m "Initial commit - MedyaGem website"

# GitHub'a bağla (YOUR-USERNAME yerine GitHub kullanıcı adınızı yazın)
git remote add origin https://github.com/YOUR-USERNAME/medyagem-website.git

# Ana branch'i main yap
git branch -M main

# GitHub'a yükle
git push -u origin main
```

### **Adım 2: Vercel'e Deploy Et**

1. **Vercel hesabı oluştur:** https://vercel.com/signup
   - "Continue with GitHub" seç
   - GitHub hesabınla giriş yap

2. **Yeni Proje Oluştur:**
   - Dashboard'da "Add New" > "Project" tıkla
   - GitHub repository'nizi seçin (`medyagem-website`)
   - "Import" tıkla

3. **Ayarları Kontrol Et:**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Deploy Et:**
   - "Deploy" butonuna tıkla
   - 2-3 dakika bekle
   - ✅ Siteniz yayında!

5. **URL'nizi alın:**
   ```
   https://medyagem-website.vercel.app
   ```

---

## 🌐 Domain Bağlama

### **Vercel'de Domain Bağlama**

1. **Domain satın al** (öneriler):
   - Natro: https://www.natro.com
   - Turhost: https://www.turhost.com
   - GoDaddy: https://www.godaddy.com

2. **Vercel'de Domain Ekle:**
   - Vercel Dashboard > Projeniz > "Settings" > "Domains"
   - "Add" tıkla
   - Domain adınızı girin: `medyagem.com`
   - "Add" tıkla

3. **DNS Ayarları:**

Vercel size 2 seçenek sunar:

**Seçenek A: Nameserver Değiştir (ÖNERİLEN)**
```
Domain sağlayıcınızda nameserver'ları değiştirin:
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Seçenek B: A Record Ekle**
```
Domain sağlayıcınızda DNS ayarlarına gidin:

A Record:
@ → 76.76.21.21

CNAME Record:
www → cname.vercel-dns.com
```

4. **SSL Sertifikası:**
   - Vercel otomatik SSL ekler
   - 24 saat içinde aktif olur
   - ✅ `https://medyagem.com` hazır!

---

## 📱 Netlify ile Yayınlama

### **Adım 1: GitHub'a Yükle**
(Yukarıdaki GitHub adımlarını takip edin)

### **Adım 2: Netlify'a Deploy**

1. **Netlify hesabı:** https://app.netlify.com/signup
   - GitHub ile giriş yap

2. **Yeni Site:**
   - "Add new site" > "Import an existing project"
   - GitHub'ı seç
   - Repository'nizi seçin

3. **Build Ayarları:**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Deploy:**
   - "Deploy site" tıkla
   - URL: `https://medyagem.netlify.app`

---

## 🖥️ Geleneksel Hosting (cPanel)

### **Gereksinimler:**
- ✅ Node.js 18+ desteği
- ✅ SSH erişimi
- ✅ PM2 veya benzeri process manager

### **Adım 1: Build Al**

```bash
# Lokal bilgisayarınızda
npm run build

# Production build oluşturuldu
```

### **Adım 2: Dosyaları Yükle**

1. **FTP/SFTP ile yükle:**
   - FileZilla kullan
   - Tüm proje klasörünü yükle
   - `.next` klasörünü de yükle

2. **SSH ile bağlan:**
```bash
ssh kullanici@sunucuip

# Proje klasörüne git
cd /home/kullanici/medyagem

# Bağımlılıkları yükle
npm install --production

# PM2 ile başlat
pm2 start npm --name "medyagem" -- start
pm2 save
pm2 startup
```

### **Adım 3: Nginx/Apache Ayarları**

**Nginx:**
```nginx
server {
    listen 80;
    server_name medyagem.com www.medyagem.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## ✅ Son Kontroller (Yayına Almadan Önce)

### **1. Çevre Değişkenleri (Environment Variables)**

Vercel/Netlify Dashboard'da ekleyin:

```env
# Google Analytics (varsa)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console (varsa)
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code

# Domain
NEXT_PUBLIC_SITE_URL=https://medyagem.com
```

### **2. Güncellenmesi Gerekenler:**

**app/layout.tsx:**
```typescript
metadataBase: new URL('https://medyagem.com'), // Gerçek domain
```

**components/Footer.tsx:**
```typescript
// Email adresini kontrol et
info@medyagem.com

// Telefon numarasını güncelle
+90 555 123 45 67
```

**Sosyal Medya Linkleri:**
```typescript
// Footer.tsx içinde
'https://www.instagram.com/medyagem',
'https://www.linkedin.com/company/medyagem',
'https://www.youtube.com/@medyagem'
```

### **3. Google Analytics Kurulumu**

**Google Analytics 4:**
1. https://analytics.google.com
2. Yeni property oluştur
3. Measurement ID'yi al (G-XXXXXXXXXX)

**Kodu ekle:**
```typescript
// app/layout.tsx içine ekle
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### **4. Google Search Console**

1. https://search.google.com/search-console
2. Property ekle: `https://medyagem.com`
3. Doğrulama kodu al
4. `app/layout.tsx` metadata'ya ekle:
```typescript
verification: {
  google: 'your-verification-code',
}
```

### **5. Sitemap Gönder**

```
https://medyagem.com/sitemap.xml
```
Google Search Console'da "Sitemaps" > "Add sitemap" > `sitemap.xml`

---

## 🎯 Hızlı Başlangıç (5 Dakika)

### **En Hızlı Yol: Vercel**

```bash
# 1. Vercel CLI yükle
npm i -g vercel

# 2. Proje klasöründe
cd "C:\Users\Berat Akbulut\Desktop\curesor web sitesi - Kopya"

# 3. Deploy et
vercel

# Soruları yanıtla:
# - Set up and deploy? Y
# - Which scope? (hesabınızı seçin)
# - Link to existing project? N
# - Project name? medyagem-website
# - Directory? ./
# - Override settings? N

# 4. Production'a al
vercel --prod

# ✅ Siteniz yayında!
```

---

## 📊 Deploy Sonrası Kontrol Listesi

- [ ] Site açılıyor mu? (URL'i kontrol et)
- [ ] Tüm sayfalar çalışıyor mu?
- [ ] Breadcrumb görünüyor mu?
- [ ] WhatsApp widget aktif mi?
- [ ] Formlar çalışıyor mu?
- [ ] Mobil görünüm düzgün mü?
- [ ] SSL sertifikası aktif mi? (https)
- [ ] Google Analytics çalışıyor mu?
- [ ] Sitemap erişilebilir mi? (/sitemap.xml)
- [ ] Robots.txt doğru mu? (/robots.txt)

---

## 🆘 Sorun Giderme

### **Build Hatası:**
```bash
# Lokal'de test et
npm run build

# Hata varsa düzelt, sonra tekrar deploy et
```

### **404 Hatası:**
- Vercel/Netlify ayarlarında "Rewrites" kontrol et
- Next.js routing doğru mu?

### **Yavaş Yükleme:**
- Vercel Analytics'i aç
- Image optimization kontrol et
- CDN çalışıyor mu?

---

## 💡 Öneriler

1. **GitHub'ı Kullan:**
   - Versiyon kontrolü
   - Otomatik deploy
   - Geri alma kolaylığı

2. **Vercel'i Tercih Et:**
   - Next.js için optimize
   - Ücretsiz ve hızlı
   - Kolay domain bağlama

3. **İlk Günler:**
   - Analytics'i takip et
   - Hataları logla
   - Kullanıcı geri bildirimlerini topla

4. **Yedekleme:**
   - GitHub otomatik yedek
   - Vercel otomatik yedek
   - Ek olarak lokal yedek al

---

## 🎉 Tebrikler!

Siteniz artık canlıda! 🚀

**Sonraki Adımlar:**
1. Google My Business profili oluştur
2. Sosyal medya hesaplarını aktif et
3. İlk blog yazısını yayınla
4. Google Ads kampanyası başlat
5. Backlink stratejisi uygula

Başarılar! 🎯
