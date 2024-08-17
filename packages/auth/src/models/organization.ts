import { z } from 'zod'

export const organizationSchema = z.object({
  // Default because literal does not assign automaticly by default the value
  __typename: z.literal('Organization').default('Organization'),
  id: z.string(),
  ownerId: z.string(),
})

export type Organization = z.infer<typeof organizationSchema>
