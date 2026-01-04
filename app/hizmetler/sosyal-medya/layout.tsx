import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sosyal Medya Reklamları | MedyaGem',
    description: 'Facebook, Instagram ve LinkedIn reklamları. Hedef kitle analizi ve dönüşüm odaklı yönetim. Türkiye geneli.',
    keywords: ['facebook ads', 'instagram ads', 'linkedin ads', 'sosyal medya reklamları', 'meta ads', 'medyagem'],
    openGraph: {
        title: 'Sosyal Medya Reklamları | MedyaGem',
        description: 'Facebook, Instagram ve LinkedIn reklamları ile hedef kitlenize ulaşın',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/hizmetler/sosyal-medya',
    },
}

export default function SosyalMedyaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}



