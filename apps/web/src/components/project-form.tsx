'use client'
import { AlertTriangle, Loader2 } from 'lucide-react'
import { useActionState } from 'react'

import { saveProjectAction } from '@/app/(app)/organization/[slug]/create-project/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Textarea } from './ui/textarea'

export default function ProjectForm() {
  const [{ success, errors, message }, formAction, isPending] = useActionState(
    saveProjectAction,
    {
      success: false,
      message: '',
      errors: null,
    },
  )

  return (
    <form className="space-y-4" action={formAction}>
      {!success && message ? (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>save Project failed!</AlertTitle>

          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      ) : null}

      {success && message ? (
        <Alert variant="success">
          <AlertTriangle className="size-4" />
          <AlertTitle>Success</AlertTitle>

          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="space-y-1">
        <Label htmlFor="name">Project Name</Label>
        <Input name="name" id="name" />

        {errors?.name ? (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.name[0]}
          </p>
        ) : null}
      </div>

      <div className="space-y-1">
        <Label htmlFor="description">Description</Label>
        <Textarea name="description" id="description" />

        {errors?.description ? (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.description[0]}
          </p>
        ) : null}
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Save Project'
        )}
      </Button>
    </form>
  )
}
