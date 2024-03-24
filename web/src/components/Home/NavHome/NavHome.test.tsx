import { render } from '@redwoodjs/testing/web'

import NavHome from './NavHome'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavHome', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavHome />)
    }).not.toThrow()
  })
})
