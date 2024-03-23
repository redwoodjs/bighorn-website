import { Metadata } from '@redwoodjs/web'

import BlogListCell from 'src/components/BlogListCell'
import Header from 'src/components/Header/Header'

const BlogPage = () => {
  return (
    <>
      <Metadata title="Blog" description="The Latest from RedwoodJS" />

      <div className="page-content">
        <Header title="Blog" subtitle="The Latest from RedwoodJS" />
      </div>

      <hr />

      <div className="page-content">
        <BlogListCell />
      </div>
    </>
  )
}

export default BlogPage
