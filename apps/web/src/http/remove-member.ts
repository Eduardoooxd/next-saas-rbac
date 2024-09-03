import { api } from './api-client'

interface RemoverMemberRequest {
  org: string
  memberId: string
}

type RemoverMemberResponse = never

export async function removerMember({ org, memberId }: RemoverMemberRequest) {
  const result = await api
    .delete(`organization/${org}/member/${memberId}`)
    .json<RemoverMemberResponse>()

  return result
}
