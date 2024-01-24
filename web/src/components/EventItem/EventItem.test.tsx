import { render } from '@redwoodjs/testing/web'

import EventItem from './EventItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventItem />)
    }).not.toThrow()
  })
})
