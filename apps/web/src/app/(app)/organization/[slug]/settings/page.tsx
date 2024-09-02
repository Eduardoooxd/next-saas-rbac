import { ability, getCurrentOrg } from '@/auth/auth'
import OrganizationForm from '@/components/organization-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getOrganization } from '@/http/get-organization'

import { Billing } from './billing'
import ShutdownOrganizationButton from './shutdown-organization-button'

export default async function Settings() {
  const permissions = await ability()

  const canUpdateOrganization = permissions?.can('update', 'Organization')
  const canGetBilling = permissions?.can('get', 'Billing')
  const canShutdownOrganization = permissions?.can('delete', 'Organization')

  const currentOrg = getCurrentOrg()
  const { organization } = await getOrganization(currentOrg!)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="space-y-4">
        {canUpdateOrganization ? (
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>
                Update your organization details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <OrganizationForm
                isUpdating
                initialData={{
                  name: organization.name,
                  domain: organization.domain!,
                  shouldAttachUsersByDomain:
                    organization.shouldAttachUsersByDomain,
                }}
              />
            </CardContent>
          </Card>
        ) : null}

        {canGetBilling ? <Billing /> : null}

        {canShutdownOrganization ? (
          <Card>
            <CardHeader>
              <CardTitle>Shutdown Organization</CardTitle>
              <CardDescription>
                This will delete all organization data including projects. You
                cannot undo this action.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ShutdownOrganizationButton />
            </CardContent>
          </Card>
        ) : null}
      </div>
    </div>
  )
}
