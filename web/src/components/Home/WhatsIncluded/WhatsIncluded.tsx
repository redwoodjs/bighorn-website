const WhatsIncluded = () => {
  return (
    <section className="px-5 md:px-page">
      <h2 className="section-heading mb-6">What&apos;s Included?</h2>

      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-6 md:gap-5">
        {/* deployment */}
        <div className="bento-box third flex flex-col justify-start px-bentoX py-bentoY">
          <h3>Deployment that Eliminates Vendor Lock-In</h3>
          <p>You have the power of choice without the complexity.</p>
          <div className="mt-auto flex w-full items-center justify-between self-end">
            <div>
              <img src="/images/fly.svg" alt="Fly.io" />
            </div>
            <div>
              <img src="/images/netlify.svg" alt="Netlify" />
            </div>
            <div>
              <img src="/images/aws.svg" alt="AWS" />
            </div>
            <div>
              <img src="/images/vercel.svg" alt="Vercel" />
            </div>
            <div>
              <img src="/images/azure.svg" alt="Azure" />
            </div>
          </div>
        </div>

        {/* CLI */}
        <div className="bento-box third px-bentoX py-bentoY">
          <h3>CLI that Provides a Silky Smooth DX</h3>
          <p>
            It’s power at your finger tips. Setup auth with a single command.
            Scaffold your application. Generate components, layouts, and pages.
          </p>
        </div>

        {/* render */}
        <div className="bento-box third px-bentoX py-bentoY">
          <h3>Render Content, How You Want It, When You Want It</h3>
          <p>
            In Bighorn, Redwood supports Client and Server Side Rendering. It
            has flexible rendering options, on a per-page level, optimizing your
            application for enhanced speed and performance.
          </p>
        </div>

        {/* routing */}
        <div className="bento-box half flex flex-col justify-start pl-bentoX pt-bentoY">
          <h3 className="pr-bentoX">Routing, Meant for Scale</h3>
          <p className="mb-8 pr-bentoX">
            Routes aren’t tied to file and folder naming conventions that make
            change hard.
          </p>
          <div className="relative -mb-[2px] -mr-[2px] mt-auto self-end text-right">
            <img src="/images/router-file.svg" alt="Router File" />
          </div>
        </div>

        {/* tech */}
        <div className="bento-box half flex flex-col justify-start px-bentoX py-bentoY">
          <h3>Best-in Class Technologies</h3>
          <p className="mb-8">
            This is NOT a starter project or a template. We’ve taken the best in
            class libraries and frameworks that you already know and love and
            given them first-class support within Redwood. Setup is simple and
            maintenance is negligible.
          </p>

          <div className="mt-auto flex w-full items-center justify-between self-end">
            <div>
              <img src="/images/storybook.svg" alt="Storybook" />
            </div>
            <div>
              <img src="/images/typescript.svg" alt="TypeScript" />
            </div>
            <div>
              <img src="/images/graphql.svg" alt="GraphQL" />
            </div>
            <div>
              <img src="/images/vite.svg" alt="Vite" />
            </div>
            <div>
              <img src="/images/prisma.svg" alt="Prisma" />
            </div>
            <div>
              <img src="/images/jest.svg" alt="Jest" />
            </div>
            <div>
              <img src="/images/react.svg" alt="React" />
            </div>
          </div>
        </div>

        {/* independent open source */}
        <div className="bento-box third px-bentoX py-bentoY">
          <h3>Independent Open Source Project</h3>
          <p className="mb-8">
            We’re obsessed with creating the best possible developer experience
            and building a framework that enables the community to build at
            scale.
          </p>
          <img src="/images/pwv.svg" alt="Preston-Werner Ventures" />
        </div>

        {/* simplified email */}
        <div className="bento-box third flex flex-col justify-between pl-bentoX pt-bentoY">
          <h3 className="pr-bentoX">Simplified Email</h3>
          <p className="mb-8 pr-bentoX">
            Redwood offers a convenient way to send email in either a developer
            or production environment through Studio.
          </p>

          <div className="relative -mb-[2px] -mr-[2px] self-end text-right">
            <img
              src="/images/simplified-email.svg"
              alt="Simplified Email"
              className="rounded-br-lg"
            />
          </div>
        </div>

        {/* logging */}
        <div className="bento-box third px-bentoX py-bentoY">
          <h3>Logging for Debugging Queries, Resolvers, and Requests</h3>
          <p>
            Logging is essential for raising critical errors. In staging and
            development environments, logging helps you debug queries, resolvers
            and cell requests.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatsIncluded
