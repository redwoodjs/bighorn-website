import type { Meta, StoryObj } from '@storybook/react'

import SecurityPage from './SecurityPage'

const meta: Meta<typeof SecurityPage> = {
  component: SecurityPage,
}

export default meta

type Story = StoryObj<typeof SecurityPage>

export const Primary: Story = {}
