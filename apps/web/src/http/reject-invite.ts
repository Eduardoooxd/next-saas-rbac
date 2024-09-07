import { api } from './api-client'

interface RejectInviteRequest {
  inviteId: string
}

type RejectInviteResponse = never

export async function rejectInvite({ inviteId }: RejectInviteRequest) {
  const result = await api
    .post(`invite/${inviteId}/reject`)
    // /invite/:inviteId/reject
    .json<RejectInviteResponse>()

  return result
}
