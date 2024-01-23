import { EmailField, Form } from '@redwoodjs/forms'

const Newsletter = () => {
  return (
    <section className="page-grid">
      <div className="col-span-4 pl-page">
        <h2>Fortnightly Newsletter</h2>
        <h3>Pure information gold. No spam.</h3>
      </div>
      <div className="col-span-6 pr-page">
        <Form>
          <EmailField name="email" placeholder="your@email.com" />
          <button type="submit">Subscribe</button>
        </Form>
      </div>
      <div className="col-span-5 pl-page">
        <p>
          Get a summary of what we’ve shipped, articles we’ve written, and
          upcoming events straight to your inbox, every two weeks.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
