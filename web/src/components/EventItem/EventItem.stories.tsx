// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import EventItem from './EventItem'

const meta: Meta<typeof EventItem> = {
  component: EventItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof EventItem>

export const Primary: Story = {
  args: {
    date: '2024-01-24T00:00:00.000Z',
    title: 'Maker Hour',
    description: 'Join us for a night of making.',
  },
}
