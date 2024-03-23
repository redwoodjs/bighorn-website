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

import ThemeDropdown from './ThemeDropdown'

const meta: Meta<typeof ThemeDropdown> = {
  component: ThemeDropdown,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ThemeDropdown>

export const Primary: Story = {
  args: {
    selected: 'system',
  },
}
