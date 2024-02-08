// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/blog" page={BlogPage} name="blog" />
      <Route path="/newsletter" page={NewsletterPage} name="newsletter" prerender />
      <Route path="/changelog" page={ChangelogPage} name="changelog" prerender />
      <Route path="/security" page={SecurityPage} name="security" prerender />
      <Route path="/brand" page={BrandPage} name="brand" prerender />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/{slug:string}" page={BlogIndividualPage} name="blogIndividual" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
