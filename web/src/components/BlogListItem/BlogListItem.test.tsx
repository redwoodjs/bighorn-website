import { render } from '@redwoodjs/testing/web'

import BlogListItem from './BlogListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BlogListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogListItem />)
    }).not.toThrow()
  })
})
