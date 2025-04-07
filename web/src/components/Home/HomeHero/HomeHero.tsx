import NavHome from 'src/components/Home/NavHome/NavHome'
import { Constants } from 'src/helpers/Constants'

const HomeHero = () => {
  return (
    <div className="home-hero mb-20 bg-licorice">
      <NavHome />

      <h1 className="mb-2 mt-[350px] max-w-[780px] font-serif text-6xl font-black text-white md:mb-8 md:mt-36 md:text-8xl">
        The Single-Dev Framework that Just Works
      </h1>
      <h2 className="mb-14 max-w-[420px] text-xl font-extralight leading-tight text-white lg:text-[29px]">
        the most productive way to build web applications in JavaScript
      </h2>

      <a
        href={Constants.RWSDK_DOCS}
        className="button mb-4 inline-block text-sm md:mb-8 md:text-base"
        rel="noreferrer"
      >
        Get Started
      </a>
    </div>
  )
}

export default HomeHero
