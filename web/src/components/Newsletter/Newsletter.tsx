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
    <section className="page-grid">
      <div className="col-span-5 pl-page">
        <h2 className="section-heading mb-6">Fortnightly Newsletter</h2>
        <h3 className="section-subheading">Pure information gold. No spam.</h3>
      </div>
      <div className="col-span-6 pr-page pt-18">
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading} className="flex items-center gap-7">
            <EmailField
              name="email"
              placeholder="your@email.com"
              className="h-[53px] w-full flex-1 rounded-[4px] border-1 border-battleshipGray bg-transparent px-7 font-sans text-lg text-white"
            />
            <button type="submit" className="button">
              Subscribe
            </button>
          </fieldset>
        </Form>
      </div>
      <div className="col-span-6 pl-page">
        <p className="text-lg leading-normal text-battleshipGray">
          Get a summary of what we’ve shipped, articles we’ve written, and
          upcoming events straight to your inbox, every two weeks.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
