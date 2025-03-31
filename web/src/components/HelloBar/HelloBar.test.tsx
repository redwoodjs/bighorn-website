import { render } from "@redwoodjs/testing/web";

import HelloBar from "./HelloBar";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("HelloBar", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<HelloBar />);
    }).not.toThrow();
  });
});
