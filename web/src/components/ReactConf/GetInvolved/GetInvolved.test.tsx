import { render } from '@redwoodjs/testing/web'

import GetInvolved from './GetInvolved'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GetInvolved', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GetInvolved />)
    }).not.toThrow()
  })
})
