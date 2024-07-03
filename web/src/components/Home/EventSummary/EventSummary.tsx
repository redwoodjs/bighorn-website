import { useEffect, useState } from 'react'

import EventItem from 'src/components/EventItem/EventItem'
import type { EventEntry } from 'src/content/events'
import { events as data } from 'src/content/events'
import { Constants } from 'src/helpers/Constants'

const EventSummary = () => {
  const [events, setEvents] = useState<EventEntry[]>([])

  // order events by date
  useEffect(() => {
    const ordered = data.sort((a: EventEntry, b: EventEntry) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    setEvents(ordered)
  }, [])

  return (
    <section className="page-grid px-5 md:px-page" id="events">
      <div className="col-span-5">
        <div className="sticky top-5">
          <h2 className="section-heading mb-6">Upcoming Events</h2>
          <h3 className="section-subheading mb-6">
            Join us in person and online.
          </h3>
          <p>
            <a
              href={Constants.EVENTS}
              target="_blank"
              className="font-white border-b-2 border-b-black text-lg hover:border-b-alienArmpit dark:border-b-white dark:hover:border-b-sulu"
              rel="noreferrer"
            >
              View the Entire Calendar
            </a>
          </p>
        </div>
      </div>

      <div className="col-span-7 flex flex-col gap-[72px] pt-10">
        {events?.map((item: EventEntry, index: number) => {
          if (item.published) {
            return (
              <EventItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                rsvp={item.rsvp}
              />
            )
          }
        })}
      </div>
    </section>
  )
}

export default EventSummary
