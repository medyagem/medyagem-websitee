const API_KEY = 'AIzaSyAwbKzmk6h3FwZpGvvcKGFH6MustUWjdO8'

export async function generateAltText(blogTitle: string, imageDescription: string): Promise<string> {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`
    
    const prompt = `Aşağıdaki blog yazısı için bir görsel alt metni oluştur. Alt metin SEO uyumlu, açıklayıcı ve 125 karakterden kısa olmalı. Türkçe yaz. Sadece alt metni döndür, başka açıklama yapma.

Blog Başlığı: ${blogTitle}
Görsel Açıklaması: ${imageDescription}

Alt metin:`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'API hatası')
    }
    
    const altText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()
    
    // Eğer çok uzunsa kısalt
    if (altText && altText.length > 125) {
      return altText.substring(0, 122) + '...'
    }
    
    return altText || `${blogTitle} - ${imageDescription}`
  } catch (error) {
    console.error('Gemini API hatası:', error)
    // Fallback alt text
    return `${blogTitle} - ${imageDescription}`
  }
}

export async function generateImageDescription(blogTitle: string, category: string): Promise<string> {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`
    
    const prompt = `Aşağıdaki blog yazısı için uygun bir görsel açıklaması oluştur. Görsel ne göstermeli? Kısa ve açıklayıcı bir cümle yaz. Sadece açıklamayı döndür.

Blog Başlığı: ${blogTitle}
Kategori: ${category}

Görsel açıklaması:`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'API hatası')
    }
    
    const description = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()
    
    return description || `${category} ile ilgili profesyonel görsel`
  } catch (error) {
    console.error('Gemini API hatası:', error)
    return `${category} ile ilgili profesyonel görsel`
  }
}

