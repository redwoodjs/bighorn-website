import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { CommentsQuery } from 'types/graphql'

import { useAuth } from 'src/auth'

import Icon from '../../Icon/Icon'
import CommentContent from '../CommentContent/CommentContent'
import CommentForm from '../CommentForm/CommentForm'
import LikeButton from '../LikeButton/LikeButton'
import LinkButton from '../LinkButton/LinkButton'

/* This type references the type returned by CommentsQuery but makes a few changes
  - The type CommentsQuery is an array of objects and we only need one object
  - the Comments object is optional
 */
export type CommentType = Omit<
  CommentsQuery['commentsByUpgrade'][0],
  'Comments'
> & {
  Comments?: CommentsQuery['commentsByUpgrade'][0]['Comments']
}

interface CommentProps {
  id: string
  comment: CommentType
  upgradeGuide: string
  parentComment?: string | null
}

const Comment = ({
  id,
  comment,
  upgradeGuide,
  parentComment = null,
}: CommentProps) => {
  const [isAdminControlsShowing, setIsAdminControlsShowing] = useState(false)
  const [isReplyFormShowing, setIsReplyFormShowing] = useState(false)

  const { currentUser } = useAuth()

  // if the comment has threaded comments, display the reply form by default
  useEffect(() => {
    if (currentUser && comment?.Comments?.length > 0) {
      setIsReplyFormShowing(true)
    }
  }, [currentUser, comment.Comments.length])

  const like = () => {}

  const unlike = () => {}

  return (
    <div className="border-1 border-coffeeBean pt-10" id={`comment_${id}`}>
      <CommentContent comment={comment} />

      {/* footer */}
      <div className="comment-footer flex items-center justify-between px-10 pb-6">
        {/* left side */}
        <div className="flex items-center gap-8 pl-comment">
          <LikeButton like={like} unlike={unlike} />
          <LinkButton
            handleClick={() => {
              // get the URL for the comment - http://localhost:8910/upgrade/v8#comment_808be5fc-60f1-4c00-9b97-fe4d2363e124
              // I want the base URL, before the # in case the user is already looking at a deep link
              const url = window.location.href.split('#')[0]
              const deepUrl = `${url}#${id}`
              // copy the URL to the clipboard
              navigator.clipboard.writeText(deepUrl)
            }}
          />
          {currentUser?.role?.id === 1 && (
            <>
              <button
                className="py-2"
                onClick={() =>
                  setIsAdminControlsShowing((prevValue) => !prevValue)
                }
              >
                {isAdminControlsShowing ? (
                  <Icon id="close" />
                ) : (
                  <Icon id="threeDots" />
                )}
              </button>
              <AnimatePresence>
                {isAdminControlsShowing && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-8 rounded-md bg-[#1e1e1e] px-5 py-2"
                  >
                    <button>
                      <Icon id="hide" />
                    </button>
                    <button>
                      <Icon id="flag" />
                    </button>
                    <button>
                      <Icon id="bookmark" />
                    </button>
                    <button>
                      <Icon id="trash" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>

        {/* right side */}
        <div className="flex items-center gap-8 text-sm font-bold uppercase text-maiTai">
          {comment.Comments.length === 1 ? (
            '1 Reply'
          ) : comment.Comments.length < 1 ? (
            <button
              className="group flex items-center gap-2"
              onClick={() => setIsReplyFormShowing(true)}
            >
              <Icon id="reply" />
              REPLY
            </button>
          ) : (
            `${comment.Comments.length} Replies`
          )}
        </div>
      </div>

      {/* threaded replies */}
      {comment.Comments.length > 0 && (
        <div className="flex flex-col gap-10 border-y-1 border-coffeeBean pt-10">
          {comment.Comments.map((threadedComment) => (
            <CommentContent
              key={threadedComment.id}
              isThreaded={true}
              comment={threadedComment}
            />
          ))}
        </div>
      )}

      {/* respond */}
      <AnimatePresence>
        {isReplyFormShowing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex gap-4 border-t-1 border-coffeeBean px-10 pb-10 pt-16">
              <CommentForm
                id={id}
                upgradeGuide={upgradeGuide}
                parentComment={comment.id}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Comment
