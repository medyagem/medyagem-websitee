import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

function removeContentFields() {
  const blogDataPath = join(process.cwd(), 'app', 'blog', 'blog-data.ts')
  let blogData = readFileSync(blogDataPath, 'utf-8')
  
  // content: `...` kısımlarını kaldır
  // Regex: content: ` ile başlayıp ` ile biten (sonraki }, ile biten) kısmı bul
  const regex = /,\s*content: `[\s\S]*?`\s*/g
  
  blogData = blogData.replace(regex, '')
  
  writeFileSync(blogDataPath, blogData, 'utf-8')
  console.log('✅ Content alanları blog-data.ts\'den kaldırıldı!')
}

removeContentFields()

