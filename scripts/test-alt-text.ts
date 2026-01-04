import { generateAltText, generateImageDescription } from '../lib/gemini-alt-text'

async function test() {
  console.log('Alt text üretimi test ediliyor...\n')
  
  const blogTitle = 'Google Ads Nedir? Başlangıç Rehberi'
  const category = 'Google Ads'
  
  try {
    const imageDesc = await generateImageDescription(blogTitle, category)
    console.log('Görsel açıklaması:', imageDesc)
    
    const altText = await generateAltText(blogTitle, imageDesc)
    console.log('\nAlt metin:', altText)
    console.log(`\nAlt metin uzunluğu: ${altText.length} karakter`)
    
    console.log('\n✅ Test başarılı!')
  } catch (error: any) {
    console.error('❌ Hata:', error.message)
  }
}

test()

