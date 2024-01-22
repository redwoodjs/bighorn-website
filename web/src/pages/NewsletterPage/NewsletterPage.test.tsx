import { render } from '@redwoodjs/testing/web'

import NewsletterPage from './NewsletterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewsletterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsletterPage />)
    }).not.toThrow()
  })
})
