import type { Meta, StoryObj } from '@storybook/react'

import ServerComponentsPage from './ServerComponentsPage'

const meta: Meta<typeof ServerComponentsPage> = {
  component: ServerComponentsPage,
}

export default meta

type Story = StoryObj<typeof ServerComponentsPage>

export const Primary: Story = {}
