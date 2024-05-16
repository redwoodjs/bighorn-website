import Footer from 'src/components/Footer/Footer'
import Nav from 'src/components/Nav/Nav'
import Newsletter from 'src/components/Newsletter/Newsletter'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <>
      <div className="w-full border-b-1 border-maiTai px-5 py-2 md:px-page">
        <Nav />
      </div>
      {children}
      <div className="border-t-1 border-t-maiTai py-20">
        <Newsletter />
      </div>
      <Footer />
    </>
  )
}

export default InteriorLayout
