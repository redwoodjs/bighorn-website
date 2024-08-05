import { useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import BlogListItem from 'src/components/BlogListItem/BlogListItem'
import Header from 'src/components/Header/Header'
import { getPosts } from 'src/content/posts'

const BlogPage = () => {
  const { origin } = useLocation()
  const posts = getPosts()
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

      <div className="page-content mx-auto max-w-[1000px]">
        <div className="mb-[44px] flex flex-col gap-[100px]">
          {posts.map((post) => (
            <div key={post.slug}>
              <BlogListItem post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogPage
