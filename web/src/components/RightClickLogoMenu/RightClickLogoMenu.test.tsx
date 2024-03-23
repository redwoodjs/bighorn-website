import { render } from '@redwoodjs/testing/web'

import RightClickLogoMenu from './RightClickLogoMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RightClickLogoMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RightClickLogoMenu />)
    }).not.toThrow()
  })
})
