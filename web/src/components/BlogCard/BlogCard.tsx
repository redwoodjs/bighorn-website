/**
 * This component is for the blog card that appears on the home page
 */

import { Link, routes } from '@redwoodjs/router'

import { prettifyDate } from 'src/helpers/DateHelpers'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

interface BlogCardProps {
  post: {
    id: string
    author: {
      id: string
      name: string
      profilePicture: string
    }
    title: string
    slug: string
    brief: string
    publishedAt: string
  }
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="rounded-[4px] border-1 border-maiTai p-7 pb-5">
      <h4 className="mb-2 text-sm font-bold uppercase text-maiTai">
        {prettifyDate(post.publishedAt)}
      </h4>
      <Link
        to={routes.blogIndividual({ slug: post.slug })}
        className="text-white hover:text-sulu"
      >
        <h2 className="mb-5 text-3xl font-bold leading-tight ">{post.title}</h2>
      </Link>
      <p className="mb-5 text-lg leading-normal text-battleshipGray">
        {post.brief}
      </p>
      <div className="flex justify-between">
        <Link
          to={routes.blogIndividual({ slug: post.slug })}
          className="group/readMoreBlogLink flex items-center gap-1 font-bold uppercase text-white "
        >
          <span className="border-b-1 border-b-white text-sm hover:text-white group-hover/readMoreBlogLink:border-sulu">
            Read
          </span>{' '}
          <Icon id="doubleChevronRight" />
        </Link>
        <Avatar alt={post.author.name} src={post.author.profilePicture} />
      </div>
    </article>
  )
}

export default BlogCard
