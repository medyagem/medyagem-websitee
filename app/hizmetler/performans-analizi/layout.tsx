import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Performans Analizi | MedyaGem',
    description: 'Detaylı raporlama ve dönüşüm takibi. Google Analytics, ROI analizi ve kampanya izleme. Türkiye geneli.',
    keywords: ['performans analizi', 'google analytics', 'dönüşüm takibi', 'roi analizi', 'raporlama', 'medyagem'],
    openGraph: {
        title: 'Performans Analizi | MedyaGem',
        description: 'Detaylı raporlama ve dönüşüm takibi ile kampanyalarınızı izleyin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/hizmetler/performans-analizi',
    },
}

export default function PerformansAnaliziLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}



