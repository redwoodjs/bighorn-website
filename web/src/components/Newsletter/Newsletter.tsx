import { EmailField, Form } from '@redwoodjs/forms'

const Newsletter = () => {
  return (
    <section className="page-grid">
      <div className="col-span-5 pl-page">
        <h2 className="section-heading mb-6">Fortnightly Newsletter</h2>
        <h3 className="section-subheading">Pure information gold. No spam.</h3>
      </div>
      <div className="col-span-6 pr-page pt-18">
        <Form className="flex items-center gap-7">
          <EmailField
            name="email"
            placeholder="your@email.com"
            className="h-[53px] w-full flex-1 rounded-[4px] border-1 border-battleshipGray bg-transparent px-7 font-sans text-lg text-white"
          />
          <button type="submit" className="button">
            Subscribe
          </button>
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
