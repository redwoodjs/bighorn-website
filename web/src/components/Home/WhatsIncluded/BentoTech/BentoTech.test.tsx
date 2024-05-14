import { render } from '@redwoodjs/testing/web'

import BentoTech from './BentoTech'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BentoTech', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BentoTech />)
    }).not.toThrow()
  })
})
