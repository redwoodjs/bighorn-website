interface AvatarProps {
  alt: string
  size?: number
  src?: string
}

const Avatar = ({ alt = '?', size = 42, src = '' }: AvatarProps) => {
  if (!src) {
    return (
      <div
        className="center rounded-full bg-coffeeBean text-xl font-light text-white"
        style={{ height: size, width: size }}
      >
        <span>{alt[0]}</span>
      </div>
    )
  }

  return (
    <div>
      <img
        alt={alt}
        src={src}
        className="rounded-full object-cover"
        style={{ height: size, width: size }}
      />
    </div>
  )
}

export default Avatar
