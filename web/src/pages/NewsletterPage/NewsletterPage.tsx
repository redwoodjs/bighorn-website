import { Metadata } from '@redwoodjs/web'

const NewsletterPage = () => {
  return (
    <>
      <Metadata
        title="Newsletter"
        description="Newsletter page"
        og={{ image: `${location.origin}/images/og.png` }}
      />

      <h1>Newsletter</h1>
    </>
  )
}

export default NewsletterPage
