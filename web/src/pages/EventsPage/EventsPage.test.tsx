import { render } from '@redwoodjs/testing/web'

import EventsPage from './EventsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventsPage />)
    }).not.toThrow()
  })
})
