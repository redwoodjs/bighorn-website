import type { Meta, StoryObj } from '@storybook/react'

import BlogPage from './BlogPage'

const meta: Meta<typeof BlogPage> = {
  component: BlogPage,
}

export default meta

type Story = StoryObj<typeof BlogPage>

export const Primary: Story = {}
