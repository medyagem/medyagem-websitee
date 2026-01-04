import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MedyaGem - Dijital Pazarlama Ajansı',
    short_name: 'MedyaGem',
    description: 'Google Ads yönetimi, web sitesi kurulumu ve dijital pazarlama hizmetleri',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#00d4ff',
    icons: [
      {
        src: '/medyagem-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['business', 'marketing'],
    lang: 'tr',
    orientation: 'portrait',
  }
}




