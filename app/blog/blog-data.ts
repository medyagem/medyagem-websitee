import { Metadata } from 'next'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  featured: boolean
  metadata: Metadata
}

// Content'i ayrı yüklemek için helper function
export async function getBlogContent(slug: string): Promise<string> {
  try {
    const { readFileSync } = await import('fs')
    const { join } = await import('path')
    const contentPath = join(process.cwd(), 'generated-blogs', `${slug}.md`)
    return readFileSync(contentPath, 'utf-8')
  } catch (error) {
    console.error(`Blog content yüklenemedi: ${slug}`, error)
    return ''
  }
}

// SEO kurallarına göre oluşturulmuş blog yazıları
export const blogPosts: BlogPost[] = [
  // Google Ads Yazıları
  {
    slug: 'google-ads-nedir-baslangic-rehberi',
    title: 'Google Ads Nedir? Başlangıç Rehberi',
    excerpt: 'Google Ads nedir, nasıl çalışır? Başlangıç seviyesinden ileri seviyeye kadar Google Ads rehberi. Kampanya oluşturma, anahtar kelime seçimi ve optimizasyon ipuçları.',
    category: 'Google Ads',
    readTime: '10 dk',
    date: '20 Ocak 2025',
    image: '📊',
    featured: true,
    metadata: {
      title: 'Google Ads Nedir? Başlangıç Rehberi | MedyaGem',
      description: 'Google Ads nedir, nasıl çalışır? Başlangıç seviyesinden ileri seviyeye Google Ads rehberi. Kampanya oluşturma ve optimizasyon.',
      keywords: ['google ads', 'google ads nedir', 'ppc reklam', 'google ads başlangıç', 'reklam yönetimi', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/google-ads-nedir-baslangic-rehberi',
      },
    }
  },
  {
    slug: 'google-ads-maliyetleri-2025-butce',
    title: "Google Ads Maliyetleri: 2025'te Ne Kadar Bütçe Ayırmalısınız?",
    excerpt: 'Google Ads maliyetleri 2025 yılında ne kadar? Sektör bazlı bütçe önerileri, CPC analizi ve ROI hesaplama rehberi.',
    category: 'Google Ads',
    readTime: '8 dk',
    date: '18 Ocak 2025',
    image: '💰',
    featured: false,
    metadata: {
      title: 'Google Ads Maliyetleri 2025 | Bütçe Rehberi',
      description: 'Google Ads maliyetleri 2025 yılında ne kadar? Sektör bazlı bütçe önerileri, CPC analizi ve ROI hesaplama.',
      keywords: ['google ads maliyetleri', 'google ads fiyatları', 'ppc maliyet', 'reklam bütçesi', 'cpc analizi', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/google-ads-maliyetleri-2025-butce',
      },
    }
  },
  {
    slug: 'google-ads-donusum-orani-artirma',
    title: "Google Ads'te Dönüşüm Oranı Nasıl Artırılır?",
    excerpt: "SEO kurallarına göre hazırlanmış Google Ads konulu kapsamlı rehber. google ads'te dönüşüm oranı nasıl artırılır? hakkında detaylı bilgi.",
    category: 'Google Ads',
    readTime: '9 dk',
    date: '16 Ocak 2025',
    image: '📈',
    featured: false,
    metadata: {
      title: "Google Ads'te Dönüşüm Oranı Nasıl Artırılır? | MedyaGem",
      description: "SEO kurallarına göre hazırlanmış Google Ads konulu kapsamlı rehber. google ads'te dönüşüm oranı nasıl artırılır? hakkında detaylı bilgi.",
      keywords: ['google ads donusum orani artirma', 'google ads', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/google-ads-donusum-orani-artirma',
      },
    }
  },
  {
    slug: 'seo-nedir-2025-guncel-rehberi',
    title: 'SEO Nedir? 2025 Güncel Rehberi',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. seo nedir? 2025 güncel rehberi hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '12 dk',
    date: '19 Ocak 2025',
    image: '🔍',
    featured: false,
    metadata: {
      title: 'SEO Nedir? 2025 Güncel Rehberi | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. seo nedir? 2025 güncel rehberi hakkında detaylı bilgi.',
      keywords: ['seo nedir 2025 guncel rehberi', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/seo-nedir-2025-guncel-rehberi',
      },
    }
  },
  {
    slug: 'yerel-seo-nedir-kucuk-isletmeler',
    title: 'Yerel SEO Nedir? Küçük İşletmeler İçin Önemi',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. yerel seo nedir? küçük i̇şletmeler i̇çin önemi hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '10 dk',
    date: '17 Ocak 2025',
    image: '📍',
    featured: false,
    metadata: {
      title: 'Yerel SEO Nedir? Küçük İşletmeler İçin Önemi | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. yerel seo nedir? küçük i̇şletmeler i̇çin önemi hakkında detaylı bilgi.',
      keywords: ['yerel seo nedir kucuk isletmeler', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/yerel-seo-nedir-kucuk-isletmeler',
      },
    }
  },
  {
    slug: 'anahtar-kelime-arastirmasi-nasil-yapilir',
    title: 'Anahtar Kelime Araştırması Nasıl Yapılır?',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. anahtar kelime araştırması nasıl yapılır? hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '11 dk',
    date: '13 Ocak 2025',
    image: '🔑',
    featured: false,
    metadata: {
      title: 'Anahtar Kelime Araştırması Nasıl Yapılır? | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. anahtar kelime araştırması nasıl yapılır? hakkında detaylı bilgi.',
      keywords: ['anahtar kelime arastirmasi nasil yapilir', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/anahtar-kelime-arastirmasi-nasil-yapilir',
      },
    }
  },
  {
    slug: 'teknik-seo-nedir-kontrol-listesi',
    title: 'Teknik SEO Nedir? Kontrol Listesi',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. teknik seo nedir? kontrol listesi hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '10 dk',
    date: '11 Ocak 2025',
    image: '⚙️',
    featured: false,
    metadata: {
      title: 'Teknik SEO Nedir? Kontrol Listesi | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. teknik seo nedir? kontrol listesi hakkında detaylı bilgi.',
      keywords: ['teknik seo nedir kontrol listesi', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/teknik-seo-nedir-kontrol-listesi',
      },
    }
  },
  {
    slug: 'backlink-nedir-kaliteli-backlink-alma',
    title: 'Backlink Nedir? Kaliteli Backlink Nasıl Alınır?',
    excerpt: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. backlink nedir? kaliteli backlink nasıl alınır? hakkında detaylı bilgi.',
    category: 'SEO',
    readTime: '9 dk',
    date: '9 Ocak 2025',
    image: '🔗',
    featured: false,
    metadata: {
      title: 'Backlink Nedir? Kaliteli Backlink Nasıl Alınır? | MedyaGem',
      description: 'SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. backlink nedir? kaliteli backlink nasıl alınır? hakkında detaylı bilgi.',
      keywords: ['backlink nedir kaliteli backlink alma', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/backlink-nedir-kaliteli-backlink-alma',
      },
    }
  },
  {
    slug: 'icerik-seo-google-sevdigi-icerikler',
    title: "İçerik SEO'su: Google'ın Sevdiği İçerikler",
    excerpt: "SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. i̇çerik seo'su: google'ın sevdiği i̇çerikler hakkında detaylı bilgi.",
    category: 'SEO',
    readTime: '10 dk',
    date: '7 Ocak 2025',
    image: '📝',
    featured: false,
    metadata: {
      title: "İçerik SEO'su: Google'ın Sevdiği İçerikler | MedyaGem",
      description: "SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. i̇çerik seo'su: google'ın sevdiği i̇çerikler hakkında detaylı bilgi.",
      keywords: ['icerik seo google sevdigi icerikler', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/icerik-seo-google-sevdigi-icerikler',
      },
    }
  },
  {
    slug: 'e-e-a-t-nedir-google-guven-kriterleri',
    title: "E-E-A-T Nedir? Google'ın Güven Kriterleri",
    excerpt: "SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. e-e-a-t nedir? google'ın güven kriterleri hakkında detaylı bilgi.",
    category: 'SEO',
    readTime: '11 dk',
    date: '1 Ocak 2025',
    image: '✅',
    featured: false,
    metadata: {
      title: "E-E-A-T Nedir? Google'ın Güven Kriterleri | MedyaGem",
      description: "SEO kurallarına göre hazırlanmış SEO konulu kapsamlı rehber. e-e-a-t nedir? google'ın güven kriterleri hakkında detaylı bilgi.",
      keywords: ['e e a t nedir google guven kriterleri', 'seo', 'seo', 'dijital pazarlama', 'medyagem'],
      alternates: {
        canonical: 'https://medyagem.com/blog/e-e-a-t-nedir-google-guven-kriterleri',
      },
    }
  }
]
