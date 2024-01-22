import { render } from '@redwoodjs/testing/web'

import BrandPage from './BrandPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BrandPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrandPage />)
    }).not.toThrow()
  })
})
