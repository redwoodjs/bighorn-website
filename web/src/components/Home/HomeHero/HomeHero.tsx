import Nav from 'src/components/Nav/Nav'

const HomeHero = () => {
  return (
    <div className="home-hero mb-20">
      <Nav />

      <h1 className="mb-8 mt-36 font-serif text-8xl font-black text-white">
        Bighorn
      </h1>
      <h2 className="mb-14 text-3xl font-extralight">
        the Next Development Epoch
      </h2>

      <a href="#" className="button mb-8 inline-block">
        Preview Bighorn&apos;s React Server Features
      </a>

      <p>or Build on Redwood's Established Base</p>
    </div>
  )
}

export default HomeHero
