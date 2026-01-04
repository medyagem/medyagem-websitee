import { CollectionConfig } from 'payload/types'

const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Emoji veya icon adı (örn: 🎯)',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      admin: {
        description: 'Fiyat (TL)',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Aktif',
          value: 'active',
        },
        {
          label: 'Pasif',
          value: 'inactive',
        },
      ],
      defaultValue: 'active',
    },
  ],
}

export default Services



