import { Link, routes } from '@redwoodjs/router'

import { getPosts } from 'src/content/posts'

import BlogCard from '../BlogCard/BlogCard'

const RecentBlogPosts = () => {
  const recentPosts = getPosts().slice(0, 3)

  return (
    <section className="page-grid px-5 md:px-page" id="blog">
      <div className="col-span-5">
        <div className="sticky top-5">
          <h2 className="section-heading mb-6">Blog</h2>
          <h3 className="section-subheading mb-6">The Latest from RedwoodJS</h3>
          <Link
            to={routes.blog()}
            className="font-white border-b-2 border-b-black text-lg hover:border-b-alienArmpit dark:border-b-white dark:hover:border-b-sulu"
          >
            View All Posts
          </Link>
        </div>
      </div>

      <div className="col-span-7 flex flex-col gap-[72px] pt-10">
        {recentPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </section>
  )
}

export default RecentBlogPosts
