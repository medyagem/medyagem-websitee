import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sahte Tıklama Engelleme | %60 Koruması',
    description: 'Yapay zeka destekli sistemle %60\'a kadar sahte tıklama koruması. Bot trafiği ve rakip tıklamalarını otomatik engelliyoruz.',
    keywords: ['sahte tıklama engelleme', 'click fraud protection', 'bot engelleme', 'reklam koruması', 'medyagem'],
    openGraph: {
        title: 'Sahte Tıklama Engelleme | MedyaGem',
        description: 'Yapay zeka destekli sahte tıklama koruması ile reklam bütçenizi koruyun',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/hizmetler/sahte-tiklama-engelleme',
    },
}

export default function SahteTiklamaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}



