import { render } from '@redwoodjs/testing/web'

import NavDropdown from './NavDropdown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavDropdown />)
    }).not.toThrow()
  })
})
