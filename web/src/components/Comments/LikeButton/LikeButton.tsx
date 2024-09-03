import { useState } from 'react'

import Icon from 'src/components/Icon/Icon'
import Tooltip from 'src/components/Tooltip/Tooltip'

const LikeButton = ({ like, unlike, liked }) => {
  const [isLikeTooltipShowing, setIsLikeTooltipShowing] = useState(false)
  const [isLiked, setIsLiked] = useState(liked)

  return (
    <div className="relative">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <Tooltip direction="top" showing={isLikeTooltipShowing}>
          Like
        </Tooltip>
      </div>
      {isLiked ? (
        <button
          className="py-2"
          onClick={() => {
            setIsLiked(false)
            unlike()
          }}
          onMouseOver={() => setIsLikeTooltipShowing(true)}
          onFocus={() => setIsLikeTooltipShowing(true)}
          onMouseOut={() => setIsLikeTooltipShowing(false)}
          onBlur={() => setIsLikeTooltipShowing(false)}
        >
          <Icon id="heartFilled" />
        </button>
      ) : (
        <button
          className="py-2"
          onClick={() => {
            setIsLiked(true)
            like()
          }}
          onMouseOver={() => setIsLikeTooltipShowing(true)}
          onFocus={() => setIsLikeTooltipShowing(true)}
          onMouseOut={() => setIsLikeTooltipShowing(false)}
          onBlur={() => setIsLikeTooltipShowing(false)}
        >
          <Icon id="heart" />
        </button>
      )}
    </div>
  )
}

export default LikeButton
