import { render } from '@redwoodjs/testing/web'

import RedwoodIs from './RedwoodIs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RedwoodIs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedwoodIs />)
    }).not.toThrow()
  })
})
