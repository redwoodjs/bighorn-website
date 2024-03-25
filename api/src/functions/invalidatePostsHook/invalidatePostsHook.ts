import type { APIGatewayEvent, Context } from 'aws-lambda'

import {
  verifyEvent,
  VerifyOptions,
  WebhookVerificationError,
} from '@redwoodjs/api/webhooks'

import { logger } from 'src/lib/logger'
import { invalidatePosts } from 'src/services/hashnode'
/**
 * This function is the webhook handler for the Hashnode API.
 * It invalidates the cache for all posts.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: invalidatePostsHook function`)

  try {
    const options = {
      signatureHeader: 'x-hashnode-signature',
      // You may override these defaults
      // tolerance: 60_000,
      // timestamp: new Date().getDate() - 1,
    } as VerifyOptions

    logger.info({ webhook: 'invalidatePostsHook', options }, 'Verifying event')

    verifyEvent('timestampSchemeVerifier', {
      event,
      secret: process.env.INVALIDATE_POSTS_HOOK_SECRET,
      options,
    })

    logger.info({ webhook: 'invalidatePostsHook', options }, 'Verified!')

    const status = await invalidatePosts()

    logger.info({ webhook: 'invalidatePostsHook', status }, 'Posts invalidated')

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { webhook: 'invalidatePostsHook', status },
      }),
    }
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      logger.warn({ webhook: 'invalidatePostsHook-background' }, 'Unauthorized')
      return {
        statusCode: 401,
      }
    } else {
      logger.error({ webhook: 'invalidatePostsHook', error }, error.message)
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      }
    }
  }
}
