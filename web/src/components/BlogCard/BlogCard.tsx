/**
 * This component is for the blog card that appears on the home page
 */

import { Link, routes } from '@redwoodjs/router'

import type { Post } from 'src/content/posts'
import { prettifyDate } from 'src/helpers/DateHelpers'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

interface BlogCardProps {
  post: Post
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="rounded-[4px] border-1 border-maiTai p-7 pb-5">
      <p className="mb-2 text-sm font-bold uppercase text-maiTai">
        {prettifyDate(post.publishedAt)}
      </p>
      <Link
        to={routes.blogIndividual({ slug: post.slug })}
        className="text-white hover:text-sulu"
      >
        <h2 className="mb-5 text-xl font-bold leading-tight text-black md:text-3xl dark:text-white">
          {post.title}
        </h2>
      </Link>
      <p className="mb-5 text-base leading-normal text-battleshipGray md:text-lg">
        {post.brief}
      </p>
      <div className="flex justify-between">
        <Link
          to={routes.blogIndividual({ slug: post.slug })}
          className="group/readMoreBlogLink flex items-center gap-1 font-bold uppercase dark:text-white "
        >
          <span className="border-b-1 border-b-black text-sm text-black group-hover/readMoreBlogLink:border-sulu dark:border-b-white dark:text-white dark:hover:text-white">
            Read
          </span>{' '}
          <Icon
            id="doubleChevronRight"
            className="text-black dark:text-white"
          />
        </Link>
        <Avatar alt={post.author.name} src={post.author.profilePicture} />
      </div>
    </article>
  )
}

export default BlogCard
