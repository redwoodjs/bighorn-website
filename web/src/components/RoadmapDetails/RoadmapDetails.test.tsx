import { render } from '@redwoodjs/testing/web'

import RoadmapDetails from './RoadmapDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RoadmapDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoadmapDetails />)
    }).not.toThrow()
  })
})
