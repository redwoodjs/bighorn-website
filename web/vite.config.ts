import dns from 'dns'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import redwood from '@redwoodjs/vite'

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

export default defineConfig(async () => {
  const { default: mdx } = await import('@mdx-js/rollup')
  const config: UserConfig = {
    plugins: [redwood(), mdx({})],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'static/[name]-[hash][extname]',
          chunkFileNames: 'static/[name]-[hash].mjs',
        },
      },
    },
  }
  return config
})
