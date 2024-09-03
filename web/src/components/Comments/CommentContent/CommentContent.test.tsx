import { render } from "@redwoodjs/testing/web";

import CommentContent from "./CommentContent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("CommentContent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<CommentContent />);
    }).not.toThrow();
  });
});
