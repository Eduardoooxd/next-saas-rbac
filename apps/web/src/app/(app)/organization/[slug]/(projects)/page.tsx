import { Plus } from 'lucide-react'
import Link from 'next/link'

import { ability, getCurrentOrg } from '@/auth/auth'
import { Button } from '@/components/ui/button'

import ProjectList from './project-list'

export default async function Projects() {
  const currentOrg = getCurrentOrg()
  const permissions = await ability()

  const canCreateProject = permissions?.can('create', 'Project')
  const canUserListProjects = permissions?.can('get', 'Project')

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>

        {canCreateProject ? (
          <Button size="sm" asChild>
            <Link href={`/organization/${currentOrg}/create-project`}>
              <Plus className="mr-2 size-4" />
              Create Project
            </Link>
          </Button>
        ) : null}
      </div>

      {canUserListProjects ? (
        <ProjectList />
      ) : (
        <p className="text-sm text-muted-foreground">
          You are not allowed to see organization projects.
        </p>
      )}
    </div>
  )
}
