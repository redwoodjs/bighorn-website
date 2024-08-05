import { prettifyDate } from 'src/helpers/DateHelpers'

type ChangelogDetailsProps = {
  children: React.ReactNode
  date: Date
}

const ChangelogDetails = ({ children, date }: ChangelogDetailsProps) => {
  return (
    <div className="changelog mb-10">
      <strong className="mb-8 block text-2xl leading-relaxed">
        {prettifyDate(date)}
      </strong>
      {children}
    </div>
  )
}

export default ChangelogDetails
