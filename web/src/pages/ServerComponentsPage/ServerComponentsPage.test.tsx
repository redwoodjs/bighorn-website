import { render } from '@redwoodjs/testing/web'

import ServerComponentsPage from './ServerComponentsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ServerComponentsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServerComponentsPage />)
    }).not.toThrow()
  })
})
