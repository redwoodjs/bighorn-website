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

import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const ArrowUpRight: Story = {
  args: {
    id: 'arrowUpRight',
  },
}

export const Bookmark: Story = {
  args: {
    id: 'bookmark',
  },
}

export const BookmarkFilled: Story = {
  args: {
    id: 'bookmarkFilled',
  },
}

export const Brand: Story = {
  args: {
    id: 'brand',
  },
}

export const Check: Story = {
  args: {
    id: 'check',
  },
}

export const ChevronDown: Story = {
  args: {
    id: 'chevronDown',
  },
}

export const Clipboard: Story = {
  args: {
    id: 'clipboard',
  },
}

export const Copy: Story = {
  args: {
    id: 'copy',
  },
}

export const Dark: Story = {
  args: {
    id: 'dark',
  },
}

export const Discord: Story = {
  args: {
    id: 'discord',
  },
}

export const Discourse: Story = {
  args: {
    id: 'discourse',
  },
}

export const DoubleChevronRight: Story = {
  args: {
    id: 'doubleChevronRight',
  },
}

export const Download: Story = {
  args: {
    id: 'download',
  },
}

export const Edit: Story = {
  args: {
    id: 'edit',
  },
}

export const Flag: Story = {
  args: {
    id: 'flag',
  },
}

export const FlagFilled: Story = {
  args: {
    id: 'flagFilled',
  },
}

export const Github: Story = {
  args: {
    id: 'github',
  },
}

export const Heart: Story = {
  args: {
    id: 'heart',
  },
}

export const HeartFilled: Story = {
  args: {
    id: 'heartFilled',
  },
}

export const Hide: Story = {
  args: {
    id: 'hide',
  },
}

export const Light: Story = {
  args: {
    id: 'light',
  },
}

export const Link: Story = {
  args: {
    id: 'link',
  },
}

export const Logout: Story = {
  args: {
    id: 'logout',
  },
}

export const Reply: Story = {
  args: {
    id: 'reply',
  },
}

export const Show: Story = {
  args: {
    id: 'show',
  },
}

export const Star: Story = {
  args: {
    id: 'star',
  },
}

export const System: Story = {
  args: {
    id: 'system',
  },
}

export const ThreeDots: Story = {
  args: {
    id: 'threeDots',
  },
}

export const Trash: Story = {
  args: {
    id: 'trash',
  },
}

export const User: Story = {
  args: {
    id: 'user',
  },
}

export const X: Story = {
  args: {
    id: 'x',
  },
}

export const YouTube: Story = {
  args: {
    id: 'youtube',
  },
}
