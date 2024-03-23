interface Props {
  title: string
  subtitle?: string
}

const Header = ({ title, subtitle = '' }: Props) => {
  return (
    <header>
      <h1 className="mb-3 font-serif text-7xl font-bold text-maiTai">
        {title}
      </h1>
      {subtitle && (
        <h2 className="font-sans text-2xl font-extralight text-white">
          {subtitle}
        </h2>
      )}
    </header>
  )
}

export default Header
