import { defineAbilityFor, userSchema } from '@saas/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getMembership } from '@/http/get-membership'
import { getProfile } from '@/http/get-profile'

export function isAuthenticated() {
  return !!cookies().get('token')?.name
}

export async function auth() {
  const token = cookies().get('token')?.name

  if (!token) {
    redirect('/auth/sign-in')
  }

  try {
    const { user } = await getProfile()

    return { user }
  } catch (error) {}

  redirect('/api/auth/sign-out')
}

export function getCurrentOrg() {
  return cookies().get('organization')?.value ?? null
}

export async function getCurrentMembership() {
  const currentOrg = getCurrentOrg()

  if (!currentOrg) {
    return null
  }

  const { membership } = await getMembership(currentOrg)

  return membership
}

export async function ability() {
  const membership = await getCurrentMembership()

  if (!membership) {
    return null
  }

  const ability = defineAbilityFor(
    userSchema.parse({
      id: membership.userId,
      role: membership.role,
    }),
  )

  return ability
}
