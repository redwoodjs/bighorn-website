const BentoOpenSource = ({ className = '' }) => {
  return (
    <div className={`bento-box third px-bentoX py-bentoY ${className}`}>
      <h3>Independent Open Source Project</h3>
      <p className="mb-8">
        We’re obsessed with creating the best possible developer experience and
        building a framework that enables the community to build at scale.
      </p>
      <img src="/images/pwv.svg" alt="Preston-Werner Ventures" />
    </div>
  )
}

export default BentoOpenSource
