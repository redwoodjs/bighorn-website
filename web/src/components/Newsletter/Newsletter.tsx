import { EmailField, Form } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

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
    <section className="page-grid !mb-0">
      <div className="col-span-5 px-5 md:pl-page md:pr-0">
        <h2 className="section-heading mb-6">Fortnightly Newsletter</h2>
        <h3 className="section-subheading">Pure information gold. No spam.</h3>
      </div>
      <div className="col-span-7 px-5 pt-5 md:px-page lg:pr-page lg:pt-18 xl:col-span-6">
        <Form onSubmit={handleSubmit}>
          <fieldset
            disabled={loading}
            className="flex flex-row items-center gap-7 transition-all"
          >
            <EmailField
              name="email"
              placeholder="your@email.com"
              className="h-[53px] w-full flex-1 rounded-[4px] border-1 border-battleshipGray bg-transparent px-7 font-sans text-lg text-white transition-all"
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
      <div className="col-span-6 px-5 md:px-page lg:pr-0">
        <p className="text-lg leading-normal text-battleshipGray">
          Get a summary of what we’ve shipped, articles we’ve written, and
          upcoming events straight to your inbox, every two weeks.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
