import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | MedyaGem',
    description: 'Google Ads yönetimi, web sitesi kurulumu, SEO, %60\'a kadar sahte tıklama koruması ve sosyal medya reklamları. Türkiye geneli.',
    keywords: ['dijital pazarlama hizmetleri', 'google ads', 'web sitesi', 'seo', 'sosyal medya', 'medyagem'],
    openGraph: {
        title: 'Hizmetlerimiz | MedyaGem',
        description: 'İşletmeniz için kapsamlı dijital pazarlama hizmetleri',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/hizmetler',
    },
}

export default function ServicesPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
