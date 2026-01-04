import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kullanım Koşulları | MedyaGem',
    description: 'MedyaGem hizmet kullanım koşulları. Sözleşme, ödeme, sorumluluklar ve yasal bilgiler.',
    keywords: ['kullanım koşulları', 'şartlar', 'sözleşme', 'medyagem'],
    robots: 'index, follow',
}

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
