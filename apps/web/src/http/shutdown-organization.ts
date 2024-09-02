import { api } from './api-client'

interface ShutdownOrganizationRequest {
  org: string
}

type ShutdownOrganizationResponse = never

export async function shutdownOrganization({
  org,
}: ShutdownOrganizationRequest) {
  const result = await api
    .delete(`organization/${org}`)
    .json<ShutdownOrganizationResponse>()

  return result
}
