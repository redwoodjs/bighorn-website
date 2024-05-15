import type { RecentBlogPostsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BlogCard from 'src/components/BlogCard/BlogCard'

export const QUERY = gql`
  query RecentBlogPostsQuery {
    recentPosts {
      posts {
        id
        author {
          id
          name
          profilePicture
        }
        brief
        canonicalUrl
        coverImage {
          url
        }
        content {
          html
          markdown
          text
        }
        ogMetaData {
          image
        }
        seo {
          description
          title
        }
        slug
        subtitle
        title
        url
        publishedAt
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
    <section className="page-grid px-5 md:px-page" id="blog">
      <div className="col-span-5">
        <div className="sticky top-5">
          <h2 className="section-heading mb-6">Blog</h2>
          <h3 className="section-subheading mb-6">The Latest from RedwoodJS</h3>
          <Link
            to={routes.blog()}
            className="font-white border-b-2 border-b-black text-lg hover:border-b-alienArmpit dark:border-b-white dark:hover:border-b-sulu"
          >
            View All Posts
          </Link>
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
