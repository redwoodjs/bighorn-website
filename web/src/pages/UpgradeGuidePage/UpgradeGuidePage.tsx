import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { data as dataV8 } from 'src/content/upgrades/v8/data'
import { prettifyDate } from 'src/helpers/DateHelpers'

const UpgradeGuidePage = () => {
  return (
    <>
      <Metadata title="UpgradeGuide" description="UpgradeGuide page" />

      <section className="my-12">
        <div className="px-5 md:pl-page md:pr-0">
          <h2 className="section-heading mb-6">Upgrade Guides</h2>
          <h3 className="section-subheading">
            Bringing you the latest and greatest from RedwoodJS
          </h3>
        </div>
        <div className="mt-12 flex flex-col gap-6 px-5 md:pl-page md:pr-0">
          <article>
            <h3 className="mb-2 text-sm font-bold uppercase text-maiTai">
              {prettifyDate(dataV8.publishedAt)}
            </h3>
            <div className="mb-3 flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="mb-2 font-sans text-2xl font-bold md:mb-0">
                <Link
                  to={routes.upgradeGuideV8()}
                  className="text-black hover:text-christi dark:text-white dark:hover:text-sulu"
                >
                  {dataV8.title}
                </Link>
              </h2>
            </div>
            <p className="mb-3 text-battleshipGray">{dataV8.brief}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default UpgradeGuidePage
