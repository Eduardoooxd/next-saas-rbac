import { ability } from '@/auth/auth'

import { Invites } from './invites'
import MemberList from './member-list'

export default async function MembersPage() {
  const permissions = await ability()

  const canCheckInvites = permissions?.can('get', 'Invite')
  const canCheckMembers = permissions?.can('get', 'User')
  return (
    <div className="space-y-4">
      <h1 className="font-bol text-2xl">Members</h1>

      <div className="space-y-4">
        {canCheckInvites ? <Invites /> : null}
        {canCheckMembers ? <MemberList /> : null}
      </div>
    </div>
  )
}
