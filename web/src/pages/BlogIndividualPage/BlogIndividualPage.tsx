import { Suspense, lazy, useEffect, useState } from 'react'

import { routes, useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar/Avatar'
import { getPostBySlug } from 'src/content/posts'
import { prettifyDate } from 'src/helpers/DateHelpers'

const createLazyComponent = (slug: string) =>
  lazy(() => import(`../../content/posts/${slug}.mdx`))

const getYouTubeVideoID = (url: string) => {
  return url.split('/').pop().split('?')[0]
}

// use this API to get the meta data as JSON for the video
// https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoID}format=json
const getYouTubeSize = async (videoID: string) => {
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoID}&format=json`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching video metadata:', error)
  }
}

const Loading = () => <div>Loading...</div>

const BlogIndividualPage = ({ slug }) => {
  const [isSuspenseResolved, setIsSuspenseResolved] = useState(false)
  const { origin } = useLocation()
  const post = getPostBySlug(slug)

  useEffect(() => {
    // find any YouTube embeds on the page
    const youtubeEmbeds = document.querySelectorAll('iframe')
    youtubeEmbeds.forEach(async (embed) => {
      const videoID = getYouTubeVideoID(embed.src)
      const data = await getYouTubeSize(videoID)
      embed.style.aspectRatio = `${data.width / data.height}`
    })
  }, [isSuspenseResolved])

  // TODO: Provide a better 404 component
  if (!post) {
    return (
      <div className="page-content  mx-auto max-w-[1000px]">Post not found</div>
    )
  }

  const ContentComponent = createLazyComponent(post.slug)

  return (
    <div className="page-content mx-auto h-full max-w-[1000px]">
      <div className="page-grid">
        <Metadata
          title={post.title}
          description={post.brief}
          og={{
            image: post.imageUrl || `${origin}/images/og.png`,
          }}
          canonicalUrl={`${origin}${routes.blogIndividual({ slug: post.slug })}`}
        />
        <div className="col-span-12">
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

          <div className="blog-post">
            <Suspense fallback={<Loading />}>
              <ContentComponent onLoad={() => setIsSuspenseResolved(true)} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogIndividualPage
