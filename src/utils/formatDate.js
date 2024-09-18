// export const formatDate = (dateString) => {
//   const options = { year: 'numeric', month: 'short' }
//   return new Date(dateString).toLocaleDateString('en-US', options)
// }

export function formatDate(dateString) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const date = new Date(dateString)
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${month} ${year}`
}
