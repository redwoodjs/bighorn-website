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

import RedwoodIs from './RedwoodIs'

const meta: Meta<typeof RedwoodIs> = {
  component: RedwoodIs,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RedwoodIs>

export const Primary: Story = {}
