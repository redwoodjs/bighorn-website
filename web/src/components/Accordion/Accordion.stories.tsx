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

import Accordion from './Accordion'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Primary: Story = {}
