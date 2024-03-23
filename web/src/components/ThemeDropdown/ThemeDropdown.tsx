import ThemeOption from '../ThemeOption/ThemeOption'

interface Props {
  onClick: (theme: ThemeType) => void
  selected: ThemeType
}

const ThemeDropdown = ({ selected, onClick }: Props) => {
  return (
    <div className="nav-dropdown flex w-[185px] flex-col gap-3 px-4 py-5">
      <ThemeOption
        onClick={onClick}
        name="system"
        selected={selected === 'system'}
      />
      <ThemeOption
        onClick={onClick}
        name="light"
        selected={selected === 'light'}
      />
      <ThemeOption
        onClick={onClick}
        name="dark"
        selected={selected === 'dark'}
      />
    </div>
  )
}

export default ThemeDropdown
