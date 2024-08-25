import { api } from './api-client'

interface getProfileResponse {
  user: {
    name: string | null
    id: string
    avatarUrl: string | null
    email: string
  }
}

export async function getProfile() {
  const result = await api.get('profile').json<getProfileResponse>()

  return result
}
