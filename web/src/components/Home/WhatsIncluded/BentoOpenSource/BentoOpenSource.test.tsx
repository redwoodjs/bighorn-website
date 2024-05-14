import { render } from '@redwoodjs/testing/web'

import BentoOpenSource from './BentoOpenSource'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BentoOpenSource', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BentoOpenSource />)
    }).not.toThrow()
  })
})
