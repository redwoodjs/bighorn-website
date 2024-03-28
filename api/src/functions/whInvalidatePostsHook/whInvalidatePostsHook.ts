import type { APIGatewayEvent, Context } from 'aws-lambda'

import {
  verifyEvent,
  VerifyOptions,
  WebhookVerificationError,
} from '@redwoodjs/api/webhooks'

import { cache } from 'src/functions/graphql'
import { logger } from 'src/lib/logger'
/**
 * This function is the webhook handler for the Hashnode API.
 * It invalidates the cache for all posts.
 *
 * Note: This function is protected by a secret signature.
 *
 * Important: This function is prefixed with `wh` to indicate it is a webhook
 * and also to ensure that the graphql function loads first on Netlify
 * and thus merges the schema and invalidatePost can be imported properly.
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

    logger.info(
      { webhook: 'whInvalidatePostsHook', options },
      'Verifying event'
    )

    verifyEvent('timestampSchemeVerifier', {
      event,
      secret: process.env.INVALIDATE_POSTS_HOOK_SECRET,
      options,
    })

    logger.info({ webhook: 'whInvalidatePostsHook', options }, 'Verified!')

    const status = cache.invalidate([{ typename: 'Post' }])

    logger.info(
      { webhook: 'whInvalidatePostsHook', status },
      'Posts invalidated'
    )

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { webhook: 'whInvalidatePostsHook', status },
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
