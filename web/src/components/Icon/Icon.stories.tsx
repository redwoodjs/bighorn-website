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

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const ArrowUpRight: Story = {
  args: {
    id: 'arrowUpRight',
  },
}

export const ChevronDown: Story = {
  args: {
    id: 'chevronDown',
  },
}

export const Clipboard: Story = {
  args: {
    id: 'clipboard',
  },
}

export const Discord: Story = {
  args: {
    id: 'discord',
  },
}

export const Discourse: Story = {
  args: {
    id: 'discourse',
  },
}

export const DoubleChevronRight: Story = {
  args: {
    id: 'doubleChevronRight',
  },
}

export const Github: Story = {
  args: {
    id: 'github',
  },
}

export const X: Story = {
  args: {
    id: 'x',
  },
}

export const YouTube: Story = {
  args: {
    id: 'youtube',
  },
}
