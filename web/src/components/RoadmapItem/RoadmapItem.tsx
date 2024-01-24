import Tag, { type TagProps } from '../Tag/Tag'

interface RoadmapItemProps {
  status: TagProps['tag']
  heading: string
  description: string
}

const RoadmapItem = ({ status, heading, description }: RoadmapItemProps) => {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-x-5">
      <div className="text-right">
        <Tag tag={status} />
      </div>
      <div>
        <strong className="mb-2 text-lg leading-relaxed">{heading}</strong>
        <p className="text-lg leading-relaxed text-battleshipGray">
          {description}
        </p>
      </div>
    </div>
  )
}

export default RoadmapItem
