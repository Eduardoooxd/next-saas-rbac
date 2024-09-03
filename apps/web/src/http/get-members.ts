import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetMembersResponse {
  members: {
    name: string | null
    id: string
    avatarUrl: string | null
    role: Role
    userId: string
    email: string
  }[]
}

export async function getMembers(orgSlug: string) {
  const result = await api
    .get(`organization/${orgSlug}/member`, {
      next: {
        tags: [`${orgSlug}/members`],
      },
    })
    .json<GetMembersResponse>()

  return result
}
