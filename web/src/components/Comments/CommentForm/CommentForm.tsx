import {
  Form,
  Label,
  TextAreaField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import Avatar from 'src/components/Avatar/Avatar'
import Icon from 'src/components/Icon/Icon'

interface CommentFormProps {
  id: string
  showLabel?: boolean
}

const CommentForm = ({ id, showLabel = true }: CommentFormProps) => {
  return (
    <div className="flex flex-1 gap-4">
      <Avatar
        alt="Amy Dutton"
        src="https://picsum.photos/seed/1724890676581/100/100"
      />
      <div className="flex-1">
        <Form>
          {showLabel && <Label name="reply">Write a Reply</Label>}
          <TextAreaField className="w-full" id="reply" name="reply" />
          <div className="flex justify-between">
            <Label name={`subscribe_${id}`}>
              <CheckboxField name={`subscribe_${id}`} />
              Subscribe to Updates
            </Label>
            <Submit className="flex items-center gap-2 rounded-md border-1 border-sulu px-7 py-4 font-bold text-sulu hover:bg-sulu hover:text-black">
              <Icon id="check" />
              Submit
            </Submit>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default CommentForm
