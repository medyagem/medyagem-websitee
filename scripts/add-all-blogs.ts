import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

function escapeTemplateString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')
}

// Blog yazıları mapping
const blogMapping: Record<string, { title: string; category: string; date: string; readTime: string; image: string }> = {
  'google-ads-donusum-orani-artirma': {
    title: 'Google Ads\'te Dönüşüm Oranı Nasıl Artırılır?',
    category: 'Google Ads',
    date: '16 Ocak 2025',
    readTime: '9 dk',
    image: '📈'
  },
  'seo-nedir-2025-guncel-rehberi': {
    title: 'SEO Nedir? 2025 Güncel Rehberi',
    category: 'SEO',
    date: '19 Ocak 2025',
    readTime: '12 dk',
    image: '🔍'
  },
  'yerel-seo-nedir-kucuk-isletmeler': {
    title: 'Yerel SEO Nedir? Küçük İşletmeler İçin Önemi',
    category: 'SEO',
    date: '17 Ocak 2025',
    readTime: '10 dk',
    image: '📍'
  },
  'anahtar-kelime-arastirmasi-nasil-yapilir': {
    title: 'Anahtar Kelime Araştırması Nasıl Yapılır?',
    category: 'SEO',
    date: '13 Ocak 2025',
    readTime: '11 dk',
    image: '🔑'
  },
  'teknik-seo-nedir-kontrol-listesi': {
    title: 'Teknik SEO Nedir? Kontrol Listesi',
    category: 'SEO',
    date: '11 Ocak 2025',
    readTime: '10 dk',
    image: '⚙️'
  },
  'backlink-nedir-kaliteli-backlink-alma': {
    title: 'Backlink Nedir? Kaliteli Backlink Nasıl Alınır?',
    category: 'SEO',
    date: '9 Ocak 2025',
    readTime: '9 dk',
    image: '🔗'
  },
  'icerik-seo-google-sevdigi-icerikler': {
    title: 'İçerik SEO\'su: Google\'ın Sevdiği İçerikler',
    category: 'SEO',
    date: '7 Ocak 2025',
    readTime: '10 dk',
    image: '📝'
  },
  'e-e-a-t-nedir-google-guven-kriterleri': {
    title: 'E-E-A-T Nedir? Google\'ın Güven Kriterleri',
    category: 'SEO',
    date: '1 Ocak 2025',
    readTime: '11 dk',
    image: '✅'
  }
}

function generateBlogEntry(slug: string, info: typeof blogMapping[string]): string {
  const markdownPath = join(process.cwd(), 'generated-blogs', `${slug}.md`)
  
  try {
    const content = readFileSync(markdownPath, 'utf-8')
    const escapedContent = escapeTemplateString(content)
    
    // Metadata oluştur
    const titleForMeta = info.title.replace(/'/g, "\\'")
    const description = `SEO kurallarına göre hazırlanmış ${info.category} konulu kapsamlı rehber. ${info.title.toLowerCase()} hakkında detaylı bilgi.`
    
    return `  {
    slug: '${slug}',
    title: '${titleForMeta}',
    excerpt: '${description}',
    category: '${info.category}',
    readTime: '${info.readTime}',
    date: '${info.date}',
    image: '${info.image}',
    featured: false,
    metadata: {
      title: '${titleForMeta} | MedyaGem',
      description: '${description}',
      keywords: ['${slug.replace(/-/g, ' ')}', '${info.category.toLowerCase()}', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/${slug}',
      },
    },
    content: \`${escapedContent}\`
  },`
  } catch (error: any) {
    console.error(`❌ ${slug} okunamadı:`, error.message)
    return ''
  }
}

function addBlogsToData() {
  const blogDataPath = join(process.cwd(), 'app', 'blog', 'blog-data.ts')
  let blogData = readFileSync(blogDataPath, 'utf-8')
  
  // Dosyanın sonunu bul (]'den önce)
  const lastIndex = blogData.lastIndexOf(']')
  
  if (lastIndex === -1) {
    console.error('❌ blog-data.ts formatı hatalı')
    return
  }
  
  // Yeni blog yazılarını ekle
  const newBlogs = Object.entries(blogMapping)
    .map(([slug, info]) => generateBlogEntry(slug, info))
    .filter(Boolean)
    .join('\n')
  
  // Dosyayı güncelle
  blogData = blogData.slice(0, lastIndex) + ',\n' + newBlogs + '\n' + blogData.slice(lastIndex)
  
  writeFileSync(blogDataPath, blogData, 'utf-8')
  console.log('✅ Tüm blog yazıları blog-data.ts\'ye eklendi!')
}

addBlogsToData()

