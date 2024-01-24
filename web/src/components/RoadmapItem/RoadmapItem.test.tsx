import { render } from '@redwoodjs/testing/web'

import RoadmapItem from './RoadmapItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RoadmapItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoadmapItem />)
    }).not.toThrow()
  })
})
