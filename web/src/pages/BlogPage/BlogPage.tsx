import { Metadata } from '@redwoodjs/web'

import BlogListCell from 'src/components/BlogListCell'
import Header from 'src/components/Header/Header'

const BlogPage = () => {
  return (
    <>
      <Metadata
        title="Blog"
        description="The Latest from RedwoodJS"
        og={{ image: `${location.origin}/images/og.png` }}
      />

      <div className="page-content">
        <Header title="Blog" subtitle="The Latest from RedwoodJS" />
      </div>

      <hr />

      <div className="page-content mx-auto max-w-[1000px]">
        <BlogListCell />
      </div>
    </>
  )
}

export default BlogPage
