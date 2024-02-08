import { Link, routes } from '@redwoodjs/router'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

interface BlogCardProps {
  post: {
    id: number
    title: string
    url: string
    brief: string
  }
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="rounded-[4px] border-1 border-maiTai p-7 pb-5">
      <h4 className="mb-2 text-sm font-bold uppercase text-maiTai">
        FEBRUARY 1, 2024
      </h4>
      <h2 className="mb-5 text-3xl font-bold leading-tight text-white">
        Double the Power for Open Source
      </h2>
      <p className="mb-5 text-lg leading-tight text-battleshipGray">
        GitHub Actions continues its industry-leading support for the OSS
        community by doubling the Windows/Linux machine size to 4-vCPU runners
        at...
      </p>
      <div className="flex justify-between">
        <Link
          to={routes.blogIndividual({ slug: 'slug' })}
          className="group/readMoreBlogLink flex items-center gap-1 font-bold uppercase text-white "
        >
          <span className="border-b-1 border-b-white text-sm hover:text-white group-hover/readMoreBlogLink:border-sulu">
            Read
          </span>{' '}
          <Icon id="doubleChevronRight" />
        </Link>
        <Avatar
          alt="Amy Dutton"
          src="https://picsum.photos/seed/1707377454461/300/300"
        />
      </div>
    </article>
  )
}

export default BlogCard
