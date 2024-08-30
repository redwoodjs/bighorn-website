import React from 'react'

import { Css, Meta } from '@redwoodjs/web/htmlTags'
import type { TagDescriptor } from '@redwoodjs/web/htmlTags'

interface DocumentProps {
  children: React.ReactNode
  css: string[] // array of css import strings
  meta?: TagDescriptor[]
}

export const Document: React.FC<DocumentProps> = ({ children, css, meta }) => {
  return (
    // suppressHydrationWarning is used to prevent React from complaining about
    // the mismatch between the server-rendered content and the client-rendered
    // content. In this case, it's because we're not injecting the dark mode class
    // on the server-side - because we don't know what the user's preference is.
    // We're doing this on the client-side and so have to suppress the warning
    // that results from the mismatch.
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <Css css={css} />
        <Meta tags={meta} />

        {/* Plausible */}
        <script
          src="https://plausible.io/js/script.outbound-links.tagged-events.js"
          data-domain="redwoodjs.com"
          defer
        ></script>

        {/* preload hints for css */}
        <link
          rel="preload"
          href="https://use.typekit.net/sjm8rub.css"
          as="style"
        />
        <link
          rel="preload"
          href="https://p.typekit.net/p.css?s=1&k=sjm8rub&ht=tk&f=38944&a=8145&app=typekit&e=css"
          as="style"
        />

        {/* preload hints for images */}
        <link
          rel="preload"
          fetchPriority="high"
          href="/images/hero.avif"
          as="image"
        />

        {/* We insert this to prevent flashing on light/dark mode styling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
              const userTheme = localStorage.getItem('bighorn-theme') || 'system'
              const addDark = userTheme === 'dark' || (userTheme === 'system' && browserTheme === 'dark')

              // Add the dark class to the documentElement if the user prefers dark mode
              if (addDark) {
                document.documentElement.classList.add('dark')
              }

              // Store the default theme in localStorage if it doesn't exist
              if (!localStorage.getItem('bighorn-theme')) {
                localStorage.setItem('bighorn-theme', 'system')
              }
            `,
          }}
        ></script>
      </head>
      <body>
        <div id="redwood-app">{children}</div>
      </body>
    </html>
  )
}
