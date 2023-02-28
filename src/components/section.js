export const Section = ({ opened, label, content }) => (
  <div
    className={`flex flex-col ${
      opened ? 'border-b border-gray-300 pb-8 mb-2' : ''
    }`}
  >
    {label}
    {opened && content}
  </div>
)
