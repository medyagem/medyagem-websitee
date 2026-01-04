import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = 'AIzaSyAwbKzmk6h3FwZpGvvcKGFH6MustUWjdO8'

async function testGeminiAPI() {
  try {
    console.log('Gemini API test ediliyor...')
    
    const genAI = new GoogleGenerativeAI(API_KEY)
    
    // Farklı model adlarını dene
    const modelNames = ['gemini-1.5-pro', 'gemini-1.5-flash', 'gemini-pro', 'gemini-1.0-pro']
    
    for (const modelName of modelNames) {
      try {
        console.log(`\n${modelName} modeli deneniyor...`)
        const model = genAI.getGenerativeModel({ model: modelName })
        
        const prompt = 'Merhaba, API çalışıyor mu? Kısa bir yanıt ver.'
        
        console.log('İstek gönderiliyor...')
        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()
        
        console.log(`✅ ${modelName} başarıyla çalışıyor!`)
        console.log('Yanıt:', text)
        return true
      } catch (error: any) {
        console.log(`❌ ${modelName} çalışmadı: ${error.message}`)
        continue
      }
    }
    
    throw new Error('Hiçbir model çalışmadı')
    
    const prompt = 'Merhaba, API çalışıyor mu? Kısa bir yanıt ver.'
    
    console.log('İstek gönderiliyor...')
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    
    console.log('✅ API başarıyla çalışıyor!')
    console.log('Yanıt:', text)
    
    return true
  } catch (error: any) {
    console.error('❌ API hatası:', error.message)
    console.error('Hata detayları:', error)
    
    if (error.message?.includes('API_KEY')) {
      console.error('API key geçersiz olabilir')
    }
    
    return false
  }
}

testGeminiAPI()

