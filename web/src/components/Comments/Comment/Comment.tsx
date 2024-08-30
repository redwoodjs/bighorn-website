import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { CommentThreadsQuery } from 'types/graphql'

import { useLocation } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import Icon from '../../Icon/Icon'
import CommentContent from '../CommentContent/CommentContent'
import CommentForm from '../CommentForm/CommentForm'
import { QUERY as CommentsQuery } from '../CommentsCell/CommentsCell'
import LikeButton from '../LikeButton/LikeButton'
import LinkButton from '../LinkButton/LinkButton'

interface CommentProps {
  index: number
  threadId: number
  comment: CommentThreadsQuery['commentThreads'][0]['comments'][0]
}

const ADD_LIKE_MUTATION = gql`
  mutation AddLikeMutation($commentId: String!) {
    addLike(commentId: $commentId) {
      id
    }
  }
`

const REMOVE_LIKE_MUTATION = gql`
  mutation RemoveLikeMutation($commentId: String!) {
    removeLike(commentId: $commentId) {
      id
    }
  }
`

const Comment = ({ index, threadId, comment }: CommentProps) => {
  const location = useLocation()
  const [isAdminControlsShowing, setIsAdminControlsShowing] = useState(false)
  const [isReplyFormShowing, setIsReplyFormShowing] = useState(index > 0)

  const { currentUser } = useAuth()

  // set up the Apollo mutation for liking and unliking comments
  const [addLike] = useMutation(ADD_LIKE_MUTATION, {
    onCompleted: () => {
      toast.success('Liked')
    },
    onError: (error) => {
      toast.error('Error liking comment')
      console.error(error)
    },
    refetchQueries: [CommentsQuery],
  })
  const like = async () => {
    await addLike({ variables: { commentId: comment.id } })
  }
  const [removeLike] = useMutation(REMOVE_LIKE_MUTATION, {
    onCompleted: () => {
      toast.success('Unliked')
    },
    onError: (error) => {
      toast.error('Error unliking comment')
      console.error(error)
    },
    refetchQueries: [CommentsQuery],
  })

  const unlike = async () => {
    await removeLike({ variables: { commentId: comment.id } })
  }

  const liked = comment.Like.some((like) => like.userId === currentUser?.id)

  return (
    <div
      className="border-1 border-coffeeBean pt-10"
      id={`comment_${comment.id}`}
    >
      <CommentContent comment={comment} index={index} />

      {/* footer */}
      <div className="comment-footer flex items-center justify-between px-10 pb-6">
        {/* left side */}
        <div className="flex items-center gap-8 pl-comment">
          <LikeButton like={like} unlike={unlike} liked={liked} />
          <LinkButton
            handleClick={() => {
              // get the URL for the comment - http://localhost:8910/upgrade/v8#comment_808be5fc-60f1-4c00-9b97-fe4d2363e124
              // I want the base URL, before the # in case the user is already looking at a deep link
              const url = location.href.split('#')[0]
              const deepUrl = `${url}#comment_${comment.id}`
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
        {/* <div className="flex items-center gap-8 text-sm font-bold uppercase text-maiTai">
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
        </div> */}
      </div>

      {/* threaded replies */}
      {/* {comment.Comments.length > 0 && (
        <div className="flex flex-col gap-10 border-y-1 border-coffeeBean pt-10">
          {comment.Comments.map((threadedComment) => (
            <CommentContent
              key={threadedComment.id}
              isThreaded={true}
              comment={threadedComment}
            />
          ))}
        </div>
      )} */}

      {/* respond */}
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
    </div>
  )
}

export default Comment
