export type EventEntry = {
  title: string
  date: string
  time: string
  description: string
  rsvp: string
  published: boolean
}

export const events: EventEntry[] = [
  {
    title: 'Maker Hour',
    date: '2024-08-21',
    time: '1:00pm PST',
    description:
      'Each week, we meet to support each other and discuss projects we’re building on top of RedwoodJS.',
    rsvp: 'https://lu.ma/8qgq5dlb',
    published: true,
  },
  {
    title: 'Maker Hour',
    date: '2024-08-28',
    time: '1:00pm PST',
    description:
      'Each week, we meet to support each other and discuss projects we’re building on top of RedwoodJS.',
    rsvp: 'https://lu.ma/8qgq5dlb',
    published: true,
  },
]
