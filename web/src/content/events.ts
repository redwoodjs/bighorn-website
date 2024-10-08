export type EventEntry = {
  title: string
  date: string
  time: string
  description: string
  published: boolean
}

export const events: EventEntry[] = [
  {
    title: 'Maker Hour',
    date: '2024-09-11',
    time: '1:00pm PST',
    description:
      'Each week, we meet to support each other and discuss projects we’re building on top of RedwoodJS.',
    published: true,
  },
  {
    title: 'Maker Hour',
    date: '2024-09-18',
    time: '1:00pm PST',
    description:
      'Each week, we meet to support each other and discuss projects we’re building on top of RedwoodJS.',
    published: true,
  },
  {
    title: 'Maker Hour',
    date: '2024-09-25',
    time: '1:00pm PST',
    description:
      'Each week, we meet to support each other and discuss projects we’re building on top of RedwoodJS.',
    published: true,
  },
]
