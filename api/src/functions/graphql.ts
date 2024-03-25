import { useResponseCache } from '@graphql-yoga/plugin-response-cache'

import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  extraPlugins: [
    useResponseCache({
      session: () => null,
      // by default cache all operations for 1 hour
      ttl: 1_000 * 60 * 60,
      ttlPerType: {
        // only cache query operations containing Post for 1 day
        Post: 1_000 * 60 * 60 * 24,
      },
      ttlPerSchemaCoordinate: {
        // cache for 1 day
        'Query.recentPosts': 1_000 * 60 * 60 * 24,
      },
    }),
  ],
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
