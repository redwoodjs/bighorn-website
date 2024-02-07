const Browser = ({ children }) => {
  return (
    <div className="rounded-[4px] border-2 border-maiTai">
      <>
        <div className="flex justify-start gap-2 border-b-1 border-b-maiTai px-[14px] py-3">
          <div className="circle size-4 border-2 border-maiTai"></div>
          <div className="circle size-4 border-2 border-maiTai"></div>
          <div className="circle size-4 border-2 border-maiTai"></div>
        </div>
        <div className="px-6 py-4 font-mono text-maiTai">{children}</div>
      </>
    </div>
  )
}

export default Browser
