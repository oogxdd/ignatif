export const Paragraph = ({ children, className = '' }) => (
  <div className={`text-sand-12 text-[15px] sm:text-base ${className}`}>
    {children}
  </div>
)
