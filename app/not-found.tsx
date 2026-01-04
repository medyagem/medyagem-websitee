import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Üzgünüz. Erişmek istediğiniz sayfa bulunmuyor</h2>
            <p className="text-text-secondary text-lg mb-8">
              Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
              Yardıma ihtiyacınız varsa bizimle iletişime geçebilirsiniz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Home size={18} />
                Ana Sayfaya Dön
              </Link>
              <Link
                href="/hizmetler"
                className="px-6 py-3 rounded-button border border-background-card-border text-text-primary hover:bg-background-card transition-all inline-flex items-center justify-center gap-2"
              >
                <Search size={18} />
                Hizmetlerimiz
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-background-card-border">
              <p className="text-text-muted text-sm mb-4">Popüler Sayfalar:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/hizmetler" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                  Hizmetler
                </Link>
                <Link href="/hakkimizda" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                  Hakkımızda
                </Link>
                <Link href="/blog" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                  Blog
                </Link>
                <Link href="/iletisim" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                  İletişim
                </Link>
                <Link href="/sss" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                  SSS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}



