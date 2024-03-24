import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import AssetCard from 'src/components/AssetCard/AssetCard'
import Header from 'src/components/Header/Header'
import Icon from 'src/components/Icon/Icon'
import { Constants } from 'src/helpers/Constants'

const BrandPage = () => {
  return (
    <>
      <Metadata title="Brand" description="Brand page" />

      <div className="page-content">
        <Header
          title="Brand Kit"
          subtitle="Guidelines and assets for presenting the RedwoodJS brand consistently. "
        >
          <a
            href="/brand-kit.zip"
            className="button mt-8 inline-flex items-center gap-2"
          >
            <Icon id="download" />
            Download all Assets
          </a>
        </Header>
      </div>

      <hr />

      <section className="page-content">
        <div className="col-span-6 flex flex-col gap-12">
          <h2>Logos</h2>
          <AssetCard alt={''} png={''} svg={''} src={''} />
          <AssetCard alt={''} png={''} svg={''} src={''} darkMode={true} />
          <AssetCard alt={''} png={''} svg={''} src={''} />
          <AssetCard alt={''} png={''} svg={''} src={''} darkMode={true} />
          <AssetCard alt={''} png={''} svg={''} src={''} />
          <AssetCard alt={''} png={''} svg={''} src={''} darkMode={true} />
        </div>

        <div className="col-span-3">
          <h2>Okay</h2>
          <ul>
            <li>Use the Cone or RedwoodJS logo to link to RedwoodJS</li>
            <li>
              Use the Cone or RedwoodJS logo in a blog post or news article
              about Redwood
            </li>
          </ul>

          <h2>Not Okay</h2>
          <ul>
            <li>Use the Cone or RedwoodJS logo for your application’s icon</li>
            <li>Create a modified version of the Cone or RedwoodJS logo</li>
            <li>Integrate the Cone or RedwoodJS logo into your logo</li>
            <li>Change the colors, dimensions or add your own text/images</li>
          </ul>

          <h2>Naming Projects + Products</h2>
          <p>
            Please do not claim endorsement of your product or service by
            RedwoodJS without permission.
          </p>

          <h2>
            <a href={`mailto:${Constants.EMAIL}`}>Contact Us</a>
          </h2>
          <ul>
            <li>If you want to use artwork not included here</li>
            <li>If you want to use these images in a video/mainstream media</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default BrandPage
