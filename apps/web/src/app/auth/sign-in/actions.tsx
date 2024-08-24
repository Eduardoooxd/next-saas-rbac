'use server'

import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { signInWithPassword } from '@/http/sign-in-with-password'

const signInSchema = z.object({
  email: z.string().email({
    message: 'Please provide a valid e-mail address',
  }),
  password: z.string({ message: 'Please provide a password' }),
})

export async function signInWithEmailAndPassword(
  previousState: unknown,
  data: FormData,
) {
  const parsedData = signInSchema.safeParse(Object.fromEntries(data))

  if (!parsedData.success) {
    const errors = parsedData.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, password } = parsedData.data

  try {
    const { token } = await signInWithPassword({
      email,
      password,
    })

    cookies().set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
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

  redirect('/')
  return { success: true, message: null, errors: null }
}
