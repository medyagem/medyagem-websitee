const API_KEY = 'AIzaSyAwbKzmk6h3FwZpGvvcKGFH6MustUWjdO8'

async function listAvailableModels() {
  try {
    console.log('Mevcut modeller listeleniyor...')
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      console.error('❌ API hatası:', data)
      console.error('Status:', response.status)
      
      // API key kontrolü
      if (response.status === 401 || response.status === 403) {
        console.error('\n⚠️ API key geçersiz veya yetkisiz olabilir!')
      }
      
      return false
    }
    
    console.log('✅ Mevcut modeller:')
    if (data.models) {
      data.models.forEach((model: any) => {
        console.log(`\n- ${model.name}`)
        console.log(`  Display Name: ${model.displayName}`)
        console.log(`  Supported Methods: ${model.supportedGenerationMethods?.join(', ') || 'N/A'}`)
      })
    } else {
      console.log('Model listesi bulunamadı:', data)
    }
    
    return true
  } catch (error: any) {
    console.error('❌ Hata:', error.message)
    return false
  }
}

listAvailableModels()

