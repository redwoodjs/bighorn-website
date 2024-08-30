import { useState } from 'react'

import { Form, Submit, TextAreaField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Avatar from 'src/components/Avatar/Avatar'
import { QUERY as CommentsQuery } from 'src/components/Comments/CommentsCell/CommentsCell'
import Icon from 'src/components/Icon/Icon'
import Tooltip from 'src/components/Tooltip/Tooltip'
import {
  determineDaysAgo,
  determineHoursAgo,
  determineMinutesAgo,
  prettifyDate,
} from 'src/helpers/DateHelpers'

import { CommentType } from '../Comment/Comment'

// set the mutation for updating the comment
const UPDATE_COMMENT_MUTATION = gql`
  mutation UpdateCommentMutation($id: String!, $input: UpdateCommentInput!) {
    updateComment(id: $id, input: $input) {
      id
    }
  }
`

interface CommentContentProps {
  isThreaded?: boolean
  comment: CommentType
}

const CommentContent = ({
  isThreaded = false,
  comment,
}: CommentContentProps) => {
  const [isEditTooltipShowing, setIsEditTooltipShowing] = useState(false)
  const { currentUser } = useAuth()
  const [commentState, setCommentState] = useState<'view' | 'edit'>('view')

  const displayLastUpdated = () => {
    // get the number of days ago the comment was last updated
    const daysAgo = determineDaysAgo(new Date(comment.updatedAt))

    // if it was updated today, get the number of hours
    if (daysAgo === 0) {
      const hoursAgo = determineHoursAgo(new Date(comment.updatedAt))

      // if it was updated within the last hour, get the number of minutes
      if (hoursAgo === 0) {
        return `${determineMinutesAgo(new Date(comment.updatedAt))}m`
      }

      return `${hoursAgo}h`
    }
    return `${daysAgo}d`
  }

  // set up the Apollo mutation
  const [updateComment, { loading }] = useMutation(UPDATE_COMMENT_MUTATION, {
    onCompleted: () => {
      setCommentState('view')
      toast.success('Comment updated')
    },
    onError: (error) => {
      toast.error('Error updating comment')
      console.error(error)
    },
    refetchQueries: [CommentsQuery],
  })

  const handleUpdate = (data) => {
    console.log(data)
    updateComment({
      variables: {
        id: comment.id,
        input: {
          comment: data.comment,
        },
      },
    })
  }

  return (
    <div className={`px-10 ${isThreaded ? 'threaded-comment' : ''}`}>
      <div className="mb-6 flex justify-between">
        {/* left side - author information */}
        <div className="relative z-20 flex items-center gap-3">
          <Avatar alt={comment.author.name} size={44} />
          <div>
            <div className="text-lg text-black dark:text-white">
              {comment.author.name}
            </div>
            {/* if the user is an admin, assume they're part of the core team */}
            {comment.author.role.id === 1 && (
              <div className="text-sm font-bold uppercase text-battleshipGray">
                Core Team
              </div>
            )}
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center gap-8">
          {/* edit button - should only display if  you're the author or admin */}
          {(currentUser?.id === comment.author.id ||
            currentUser?.role.id === 1) && (
            <div className="relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <Tooltip direction="top" showing={isEditTooltipShowing}>
                  {comment.updatedAt
                    ? `Last edited ${prettifyDate(new Date(comment.updatedAt))}`
                    : 'Edit'}
                </Tooltip>
              </div>
              <button
                onClick={() => {
                  setCommentState('edit')
                }}
                onMouseOver={() => setIsEditTooltipShowing(true)}
                onFocus={() => setIsEditTooltipShowing(true)}
                onMouseOut={() => setIsEditTooltipShowing(false)}
                onBlur={() => setIsEditTooltipShowing(false)}
                className="group flex items-center gap-2 text-sm font-bold text-battleshipGray hover:text-sulu"
              >
                {comment.editCount > 0 && comment.editCount}
                <span className="text-maiTai group-hover:text-sulu">
                  <Icon id="edit" />
                </span>
              </button>
            </div>
          )}

          {/* time */}
          <div className="text-sm font-bold text-battleshipGray">
            {displayLastUpdated()}
          </div>
        </div>
      </div>

      {/* comment content */}
      <div className="pl-comment mb-8">
        {/* TODO: Need to parse Markdown */}
        {commentState === 'view' ? (
          <p>{comment.comment}</p>
        ) : (
          <Form onSubmit={handleUpdate}>
            <fieldset disabled={loading}>
              <TextAreaField
                name="comment"
                defaultValue={comment.comment}
                className="w-full"
              />
              <div className="flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setCommentState('view')
                  }}
                  className="underline hover:no-underline"
                >
                  Cancel
                </button>
                <Submit className="flex items-center gap-2 rounded-md border-1 border-sulu px-7 py-4 font-bold text-sulu hover:bg-sulu hover:text-black">
                  <Icon id="check" />
                  Update
                </Submit>
              </div>
            </fieldset>
          </Form>
        )}
      </div>
    </div>
  )
}

export default CommentContent
