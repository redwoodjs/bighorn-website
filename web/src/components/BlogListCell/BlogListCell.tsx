/**
 * This is the blog list that appears on the blog index page
 */

import type {
  FindBlogListQuery,
  FindBlogListQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import BlogListItem from '../BlogListItem/BlogListItem'

export const QUERY: TypedDocumentNode<
  FindBlogListQuery,
  FindBlogListQueryVariables
> = gql`
  query FindBlogListQuery {
    recentPosts(first: 20) {
      posts {
        author {
          id
          name
          profilePicture
        }
        id
        publishedAt
        slug
        subtitle
        title
        url
        brief
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindBlogListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  recentPosts,
}: CellSuccessProps<FindBlogListQuery, FindBlogListQueryVariables>) => {
  return (
    <div className="mb-[44px] flex flex-col gap-[100px]">
      {recentPosts.posts.map((post) => (
        <div key={post.id}>
          <BlogListItem post={post} />
        </div>
      ))}
    </div>
  )
}
