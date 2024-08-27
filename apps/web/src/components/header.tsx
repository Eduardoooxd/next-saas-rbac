import { Slash } from 'lucide-react'
import Image from 'next/image'

import companyIcon from '@/assets/icons/company-icon.svg'

import OrganizationSwitcher from './organization-switcher'
import ProfileButton from './profile-button'

export default function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={companyIcon}
          alt="Company Icon"
          className="size-6 dark:invert"
        />

        <Slash className="text-border size-3 -rotate-[14deg]" />

        <OrganizationSwitcher />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
