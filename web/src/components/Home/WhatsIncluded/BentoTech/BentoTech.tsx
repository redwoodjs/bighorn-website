const BentoTech = ({ className = '' }) => {
  return (
    <div
      className={`bento-box half flex flex-col justify-start px-bentoX py-bentoY ${className}`}
    >
      <h3>Best-in Class Technologies</h3>
      <p className="mb-8">
        This is NOT a starter project or a template. We’ve taken the best in
        class libraries and frameworks that you already know and love and given
        them first-class support within Redwood. Setup is simple and maintenance
        is negligible.
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
  )
}

export default BentoTech
