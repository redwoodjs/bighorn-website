export interface TagProps {
  tag: 'soon' | 'later' | 'done' | 'planned'
}

const Tag = ({ tag }: TagProps) => {
  return (
    <div
      className={`inline-block rounded-md px-4 py-2 text-sm font-bold uppercase leading-none tracking-wide tag-${tag}`}
    >
      {tag}
    </div>
  )
}

export default Tag
