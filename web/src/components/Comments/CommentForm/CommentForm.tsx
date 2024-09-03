import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from 'types/graphql'

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
  showLabel?: boolean
  upgradeGuide: string
  threadId?: number
}

// set up the mutation
const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

const CommentForm = ({
  showLabel = true,
  upgradeGuide,
  threadId,
}: CommentFormProps) => {
  const { currentUser } = useAuth()
  const formMethods = useForm()

  // set up the Apollo Mutation
  const [createComment, { loading }] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(CREATE_COMMENT_MUTATION, {
    refetchQueries: [
      {
        query: CommentsQuery,
        variables: { upgradeGuide },
      },
    ],
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
    const subscribeAuthorToUpdates = data[`subscribe_${threadId}`]
      ? true
      : false

    createComment({
      variables: {
        input: {
          authorId: currentUser?.id || '',
          comment: data.reply,
          threadId,
          subscribeAuthorToUpdates,
          upgradeGuide,
        },
      },
    })
    formMethods.reset()
  }

  return (
    <div className="flex flex-1 gap-4">
      <Avatar alt={currentUser?.name} />
      <div className="flex-1">
        <Form onSubmit={handleSubmit} formMethods={formMethods}>
          <fieldset disabled={loading}>
            {showLabel && <Label name="reply">Write a Reply</Label>}
            <TextAreaField className="w-full" id="reply" name="reply" />
            <div className="flex justify-between">
              <Label name={`subscribe_${threadId}`}>
                <CheckboxField name={`subscribe_${threadId}`} defaultChecked />
                Subscribe to Updates
              </Label>
              <Submit className="flex items-center gap-2 rounded-md border-1 border-christi px-7 py-4 font-bold text-christi hover:bg-christi hover:text-black dark:border-sulu dark:text-sulu dark:hover:bg-sulu">
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
