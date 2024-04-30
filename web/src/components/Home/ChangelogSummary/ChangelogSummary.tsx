import { Link, routes } from '@redwoodjs/router'

import ChangelogDetails from 'src/components/ChangelogDetails/ChangelogDetails'
import Icon from 'src/components/Icon/Icon'
import { useMDXComponent } from 'src/hooks/useMDXComponents'

import data from '$content/Changelog/_index.json'
import { Changelog } from '$content/types.d'

const ChangelogSummary = () => {
  const Component = useMDXComponent(data[0].body.code)

  // get the first item in the array of data
  const changelogData = data.slice(0, 1)

  return (
    <section className="page-grid px-page">
      <div className="col-span-5 pr-5">
        <div className="sticky top-5">
          <h2 className="section-heading mb-6">Changelog</h2>
          <h3 className="section-subheading">
            A list of all the big & small changes we’re making to the platform.
          </h3>
        </div>
      </div>

      <div className="col-span-7 pt-10">
        {changelogData?.map((item: Changelog, index: number) => (
          <ChangelogDetails key={index} date={item.publishDate}>
            <Component />
          </ChangelogDetails>
        ))}
        <Link to={routes.changelog()} className="view-all">
          <span>View Entire Changelog</span> <Icon id="doubleChevronRight" />
        </Link>
      </div>
    </section>
  )
}

export default ChangelogSummary
