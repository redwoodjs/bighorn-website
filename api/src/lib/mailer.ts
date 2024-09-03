import { Mailer } from '@redwoodjs/mailer-core'
import { ResendMailHandler } from '@redwoodjs/mailer-handler-resend'
import { ReactEmailRenderer } from '@redwoodjs/mailer-renderer-react-email'

import { logger } from 'src/lib/logger'

export const mailer = new Mailer({
  handling: {
    handlers: {
      resend: new ResendMailHandler({
        apiToken: process.env.RESEND_API_TOKEN,
      }),
    },
    default: 'resend',
  },

  rendering: {
    renderers: {
      reactEmail: new ReactEmailRenderer(),
    },
    default: 'reactEmail',
  },

  defaults: {
    from: {
      name: 'RedwoodJS (no-reply)',
      address: 'no-reply@redwoodjs.com',
    },
  },

  development: {
    handler: 'resend',
  },

  logger,
})
