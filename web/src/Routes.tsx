// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import BaseLayout from './layouts/BaseLayout/BaseLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'
import UpgradeGuideLayout from './layouts/UpgradeGuideLayout/UpgradeGuideLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={BaseLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={UpgradeGuideLayout}>
          <Route path="/upgrade/{slug:string}" page={UpgradeGuideIndividualPage} name="upgradeGuideIndividual" />
        </Set>
        <Set wrap={InteriorLayout}>
          <Route path="/server-components" page={ServerComponentsPage} name="serverComponents" />
          <Route path="/conf" redirect="/react-conf" />
          <Route path="/reactconf" redirect="/react-conf" />
          <Route path="/react-conf" page={ReactConfPage} name="reactConf" />
          {/* UPGRADE */}
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
