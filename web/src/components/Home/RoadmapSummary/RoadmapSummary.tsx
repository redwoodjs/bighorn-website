import RoadmapDetails from 'src/components/RoadmapDetails/RoadmapDetails'

const RoadmapSummary = () => {
  return (
    <section className="page-grid px-5 md:px-page" id="roadmap">
      <div className="col-span-5">
        <div className="sticky top-5 pr-5">
          <h2 className="section-heading mb-6">Roadmap</h2>
          <h3 className="section-subheading">
            This is a glimpse into what we&apos;re working on and what
            we&apos;ve planned.
          </h3>
        </div>
      </div>

      <div className="col-span-7 pt-10">
        <RoadmapDetails />
      </div>
    </section>
  )
}

export default RoadmapSummary
