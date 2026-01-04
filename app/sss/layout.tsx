import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SSS | Sıkça Sorulan Sorular',
    description: 'MedyaGem dijital pazarlama hizmetleri SSS. Google Ads, web sitesi, sahte tıklama engelleme ve daha fazlası hakkında sorular.',
    keywords: ['sss', 'sıkça sorulan sorular', 'medyagem', 'google ads', 'dijital pazarlama', 'faq'],
    openGraph: {
        title: 'SSS | MedyaGem',
        description: 'Dijital pazarlama hizmetlerimiz hakkında merak ettikleriniz',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/sss',
    },
}

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
