const API_KEY = 'AIzaSyAwbKzmk6h3FwZpGvvcKGFH6MustUWjdO8'

async function testGeminiREST() {
  try {
    console.log('Gemini REST API test ediliyor...')
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: 'Merhaba, API çalışıyor mu? Kısa bir yanıt ver.'
          }]
        }]
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      console.error('❌ API hatası:', data)
      console.error('Status:', response.status)
      return false
    }
    
    console.log('✅ API başarıyla çalışıyor!')
    console.log('Yanıt:', data.candidates?.[0]?.content?.parts?.[0]?.text || data)
    
    return true
  } catch (error: any) {
    console.error('❌ Hata:', error.message)
    console.error('Hata detayları:', error)
    return false
  }
}

testGeminiREST()

