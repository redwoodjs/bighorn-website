import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import CommentForm from 'src/components/Comments/CommentForm/CommentForm'
import CommentsCell from 'src/components/Comments/CommentsCell'
import Icon from 'src/components/Icon/Icon'
import { TableOfContentsItem } from 'src/components/TableOfContentsItem/TableOfContentsItem'
import { data as updateData } from 'src/content/upgrades/v8/data'
import Guide, {
  tableOfContents as guideToc,
} from 'src/content/upgrades/v8/guide.mdx'
import Higlights, {
  tableOfContents as hightlightsToc,
} from 'src/content/upgrades/v8/highlights.mdx'
import { limitToDepth } from 'src/helpers/TableOfContents'

const UpgradeGuideV8Page = () => {
  const { currentUser } = useAuth()
  const slug = updateData.slug

  return (
    <div className="page-grid my-12">
      <div className="col-span-9 px-5 md:pl-page md:pr-16">
        <h4 className="mb-2 text-sm font-bold uppercase text-maiTai">
          Last Updated: {updateData.updatedAt.toLocaleString()}
        </h4>
        <h1 className="section-heading mb-5">{updateData.title}</h1>
        <div>
          <h2 className="section-heading mb-5 !text-[48px]">Highlights</h2>
          <div className="blog-post">
            <Higlights />
          </div>

          <h2 className="section-heading mb-5 !text-[48px]">Upgrade Guide</h2>
          <div className="blog-post">
            <Guide />
          </div>

          <h2 className="section-heading mb-5 !text-[48px]" id="feedback">
            Feedback
          </h2>

          <div className="flex flex-col gap-8">
            <CommentsCell upgradeGuide={slug} />
          </div>

          <div className="px-10 py-16">
            <div className="mb-5 text-3xl font-light">New Comment</div>
            {currentUser ? (
              <CommentForm
                id="comment-form"
                showLabel={false}
                upgradeGuide={slug}
              />
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
          <ul className="table-of-contents overflow-y-auto">
            <li className="mb-2">
              <h3>TABLE OF CONTENTS</h3>
            </li>
            <li>
              <h3 className="mb-4 !text-xs">HIGHLIGHTS</h3>
              <ul className="mb-5 list-none text-sm">
                {limitToDepth(hightlightsToc, 3).map((node) => (
                  <TableOfContentsItem
                    key={node.value + node.depth}
                    node={node}
                  />
                ))}
              </ul>
            </li>
            <li>
              <h3 className="mb-4 !text-xs">UPGRADE GUIDE</h3>
              <ul className="list-none text-sm">
                {limitToDepth(guideToc, 3).map((node) => (
                  <TableOfContentsItem
                    key={node.value + node.depth}
                    node={node}
                  />
                ))}
              </ul>
            </li>
          </ul>

          {/* bottom nav */}
          <ul className="table-of-contents mt-8 border-t-1 border-slugger pt-8">
            <li>
              <a href="#feedback">
                <Icon id="speech-bubble" />
                Feedback
              </a>
            </li>
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

export default UpgradeGuideV8Page
