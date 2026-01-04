import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Dijital Pazarlama İpuçları ve Rehberler - MedyaGem',
  description: 'MedyaGem blog ile işletmenin büyümesine yardımcı olacak ipuçlarını bulabilir, trend ve güncel haberleri takip edebilirsin. Google Ads, SEO, Meta Ads, TikTok reklamları ve daha fazlası.',
  keywords: [
    'dijital pazarlama blog',
    'google ads ipuçları',
    'seo rehberi',
    'reklam stratejileri',
    'dijital pazarlama içerikleri',
    'medyagem blog',
  ],
  openGraph: {
    title: 'Blog | Dijital Pazarlama İpuçları - MedyaGem',
    description: 'MedyaGem blog ile işletmenin büyümesine yardımcı olacak ipuçlarını bulabilir, trend ve güncel haberleri takip edebilirsin.',
    url: 'https://medyagem.com/blog',
  },
  alternates: {
    canonical: 'https://medyagem.com/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
