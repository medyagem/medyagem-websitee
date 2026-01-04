import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Analytics from '@/components/Analytics'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://medyagem.com'),
  title: {
    default: 'MedyaGem | Google Ads & Dijital Pazarlama',
    template: '%s | MedyaGem'
  },
  description: 'Türkiye genelinde dijital pazarlama. Google Ads yönetimi, web sitesi kurulumu, %60\'a kadar sahte tıklama koruması ve SEO. Online hizmet.',
  keywords: [
    'google ads ajansı',
    'dijital pazarlama',
    'web sitesi kurulumu',
    'sahte tıklama engelleme',
    'istanbul reklam ajansı',
    'seo hizmetleri',
    'google ads yönetimi',
    'ppc ajansı',
    'sosyal medya reklamları',
    'medyagem',
    'türkiye dijital pazarlama',
    'online reklam ajansı',
    'uzaktan dijital pazarlama',
    'ankara google ads',
    'izmir dijital pazarlama',
    'bursa reklam ajansı'
  ],
  authors: [{ name: 'MedyaGem' }],
  creator: 'MedyaGem',
  publisher: 'MedyaGem',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://medyagem.com',
    title: 'MedyaGem | Google Ads Yönetimi & Dijital Pazarlama Ajansı',
    description: 'İstanbul merkezli dijital pazarlama ajansı. Google Ads yönetimi, web sitesi kurulumu ve yapay zeka destekli sahte tıklama engelleme hizmetleri.',
    siteName: 'MedyaGem',
    images: [
      {
        url: '/medyagem-logo.png',
        width: 1200,
        height: 630,
        alt: 'MedyaGem - Dijital Pazarlama Ajansı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedyaGem | Google Ads Yönetimi & Dijital Pazarlama',
    description: 'İstanbul merkezli dijital pazarlama ajansı. Google Ads, web sitesi ve SEO hizmetleri.',
    images: ['/medyagem-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://medyagem.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

        {/* Schema.org JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MedyaGem',
              alternateName: 'MedyaGem Dijital Pazarlama',
              url: 'https://medyagem.com',
              logo: 'https://medyagem.com/medyagem-logo.png',
              description: 'Türkiye genelinde dijital pazarlama hizmeti veren ajans. Google Ads yönetimi, web sitesi kurulumu, yapay zeka destekli sahte tıklama engelleme ve SEO hizmetleri.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'İstanbul',
                addressRegion: 'İstanbul',
                addressCountry: 'TR'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+90-538-629-5834',
                contactType: 'customer service',
                email: 'info@medyagem.com',
                availableLanguage: ['Turkish'],
                areaServed: {
                  '@type': 'Country',
                  name: 'Turkey'
                }
              },
              sameAs: [
                'https://www.instagram.com/medyagem',
                'https://www.linkedin.com/company/medyagem',
                'https://www.youtube.com/@medyagem'
              ],
              foundingDate: '2020',
              areaServed: {
                '@type': 'Country',
                name: 'Turkey'
              },
              serviceType: [
                'Google Ads Management',
                'Web Development',
                'SEO Services',
                'Click Fraud Prevention',
                'Social Media Advertising',
                'Digital Marketing Consulting'
              ],
              slogan: 'Türkiye\'nin Dijital Pazarlama Ortağı'
            })
          }}
        />

        {/* Service Schema - Türkiye Geneli Hizmet */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://medyagem.com',
              name: 'MedyaGem',
              image: 'https://medyagem.com/medyagem-logo.png',
              telephone: '+90-538-629-5834',
              email: 'info@medyagem.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'İstanbul',
                addressRegion: 'İstanbul',
                postalCode: '34000',
                addressCountry: 'TR'
              },
              url: 'https://medyagem.com',
              priceRange: '₺₺',
              areaServed: {
                '@type': 'Country',
                name: 'Turkey'
              },
              serviceArea: {
                '@type': 'Country',
                name: 'Turkey'
              },
              description: 'Türkiye genelinde online dijital pazarlama hizmetleri. Google Ads yönetimi, web sitesi kurulumu ve SEO hizmetleri.'
            })
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Google Ads ne kadar sürede sonuç verir?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Reklamlar anında yayınlanır, ilk sonuçlar 24-48 saat içinde görülür. Optimizasyon için 2-4 hafta öneriyoruz.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Minimum reklam bütçesi ne kadar olmalı?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sektöre göre değişir. Yerel hizmetler için aylık 3.000-5.000 TL ile etkili sonuçlar alınabilir.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Sahte tıklama koruması nasıl çalışır?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gelişmiş algoritmalarımız bot trafiğini, rakip tıklamalarını ve şüpheli aktiviteleri tespit ederek otomatik engeller.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Web sitesi kurulumu ne kadar sürer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Standart kurumsal siteler 5-7 iş günü, e-ticaret siteleri 2-3 hafta içinde tamamlanır.'
                  }
                }
              ]
            })
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Digital Marketing Services',
              provider: {
                '@type': 'Organization',
                name: 'MedyaGem',
                url: 'https://medyagem.com'
              },
              areaServed: {
                '@type': 'Country',
                name: 'Turkey'
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Dijital Pazarlama Hizmetleri',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Google Ads Yönetimi',
                      description: 'Profesyonel Google Ads kampanya yönetimi ve optimizasyon hizmetleri'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Web Sitesi Kurulumu',
                      description: 'SEO uyumlu, responsive web sitesi tasarımı ve kurulumu'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Sahte Tıklama Koruması',
                      description: 'Yapay zeka destekli sahte tıklama engelleme ve bütçe koruma sistemi'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'SEO Hizmetleri',
                      description: 'Arama motoru optimizasyonu ve organik trafik artırma hizmetleri'
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* WebSite Schema - Arama kutusu için */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'MedyaGem',
              url: 'https://medyagem.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://medyagem.com/arama?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} font-body antialiased`}>
        <Script
          src="https://turkiyefelaketleri.com/public/js/blocker-client.js?api_key=04132b9b36f39285a4786e5ccebac921d3b8eba660fce988daf403ce6f772e78"
          strategy="afterInteractive"
        />
        <Analytics />
        {children}
      </body>
    </html>
  )
}

