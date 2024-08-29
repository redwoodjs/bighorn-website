import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const firstFieldRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    firstFieldRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { username: string }) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <Metadata title="Forgot Password" />

      <main className="page-grid px-5 py-20 md:px-[100px] md:py-[130px] lg:px-0">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <div className="col-span-5 col-start-1 lg:col-start-2">
          <h1 className="section-heading mb-10">Forgot your password?</h1>
          <Link
            to={routes.login()}
            className="text-black underline hover:text-christi dark:text-white dark:hover:text-sulu"
          >
            Ready to Login?
          </Link>
        </div>

        <Form
          onSubmit={onSubmit}
          className="auth-form col-span-5 xl:col-span-4"
        >
          <div className="field">
            <Label name="username" errorClassName="error-message">
              Username
            </Label>
            <TextField
              name="username"
              errorClassName="error-message"
              ref={firstFieldRef}
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
            />

            <FieldError name="username" className="error-message" />
          </div>

          <Submit className="button truncate hover:text-black">
            Send me a Password Reset
          </Submit>
        </Form>
      </main>
    </>
  )
}

export default ForgotPasswordPage
