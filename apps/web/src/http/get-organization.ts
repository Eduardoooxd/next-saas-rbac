import { api } from './api-client'

interface GetOrganizationResponse {
  organization: {
    name: string
    id: string
    slug: string
    shouldAttachUsersByDomain: boolean
    ownerId: string
    domain?: string | null | undefined
    avatarUrl?: string | null | undefined
    createdAt: string
    updatedAt: string
  }
}

export async function getOrganization(org: string) {
  const result = await api
    .get(`organization/${org}`)
    .json<GetOrganizationResponse>()

  return result
}
