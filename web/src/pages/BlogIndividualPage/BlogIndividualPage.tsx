const BlogIndividualPage = async ({ slug }) => {
  const { default: Component } = await import(`../../content/posts/${slug}.mdx`)
  return (
    <div className="page-content  mx-auto max-w-[1000px]">
      <Component />
    </div>
  )
}

export default BlogIndividualPage
