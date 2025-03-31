import { useEffect } from 'react'

import HelloBar from 'src/components/HelloBar/HelloBar'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  // scrolls down the page when a #hash is present in the URL
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1))
        el?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 100)
    }
  }, [])

  return (
    <div>
      <HelloBar />
      {children}
    </div>
  )
}

export default BaseLayout
