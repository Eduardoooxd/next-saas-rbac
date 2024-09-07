import { api } from './api-client'

interface AcceptInviteRequest {
  inviteId: string
}

type AcceptInviteResponse = void

export async function acceptInvite({
  inviteId,
}: AcceptInviteRequest): Promise<AcceptInviteResponse> {
  await api.post(`invite/${inviteId}/accept`).json<AcceptInviteResponse>()
}
