import IndividualBlogPostCell from 'src/components/IndividualBlogPostCell'

const BlogIndividualPage = ({ slug }) => {
  return (
    <div className="page-content">
      <IndividualBlogPostCell slug={slug} />
    </div>
  )
}

export default BlogIndividualPage
