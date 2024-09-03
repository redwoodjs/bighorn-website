import { render } from "@redwoodjs/testing/web";

import UpgradeGuideLayout from "./UpgradeGuideLayout";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("UpgradeGuideLayout", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<UpgradeGuideLayout />);
    }).not.toThrow();
  });
});
