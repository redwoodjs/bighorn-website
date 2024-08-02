import { render } from '@redwoodjs/testing/web'

import Accordion from './Accordion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Accordion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Accordion heading="heading" subheading="subheading">
          <p>content</p>
        </Accordion>
      )
    }).not.toThrow()
  })
})
