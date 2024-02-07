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

import Browser from './Browser'

const meta: Meta<typeof Browser> = {
  component: Browser,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Browser>

export const Primary: Story = {
  render: (args) => (
    <Browser {...args}>
      <span>Something</span>
    </Browser>
  ),
}
