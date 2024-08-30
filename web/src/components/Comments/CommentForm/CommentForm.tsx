import {
  Form,
  Label,
  TextAreaField,
  CheckboxField,
  Submit,
  SubmitHandler,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Avatar from 'src/components/Avatar/Avatar'
import { QUERY as CommentsQuery } from 'src/components/Comments/CommentsCell/CommentsCell'
import Icon from 'src/components/Icon/Icon'

interface CommentFormProps {
  id: string
  showLabel?: boolean
  upgradeGuide: string
  parentComment?: string | null
}

// set up the mutation
const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation(
    $authorId: String!
    $upgradeGuide: String!
    $comment: String!
    $subscribeToUpdates: Boolean!
    $parentComment: String
  ) {
    createComment(
      input: {
        authorId: $authorId
        upgradeGuide: $upgradeGuide
        comment: $comment
        visible: true
        flagged: false
        bookmarked: false
        editCount: 0
        parentCommentId: $parentComment
      }
      subscribeToUpdates: $subscribeToUpdates
    ) {
      id
    }
  }
`

const CommentForm = ({
  id,
  showLabel = true,
  upgradeGuide,
  parentComment = null,
}: CommentFormProps) => {
  const { currentUser } = useAuth()
  const formMethods = useForm()

  // set up the Apollo Mutation
  const [createComment, { loading }] = useMutation(CREATE_COMMENT_MUTATION, {
    refetchQueries: [CommentsQuery],
    onCompleted: () => {
      toast.success('Comment submitted')
    },
    onError: (error) => {
      console.error('Failed to create comment', error)
      toast.error('Failed to create comment')
    },
  })

  interface FormValues {
    reply: string
    [key: string]:
      | boolean
      | string /* checkbox for determining if the user wants to subscribe to updates */
  }

  const handleSubmit: SubmitHandler<FormValues> = (data) => {
    console.log({ parentComment })
    const subscribeToUpdates = data[`subscribe_${id}`]
    createComment({
      variables: {
        authorId: currentUser.id,
        upgradeGuide,
        comment: data.reply,
        subscribeToUpdates,
        parentComment,
      },
    })
    formMethods.reset()
  }

  // if (!currentUser) return null

  return (
    <div className="flex flex-1 gap-4">
      <Avatar alt="Amy Dutton" />
      <div className="flex-1">
        <Form onSubmit={handleSubmit} formMethods={formMethods}>
          <fieldset disabled={loading}>
            {showLabel && <Label name="reply">Write a Reply</Label>}
            <TextAreaField className="w-full" id="reply" name="reply" />
            <div className="flex justify-between">
              <Label name={`subscribe_${id}`}>
                <CheckboxField name={`subscribe_${id}`} defaultChecked />
                Subscribe to Updates
              </Label>
              <Submit className="flex items-center gap-2 rounded-md border-1 border-sulu px-7 py-4 font-bold text-sulu hover:bg-sulu hover:text-black">
                <Icon id="check" />
                Submit
              </Submit>
            </div>
          </fieldset>
        </Form>
      </div>
    </div>
  )
}

export default CommentForm
