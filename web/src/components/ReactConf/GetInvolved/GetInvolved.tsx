import { Constants } from 'src/helpers/Constants'

const GetInvolved = () => {
  return (
    <div className="page-content grid grid-cols-10 gap-5 border-b-1 border-maiTai">
      <div className="col-span-8">
        <h1 className="mb-6 font-serif text-5xl leading-none text-maiTai md:mb-8 md:text-[72px]">
          Want to get involved?
        </h1>
        <p className="mb-5 text-lg font-thin md:mb-10 md:text-2xl">
          We’d love for you to get involved! The strength of Redwood is really
          found in the community.
        </p>
      </div>
      <div className="col-span-10 flex flex-col gap-5 md:flex-row md:items-center">
        <a
          className="center flex-1 rounded-sm border-1 border-alienArmpit px-5 py-4 text-sm font-bold text-black hover:bg-alienArmpit hover:text-black dark:border-sulu dark:text-sulu dark:hover:bg-sulu"
          href="/#events"
        >
          Our Event Calendar
        </a>
        <a
          className="center flex-1 rounded-sm border-1 border-alienArmpit px-5 py-4 text-sm font-bold text-black hover:bg-alienArmpit hover:text-black dark:border-sulu dark:text-sulu dark:hover:bg-sulu"
          href={Constants.DISCORD}
          target="_blank"
          rel="noreferrer"
        >
          Join the Community on Discord
        </a>
        <a
          className="center flex-1 rounded-sm border-1 border-alienArmpit px-5 py-4 text-sm font-bold text-black hover:bg-alienArmpit hover:text-black dark:border-sulu dark:text-sulu dark:hover:bg-sulu"
          href={Constants.CONTRIBUTING}
        >
          Contribute to the Project
        </a>
      </div>
    </div>
  )
}

export default GetInvolved
