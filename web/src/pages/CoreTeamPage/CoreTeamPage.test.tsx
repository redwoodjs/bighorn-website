import { render } from '@redwoodjs/testing/web'

import CoreTeamPage from './CoreTeamPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CoreTeamPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CoreTeamPage />)
    }).not.toThrow()
  })
})
