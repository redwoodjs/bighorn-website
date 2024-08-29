import { useState } from 'react'

import Avatar from 'src/components/Avatar/Avatar'
import Icon from 'src/components/Icon/Icon'
import Tooltip from 'src/components/Tooltip/Tooltip'

interface CommentContentProps {
  lastEdited?: string
  isThreaded?: boolean
}

const CommentContent = ({
  isThreaded = false,
  lastEdited = '',
}: CommentContentProps) => {
  const [isEditTooltipShowing, setIsEditTooltipShowing] = useState(false)

  return (
    <div className={`px-10 ${isThreaded ? 'threaded-comment' : ''}`}>
      <div className="mb-10 flex justify-between">
        {/* left side - author information */}
        <div className="relative z-20 flex items-center gap-3">
          <Avatar
            alt="Amy Dutton"
            src="https://picsum.photos/seed/1724890676581/100/100"
          />
          <div>
            <div className="text-lg text-black dark:text-white">Amy Dutton</div>
            <div className="text-sm font-bold uppercase text-battleshipGray">
              Core Team
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center gap-8">
          {/* edit button - should only display if  you're the author or admin */}
          <div className="relative">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <Tooltip direction="top" showing={isEditTooltipShowing}>
                {lastEdited ? 'Last edited August 28, 2024' : 'Edit'}
              </Tooltip>
            </div>
            <button
              onMouseOver={() => setIsEditTooltipShowing(true)}
              onFocus={() => setIsEditTooltipShowing(true)}
              onMouseOut={() => setIsEditTooltipShowing(false)}
              onBlur={() => setIsEditTooltipShowing(false)}
              className="group flex items-center gap-2 text-sm font-bold text-battleshipGray hover:text-sulu"
            >
              2
              <span className="text-maiTai group-hover:text-sulu">
                <Icon id="edit" />
              </span>
            </button>
          </div>

          {/* time */}
          <div className="text-sm font-bold text-battleshipGray">23d</div>
        </div>
      </div>

      {/* comment content */}
      <div className="pl-comment mb-8">
        <p>Content</p>
      </div>
    </div>
  )
}

export default CommentContent
