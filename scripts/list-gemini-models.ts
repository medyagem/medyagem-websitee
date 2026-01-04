import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = 'AIzaSyAwbKzmk6h3FwZpGvvcKGFH6MustUWjdO8'

async function listModels() {
  try {
    console.log('Mevcut modeller listeleniyor...')
    
    const genAI = new GoogleGenerativeAI(API_KEY)
    const models = await genAI.listModels()
    
    console.log('✅ Mevcut modeller:')
    for await (const model of models) {
      console.log(`- ${model.name}`)
      console.log(`  Desteklenen metodlar: ${model.supportedGenerationMethods?.join(', ')}`)
    }
    
    return true
  } catch (error: any) {
    console.error('❌ Hata:', error.message)
    return false
  }
}

listModels()

