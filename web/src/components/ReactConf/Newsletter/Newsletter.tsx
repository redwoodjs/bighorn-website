import { EmailField, Form } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const CREATE_NEWSLETTER_MUTATION = gql`
  mutation CreateNewsletterMutation($email: String!) {
    createNewsletter(input: { email: $email }) {
      id
    }
  }
`

const Newsletter = () => {
  const [createNewsletter, { loading, error }] = useMutation(
    CREATE_NEWSLETTER_MUTATION,
    {
      onCompleted: () => {
        if (error) {
          console.error(error)
          toast.error(error.message)
        }
        toast.success('Thank you for subscribing!')
      },
    }
  )

  const handleSubmit = (data: { email: string }) => {
    createNewsletter({ variables: data })
  }

  return (
    <div>
      <div>
        <h3 className="section-subheading mb-5">
          Pure information gold. No spam.
        </h3>
      </div>
      <div className="mb-5">
        <p className="text-lg leading-normal text-battleshipGray">
          Get a summary of what we’ve shipped, articles we’ve written, and
          upcoming events straight to your inbox, every two weeks.
        </p>
      </div>
      <div className="mb-5">
        <Form onSubmit={handleSubmit}>
          <fieldset
            disabled={loading}
            className="flex flex-col gap-7 transition-all sm:flex-row sm:items-center"
          >
            <EmailField
              name="email"
              placeholder="your@email.com"
              className="h-[53px] w-full rounded-[4px] border-1 border-battleshipGray bg-transparent px-7 font-sans text-lg text-white transition-all sm:flex-1"
            />
            <button
              type="submit"
              className={`button transition-all ${loading ? 'opacity-50' : ''}`}
              disabled={loading}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </fieldset>
        </Form>
      </div>
    </div>
  )
}

export default Newsletter
