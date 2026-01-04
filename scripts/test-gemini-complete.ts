const API_KEY = 'AIzaSyAwbKzmk6h3FwZpGvvcKGFH6MustUWjdO8'

async function testGeminiText() {
  try {
    console.log('Gemini metin üretimi test ediliyor...')
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: 'Blog yazısı için "Google Ads rehberi" konulu bir görsel alt metni oluştur. SEO uyumlu, 125 karakterden kısa, Türkçe.'
          }]
        }]
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      console.error('❌ Metin üretimi hatası:', data)
      return false
    }
    
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
    console.log('✅ Metin üretimi başarılı!')
    console.log('Alt metin:', text)
    return true
  } catch (error: any) {
    console.error('❌ Hata:', error.message)
    return false
  }
}

async function testImagenImage() {
  try {
    console.log('\nImagen görsel üretimi test ediliyor...')
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${API_KEY}`
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: 'Professional digital marketing illustration, Google Ads dashboard on computer screen, modern office setting, clean and professional style'
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      console.error('❌ Görsel üretimi hatası:', data)
      return false
    }
    
    console.log('✅ Görsel üretimi başarılı!')
    console.log('Görsel URL:', data.predictions?.[0]?.bytesBase64Encoded ? 'Base64 encoded' : data)
    return true
  } catch (error: any) {
    console.error('❌ Hata:', error.message)
    return false
  }
}

async function runTests() {
  const textResult = await testGeminiText()
  const imageResult = await testImagenImage()
  
  console.log('\n=== Test Sonuçları ===')
  console.log(`Metin Üretimi: ${textResult ? '✅' : '❌'}`)
  console.log(`Görsel Üretimi: ${imageResult ? '✅' : '❌'}`)
}

runTests()

