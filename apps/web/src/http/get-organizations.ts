import { api } from './api-client'

interface GetOrganizationsResponse {
  organizations: {
    name: string
    id: string
    slug: string
    avatarUrl: string | null
  }[]
}

export async function getOrganizations() {
  const result = await api
    .get('organization', {
      next: {
        tags: ['organization'],
      },
    })
    .json<GetOrganizationsResponse>()

  return result
}
