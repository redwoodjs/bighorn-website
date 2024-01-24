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

import RoadmapItem from './RoadmapItem'

const meta: Meta<typeof RoadmapItem> = {
  component: RoadmapItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RoadmapItem>

export const Primary: Story = {
  args: {
    status: 'planned',
    heading: 'Data privacy with custom filters for data copying',
    description:
      'Users will have the option to apply custom filters and mark specific columns as private, when copying data from production to development branches.',
  },
}
