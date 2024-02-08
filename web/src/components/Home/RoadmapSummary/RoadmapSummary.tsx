import RoadmapItem from 'src/components/RoadmapItem/RoadmapItem'

import data from '$content/Roadmap/_index.json'
import { Roadmap } from '$content/types.d'

const RoadmapSummary = () => {
  return (
    <section className="page-grid px-5 md:px-page">
      <div className="col-span-5">
        <div className="sticky top-5 pr-5">
          <h2 className="section-heading mb-6">Roadmap</h2>
          <h3 className="section-subheading">
            This is a glimpse into what we’re working on and what we’ve
            planning.
          </h3>
        </div>
      </div>

      <div className="col-span-7 pt-10">
        <h4 className="mb-8 font-sans text-[28px] font-bold leading-snug">
          In Progress
        </h4>

        {data?.map((item: Roadmap, index: number) => {
          if (item.status !== 'planned')
            return (
              <div className="mb-10" key={index}>
                <RoadmapItem
                  status={item.status}
                  heading={item.title}
                  description={item.description}
                />
              </div>
            )
        })}

        <h4 className="mb-8 font-sans text-[28px] font-bold leading-snug">
          Planned
        </h4>

        {data?.map((item: Roadmap, index: number) => {
          if (item.status === 'planned')
            return (
              <div className="mb-10" key={index}>
                <RoadmapItem
                  status={item.status}
                  heading={item.title}
                  description={item.description}
                />
              </div>
            )
        })}

        {/* <Link to={routes.roadmap()} className="view-all">
          <span>View Entire Roadmap</span> <Icon id="doubleChevronRight" />
        </Link> */}
      </div>
    </section>
  )
}

export default RoadmapSummary
