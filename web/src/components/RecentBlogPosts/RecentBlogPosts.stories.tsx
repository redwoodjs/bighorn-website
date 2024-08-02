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

import RecentBlogPosts from './RecentBlogPosts'

const meta: Meta<typeof RecentBlogPosts> = {
  component: RecentBlogPosts,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RecentBlogPosts>

export const Primary: Story = {}
