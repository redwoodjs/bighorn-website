import type {
  CommentThreadsQuery,
  CommentThreadsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Comment from 'src/components/Comments/Comment/Comment'

export const QUERY: TypedDocumentNode<
  CommentThreadsQuery,
  CommentThreadsQueryVariables
> = gql`
  query CommentThreadsQuery($upgradeGuide: String!) {
    commentThreads(upgradeGuide: $upgradeGuide) {
      id
      comments {
        id
        authorId
        authorName
        authorRole
        comment
        visible
        flagged
        bookmarked
        editCount
        createdAt
        updatedAt
        Like {
          id
          userId
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
  commentThreads,
  upgradeGuide,
}: CellSuccessProps<CommentThreadsQuery> & { upgradeGuide: string }) => {
  return commentThreads.map((thread) => (
    <div key={thread.id}>
      {thread.comments.map((comment, index) => (
        <Comment
          key={comment.id}
          index={index}
          threadId={thread.id}
          threadLength={thread.comments.length}
          comment={comment}
          upgradeGuide={upgradeGuide}
        />
      ))}
    </div>
  ))
}
