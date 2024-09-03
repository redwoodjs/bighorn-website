// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from "@storybook/react";

import LinkButton from "./LinkButton";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {};
