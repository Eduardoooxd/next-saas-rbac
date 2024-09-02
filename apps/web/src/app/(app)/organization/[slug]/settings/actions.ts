'use server'

import { redirect } from 'next/navigation'

import { getCurrentOrg } from '@/auth/auth'
import { shutdownOrganization } from '@/http/shutdown-organization'

export async function shutdownOrganizationAction() {
  'use server'

  const currentOrg = getCurrentOrg()

  await shutdownOrganization({ org: currentOrg! })
  redirect('/')
}
