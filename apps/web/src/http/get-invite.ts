import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetInviteResponse {
  invite: {
    id: string
    role: Role
    email: string
    createdAt: Date
    organization: {
      name: string
    }
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
  }
}

export async function getInvite(inviteId: string) {
  const result = await api.get(`invite/${inviteId}`).json<GetInviteResponse>()

  return result
}
