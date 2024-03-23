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

import ThemeOption from './ThemeOption'

const meta: Meta<typeof ThemeOption> = {
  component: ThemeOption,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ThemeOption>

export const Unselected: Story = {
  args: {
    selected: false,
    name: 'system',
  },
}

export const Selected: Story = {
  args: {
    selected: true,
    name: 'system',
  },
}

export const System: Story = {
  args: {
    selected: false,
    name: 'system',
  },
}

export const Light: Story = {
  args: {
    selected: false,
    name: 'light',
  },
}

export const Dark: Story = {
  args: {
    selected: false,
    name: 'dark',
  },
}
