const Avatar = ({ alt, size = 42, src }) => {
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
