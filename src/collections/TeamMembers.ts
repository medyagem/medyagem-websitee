import { CollectionConfig } from 'payload/types'

const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'expertise',
      type: 'text',
      admin: {
        description: 'Uzmanlık alanları (örn: Google Ads, SEO, Strateji)',
      },
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'linkedin',
      type: 'text',
      admin: {
        description: 'LinkedIn profil URL',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Görüntülenme sırası',
      },
    },
  ],
}

export default TeamMembers



