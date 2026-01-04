import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | MedyaGem',
    description: 'MedyaGem gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin.',
    keywords: ['gizlilik politikası', 'kvkk', 'kişisel veriler', 'medyagem'],
    robots: 'index, follow',
}

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
