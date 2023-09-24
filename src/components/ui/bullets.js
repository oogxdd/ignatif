export const Bullets = ({ items = [] }) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
