import { render } from '@redwoodjs/testing/web'

import RoadmapSummary from './RoadmapSummary'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RoadmapSummary', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoadmapSummary />)
    }).not.toThrow()
  })
})
