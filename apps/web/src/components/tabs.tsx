import { ability, getCurrentOrg } from '@/auth/auth'

import { NavLink } from './nav-link'
import { Button } from './ui/button'

export async function Tabs() {
  const currentOrganization = getCurrentOrg()
  const permissions = await ability()

  const canUpdateOrganization = permissions?.can('update', 'Organization')
  const canGetBilling = permissions?.can('get', 'Billing')

  const canGetProjects = permissions?.can('get', 'Project')
  const canGetMembers = permissions?.can('get', 'User')

  return (
    <div className="border-b py-4">
      <nav className="mx-auto flex max-w-[1200px] items-center gap-2">
        {canGetProjects ? (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-input data-[current=true]:text-foreground"
          >
            <NavLink href={`/organization/${currentOrganization}`}>
              Projects
            </NavLink>
          </Button>
        ) : null}

        {canGetMembers ? (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-input data-[current=true]:text-foreground"
          >
            <NavLink href={`/organization/${currentOrganization}/members`}>
              Members
            </NavLink>
          </Button>
        ) : null}

        {canUpdateOrganization || canGetBilling ? (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-input data-[current=true]:text-foreground"
          >
            <NavLink href={`/organization/${currentOrganization}/settings`}>
              Settings & Billing
            </NavLink>
          </Button>
        ) : null}
      </nav>
    </div>
  )
}
