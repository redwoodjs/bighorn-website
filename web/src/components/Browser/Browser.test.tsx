import { render } from '@redwoodjs/testing/web'

import Browser from './Browser'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Browser', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Browser />)
    }).not.toThrow()
  })
})
