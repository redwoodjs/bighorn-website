import { render } from '@redwoodjs/testing/web'

import Newsletter from './Newsletter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Newsletter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Newsletter />)
    }).not.toThrow()
  })
})
