import type { Meta, StoryObj } from '@storybook/react'

import NewsletterPage from './NewsletterPage'

const meta: Meta<typeof NewsletterPage> = {
  component: NewsletterPage,
}

export default meta

type Story = StoryObj<typeof NewsletterPage>

export const Primary: Story = {}
