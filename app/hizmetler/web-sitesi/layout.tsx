import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web Sitesi Kurulumu | MedyaGem',
    description: 'SEO uyumlu, mobil öncelikli profesyonel web siteleri. WordPress, Next.js ve özel tasarım. Türkiye geneli hizmet.',
    keywords: ['web sitesi kurulumu', 'web tasarım', 'seo uyumlu web sitesi', 'wordpress', 'medyagem', 'türkiye'],
    openGraph: {
        title: 'Web Sitesi Kurulumu | MedyaGem',
        description: 'SEO uyumlu, mobil öncelikli profesyonel web siteleri tasarlıyoruz',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/hizmetler/web-sitesi',
    },
}

export default function WebSitesiLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}



