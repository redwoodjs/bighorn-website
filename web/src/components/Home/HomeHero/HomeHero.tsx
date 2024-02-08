import Nav from 'src/components/Nav/Nav'
import { Constants } from 'src/helpers/Constants'

const HomeHero = () => {
  return (
    <div className="home-hero mb-20">
      <Nav />

      <h1 className="mb-2 mt-[350px] font-serif text-6xl font-black text-white md:mb-8 md:mt-36 md:text-8xl">
        Bighorn
      </h1>
      <h2 className="mb-14 text-xl font-extralight lg:text-3xl">
        the Next Development Epoch
      </h2>

      <a
        href={Constants.BIGHORN_FEATURES}
        className="button mb-4 inline-block text-sm md:mb-8 md:text-base"
      >
        Preview Bighorn&apos;s React Server Features
      </a>

      <p className="text-sm md:text-base">
        or{' '}
        <a
          href={Constants.DOCS}
          className="font-bold underline hover:no-underline"
        >
          Build on Redwood's Established Base
        </a>
      </p>
    </div>
  )
}

export default HomeHero
