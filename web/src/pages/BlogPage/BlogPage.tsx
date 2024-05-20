import { useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import BlogListCell from 'src/components/BlogListCell'
import Header from 'src/components/Header/Header'

const BlogPage = () => {
  const { origin } = useLocation()
  return (
    <>
      <Metadata
        title="Blog"
        description="The Latest from RedwoodJS"
        og={{ image: `${origin}/images/og.png` }}
      />

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
