import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <Metadata title="Login" />

      <main className="page-grid px-5 py-20 md:px-[100px] md:py-[130px] lg:px-0">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="col-span-5 col-start-1 lg:col-start-2">
          <h1 className="section-heading mb-10">Login to Your Account</h1>
          <Link
            to={routes.signup()}
            className="text-black underline hover:text-christi dark:text-white dark:hover:text-sulu"
          >
            Need an Account?
          </Link>
        </div>

        <Form
          onSubmit={onSubmit}
          className="auth-form col-span-5 xl:col-span-4"
        >
          <div className="field">
            <Label name="username" errorClassName="rw-label rw-label-error">
              Email
            </Label>
            <TextField
              name="username"
              errorClassName="rw-input rw-input-error"
              ref={usernameRef}
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
            />
            <FieldError name="username" className="error-message" />
          </div>

          <div className="field">
            <div className="flex justify-between">
              <Label name="password">Password</Label>
              <Link
                to={routes.forgotPassword()}
                className="text-black underline hover:text-christi dark:text-white dark:hover:text-sulu"
              >
                Forgot?
              </Link>
            </div>
            <PasswordField
              name="password"
              errorClassName="rw-input rw-input-error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />
          </div>

          <FieldError name="password" />

          <Submit className="button truncate hover:text-black">Login</Submit>
        </Form>
      </main>
    </>
  )
}

export default LoginPage
