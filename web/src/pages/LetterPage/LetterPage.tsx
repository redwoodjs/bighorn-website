import { Metadata } from '@redwoodjs/web'

const LetterPage = () => {
  return (
    <>
      <Metadata title="RedwoodSDK" description="RedwoodSDK is a composable toolkit for building server-driven webapps on Cloudflare. It starts as a Vite plugin that unlocks SSR, React Server Components, Server Functions, and realtime. Its standards-based router—with middleware and interruptors—gives you precise control over every request and response. With built-in access to Cloudflare’s Workers, Database (D1), Storage (R2), Queues, and AI—and full local emulation via Miniflare—development feels just like production." />
      <div className="relative -top-[150px] mx-auto mb-[100px] min-h-[911px] max-w-[867px] md:top-0">
        {/* envelope */}
        <div className="absolute -top-[100px] left-0 z-0 hidden md:block">
          <img
            src="/images/envelope.png"
            alt="Envelope"
            className="h-auto w-full"
          />
        </div>

        {/* letter */}
        <div className="letter relative z-10 mx-5 mt-[175px] max-w-[750px] bg-white bg-[url('/images/bg-letter.png')] bg-center bg-repeat px-10 py-[60px] text-[#414141] md:mx-auto md:px-[115px] md:py-[100px] dark:text-[#414141]">
          <img src="/images/sdk-logo-light.svg" alt="RedwoodSDK.com" className="mb-10" />
          <p>
            Today, we're sharing an important step forward for Redwood. To
            achieve our vision of empowering the next generation of personal
            software, we're aligning our efforts around two clearly defined
            paths: <strong>Redwood GraphQL</strong> and{' '}
            <strong>
              <a href="https://rwsdk.com">RedwoodSDK</a>
            </strong>
            .
          </p>

          <h1>Why We're Making This Change</h1>

          <p>
            From the start, RedwoodJS was built to simplify full-stack web
            development. We've seen incredible growth and community enthusiasm,
            but it's clear we have an opportunity to pursue a broader challenge:
            enabling people to build, own, and distribute their own software
            without the constraints of traditional SaaS.
          </p>

          <p>
            To fully pursue this vision, we're launching  <strong>
              <a href="https://rwsdk.com">RedwoodSDK</a>
            </strong>, a new
            framework that will become the foundation for this personal software
            revolution. We’ll be sharing more about this in the weeks to come.
          </p>

          <p>
            At the same time, we deeply value the users and teams who’ve
            invested heavily in Redwood. To minimize disruption and provide
            clarity going forward, we’re renaming the existing RedwoodJS
            framework to Redwood GraphQL, reflecting its strength as a mature,
            stable framework built around GraphQL.
          </p>

          <h2>What this means for current Redwood users:</h2>

          <ol>
            <li>
              <strong>Continuity and Stability:</strong>
              <br />
              Redwood GraphQL (formerly the RedwoodJS you use today) will
              continue to receive security patches and critical updates,
              ensuring you can confidently rely on it for your projects.
            </li>
            <li>
              <strong>Unbundled Integrations:</strong>
              <br />
              Over the coming months, we'll progressively unbundle third-party
              integrations—such as the authentication providers, Storybook, and
              others. These integrations will then be independently maintained
              by their original teams or the community, giving you greater
              flexibility, faster updates, and control over which integrations
              you adopt and support.
            </li>
            <li>
              <strong>Community Ownership:</strong>
              <br />
              We will actively nurture and support third-party providers and the
              broader Redwood community in taking ownership of these
              integrations.
            </li>
          </ol>

          <h2>Looking Ahead: The RedwoodSDK</h2>

          <p>
            <strong>
              <a href="https://rwsdk.com">RedwoodSDK</a>
            </strong>{' '}
            represents our commitment to the future we want to build - a software
            ecosystem designed for personal and modular software creation,
            distribution, and ownership. It will harness the power of modern
            serverless infrastructure, AI-driven development tools, and open
            ecosystems, ensuring that building personal and owned software is
            accessible to everyone.
          </p>

          <p>
            This is more than just technology. It's about rethinking how
            software gets created and shared. It's a commitment to making
            software personal again.
          </p>

          <p>
            We’ll share more about the <strong>
              <a href="https://rwsdk.com">RedwoodSDK</a>
            </strong>{' '}
            in the coming weeks. Until then, those of you are currently using
            Redwood GraphQL can rest assured - our intention is to ensure that it
            remains secure, reliable, and ready to power your projects long-term.
          </p>

          <p>
            Thanks for your continued support and excitement for the journey
            ahead.
          </p>

          <p>— The RedwoodSDK Team</p>
        </div>

        <div className="mt-[60px] text-center">
          <a href="https://docs.rwsdk.com" className="button inline-block hover:text-black">
            Continue to RedwoodSDK Docs
          </a>
        </div>
      </div>
    </>
  )
}

export default LetterPage
