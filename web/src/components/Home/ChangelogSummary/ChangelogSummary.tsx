import { Link, routes } from '@redwoodjs/router'

import Icon from 'src/components/Icon/Icon'
import { changelog } from 'src/content/changelog'

const ChangelogSummary = () => {
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
        {changelog?.map(({ Component, frontmatter }, index: number) => (
          <div className="changelog mb-10" key={index}>
            <strong className="mb-8 block text-2xl leading-relaxed">
              {new Date(frontmatter.publishDate).toLocaleDateString()}
            </strong>
            <Component />
          </div>
        ))}
        <Link to={routes.changelog()} className="view-all">
          <span>View Entire Changelog</span> <Icon id="doubleChevronRight" />
        </Link>
      </div>
    </section>
  )
}

export default ChangelogSummary
