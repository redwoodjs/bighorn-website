import { render } from '@redwoodjs/testing/web'

import ThemeDropdown from './ThemeDropdown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThemeDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemeDropdown />)
    }).not.toThrow()
  })
})
