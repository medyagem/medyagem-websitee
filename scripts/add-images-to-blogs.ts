import { generateAltText, generateImageDescription } from '../lib/gemini-alt-text'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

interface BlogInfo {
  slug: string
  title: string
  category: string
}

const blogs: BlogInfo[] = [
  { slug: 'google-ads-nedir-baslangic-rehberi', title: 'Google Ads Nedir? Başlangıç Rehberi', category: 'Google Ads' },
  { slug: 'google-ads-maliyetleri-2025-butce', title: 'Google Ads Maliyetleri: 2025\'te Ne Kadar Bütçe Ayırmalısınız?', category: 'Google Ads' },
  { slug: 'google-ads-donusum-orani-artirma', title: 'Google Ads\'te Dönüşüm Oranı Nasıl Artırılır?', category: 'Google Ads' },
  { slug: 'seo-nedir-2025-guncel-rehberi', title: 'SEO Nedir? 2025 Güncel Rehberi', category: 'SEO' },
  { slug: 'yerel-seo-nedir-kucuk-isletmeler', title: 'Yerel SEO Nedir? Küçük İşletmeler İçin Önemi', category: 'SEO' },
  { slug: 'anahtar-kelime-arastirmasi-nasil-yapilir', title: 'Anahtar Kelime Araştırması Nasıl Yapılır?', category: 'SEO' },
  { slug: 'teknik-seo-nedir-kontrol-listesi', title: 'Teknik SEO Nedir? Kontrol Listesi', category: 'SEO' },
  { slug: 'backlink-nedir-kaliteli-backlink-alma', title: 'Backlink Nedir? Kaliteli Backlink Nasıl Alınır?', category: 'SEO' },
  { slug: 'icerik-seo-google-sevdigi-icerikler', title: 'İçerik SEO\'su: Google\'ın Sevdiği İçerikler', category: 'SEO' },
  { slug: 'e-e-a-t-nedir-google-guven-kriterleri', title: 'E-E-A-T Nedir? Google\'ın Güven Kriterleri', category: 'SEO' },
]

async function addImagesToBlogs() {
  console.log('Blog yazılarına görsel ekleniyor...\n')
  
  for (const blog of blogs) {
    try {
      console.log(`📸 ${blog.title} için görsel işleniyor...`)
      
      // Görsel açıklaması üret
      const imageDesc = await generateImageDescription(blog.title, blog.category)
      console.log(`  Görsel açıklaması: ${imageDesc}`)
      
      // Alt text üret
      const altText = await generateAltText(blog.title, imageDesc)
      console.log(`  Alt text: ${altText}`)
      
      // Blog data dosyasını güncelle
      const blogDataPath = join(process.cwd(), 'app', 'blog', 'blog-data.ts')
      let blogData = readFileSync(blogDataPath, 'utf-8')
      
      // Görsel ekleme - content'in başına ekle
      const imageMarkdown = `\n\n![${altText}](/images/blog/${blog.slug}.jpg)\n\n`
      
      // Slug'a göre blog yazısını bul ve içeriğine görsel ekle
      const regex = new RegExp(
        `(slug: '${blog.slug.replace(/-/g, '\\-')}',[\\s\\S]*?content: \`)([\\s\\S]*?)(\`)`,
        'm'
      )
      
      if (regex.test(blogData)) {
        blogData = blogData.replace(
          regex,
          (match, prefix, content, suffix) => {
            // İçeriğin başına görsel ekle (ilk başlıktan sonra)
            const contentWithImage = content.replace(
              /^(# .+?\n\n)/,
              `$1${imageMarkdown}`
            )
            return prefix + contentWithImage + suffix
          }
        )
        console.log(`  ✅ Görsel eklendi\n`)
      } else {
        console.log(`  ⚠️ Blog yazısı bulunamadı\n`)
      }
      
      // Dosyayı kaydet
      writeFileSync(blogDataPath, blogData, 'utf-8')
      
      // API rate limit için bekle
      await new Promise(resolve => setTimeout(resolve, 2000))
    } catch (error: any) {
      console.error(`  ❌ Hata: ${error.message}\n`)
    }
  }
  
  console.log('✅ Tüm blog yazılarına görsel eklendi!')
}

addImagesToBlogs().catch(console.error)

