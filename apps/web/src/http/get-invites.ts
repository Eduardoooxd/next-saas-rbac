import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetInvitesResponse {
  invites: {
    id: string
    createdAt: Date
    role: Role
    email: string
    author: {
      name: string | null
      id: string
    } | null
  }[]
}

export async function getInvites(orgSlug: string) {
  const result = await api
    .get(`organization/${orgSlug}/invite`, {
      next: {
        tags: [`${orgSlug}/invites`],
      },
    })
    .json<GetInvitesResponse>()

  return result
}
