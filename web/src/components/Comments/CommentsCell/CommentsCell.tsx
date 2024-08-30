import type { CommentsQuery, CommentsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Comment from 'src/components/Comments/Comment/Comment'

export const QUERY: TypedDocumentNode<CommentsQuery, CommentsQueryVariables> =
  gql`
    query CommentsQuery($upgradeGuide: String!) {
      commentsByUpgrade(upgradeGuide: $upgradeGuide) {
        comment
        createdAt
        bookmarked
        editCount
        flagged
        id
        updatedAt
        upgradeGuide
        visible
        author {
          id
          name
          role {
            id
          }
        }
        Comments {
          comment
          createdAt
          bookmarked
          editCount
          flagged
          id
          updatedAt
          upgradeGuide
          visible
          author {
            id
            name
            role {
              id
            }
          }
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
  commentsByUpgrade,
}: CellSuccessProps<CommentsQuery> & { upgradeGuide: string }) => {
  return (
    <>
      {commentsByUpgrade.map((item) => (
        <Comment key={item.id} id={item.id} comment={item} />
      ))}
    </>
  )
}
