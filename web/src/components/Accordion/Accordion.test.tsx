import { render } from '@redwoodjs/testing/web'

import Accordion from './Accordion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Accordion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Accordion />)
    }).not.toThrow()
  })
})
