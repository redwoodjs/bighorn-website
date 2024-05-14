import { render } from '@redwoodjs/testing/web'

import ConnectWithUs from './ConnectWithUs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConnectWithUs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConnectWithUs />)
    }).not.toThrow()
  })
})
