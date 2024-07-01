import { useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ChangelogDetails from 'src/components/ChangelogDetails/ChangelogDetails'
import Header from 'src/components/Header/Header'
import { changelog } from 'src/content/changelog'

const ChangelogPage = () => {
  const { origin } = useLocation()

  return (
    <>
      <Metadata
        title="Changelog"
        description="Changelog page"
        og={{ image: `${origin}/images/og.png` }}
      />

      <div className="page-content">
        <Header
          title="Changelog"
          subtitle="A list of all the big & small changes we’re making to the platform."
        />
      </div>

      <hr />

      <div className="page-content page-grid">
        <div className="col-span-7">
          {changelog?.map(({ Component, frontmatter }, index: number) => {
            return (
              <ChangelogDetails key={index} date={frontmatter.publishDate}>
                <Component />
              </ChangelogDetails>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ChangelogPage
