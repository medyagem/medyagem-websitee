import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Google Ads Yönetimi | MedyaGem',
    description: 'ROI odaklı Google Ads yönetimi. Sahte tıklama koruması, optimizasyon ve raporlama. Türkiye geneli hizmet.',
    keywords: ['google ads', 'google ads yönetimi', 'ppc', 'reklam yönetimi', 'medyagem', 'türkiye'],
    openGraph: {
        title: 'Google Ads Yönetimi | MedyaGem',
        description: 'ROI odaklı Google Ads kampanyaları ile işletmenize nitelikli müşteriler kazandırıyoruz',
        type: 'website',
    },
    alternates: {
        canonical: 'https://medyagem.com/hizmetler/google-ads',
    },
}

export default function GoogleAdsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
