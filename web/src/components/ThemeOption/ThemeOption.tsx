import Icon from '../Icon/Icon'

interface Props {
  name: ThemeType
  selected: boolean
  onClick: (theme: ThemeType) => void
}

const ThemeOption = ({ name, selected, onClick }: Props) => {
  return (
    <button
      className="group flex w-full items-center gap-2"
      onClick={() => onClick(name)}
    >
      <Icon
        className={`${
          selected ? 'text-sulu' : 'text-maiTai'
        } group-hover:text-sulu`}
        id={name}
      />
      <div
        className={`flex-1 text-left font-bold capitalize ${
          selected ? 'text-sulu' : 'text-white'
        }`}
      >
        {name}
      </div>
      {selected ? <Icon className="text-sulu" id="check" /> : <div />}
    </button>
  )
}

export default ThemeOption
