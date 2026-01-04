'use client'

import { Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

const footerColumns = [
  {
    title: 'MedyaGem',
    content: 'Türkiye genelinde dijital pazarlama hizmeti. Google Ads, web sitesi ve SEO hizmetleri.',
  },
  {
    title: 'Hizmetler',
    links: [
      { label: 'Google Ads Yönetimi', href: '/hizmetler/google-ads' },
      { label: 'Web Sitesi Kurulumu', href: '/hizmetler/web-sitesi' },
      { label: 'SEO', href: '/hizmetler/seo' },
      { label: 'Sahte Tıklama Koruması', href: '/hizmetler/sahte-tiklama-engelleme' },
      { label: 'Sosyal Medya', href: '/hizmetler/sosyal-medya' },
    ],
  },
  {
    title: 'Kaynaklar',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Sıkça Sorulanlar', href: '/sss' },
      { label: 'İletişim', href: '/iletisim' },
    ],
  },
  {
    title: 'İletişim',
    content: 'Merkez: İstanbul\nTürkiye Geneli Online Hizmet\ninfo@medyagem.com',
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-background-secondary border-t border-background-card-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((column, index) => (
            <div key={column.title}>
              {index === 0 ? (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <img
                      src="/medyagem-logo.png"
                      alt="MedyaGem Logo"
                      className="h-8 w-auto max-w-[150px]"
                      style={{ display: 'none' }}
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'block'
                        const fallback = target.nextElementSibling as HTMLElement
                        if (fallback) fallback.style.display = 'none'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    <span className="text-xl font-bold text-white" style={{ display: 'block' }}>
                      <span className="text-accent-primary">Medya</span>Gem
                    </span>
                  </div>
                  <h3 className="font-semibold mb-4">{column.title}</h3>
                </div>
              ) : (
                <h3 className="font-semibold mb-4">{column.title}</h3>
              )}
              {column.content && (
                <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                  {column.content}
                </p>
              )}
              {column.links && (
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-text-secondary hover:text-accent-primary text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background-card-border gap-4">
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/medyagem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/medyagem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/@medyagem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
            <Link href="/gizlilik-politikasi" className="hover:text-text-primary transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="hover:text-text-primary transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} MedyaGem. Tüm hakları saklıdır.</p>
        </div>
      </div>

      {/* Background Text Effect */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none opacity-5">
        <div className="text-[150px] font-bold text-white whitespace-nowrap">
          MedyaGem MedyaGem MedyaGem
        </div>
      </div>
    </footer>
  )
}
