import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hakkımızda | MedyaGem',
    description: 'MedyaGem dijital pazarlama ajansı. Yapay zeka destekli çözümler, misyon, vizyon ve değerlerimiz. Türkiye geneli hizmet.',
    keywords: ['hakkımızda', 'medyagem', 'dijital pazarlama ajansı', 'misyon', 'vizyon', 'türkiye'],
    openGraph: {
        title: 'Hakkımızda | MedyaGem',
        description: 'Dijital pazarlamada yeni nesil çözümler sunan MedyaGem hakkında bilgi edinin.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/hakkimizda',
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
