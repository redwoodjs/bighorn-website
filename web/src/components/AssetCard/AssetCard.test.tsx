import { render } from '@redwoodjs/testing/web'

import AssetCard from './AssetCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AssetCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssetCard />)
    }).not.toThrow()
  })
})
