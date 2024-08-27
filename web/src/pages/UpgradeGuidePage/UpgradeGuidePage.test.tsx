import { render } from "@redwoodjs/testing/web";

import UpgradeGuidePage from "./UpgradeGuidePage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("UpgradeGuidePage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<UpgradeGuidePage />);
    }).not.toThrow();
  });
});
