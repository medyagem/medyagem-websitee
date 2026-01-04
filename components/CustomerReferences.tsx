import fs from 'fs'
import path from 'path'
import CustomerReferencesClient from './CustomerReferencesClient'

async function getReferenceFiles() {
    // Public klasöründe ad-previews yolunu bul
    const dir = path.join(process.cwd(), 'public', 'ad-previews')

    try {
        // Klasör yoksa boş dön
        if (!fs.existsSync(dir)) {
            return []
        }

        const files = fs.readdirSync(dir)
        // Sadece resim dosyalarını filtrele
        return files.filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file))
    } catch (error) {
        console.error('Error reading ad-previews:', error)
        return []
    }
}

export default async function CustomerReferences() {
    const references = await getReferenceFiles()
    return <CustomerReferencesClient initialReferences={references} />
}
