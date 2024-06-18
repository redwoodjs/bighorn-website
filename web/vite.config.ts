import dns from 'dns'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import redwood from '@redwoodjs/vite'

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

const viteConfig: UserConfig = {
  plugins: [redwood()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'static/[name]-[hash][extname]',
        chunkFileNames: 'static/[name]-[hash].mjs',
      },
    },
  },
}

export default defineConfig(viteConfig)
