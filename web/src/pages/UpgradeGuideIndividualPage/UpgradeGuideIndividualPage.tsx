// import { lazy } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import CommentForm from 'src/components/Comments/CommentForm/CommentForm'
import CommentsCell from 'src/components/Comments/CommentsCell'
import Icon from 'src/components/Icon/Icon'

// const createLazyComponent = (slug: string) =>
//   lazy(() => import(`../../content/posts/${slug}.mdx`))

// const Loading = () => <div>Loading...</div>

const UpgradeGuideIndividualPage = ({ slug }) => {
  const { currentUser } = useAuth()
  console.log({ slug })

  return (
    <div className="page-grid my-12">
      <div className="col-span-9 px-5 md:pl-page md:pr-16">
        <h4 className="mb-2 text-sm font-bold uppercase text-maiTai">
          Last Updated: August 28, 2024
        </h4>
        <h1 className="section-heading mb-5">Redwood v8.0.0 Upgrade Guide</h1>
        <div>
          <p>Content</p>

          <hr className="mb-12 mt-[72px]" />

          <h2 className="section-heading mb-14 !text-[48px]">Feedback</h2>

          <div className="flex flex-col gap-8">
            <CommentsCell upgradeGuide={slug} />
          </div>

          <div className="px-10 py-16">
            <div className="mb-5 text-3xl font-light">New Comment</div>
            {currentUser ? (
              <CommentForm id="3" showLabel={false} />
            ) : (
              <p>
                You must be{' '}
                <Link
                  to={routes.login()}
                  className="underline hover:text-christi dark:hover:text-sulu"
                >
                  logged in
                </Link>
                , in order to comment.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-1 border-slugger">
        <div className="sticky top-[125px] hidden h-[calc(100vh_-_150px)] flex-col justify-between py-3 lg:flex">
          {/* top nav */}
          <ul className="table-of-contents">
            <li>
              <h3>TABLE OF CONTENTS</h3>
            </li>
            <li>
              <a href="#upgrading">Upgrading</a>
            </li>
            <li>
              <a href="#upgrading">Upgrading</a>
            </li>
          </ul>

          {/* bottom nav */}
          <ul className="table-of-contents mt-8 border-t-1 border-slugger pt-8">
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <Icon id="link" />
                Announcement
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <Icon id="link" />
                Changelog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UpgradeGuideIndividualPage
