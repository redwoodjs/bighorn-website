import { Link, routes } from '@redwoodjs/router'

import { prettifyDate } from 'src/helpers/DateHelpers'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

interface Props {
  post: {
    author: {
      id: string
      name: string
      profilePicture: string
    }
    id: string
    publishedAt: string
    slug: string
    subtitle?: string
    title: string
    url: string
    brief: string
  }
}

const BlogListItem = ({ post }: Props) => {
  return (
    <article>
      <h3 className="mb-2 text-sm font-bold uppercase text-maiTai">
        {prettifyDate(post.publishedAt)}
      </h3>
      <div className="mb-3 flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="mb-2 font-sans text-2xl font-bold md:mb-0">
          <Link
            to={routes.blogIndividual({ slug: post.slug })}
            className="text-black hover:text-sulu dark:text-white"
          >
            {post.title}
          </Link>
        </h2>
        <Link
          to={routes.blogIndividual({ slug: post.slug })}
          className="group/link inline-flex cursor-pointer items-center"
        >
          <span className="border-b-1 border-b-black text-xs font-bold uppercase tracking-wider text-black group-hover/link:border-b-sulu dark:border-b-white dark:text-white">
            Read the Full Article
          </span>{' '}
          <Icon
            id="doubleChevronRight"
            size={16}
            className="text-black dark:text-white"
          />
        </Link>
      </div>
      <p className="mb-3 text-battleshipGray">{post.brief}</p>

      {/* author */}
      <div className="flex items-center gap-x-6">
        <Avatar alt={post.author.name} src={post.author.profilePicture} />
        <div>
          <div className="text-lg">{post.author.name}</div>
        </div>
      </div>
    </article>
  )
}

export default BlogListItem
