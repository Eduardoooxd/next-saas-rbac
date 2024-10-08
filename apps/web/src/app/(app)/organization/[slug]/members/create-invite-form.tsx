'use client'

import { AlertTriangle, Loader2, UserPlus } from 'lucide-react'
import { useActionState } from 'react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { createInviteAction } from './actions'

export default function CreateInviteForm() {
  const [{ success, errors, message }, formAction, isPending] = useActionState(
    createInviteAction,
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
          <AlertTitle>Invite failed!</AlertTitle>

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

      <div className="flex items-center gap-2">
        <div className="flex-1 space-y-1">
          <Input name="email" id="email" placeholder="jonh@example.com" />

          {errors?.email ? (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          ) : null}
        </div>

        <Select name="role" defaultValue="MEMBER">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ADMIN">Admin</SelectItem>
            <SelectItem value="MEMBER">Member</SelectItem>
            <SelectItem value="BILLING">Billing</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              <UserPlus className="mr-2 size-4" />
              Invite User
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
