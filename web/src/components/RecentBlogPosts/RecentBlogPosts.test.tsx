import { render } from '@redwoodjs/testing/web'

import RecentBlogPosts from './RecentBlogPosts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RecentBlogPosts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentBlogPosts />)
    }).not.toThrow()
  })
})
