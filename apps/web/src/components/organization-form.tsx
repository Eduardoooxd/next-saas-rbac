'use client'
import { AlertTriangle, Loader2 } from 'lucide-react'
import { useActionState } from 'react'

import {
  OrganizationSchema,
  saveOrganizationAction,
  updateOrganizationAction,
} from '@/app/(app)/create-organization/actions'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Alert, AlertDescription, AlertTitle } from './ui/alert'

interface OrganizationFormProps {
  isUpdating?: boolean
  initialData?: OrganizationSchema
}

export default function OrganizationForm({
  isUpdating = false,
  initialData,
}: OrganizationFormProps) {
  const formActionToInvoke = isUpdating
    ? updateOrganizationAction
    : saveOrganizationAction

  const [{ success, errors, message }, formAction, isPending] = useActionState(
    formActionToInvoke,
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
          <AlertTitle>Save Organization failed!</AlertTitle>

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
        <Label htmlFor="name">Organization Name</Label>
        <Input name="name" id="name" defaultValue={initialData?.name} />

        {errors?.name ? (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.name[0]}
          </p>
        ) : null}
      </div>

      <div className="space-y-1">
        <Label htmlFor="domain">E-mail Domain</Label>
        <Input
          name="domain"
          type="text"
          id="domain"
          inputMode="url"
          placeholder="example.com"
          defaultValue={initialData?.domain ?? undefined}
        />

        {errors?.domain ? (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.domain[0]}
          </p>
        ) : null}
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline space-x-2">
          <Checkbox
            name="shoudAttachUsersByDomain"
            id="shouldAttachUsersByDomain"
            className="translate-y-0.5"
            defaultChecked={initialData?.shouldAttachUsersByDomain}
          />
          <label htmlFor="shouldAttachUsersByDomain" className="space-y-1">
            <span className="text-sm font-medium leading-none">
              Auto-join new members
            </span>
            <p className="text-sm text-muted-foreground">
              This will automaticlly invite all members with same e-mail domain
              to this organization.
            </p>
          </label>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Save Organization'
        )}
      </Button>
    </form>
  )
}
