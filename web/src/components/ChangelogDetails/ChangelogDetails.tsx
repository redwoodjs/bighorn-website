import { prettifyDate } from 'src/helpers/DateHelpers'

const ChangelogDetails = ({ children, date }) => {
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
