import { render } from '@redwoodjs/testing/web'

import HomeHero from './HomeHero'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeHero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeHero />)
    }).not.toThrow()
  })
})
