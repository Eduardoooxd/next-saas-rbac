import { z } from 'zod'

export const projectSchema = z.object({
  // Default because literal does not assign automaticly by default the value
  __typename: z.literal('Project').default('Project'),
  id: z.string(),
  ownerId: z.string(),
})

export type Project = z.infer<typeof projectSchema>
