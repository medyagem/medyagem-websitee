import type { NextRequest } from 'next/server'
import { REST_DELETE, REST_GET, REST_PATCH, REST_POST } from '@payloadcms/next/routes'
import { getPayload } from 'payload'
import config from '@payload-config'

export const GET = (request: NextRequest, { params }: { params: { payload: string[] } }) =>
  REST_GET(request, { params, config, getPayload })

export const POST = (request: NextRequest, { params }: { params: { payload: string[] } }) =>
  REST_POST(request, { params, config, getPayload })

export const DELETE = (request: NextRequest, { params }: { params: { payload: string[] } }) =>
  REST_DELETE(request, { params, config, getPayload })

export const PATCH = (request: NextRequest, { params }: { params: { payload: string[] } }) =>
  REST_PATCH(request, { params, config, getPayload })

