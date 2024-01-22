import type { Meta, StoryObj } from '@storybook/react'

import BlogIndividualPage from './BlogIndividualPage'

const meta: Meta<typeof BlogIndividualPage> = {
  component: BlogIndividualPage,
}

export default meta

type Story = StoryObj<typeof BlogIndividualPage>

export const Primary: Story = {}
