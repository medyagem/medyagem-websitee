# Logo Kurulum Talimatları

## Logo Dosyasını Ekleme

Logo dosyanızı (`medyagem logo.png`) `public` klasörüne ekleyin.

### Yöntem 1: Dosya adını değiştirerek
1. Logo dosyanızı `medyagem-logo.png` olarak yeniden adlandırın (boşluksuz)
2. `public` klasörüne kopyalayın

### Yöntem 2: Mevcut dosya adıyla
1. Logo dosyanızı `public` klasörüne kopyalayın
2. Dosya adı: `medyagem logo.png` (boşluklu) olarak kalabilir
3. `components/Header.tsx` ve `components/Footer.tsx` dosyalarında:
   - `src="/medyagem-logo.png"` yerine
   - `src="/medyagem%20logo.png"` yazın (boşluk %20 olarak encode edilir)

### Yöntem 3: Next.js Image Component kullanın
Daha iyi performans için Next.js Image component kullanabilirsiniz.

## Kontrol

Logo dosyası doğru yerdeyse:
- Header'da logo görünecek
- Footer'da logo görünecek
- Logo yüklenemezse otomatik olarak "medyagem" metni gösterilecek

## Dosya Yolu

Logo dosyası şu konumda olmalı:
```
public/medyagem-logo.png
```

veya

```
public/medyagem logo.png
```

