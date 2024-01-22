import { render } from '@redwoodjs/testing/web'

import ContributorsPage from './ContributorsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ContributorsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContributorsPage />)
    }).not.toThrow()
  })
})
