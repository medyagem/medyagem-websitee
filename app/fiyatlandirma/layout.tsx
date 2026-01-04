import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fiyatlandırma | Şeffaf Fiyatlandırma - MedyaGem',
  description: 'MedyaGem şeffaf fiyatlandırma ile işletmenizin her seviyesine uygun planlar sunar. Aylık ve yıllık paket seçenekleri, %15 indirim fırsatı. İlk ay ücretsiz danışmanlık ve 30 gün para iade garantisi.',
  keywords: [
    'google ads fiyatları',
    'dijital pazarlama fiyatlandırma',
    'reklam ajansı fiyatları',
    'medyagem fiyatlandırma',
    'google ads paketleri',
    'dijital pazarlama paketleri',
  ],
  openGraph: {
    title: 'Fiyatlandırma | Şeffaf Fiyatlandırma - MedyaGem',
    description: 'MedyaGem şeffaf fiyatlandırma ile işletmenizin her seviyesine uygun planlar sunar.',
    url: 'https://medyagem.com/fiyatlandirma',
  },
  alternates: {
    canonical: 'https://medyagem.com/fiyatlandirma',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


