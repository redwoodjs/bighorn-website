import { useEffect, useRef, useState } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const firstFieldRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    firstFieldRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <Metadata title="Reset Password" />

      <main className="page-grid px-5 py-20 md:px-[100px] md:py-[130px] lg:px-0">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <div className="col-span-5 col-start-1 lg:col-start-2">
          <h1 className="section-heading mb-10">Reset your Password</h1>
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
            <Label
              name="password"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              New Password
            </Label>
            <PasswordField
              name="password"
              autoComplete="new-password"
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              disabled={!enabled}
              ref={firstFieldRef}
              validation={{
                required: {
                  value: true,
                  message: 'New Password is required',
                },
              }}
            />

            <FieldError name="password" className="rw-field-error" />
          </div>

          <Submit
            className="button truncate hover:text-black"
            disabled={!enabled}
          >
            Submit
          </Submit>
        </Form>
      </main>
    </>
  )
}

export default ResetPasswordPage
