import { render } from "@redwoodjs/testing/web";

import LinkButton from "./LinkButton";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("LinkButton", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<LinkButton />);
    }).not.toThrow();
  });
});
