import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Icon from '../../Icon/Icon'
import CommentContent from '../CommentContent/CommentContent'
import CommentForm from '../CommentForm/CommentForm'
import LikeButton from '../LikeButton/LikeButton'
import LinkButton from '../LinkButton/LinkButton'

interface CommentProps {
  id: string
}

const Comment = ({ id }: CommentProps) => {
  const [isAdminControlsShowing, setIsAdminControlsShowing] = useState(false)
  const [isReplyFormShowing, setIsReplyFormShowing] = useState(false)

  const like = () => {}

  const unlike = () => {}

  return (
    <div className="border-coffeeBean border-1 pt-10">
      <CommentContent lastEdited="August 28, 2024" />

      {/* footer */}
      <div className="comment-footer flex items-center justify-between px-10 pb-10">
        {/* left side */}
        <div className="pl-comment flex items-center gap-8">
          <LikeButton like={like} unlike={unlike} />
          <LinkButton handleClick={() => console.log('copy')} />
          <button
            className="py-2"
            onClick={() => setIsAdminControlsShowing((prevValue) => !prevValue)}
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
        </div>

        {/* right side */}
        <div className="flex items-center gap-8 text-sm font-bold uppercase text-maiTai">
          2 Replies
          <button
            className="group flex items-center gap-2"
            onClick={() => setIsReplyFormShowing(true)}
          >
            <Icon id="reply" />
            REPLY
          </button>
        </div>
      </div>

      {/* replies */}
      <div className="border-coffeeBean flex flex-col gap-10 border-y-1 pt-10">
        <CommentContent isThreaded={true} />
        <CommentContent isThreaded={true} />
        <CommentContent isThreaded={true} />
      </div>

      {/* respond */}
      <AnimatePresence>
        {isReplyFormShowing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="border-coffeeBean flex gap-4 border-t-1 px-10 pb-10 pt-16">
              <CommentForm id={id} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Comment
