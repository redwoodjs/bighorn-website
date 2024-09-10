import type { Meta, StoryObj } from '@storybook/react'

import ReactAdvancedPage from './ReactAdvancedPage'

const meta: Meta<typeof ReactAdvancedPage> = {
  component: ReactAdvancedPage,
}

export default meta

type Story = StoryObj<typeof ReactAdvancedPage>

export const Primary: Story = {}
