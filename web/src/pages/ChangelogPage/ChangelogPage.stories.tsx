import type { Meta, StoryObj } from '@storybook/react'

import ChangelogPage from './ChangelogPage'

const meta: Meta<typeof ChangelogPage> = {
  component: ChangelogPage,
}

export default meta

type Story = StoryObj<typeof ChangelogPage>

export const Primary: Story = {}
