import { useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import AssetCard from 'src/components/AssetCard/AssetCard'
import Header from 'src/components/Header/Header'
import Icon from 'src/components/Icon/Icon'
import { Constants } from 'src/helpers/Constants'

const BrandPage = () => {
  const { origin } = useLocation()
  return (
    <>
      <Metadata
        title="Brand Kit"
        description="Guideline and assets for presenting the RedwoodJS brand consistently."
        og={{ image: `${origin}/images/og.png` }}
      />

      <div className="page-content">
        <Header
          title="Brand Kit"
          subtitle="Guidelines and assets for presenting the RedwoodJS brand consistently. "
        >
          <a
            href="/downloads/all-assets.zip"
            className="button mt-8 inline-flex items-center gap-2"
          >
            <Icon id="download" />
            Download all Assets
          </a>
        </Header>
      </div>

      <hr />

      <section className="page-content grid-cols-10 gap-5 lg:grid">
        <div className="col-span-6 mb-[100px] flex flex-col gap-12 lg:mb-0">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Logos
          </h2>
          <AssetCard
            alt="RedwoodJS logo with white text"
            png="/downloads/logo--white-text.png.zip"
            svg="/downloads/logo--white-text.svg.zip"
            src="/images/brand/logo--white-text.svg"
            darkMode={true}
          />
          <AssetCard
            alt="RedwoodJS logo with black text"
            png="/downloads/logo--black-text.png.zip"
            svg="/downloads/logo--black-text.svg.zip"
            src="/images/brand/logo--black-text.svg"
          />
          <AssetCard
            alt="RedwoodJS logo with white text only"
            png="/downloads/logo--white-text-only.png.zip"
            svg="/downloads/logo--white-text-only.svg.zip"
            src="/images/brand/logo--white-text-only.svg"
            darkMode={true}
          />
          <AssetCard
            alt="RedwoodJS logo with black text only"
            png="/downloads/logo--black-text-only.png.zip"
            svg="/downloads/logo--black-text-only.svg.zip"
            src="/images/brand/logo--black-text-only.svg"
          />
          <AssetCard
            alt="RedwoodJS Diecut Mark"
            png="/downloads/diecut_mark.png.zip"
            svg="/downloads/diecut_mark.svg.zip"
            src="/images/brand/diecut_mark.svg"
            darkMode={true}
          />
          <AssetCard
            alt="RedwoodJS mark"
            png="/downloads/mark.png.zip"
            svg="/downloads/mark.svg.zip"
            src="/images/brand/mark.svg"
          />
        </div>

        <div className="brand-kit-content col-span-3 col-start-8">
          <h2>Okay</h2>
          <ul className="mb-[100px]">
            <li>Use the Cone or RedwoodJS logo to link to RedwoodJS</li>
            <li>
              Use the Cone or RedwoodJS logo in a blog post or news article
              about Redwood
            </li>
          </ul>

          <h2>Not Okay</h2>
          <ul className="mb-[100px]">
            <li>Use the Cone or RedwoodJS logo for your application’s icon</li>
            <li>Create a modified version of the Cone or RedwoodJS logo</li>
            <li>Integrate the Cone or RedwoodJS logo into your logo</li>
            <li>Change the colors, dimensions or add your own text/images</li>
          </ul>

          <h2>Naming Projects + Products</h2>
          <p className="mb-[100px]">
            Please do not claim endorsement of your product or service by
            RedwoodJS without permission.
          </p>

          <h2>
            <a href={`mailto:${Constants.EMAIL}`}>Contact Us</a>
          </h2>
          <ul className="mb-[100px]">
            <li>If you want to use artwork not included here</li>
            <li>If you want to use these images in a video/mainstream media</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default BrandPage
