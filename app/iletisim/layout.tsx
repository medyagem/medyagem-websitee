import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'İletişim | MedyaGem',
    description: 'MedyaGem ile iletişime geçin. Google Ads, web sitesi ve dijital pazarlama için ücretsiz teklif alın. Türkiye geneli.',
    keywords: ['iletişim', 'medyagem', 'dijital pazarlama', 'google ads', 'teklif al', 'türkiye'],
    openGraph: {
        title: 'İletişim | MedyaGem',
        description: 'Dijital pazarlama ihtiyaçlarınız için bizimle iletişime geçin.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/iletisim',
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
