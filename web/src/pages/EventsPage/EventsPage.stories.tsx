import type { Meta, StoryObj } from '@storybook/react'

import EventsPage from './EventsPage'

const meta: Meta<typeof EventsPage> = {
  component: EventsPage,
}

export default meta

type Story = StoryObj<typeof EventsPage>

export const Primary: Story = {}
