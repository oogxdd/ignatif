export const Date = ({ children, label = '1999' }) => {
  return (
    <div className="flex flex-col">
      <span className="-ml-2 mb-3">{label}</span>
      <div className="flex flex-col space-y-6">{children}</div>
    </div>
  )
}
