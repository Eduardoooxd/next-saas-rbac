import { api } from './api-client'

interface RevokeInviteRequest {
  org: string
  inviteId: string
}

type RevokeInviteResponse = never

export async function revokeInvite({ org, inviteId }: RevokeInviteRequest) {
  const result = await api
    .delete(`organization/${org}/invite/${inviteId}`)
    .json<RevokeInviteResponse>()

  return result
}
