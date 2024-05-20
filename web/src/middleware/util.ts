export interface Post {
  id: string
  slug: string
  title: string
  brief: string
  coverImage?: {
    url?: string
  }
  ogMetaData?: {
    image?: string
  }
  publishedAt: string
  seo?: {
    title?: string
    description?: string
  }
  url: string
}

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(
    `${process.env.DEPLOY_URL}/.netlify/functions/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            posts {
              id
              slug
              title
              brief
              coverImage {
                url
              }
              ogMetaData {
                image
              }
              publishedAt
              seo {
                title
                description
              }
              url
            }
          }
        `,
      }),
    }
  )

  const { data } = await response.json()
  return data.posts
}
