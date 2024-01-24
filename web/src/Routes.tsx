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
      <Route path="/events" page={EventsPage} name="events" prerender />
      <Route path="/blog/{slug:string}" page={BlogIndividualPage} name="blogIndividual" prerender />
      <Route path="/blog" page={BlogPage} name="blog" prerender />
      <Route path="/newsletter" page={NewsletterPage} name="newsletter" prerender />
      <Route path="/changelog" page={ChangelogPage} name="changelog" prerender />
      <Route path="/roadmap" page={RoadmapPage} name="roadmap" prerender />
      <Route path="/security" page={SecurityPage} name="security" prerender />
      <Route path="/brand" page={BrandPage} name="brand" prerender />
      <Route path="/contributors" page={ContributorsPage} name="contributors" prerender />
      <Route path="/core-team" page={CoreTeamPage} name="coreTeam" prerender />
      <Route path="/" page={HomePage} name="home" prerender />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
