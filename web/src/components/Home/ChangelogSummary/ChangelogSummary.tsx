import { Link, routes } from '@redwoodjs/router'

import Icon from 'src/components/Icon/Icon'
import { useMDXComponent } from 'src/hooks/useMDXComponents'

import data from '$content/Changelog/_index.json'
import { Changelog } from '$content/types.d'

const ChangelogSummary = () => {
  const Component = useMDXComponent(data[0].body.code)

  return (
    <section className="page-grid px-page">
      <div className="col-span-5">
        <div className="sticky top-5">
          <h2 className="section-heading mb-6">Changelog</h2>
          <h3 className="section-subheading">
            A list of all the big & small changes we’re making to the platform.
          </h3>
        </div>
      </div>

      <div className="col-span-7 pt-10">
        {data?.map((item: Changelog, index: number) => (
          <div className="changelog mb-10" key={index}>
            <strong className="mb-8 block text-2xl leading-relaxed">
              January 23, 2024
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
