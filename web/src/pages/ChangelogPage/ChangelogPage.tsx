import { Metadata } from '@redwoodjs/web'

import ChangelogDetails from 'src/components/ChangelogDetails/ChangelogDetails'
import Header from 'src/components/Header/Header'
import { useMDXComponent } from 'src/hooks/useMDXComponents'

import data from '$content/Changelog/_index.json'
import { Changelog } from '$content/types.d'

const ChangelogPage = () => {
  const Component = useMDXComponent(data[0].body.code)
  return (
    <>
      <Metadata
        title="Changelog"
        description="Changelog page"
        og={{ image: `${location.origin}/images/og.png` }}
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
          {data?.map((item: Changelog, index: number) => (
            <ChangelogDetails key={index} date={item.publishDate}>
              <Component />
            </ChangelogDetails>
          ))}
        </div>
      </div>
    </>
  )
}

export default ChangelogPage
