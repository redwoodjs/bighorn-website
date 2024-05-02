import { useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const NewsletterPage = () => {
  const { origin } = useLocation()
  return (
    <>
      <Metadata
        title="Newsletter"
        description="Newsletter page"
        og={{ image: `${origin}/images/og.png` }}
      />

      <h1>Newsletter</h1>
    </>
  )
}

export default NewsletterPage
