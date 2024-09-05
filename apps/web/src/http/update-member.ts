import { Role } from '@saas/auth'

import { api } from './api-client'

interface UpdateMemberRequest {
  org: string
  memberId: string
  role: Role
}

type UpdateMemberResponse = never

export async function updateMember({
  org,
  memberId,
  role,
}: UpdateMemberRequest) {
  const result = await api
    .patch(`organization/${org}/member/${memberId}`, {
      json: {
        role,
      },
    })
    .json<UpdateMemberResponse>()

  return result
}
