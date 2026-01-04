import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SEO Optimizasyonu | MedyaGem',
    description: 'Yerel ve organik SEO ile Google\'da üst sıralara çıkın. Anahtar kelime analizi, teknik SEO ve link building. Türkiye geneli.',
    keywords: ['seo', 'seo optimizasyonu', 'yerel seo', 'organik trafik', 'google sıralama', 'medyagem'],
    openGraph: {
        title: 'SEO Optimizasyonu | MedyaGem',
        description: 'Yerel ve organik SEO çalışmaları ile Google\'da üst sıralara çıkın',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/hizmetler/seo',
    },
}

export default function SEOLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}



