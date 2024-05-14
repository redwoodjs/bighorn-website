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

import GetInvolved from './GetInvolved'

const meta: Meta<typeof GetInvolved> = {
  component: GetInvolved,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof GetInvolved>

export const Primary: Story = {}
