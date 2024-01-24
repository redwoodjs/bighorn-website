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

import EventSummary from './EventSummary'

const meta: Meta<typeof EventSummary> = {
  component: EventSummary,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof EventSummary>

export const Primary: Story = {}
