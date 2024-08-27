import { Link, routes } from "@redwoodjs/router";
import { Metadata } from "@redwoodjs/web";

const UpgradeGuidePage = () => {
  return (
    <>
      <Metadata title="UpgradeGuide" description="UpgradeGuide page" />

      <h1>UpgradeGuidePage</h1>
      <p>
        Find me in{" "}
        <code>./web/src/pages/UpgradeGuidePage/UpgradeGuidePage.tsx</code>
      </p>
      <p>
        My default route is named <code>upgradeGuide</code>, link to me with `
        <Link to={routes.upgradeGuide()}>UpgradeGuide</Link>`
      </p>
    </>
  );
};

export default UpgradeGuidePage;
