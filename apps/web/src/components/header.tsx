import { Slash } from 'lucide-react'
import Image from 'next/image'

import companyIcon from '@/assets/icons/company-icon.svg'
import { ability } from '@/auth/auth'

import OrganizationSwitcher from './organization-switcher'
import ProfileButton from './profile-button'
import ProjectSwitcher from './project-switcher'
import ThemeSwitcher from './theme/theme-switcher'
import { Separator } from './ui/separator'

export default async function Header() {
  const permissions = await ability()

  const canUserListProjects = permissions?.can('get', 'Project')

  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between border-b pb-2">
      <div className="flex items-center gap-3">
        <Image
          src={companyIcon}
          alt="Company Icon"
          className="size-6 dark:invert"
        />

        <Slash className="size-3 -rotate-[14deg] text-border" />

        <OrganizationSwitcher />

        {canUserListProjects ? (
          <>
            <Slash className="size-3 -rotate-[14deg] text-border" />

            <ProjectSwitcher />
          </>
        ) : null}
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Separator orientation="vertical" className="h-5" />
        <ProfileButton />
      </div>
    </div>
  )
}
