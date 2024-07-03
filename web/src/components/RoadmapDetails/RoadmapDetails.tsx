import RoadmapItem from 'src/components/RoadmapItem/RoadmapItem'
import type { RoadmapEntry } from 'src/content/roadmap.js'
import { roadmap } from 'src/content/roadmap.js'

const RoadmapDetails = () => {
  return (
    <>
      <h4 className="mb-8 font-sans text-[28px] font-bold leading-snug">
        Done
      </h4>

      {roadmap?.map((entry: RoadmapEntry, index: number) => {
        if (entry.status === 'done')
          return (
            <div className="mb-10" key={index}>
              <RoadmapItem
                status={entry.status}
                heading={entry.title}
                description={entry.description}
              />
            </div>
          )
      })}

      <h4 className="mb-8 font-sans text-[28px] font-bold leading-snug">
        In Progress
      </h4>

      {roadmap?.map((entry: RoadmapEntry, index: number) => {
        if (entry.status === 'soon')
          return (
            <div className="mb-10" key={index}>
              <RoadmapItem
                status={entry.status}
                heading={entry.title}
                description={entry.description}
              />
            </div>
          )
      })}

      <h4 className="mb-8 font-sans text-[28px] font-bold leading-snug">
        Planned
      </h4>

      {roadmap?.map((entry: RoadmapEntry, index: number) => {
        if (entry.status === 'planned')
          return (
            <div className="mb-10" key={index}>
              <RoadmapItem
                status={entry.status}
                heading={entry.title}
                description={entry.description}
              />
            </div>
          )
      })}

      {/* <Link to={routes.roadmap()} className="view-all">
          <span>View Entire Roadmap</span> <Icon id="doubleChevronRight" />
        </Link> */}
    </>
  )
}

export default RoadmapDetails
