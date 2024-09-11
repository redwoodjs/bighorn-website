import { format, parseISO } from 'date-fns'

import Icon from '../Icon/Icon'

interface EventItemProps {
  date: string
  time: string
  title: string
  description: string
}

const EventItem = ({ date, time, title, description }: EventItemProps) => {
  // the data is in the format '2024-09-11'
  // I want it to return Sep 11
  const getDate = (date: string) => {
    return format(parseISO(date), 'MMM d')
  }

  const getDay = (date: string) => {
    return format(parseISO(date), 'EEEE')
  }

  console.log(date)

  return (
    <div>
      <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
        <div className="mb-2 mr-5 whitespace-nowrap rounded-[4px] bg-neutral-200 px-4 py-2 text-sm font-bold uppercase tracking-wide text-black sm:mb-0 dark:bg-neutral-800 dark:text-battleshipGray">
          {getDate(date)}
        </div>
        <div className="text-lg text-battleshipGray">
          {getDay(date)} at {time}
        </div>
      </div>
      <h4 className="mb-2 text-lg font-bold leading-6 dark:text-white">
        {title}
      </h4>
      <p className="mb-4 text-lg leading-6 text-battleshipGray">
        {description}
      </p>
    </div>
  )
}

export default EventItem
