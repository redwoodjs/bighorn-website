import { lazy, Suspense, useEffect, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import CommentForm from 'src/components/Comments/CommentForm/CommentForm'
import CommentsCell from 'src/components/Comments/CommentsCell'
import Icon from 'src/components/Icon/Icon'
import { TableOfContentsItem } from 'src/components/TableOfContentsItem/TableOfContentsItem'
import { getUpgradeBySlug } from 'src/content/upgrades'
import { limitToDepth } from 'src/helpers/TableOfContents'

const createLazyComponent = (slug: string) =>
  lazy(() => import(`../../content/upgrades/${slug}.mdx`))

const UpgradeGuideIndividualPage = ({ slug }) => {
  const { currentUser } = useAuth()
  const [announcementToc, setAnnouncementToc] = useState(null)
  const [guideToc, setGuideToc] = useState(null)

  // Load the table of contents for the announcement and guide
  useEffect(() => {
    const loadToc = async (type: string) => {
      const { tableOfContents } = await import(
        `../../content/upgrades/${slug}-${type}.mdx`
      )
      const limited = limitToDepth(tableOfContents, 3)
      if (type === 'announcement') {
        setAnnouncementToc(limited)
      } else if (type === 'guide') {
        setGuideToc(limited)
      }
    }

    loadToc('announcement')
    loadToc('guide')
  }, [slug])

  // TODO: Provide a better 404 component
  const upgrade = getUpgradeBySlug(slug)
  if (!upgrade) {
    return (
      <div className="page-content  mx-auto max-w-[1000px]">
        Upgrade not found
      </div>
    )
  }

  const AnnouncementComponent = createLazyComponent(
    `${upgrade.slug}-announcement`
  )
  const GuideComponent = createLazyComponent(`${upgrade.slug}-guide`)

  return (
    <div className="page-grid my-12">
      <div className="col-span-9 px-5 md:pl-page md:pr-16">
        <h4 className="mb-2 text-sm font-bold uppercase text-maiTai">
          Last Updated: {upgrade.updatedAt.toLocaleString()}
        </h4>
        <h1 className="section-heading mb-5">{upgrade.title}</h1>
        <div>
          <div className="blog-post">
            {/* TODO: Provide a better loading component */}
            <Suspense fallback={<div>Loading...</div>}>
              <AnnouncementComponent />
            </Suspense>
          </div>

          <h2 className="section-heading mb-14 !text-[48px]">Upgrade Guide</h2>

          <div className="blog-post">
            {/* TODO: Provide a better loading component */}
            <Suspense fallback={<div>Loading...</div>}>
              <GuideComponent />
            </Suspense>
          </div>

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
      <div className="border-slugger col-span-3 border-l-1">
        <div className="sticky top-[125px] hidden h-[calc(100vh_-_150px)] flex-col justify-between py-3 lg:flex">
          {/* top nav */}
          <ul className="table-of-contents">
            <li>
              <h3>TABLE OF CONTENTS</h3>
            </li>
            <li>
              <h3>ANNOUNCEMENT</h3>
              <ul className="list-none text-sm">
                {announcementToc === null ? (
                  <li>Loading...</li>
                ) : (
                  announcementToc.map((node) => (
                    <TableOfContentsItem
                      key={node.value + node.depth}
                      node={node}
                    />
                  ))
                )}
              </ul>
            </li>
            <li>
              <h3>UPGRADE GUIDE</h3>
              <ul className="list-none text-sm">
                {guideToc === null ? (
                  <li>Loading...</li>
                ) : (
                  guideToc.map((node) => (
                    <TableOfContentsItem
                      key={node.value + node.depth}
                      node={node}
                    />
                  ))
                )}
              </ul>
            </li>
            {/* TODO: Add anchor link */}
            <li>
              <h3>FEEDBACK</h3>
            </li>
          </ul>

          {/* bottom nav */}
          <ul className="table-of-contents border-slugger mt-8 border-t-1 pt-8">
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
