import IndividualBlogPostCell from 'src/components/IndividualBlogPostCell'

const BlogIndividualPage = ({ slug }) => {
  return (
    <div className="page-content  mx-auto max-w-[1000px]">
      <IndividualBlogPostCell slug={slug} />
    </div>
  )
}

export default BlogIndividualPage
