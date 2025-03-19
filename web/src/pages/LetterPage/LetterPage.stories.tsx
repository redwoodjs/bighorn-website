import type { Meta, StoryObj } from "@storybook/react";

import LetterPage from "./LetterPage";

const meta: Meta<typeof LetterPage> = {
  component: LetterPage,
};

export default meta;

type Story = StoryObj<typeof LetterPage>;

export const Primary: Story = {};
