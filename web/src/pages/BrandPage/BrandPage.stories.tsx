import type { Meta, StoryObj } from '@storybook/react'

import BrandPage from './BrandPage'

const meta: Meta<typeof BrandPage> = {
  component: BrandPage,
}

export default meta

type Story = StoryObj<typeof BrandPage>

export const Primary: Story = {}
