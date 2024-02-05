import { request } from 'graphql-request'
import gql from 'graphql-tag'

export const recentPosts = async () => {
  const query = gql`
    {
      publication(host: "selfteach.me") {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              id
              title
              brief
              url
              author {
                id
                name
                profilePicture
              }
            }
          }
        }
      }
    }
  `
  const data = await request('https://gql.hashnode.com', query)
  console.log({ data })
  return {
    isTeam: data.publication.isTeam,
    title: data.publication.title,
    posts: data.publication.posts.edges.map((edge: any) => edge.node),
  }
}
