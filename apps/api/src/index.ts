import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({
  role: 'MEMBER',
  id: 'user-id',
  __typename: 'User',
})

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user-id' })

const canUserInviteSomeoneElse = ability.can('get', 'Billing')
const canUserDeleteOtherUsers = ability.can('delete', project)

console.log(canUserInviteSomeoneElse)
console.log(canUserDeleteOtherUsers)
