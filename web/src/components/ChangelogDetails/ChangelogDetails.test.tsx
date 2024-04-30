import { render } from '@redwoodjs/testing/web'

import ChangelogDetails from './ChangelogDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChangelogDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChangelogDetails />)
    }).not.toThrow()
  })
})
