import { render } from '@redwoodjs/testing/web'

import ChangelogPage from './ChangelogPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChangelogPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChangelogPage />)
    }).not.toThrow()
  })
})
