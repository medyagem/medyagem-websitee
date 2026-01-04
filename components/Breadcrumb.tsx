'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
    label: string
    href: string
}

export default function Breadcrumb() {
    const pathname = usePathname()

    // Ana sayfa için breadcrumb gösterme
    if (pathname === '/') return null

    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        const paths = pathname.split('/').filter(Boolean)
        const breadcrumbs: BreadcrumbItem[] = [
            { label: 'Ana Sayfa', href: '/' }
        ]

        // Türkçe etiketler için mapping
        const labelMap: Record<string, string> = {
            'hizmetler': 'Hizmetler',
            'google-ads': 'Google Ads',
            'web-sitesi': 'Web Sitesi',
            'sahte-tiklama-engelleme': 'Sahte Tıklama Engelleme',
            'seo': 'SEO',
            'performans-analizi': 'Performans Analizi',
            'sosyal-medya': 'Sosyal Medya',
            'hakkimizda': 'Hakkımızda',
            'iletisim': 'İletişim',
            'blog': 'Blog',
            'sss': 'SSS',
            'gizlilik-politikasi': 'Gizlilik Politikası',
            'kullanim-kosullari': 'Kullanım Koşulları',
            'sehirler': 'Şehirler',
            'istanbul': 'İstanbul',
            'ankara': 'Ankara',
            'izmir': 'İzmir',
            'bursa': 'Bursa',
            'antalya': 'Antalya',
        }

        let currentPath = ''
        paths.forEach((path, index) => {
            currentPath += `/${path}`
            const label = labelMap[path] || path.charAt(0).toUpperCase() + path.slice(1)

            breadcrumbs.push({
                label,
                href: currentPath
            })
        })

        return breadcrumbs
    }

    const breadcrumbs = generateBreadcrumbs()

    // Breadcrumb Schema for SEO
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        item: `https://medyagem.com${crumb.href}`,
      })),
    }

    return (
        <>
            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <nav aria-label="Breadcrumb" className="pt-24 pb-4 border-b border-background-card-border/50 bg-background-primary/95 backdrop-blur-sm">
                <div className="container-custom">
                    <ol className="flex items-center gap-2 text-sm flex-wrap">
                    {breadcrumbs.map((crumb, index) => {
                        const isLast = index === breadcrumbs.length - 1

                        return (
                            <li key={crumb.href} className="flex items-center gap-2">
                                {index === 0 ? (
                                    <Link
                                        href={crumb.href}
                                        className="flex items-center gap-1 text-text-muted hover:text-accent-primary transition-colors"
                                    >
                                        <Home size={14} />
                                        <span>{crumb.label}</span>
                                    </Link>
                                ) : (
                                    <>
                                        <ChevronRight size={14} className="text-text-muted" />
                                        {isLast ? (
                                            <span className="text-text-primary font-medium">
                                                {crumb.label}
                                            </span>
                                        ) : (
                                            <Link
                                                href={crumb.href}
                                                className="text-text-muted hover:text-accent-primary transition-colors"
                                            >
                                                {crumb.label}
                                            </Link>
                                        )}
                                    </>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </nav>
        </>
    )
}
