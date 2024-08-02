import dns from 'dns'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import redwood from '@redwoodjs/vite'

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

export default defineConfig(async () => {
  const { default: mdx } = await import('@mdx-js/rollup')

  const { default: remarkBreaks } = await import('remark-breaks')
  const { default: remarkGfm } = await import('remark-gfm')
  const { default: rehypeExternalLinks } = await import('rehype-external-links')

  const { default: rehypeRaw } = await import('rehype-raw')
  const { default: rehypeSlug } = await import('rehype-slug')
  const { default: rehypeHighlight } = await import('rehype-highlight')

  const config: UserConfig = {
    plugins: [
      redwood(),
      mdx({
        remarkPlugins: [[remarkGfm], [remarkBreaks]],
        rehypePlugins: [
          [rehypeHighlight],
          [
            rehypeRaw,
            {
              passThrough: [
                'mdxjsEsm',
                'mdxFlowExpression',
                'mdxJsxFlowElement',
                'mdxJsxTextElement',
                'mdxTextExpression',
              ],
            },
          ],
          [rehypeSlug],
          [rehypeExternalLinks],
        ],
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'static/[name]-[hash][extname]',
          chunkFileNames: 'static/[name]-[hash].mjs',
        },
      },
    },
    ssr: {
      noExternal: ['react-tweet'],
    },
  }
  return config
})
