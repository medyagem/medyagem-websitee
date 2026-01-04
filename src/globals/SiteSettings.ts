import { GlobalConfig } from 'payload/types'

const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Ayarları',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'MedyaGem',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Ana logo (Header\'da görünecek)',
      },
    },
    {
      name: 'footerLogo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Footer logo',
      },
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'contact',
      label: 'İletişim Bilgileri',
      type: 'group',
      fields: [
        {
          name: 'email',
          type: 'email',
          defaultValue: 'info@medyagem.com',
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '+90 538 629 58 34',
        },
        {
          name: 'address',
          type: 'textarea',
          defaultValue: 'İstanbul',
        },
      ],
    },
    {
      name: 'socialMedia',
      label: 'Sosyal Medya',
      type: 'group',
      fields: [
        {
          name: 'instagram',
          type: 'text',
        },
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'youtube',
          type: 'text',
        },
        {
          name: 'twitter',
          type: 'text',
        },
      ],
    },
    {
      name: 'hero',
      label: 'Ana Sayfa Hero Bölümü',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Google Ads Ajansı İstanbul | Dijital Pazarlama Ajansı',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: 'MedyaGem, Türkiye\'nin her yerinden işletmelerin dijital dünyada öne çıkmasını sağlar.',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Ücretsiz Analiz Al',
        },
      ],
    },
    {
      name: 'footer',
      label: 'Footer İçeriği',
      type: 'group',
      fields: [
        {
          name: 'copyright',
          type: 'text',
          defaultValue: '© 2025 MedyaGem. Tüm hakları saklıdır.',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'İstanbul merkezli dijital pazarlama ajansı. Google Ads, web sitesi ve SEO hizmetleri.',
        },
      ],
    },
  ],
}

export default SiteSettings



