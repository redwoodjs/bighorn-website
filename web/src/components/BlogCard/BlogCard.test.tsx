import { render } from '@redwoodjs/testing/web'

import BlogCard from './BlogCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BlogCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogCard />)
    }).not.toThrow()
  })
})
