import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const firstFieldRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    firstFieldRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    console.log({ data })
    const response = await signUp({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <Metadata title="Signup" />

      <main className="page-grid px-5 py-20 md:px-[100px] md:py-[130px] lg:px-0">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="col-span-5 col-start-1 lg:col-start-2">
          <h1 className="section-heading mb-10">Sign up for an Account</h1>
          <Link
            to={routes.login()}
            className="text-white underline hover:text-sulu"
          >
            Ready to Login?
          </Link>
        </div>

        <Form
          onSubmit={onSubmit}
          className="auth-form col-span-5 xl:col-span-4"
        >
          <div className="field">
            <Label name="name" errorClassName="error-message">
              Name
            </Label>
            <TextField
              name="name"
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

          <div className="field">
            <Label name="username" errorClassName="error-message">
              Email
            </Label>
            <TextField
              name="username"
              errorClassName="error-message"
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
            <Label name="password" errorClassName="error-message">
              Password
            </Label>
            <PasswordField
              name="password"
              className="rw-input"
              errorClassName="error-message"
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />
            <FieldError name="password" className="error-message" />
          </div>

          <div className="field">
            <Label name="confirmPassword" errorClassName="error-message">
              Confirm Password
            </Label>
            <PasswordField
              name="confirmPassword"
              className="rw-input"
              errorClassName="error-message"
              validation={{
                required: {
                  value: true,
                  message: 'Confirm Password is required',
                },
              }}
            />
            <FieldError name="password" className="error-message" />
          </div>

          <Submit className="button truncate hover:text-black">Sign Up</Submit>
        </Form>
      </main>
    </>
  )
}

export default SignupPage
