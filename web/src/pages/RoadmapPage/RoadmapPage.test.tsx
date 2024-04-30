import { render } from '@redwoodjs/testing/web'

import RoadmapPage from './RoadmapPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RoadmapPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoadmapPage />)
    }).not.toThrow()
  })
})
