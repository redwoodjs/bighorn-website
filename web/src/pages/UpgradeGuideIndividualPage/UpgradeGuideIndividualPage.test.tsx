import { render } from "@redwoodjs/testing/web";

import UpgradeGuideIndividualPage from "./UpgradeGuideIndividualPage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("UpgradeGuideIndividualPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<UpgradeGuideIndividualPage />);
    }).not.toThrow();
  });
});
