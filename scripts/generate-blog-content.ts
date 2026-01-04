import { readFileSync } from 'fs'
import { join } from 'path'

const API_KEY = 'AIzaSyAwbKzmk6h3FwZpGvvcKGFH6MustUWjdO8'

interface BlogPost {
  slug: string
  title: string
  category: string
  seoRules: string[]
}

async function generateBlogContent(blogPost: BlogPost): Promise<string> {
  try {
    // SEO kuralları dosyalarını oku
    const seoRulesContent = blogPost.seoRules.map(rule => {
      try {
        const filePath = join(process.cwd(), 'seo-kuralları', rule)
        return readFileSync(filePath, 'utf-8')
      } catch (error) {
        return ''
      }
    }).filter(Boolean).join('\n\n---\n\n')

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`
    
    const prompt = `Aşağıdaki SEO kurallarına göre bir blog yazısı oluştur.

BLOG BİLGİLERİ:
- Başlık: ${blogPost.title}
- Kategori: ${blogPost.category}
- Slug: ${blogPost.slug}

SEO KURALLARI:
${seoRulesContent}

YAZI GEREKSİNİMLERİ:
1. Markdown formatında yaz
2. H1-H6 başlık hiyerarşisine uy
3. SEO kurallarına göre optimize et
4. En az 1500 kelime
5. Alt başlıklar kullan
6. Liste ve tablolar ekle
7. Pratik örnekler ver
8. Türkçe yaz
9. Profesyonel ve bilgilendirici ton kullan
10. İçerik kaliteli ve değerli olsun

Sadece blog yazısının içeriğini döndür, başka açıklama yapma.`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 8192,
        }
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'API hatası')
    }
    
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()
    
    return content || ''
  } catch (error: any) {
    console.error(`Hata (${blogPost.title}):`, error.message)
    return ''
  }
}

// Blog yazıları listesi
const blogPosts: BlogPost[] = [
  {
    slug: 'google-ads-nedir-baslangic-rehberi',
    title: 'Google Ads Nedir? Başlangıç Rehberi',
    category: 'Google Ads',
    seoRules: ['12-google-ads-sem.md']
  },
  {
    slug: 'google-ads-maliyetleri-2025-butce',
    title: 'Google Ads Maliyetleri: 2025\'te Ne Kadar Bütçe Ayırmalısınız?',
    category: 'Google Ads',
    seoRules: ['12-google-ads-sem.md']
  },
  {
    slug: 'google-ads-donusum-orani-artirma',
    title: 'Google Ads\'te Dönüşüm Oranı Nasıl Artırılır?',
    category: 'Google Ads',
    seoRules: ['12-google-ads-sem.md']
  },
  {
    slug: 'seo-nedir-2025-guncel-rehberi',
    title: 'SEO Nedir? 2025 Güncel Rehberi',
    category: 'SEO',
    seoRules: ['01-seo-temelleri.md']
  },
  {
    slug: 'yerel-seo-nedir-kucuk-isletmeler',
    title: 'Yerel SEO Nedir? Küçük İşletmeler İçin Önemi',
    category: 'SEO',
    seoRules: ['02-yerel-seo-local-seo.md']
  },
  {
    slug: 'anahtar-kelime-arastirmasi-nasil-yapilir',
    title: 'Anahtar Kelime Araştırması Nasıl Yapılır?',
    category: 'SEO',
    seoRules: ['04-anahtar-kelime-arastirmasi.md']
  },
  {
    slug: 'teknik-seo-nedir-kontrol-listesi',
    title: 'Teknik SEO Nedir? Kontrol Listesi',
    category: 'SEO',
    seoRules: ['03-teknik-seo.md']
  },
  {
    slug: 'backlink-nedir-kaliteli-backlink-alma',
    title: 'Backlink Nedir? Kaliteli Backlink Nasıl Alınır?',
    category: 'SEO',
    seoRules: ['08-link-building.md']
  },
  {
    slug: 'icerik-seo-google-sevdigi-icerikler',
    title: 'İçerik SEO\'su: Google\'ın Sevdiği İçerikler',
    category: 'SEO',
    seoRules: ['07-icerik-stratejisi.md']
  },
  {
    slug: 'e-e-a-t-nedir-google-guven-kriterleri',
    title: 'E-E-A-T Nedir? Google\'ın Güven Kriterleri',
    category: 'SEO',
    seoRules: ['06-eeat-rehberi.md']
  },
]

async function main() {
  console.log('Blog yazıları oluşturuluyor...\n')
  
  for (const blogPost of blogPosts) {
    console.log(`📝 ${blogPost.title} oluşturuluyor...`)
    const content = await generateBlogContent(blogPost)
    
    if (content) {
      console.log(`✅ ${blogPost.title} oluşturuldu (${content.length} karakter)\n`)
      // İçeriği dosyaya kaydet
      const fs = require('fs')
      const path = require('path')
      const outputDir = path.join(process.cwd(), 'generated-blogs')
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }
      fs.writeFileSync(
        path.join(outputDir, `${blogPost.slug}.md`),
        content,
        'utf-8'
      )
    } else {
      console.log(`❌ ${blogPost.title} oluşturulamadı\n`)
    }
    
    // API rate limit için bekle
    await new Promise(resolve => setTimeout(resolve, 2000))
  }
  
  console.log('\n✅ Tüm blog yazıları oluşturuldu!')
}

main().catch(console.error)

