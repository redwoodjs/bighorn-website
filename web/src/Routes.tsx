// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'
import UpgradeGuideLayout from './layouts/UpgradeGuideLayout/UpgradeGuideLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={BaseLayout}>
        {/* <Route path="/" page={HomePage} name="home" /> */}

        {/* UPGRADE - INDIVIDUAL */}
        <Set wrap={UpgradeGuideLayout}>
          <Route path="/upgrade/v8" page={UpgradeGuideV8Page} name="upgradeGuideV8" />
        </Set>

        <Set wrap={InteriorLayout}>
          {/* HOME PAGE */}
          <Route path="/" page={LetterPage} name="home" />

          {/* AUTH */}
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
          <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

          {/* LANDING PAGES */}
          <Route path="/server-components" page={ServerComponentsPage} name="serverComponents" />
          <Route path="/conf" redirect="/react-conf" />
          <Route path="/reactconf" redirect="/react-conf" />
          <Route path="/react-conf" page={ReactConfPage} name="reactConf" />
          <Route path="/reactadvanced" redirect="/react-advanced" />
          <Route path="/react-advanced" page={ReactAdvancedPage} name="reactAdvanced" />

          {/* UPGRADE - INDEX */}
          <Route path="/upgrade" page={UpgradeGuidePage} name="upgradeGuide" />

          {/* BLOG */}
          <Route path="/blog/{slug:string}" page={BlogIndividualPage} name="blogIndividual" />
          <Route path="/blog" page={BlogPage} name="blog" />

          <Route path="/brand" page={BrandPage} name="brand" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
