import type { Meta, StoryObj } from '@storybook/react'

import ReactConfPage from './ReactConfPage'

const meta: Meta<typeof ReactConfPage> = {
  component: ReactConfPage,
}

export default meta

type Story = StoryObj<typeof ReactConfPage>

export const Primary: Story = {}
