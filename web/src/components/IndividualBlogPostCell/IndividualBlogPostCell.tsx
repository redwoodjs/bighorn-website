import type {
  FindIndividualBlogPostQuery,
  FindIndividualBlogPostQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindIndividualBlogPostQuery($slug: String!) {
    individualBlogPost: individualBlogPost(id: $id) {
      id
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
  individualBlogPost,
}: CellSuccessProps<
  FindIndividualBlogPostQuery,
  FindIndividualBlogPostQueryVariables
>) => {
  return <div>{JSON.stringify(individualBlogPost)}</div>
}
