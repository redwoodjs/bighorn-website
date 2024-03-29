import type {
  FindIndividualBlogPostQuery,
  FindIndividualBlogPostQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  Metadata,
} from '@redwoodjs/web'

import { prettifyDate } from 'src/helpers/DateHelpers'
import { replaceYouTubeLinks } from 'src/lib/helpers'

import Avatar from '../Avatar/Avatar'

export const QUERY = gql`
  query FindIndividualBlogPostQuery($slug: String!) {
    post(slug: $slug) {
      author {
        id
        name
        profilePicture
        bio {
          html
          markdown
          text
        }
      }
      brief
      canonicalUrl
      content {
        html
        markdown
        text
      }
      id
      slug
      subtitle
      title
      publishedAt
      ogMetaData {
        image
      }
      seo {
        description
        title
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindIndividualBlogPostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  post,
}: CellSuccessProps<
  FindIndividualBlogPostQuery,
  FindIndividualBlogPostQueryVariables
>) => {
  return (
    <div className="page-grid">
      <Metadata
        title={post.title}
        description={post.seo.description}
        og={{
          image: post.ogMetaData?.image || `${location.origin}/images/og.png`,
        }}
        canonicalUrl={post.canonicalUrl}
      />
      <div className="col-span-7">
        <h4 className="mb-2 text-sm font-bold uppercase text-maiTai">
          {prettifyDate(post.publishedAt)}
        </h4>
        <h1 className="section-heading mb-5">{post.title}</h1>
        <h2 className="mb-10 text-3xl font-thin text-black dark:text-white">
          The Latest from RedwoodJS
        </h2>

        <div className="mb-10 flex items-center gap-3">
          <Avatar alt={post.author.name} src={post.author.profilePicture} />
          <div className="text-lg text-black dark:text-white">
            {post.author.name}
          </div>
        </div>

        {post?.content?.html && (
          <div
            className="blog-post"
            dangerouslySetInnerHTML={{
              __html: replaceYouTubeLinks(post.content.html),
            }}
          />
        )}
      </div>
    </div>
  )
}
