import { render } from '@redwoodjs/testing/web'

import ThemeOption from './ThemeOption'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThemeOption', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemeOption />)
    }).not.toThrow()
  })
})
