import { api } from './api-client'

interface GetBillingResponse {
  billing: {
    seats: {
      ammount: number
      unit: number
      price: number
    }
    projects: {
      ammount: number
      unit: number
      price: number
    }
    total: number
  }
}

export async function getBilling(org: string) {
  const result = await api
    .get(`organization/${org}/billing`)
    .json<GetBillingResponse>()

  return result
}
