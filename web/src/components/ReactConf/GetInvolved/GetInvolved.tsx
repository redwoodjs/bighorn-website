import { Constants } from 'src/helpers/Constants'

const GetInvolved = () => {
  return (
    <div className="page-content grid grid-cols-10 gap-5 border-b-1 border-maiTai">
      <div className="col-span-8">
        <h1 className="mb-8 font-serif text-[72px] text-maiTai">
          Want to get involved?
        </h1>
        <p className="mb-10 text-2xl font-thin">
          We’d love for you to get involved! The strength of Redwood is really
          found in the community.
        </p>
      </div>
      <div className="col-span-10 flex items-center gap-5">
        <a
          className="center flex-1 rounded-sm border-1 border-sulu px-5 py-4 font-bold text-sulu hover:bg-sulu hover:text-black"
          href="/#events"
        >
          Our Event Calendar
        </a>
        <a
          className="center flex-1 rounded-sm border-1 border-sulu px-5 py-4 font-bold text-sulu hover:bg-sulu hover:text-black"
          href={Constants.DISCORD}
          target="_blank"
          rel="noreferrer"
        >
          Join the Community on Discord
        </a>
        <a
          className="center flex-1 rounded-sm border-1 border-sulu px-5 py-4 font-bold text-sulu hover:bg-sulu hover:text-black"
          href={Constants.CONTRIBUTING}
        >
          Contribute to the Project
        </a>
      </div>
    </div>
  )
}

export default GetInvolved
