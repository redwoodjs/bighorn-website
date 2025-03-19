import { Link } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LetterPage = () => {
  return (
    <>
      <Metadata title="Letter" description="Letter page" />
      <div className="max-w-[867px] mx-auto mb-[100px] relative min-h-[911px] -top-[150px] md:top-0">
        {/* envelope */}
        <div className="absolute left-0 -top-[100px] z-0 hidden md:block"><img src="/images/envelope.png" alt="Envelope" className="w-full h-auto" /></div>

        {/* letter */}
        <div className="mx-5 md:mx-auto bg-white bg-[url('/images/bg-letter.png')] bg-repeat bg-center max-w-[750px] px-10 py-[60px] md:py-[100px] md:px-[115px] mt-[175px] relative z-10 text-[#414141] dark:text-[#414141] letter">
          <p>Today, we're sharing an important step forward for Redwood. To achieve our vision of empowering the next generation of personal software, we're aligning our efforts around two clearly defined paths: <strong>Redwood GraphQL</strong> and <strong>Redwood SDK</strong>.</p>

          <h1>Why We're Making This Change</h1>

          <p>From the start, RedwoodJS was built to simplify full-stack web development. We've seen incredible growth and community enthusiasm, but it's clear we have an opportunity to pursue a broader challenge: enabling people to build, own, and distribute their own software without the constraints of traditional SaaS.</p>

          <p>To fully pursue this vision, we're launching Redwood SDK, a new framework that will become the foundation for this personal software revolution. We’ll be sharing more about this in the weeks to come.</p>

          <p>At the same time, we deeply value the users and teams who’ve invested heavily in Redwood. To minimize disruption and provide clarity going forward, we’re renaming the existing RedwoodJS framework to Redwood GraphQL, reflecting its strength as a mature, stable framework built around GraphQL.</p>

          <h2>What this means for current Redwood users:</h2>

          <ol>
            <li><strong>Continuity and Stability:</strong><br />
              Redwood GraphQL (formerly the RedwoodJS you use today) will continue to receive security patches and critical updates, ensuring you can confidently rely on it for your projects.
            </li>
            <li><strong>Unbundled Integrations:</strong><br />
              Over the coming months, we'll progressively unbundle third-party integrations—such as the authentication providers, Storybook, and others. These integrations will then be independently maintained by their original teams or the community, giving you greater flexibility, faster updates, and control over which integrations you adopt and support.
            </li>
            <li><strong>Community Ownership:</strong><br />
              We will actively nurture and support third-party providers and the broader Redwood community in taking ownership of these integrations.
            </li>
          </ol>

          <h2>Looking Ahead: The Redwood SDK</h2>

          <p>Redwood SDK represents our commitment to the future we want to build - a software ecosystem designed for personal and modular software creation, distribution, and ownership. It will harness the power of modern serverless infrastructure, AI-driven development tools, and open ecosystems, ensuring that building personal and owned software is accessible to everyone.</p>

          <p>This is more than just technology. It's about rethinking how software gets created and shared. It's a commitment to making software personal again.</p>

          <p>We’ll share more about the Redwood SDK in the coming weeks. Until then, those of you are currently using Redwood GraphQL can rest assured - our intention is to ensure that it remains secure, reliable, and ready to power your projects long-term.</p>

          <p>Thanks for your continued support and excitement for the journey ahead.</p>

          <div className="flex items-center gap-4">
            <img src="/images/avatar-peter.jpg" srcSet="/images/avatar-peter@2x.jpg 2x /images/avatar-peter.jpg" alt="Peter" className="bg-transparent rounded-full" />
            <p>— Peter and the Redwood team</p>
          </div>
        </div>

        <div className="text-center mt-[60px]">
          <a href="/docs" className="button hover:text-black inline-block">Continue to Redwood GraphQL Docs</a>
        </div>
      </div>
    </>
  )
}

export default LetterPage
