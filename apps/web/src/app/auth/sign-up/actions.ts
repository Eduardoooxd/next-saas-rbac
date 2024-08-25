'use server'

import { HTTPError } from 'ky'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { signUp } from '@/http/sign-up'

const signUpSchema = z
  .object({
    name: z.string().refine((value) => value.split(' ').length > 1, {
      message: 'Please, enter your full name',
    }),
    email: z.string().email({
      message: 'Please provide a valid e-mail address',
    }),
    password: z.string({ message: 'Please provide a password' }).min(6, {
      message: 'Password must be at least 6 characters long',
    }),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Passwords confirmation does not match',
    path: ['password_confirmation'],
  })

export async function signUpAction(previousState: unknown, data: FormData) {
  const parsedData = signUpSchema.safeParse(Object.fromEntries(data))

  if (!parsedData.success) {
    const errors = parsedData.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { name, email, password } = parsedData.data

  try {
    await signUp({
      name,
      email,
      password,
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()
      return { sucess: false, message, errors: null }
    }

    console.error(err)

    return {
      success: false,
      message: 'Unexpected error occurred',
      errors: null,
    }
  }

  redirect('/auth/sign-in')
  return { success: true, message: null, errors: null }
}
