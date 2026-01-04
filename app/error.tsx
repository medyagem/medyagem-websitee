'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw, AlertCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('Error:', error)
  }, [error])

  return (
    <main className="relative min-h-screen">
      <Header />
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-red-500/20 p-6 rounded-full w-fit mx-auto mb-6">
              <AlertCircle className="text-red-500" size={48} />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Bir Hata Oluştu</h1>
            <p className="text-text-secondary text-lg mb-8">
              Üzgünüz, beklenmeyen bir hata oluştu. Lütfen tekrar deneyin veya ana sayfaya dönün.
            </p>
            
            {error.message && (
              <div className="bg-background-card border border-red-500/20 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm text-text-muted font-mono">{error.message}</p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} />
                Tekrar Dene
              </button>
              <Link
                href="/"
                className="px-6 py-3 rounded-button border border-background-card-border text-text-primary hover:bg-background-card transition-all inline-flex items-center justify-center gap-2"
              >
                <Home size={18} />
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}




