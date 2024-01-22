import type { Meta, StoryObj } from '@storybook/react'

import ContributorsPage from './ContributorsPage'

const meta: Meta<typeof ContributorsPage> = {
  component: ContributorsPage,
}

export default meta

type Story = StoryObj<typeof ContributorsPage>

export const Primary: Story = {}
