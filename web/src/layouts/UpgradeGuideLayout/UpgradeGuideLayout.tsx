import Footer from 'src/components/Footer/Footer'
import Nav from 'src/components/Nav/Nav'
import Newsletter from 'src/components/Newsletter/Newsletter'

type UpgradeGuideLayoutProps = {
  children?: React.ReactNode
}

const UpgradeGuideLayout = ({ children }: UpgradeGuideLayoutProps) => {
  return (
    <>
      <div className="fixed top-0 z-nav w-full border-b-1 border-maiTai bg-white px-5 py-2 md:px-page dark:bg-licorice">
        <Nav />
      </div>
      <div className="pt-[77px]">{children}</div>
      <div className="border-t-1 border-t-maiTai py-20 ">
        <Newsletter />
      </div>
      <Footer />
    </>
  )
}

export default UpgradeGuideLayout
