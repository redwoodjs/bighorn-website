import { useState } from 'react'

import Icon from 'src/components/Icon/Icon'
import Tooltip from 'src/components/Tooltip/Tooltip'

interface LinkButtonProps {
  handleClick: () => void
}

const LinkButton = ({ handleClick }: LinkButtonProps) => {
  const [isLinkTooltipShowing, setIsLinkTooltipShowing] = useState(false)

  return (
    <div className="relative">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <Tooltip direction="top" showing={isLinkTooltipShowing}>
          Copy Link
        </Tooltip>
      </div>
      <button
        className="py-2"
        onClick={handleClick}
        onMouseOver={() => setIsLinkTooltipShowing(true)}
        onFocus={() => setIsLinkTooltipShowing(true)}
        onMouseOut={() => setIsLinkTooltipShowing(false)}
        onBlur={() => setIsLinkTooltipShowing(false)}
      >
        <Icon id="link" />
      </button>
    </div>
  )
}

export default LinkButton
