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

const Routes = () => {
  return (
    <Router>
      <Set wrap={BaseLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={InteriorLayout}>
          <Route path="/conf" redirect="/react-conf" />
          <Route path="/reactconf" redirect="/react-conf" />
          <Route path="/react-conf" page={ReactConfPage} name="reactConf" />
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
