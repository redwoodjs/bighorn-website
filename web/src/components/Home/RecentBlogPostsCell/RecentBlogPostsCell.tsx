import type { RecentBlogPostsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BlogCard from 'src/components/BlogCard/BlogCard'

export const QUERY = gql`
  query RecentBlogPostsQuery {
    recentPosts {
      posts {
        id
        title
        url
        brief
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  recentPosts,
}: CellSuccessProps<RecentBlogPostsQuery>) => {
  return (
    <section className="page-grid px-5 md:px-page">
      <div className="col-span-5">
        <div className="sticky top-5">
          <h2 className="section-heading mb-6">Blog</h2>
          <h3 className="section-subheading mb-6">The Latest from RedwoodJS</h3>
        </div>
      </div>

      <div className="col-span-7 flex flex-col gap-[72px] pt-10">
        {recentPosts.posts.map((post) => {
          return <BlogCard key={post.id} post={post} />
        })}
      </div>
    </section>
  )
}
