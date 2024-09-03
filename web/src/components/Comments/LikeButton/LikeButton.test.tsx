import { render } from "@redwoodjs/testing/web";

import LikeButton from "./LikeButton";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("LikeButton", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<LikeButton />);
    }).not.toThrow();
  });
});
