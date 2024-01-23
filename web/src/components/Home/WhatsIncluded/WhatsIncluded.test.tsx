import { render } from '@redwoodjs/testing/web'

import WhatsIncluded from './WhatsIncluded'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WhatsIncluded', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WhatsIncluded />)
    }).not.toThrow()
  })
})
