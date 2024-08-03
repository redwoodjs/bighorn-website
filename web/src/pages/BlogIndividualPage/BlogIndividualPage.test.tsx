import { render } from '@redwoodjs/testing/web'

import BlogIndividualPage from './BlogIndividualPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BlogIndividualPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogIndividualPage slug="slug" />)
    }).not.toThrow()
  })
})
