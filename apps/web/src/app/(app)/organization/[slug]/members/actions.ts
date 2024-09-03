'use server'

import { revalidateTag } from 'next/cache'

import { getCurrentOrg } from '@/auth/auth'
import { removerMember } from '@/http/remove-member'

export async function removerMemberAction(memberId: string) {
  const currentOrg = getCurrentOrg()

  await removerMember({
    org: currentOrg!,
    memberId,
  })

  revalidateTag(`${currentOrg}/members`)
}
