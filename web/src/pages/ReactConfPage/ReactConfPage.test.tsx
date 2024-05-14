import { render } from '@redwoodjs/testing/web'

import ReactConfPage from './ReactConfPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReactConfPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReactConfPage />)
    }).not.toThrow()
  })
})
