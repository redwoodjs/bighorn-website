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
      <Route path="/events" page={EventsPage} name="events" />
      <Route path="/blog/{slug:string}" page={BlogIndividualPage} name="blogIndividual" />
      <Route path="/blog" page={BlogPage} name="blog" />
      <Route path="/newsletter" page={NewsletterPage} name="newsletter" />
      <Route path="/changelog" page={ChangelogPage} name="changelog" />
      {/* <Route path="/roadmap" page={RoadmapPage} name="roadmap" /> */}
      <Route path="/security" page={SecurityPage} name="security" />
      <Route path="/brand" page={BrandPage} name="brand" />
      {/* <Route path="/contributors" page={ContributorsPage} name="contributors" /> */}
      {/* <Route path="/core-team" page={CoreTeamPage} name="coreTeam" /> */}
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
