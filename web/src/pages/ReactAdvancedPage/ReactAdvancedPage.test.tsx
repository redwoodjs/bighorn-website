import { render } from '@redwoodjs/testing/web'

import ReactAdvancedPage from './ReactAdvancedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReactAdvancedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReactAdvancedPage />)
    }).not.toThrow()
  })
})
