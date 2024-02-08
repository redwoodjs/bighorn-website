import IndividualBlogPostCell from 'src/components/IndividualBlogPostCell'
import Newsletter from 'src/components/Newsletter/Newsletter'

const BlogIndividualPage = ({ slug }) => {
  return (
    <>
      <IndividualBlogPostCell slug={slug} />
    </>
  )
}

export default BlogIndividualPage
