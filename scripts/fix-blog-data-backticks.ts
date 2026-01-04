import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

function fixBackticks(content: string): string {
  // Template string içindeki backtick'leri escape et
  // Ancak content: `...` kısmındaki backtick'leri koru
  // Sadece içerikteki backtick'leri escape et
  
  // content: ` ile başlayan ve ` ile biten kısımları bul
  const regex = /(content: `)([\s\S]*?)(`)/g
  
  return content.replace(regex, (match, prefix, contentPart, suffix) => {
    // İçerikteki backtick'leri escape et
    const escaped = contentPart.replace(/`/g, '\\`')
    return prefix + escaped + suffix
  })
}

function fixBlogData() {
  const blogDataPath = join(process.cwd(), 'app', 'blog', 'blog-data.ts')
  let blogData = readFileSync(blogDataPath, 'utf-8')
  
  // Backtick'leri düzelt
  blogData = fixBackticks(blogData)
  
  writeFileSync(blogDataPath, blogData, 'utf-8')
  console.log('✅ blog-data.ts backtick sorunları düzeltildi!')
}

fixBlogData()

