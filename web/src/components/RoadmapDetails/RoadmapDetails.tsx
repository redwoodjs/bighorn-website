import RoadmapItem from 'src/components/RoadmapItem/RoadmapItem'

import data from '$content/Roadmap/_index.json'
import { Roadmap } from '$content/types.d'

const RoadmapDetails = () => {
  return (
    <>
      <h4 className="mb-8 font-sans text-[28px] font-bold leading-snug">
        Done
      </h4>

      {data?.map((item: Roadmap, index: number) => {
        if (item.status === 'done')
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
        In Progress
      </h4>

      {data?.map((item: Roadmap, index: number) => {
        if (item.status === 'soon')
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
    </>
  )
}

export default RoadmapDetails
