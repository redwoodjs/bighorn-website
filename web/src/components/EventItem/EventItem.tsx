import { format } from 'date-fns'

import Icon from '../Icon/Icon'

interface EventItemProps {
  date: string
  title: string
  description: string
  rsvp?: string
}

const EventItem = ({ date, title, description, rsvp = '' }: EventItemProps) => {
  const getDate = (date: string) => {
    return format(date, 'MMM d')
  }

  const getDay = (date: string) => {
    return format(date, 'EEEE')
  }

  const getTime = (date: string) => {
    return format(date, 'h:mm a')
  }

  return (
    <div>
      <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
        <div className="mb-2 mr-5 whitespace-nowrap rounded-[4px] bg-neutral-200 px-4 py-2 text-sm font-bold uppercase tracking-wide text-black sm:mb-0 dark:bg-neutral-800 dark:text-battleshipGray">
          {getDate(date)}
        </div>
        <div className="text-lg text-battleshipGray">
          {getDay(date)} at {getTime(date)} PST
        </div>
      </div>
      <h4 className="mb-2 text-lg font-bold leading-6 text-white">{title}</h4>
      <p className="mb-4 text-lg leading-6 text-battleshipGray">
        {description}
      </p>
      {rsvp && (
        <p>
          <a
            href={rsvp}
            className="group/link inline-flex cursor-pointer items-center"
            target="_blank"
            rel="noreferrer"
          >
            <span className="border-b-1 border-b-black text-sm font-bold group-hover/link:border-b-alienArmpit dark:border-b-white dark:group-hover/link:border-b-sulu">
              RSVP
            </span>{' '}
            <Icon id="doubleChevronRight" />
          </a>
        </p>
      )}
    </div>
  )
}

export default EventItem
