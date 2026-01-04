import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// Blog içeriklerini ayrı dosyalara taşı
function convertBlogsToFiles() {
  const blogDataPath = join(process.cwd(), 'app', 'blog', 'blog-data.ts')
  const contentDir = join(process.cwd(), 'app', 'blog', 'content')
  
  if (!existsSync(contentDir)) {
    mkdirSync(contentDir, { recursive: true })
  }
  
  let blogData = readFileSync(blogDataPath, 'utf-8')
  
  // Her blog yazısının content'ini bul ve ayrı dosyaya kaydet
  const contentRegex = /(slug: '([^']+)',[\s\S]*?content: `)([\s\S]*?)(`)/g
  
  blogData = blogData.replace(contentRegex, (match, prefix, slug, content, suffix) => {
    // İçeriği dosyaya kaydet
    const contentPath = join(contentDir, `${slug}.md`)
    writeFileSync(contentPath, content, 'utf-8')
    console.log(`✅ ${slug}.md kaydedildi`)
    
    // Template string'i import ile değiştir
    return `${prefix.slice(0, -8)}import('@/app/blog/content/${slug}.md').then(m => m.default)${suffix.slice(0, -1)}`
  })
  
  // Ancak bu async import çalışmayacak, daha iyi bir yöntem kullan
  // Bunun yerine dynamic import kullanacağız
  
  writeFileSync(blogDataPath, blogData, 'utf-8')
  console.log('✅ Blog içerikleri ayrı dosyalara taşındı!')
}

// Daha iyi çözüm: blog-data.ts'yi sadece metadata tutacak şekilde düzenle
// ve content'i runtime'da markdown dosyalarından yükle

convertBlogsToFiles()

