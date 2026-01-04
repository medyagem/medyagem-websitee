import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Blog yazılarını oku ve blog-data.ts'ye ekle
const blogSlugs = [
  'google-ads-nedir-baslangic-rehberi',
  'google-ads-maliyetleri-2025-butce',
  'google-ads-donusum-orani-artirma',
  'seo-nedir-2025-guncel-rehberi',
  'yerel-seo-nedir-kucuk-isletmeler',
  'anahtar-kelime-arastirmasi-nasil-yapilir',
  'teknik-seo-nedir-kontrol-listesi',
  'backlink-nedir-kaliteli-backlink-alma',
  'icerik-seo-google-sevdigi-icerikler',
  'e-e-a-t-nedir-google-guven-kriterleri',
]

function escapeTemplateString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')
}

function updateBlogData() {
  const blogDataPath = join(process.cwd(), 'app', 'blog', 'blog-data.ts')
  let blogData = readFileSync(blogDataPath, 'utf-8')
  
  for (const slug of blogSlugs) {
    const markdownPath = join(process.cwd(), 'generated-blogs', `${slug}.md`)
    
    try {
      const content = readFileSync(markdownPath, 'utf-8')
      const escapedContent = escapeTemplateString(content)
      
      // Blog yazısını bul ve içeriğini güncelle
      const regex = new RegExp(
        `(slug: '${slug.replace(/-/g, '\\-')}',[\\s\\S]*?content: \`)([\\s\\S]*?)(\`)`,
        'm'
      )
      
      if (regex.test(blogData)) {
        blogData = blogData.replace(
          regex,
          `$1${escapedContent}$3`
        )
        console.log(`✅ ${slug} güncellendi`)
      } else {
        console.log(`⚠️ ${slug} bulunamadı, manuel eklenmesi gerekiyor`)
      }
    } catch (error: any) {
      console.error(`❌ ${slug} okunamadı:`, error.message)
    }
  }
  
  // Güncellenmiş dosyayı kaydet
  writeFileSync(blogDataPath, blogData, 'utf-8')
  console.log('\n✅ blog-data.ts güncellendi!')
}

updateBlogData()

