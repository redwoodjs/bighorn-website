import { render } from "@redwoodjs/testing/web";

import LetterPage from "./LetterPage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("LetterPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<LetterPage />);
    }).not.toThrow();
  });
});
