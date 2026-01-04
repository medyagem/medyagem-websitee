import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import path from 'path'

import Users from './src/collections/Users'
import Media from './src/collections/Media'
import Pages from './src/collections/Pages'
import Services from './src/collections/Services'
import BlogPosts from './src/collections/BlogPosts'
import Testimonials from './src/collections/Testimonials'
import TeamMembers from './src/collections/TeamMembers'
import SiteSettings from './src/globals/SiteSettings'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Media,
    Pages,
    Services,
    BlogPosts,
    Testimonials,
    TeamMembers,
  ],
  globals: [
    SiteSettings,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ].filter(Boolean),
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ].filter(Boolean),
})



