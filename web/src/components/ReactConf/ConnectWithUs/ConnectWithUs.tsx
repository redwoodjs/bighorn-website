import { IconName } from 'public/icons/name'

import Icon from 'src/components/Icon/Icon'
import { Constants } from 'src/helpers/Constants'

interface Props {
  link: string
  heading: string
  icon: IconName
  text: string
}

const ConnectOption = ({ link, heading, icon, text }: Props) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="rounded-md border-2 border-maiTai p-4 hover:border-sulu md:p-10"
  >
    <div className="mb-3 text-maiTai">
      <Icon id={icon} size={36} />
    </div>
    <h2 className="mb-3 text-lg font-bold text-white md:text-2xl">{heading}</h2>
    <p className="text-base md:text-lg">{text}</p>
  </a>
)

const ConnectWithUs = () => {
  return (
    <div className="page-content py-20">
      <h1 className="mb-10 font-serif text-5xl text-maiTai md:text-[72px]">
        Connect with us
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <ConnectOption
          link={Constants.DISCORD}
          heading="Discord"
          icon="discord"
          text="Water cooler, relationship building, quick discussion and help."
        />
        <ConnectOption
          link={Constants.DISCOURSE}
          heading="Discourse"
          icon="discourse"
          text="Long-form discussions about Redwood, troubleshooting, show & tell."
        />
        <ConnectOption
          link={Constants.X}
          heading="Twitter / X"
          icon="x"
          text="Follow @redwoodjs for updates, new releases, and community meetup announcements."
        />
      </div>
    </div>
  )
}

export default ConnectWithUs
