import { render } from '@redwoodjs/testing/web'

import EventSummary from './EventSummary'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventSummary', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventSummary />)
    }).not.toThrow()
  })
})
