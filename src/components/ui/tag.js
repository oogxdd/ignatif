// types:
// - frontend
// - backend
// - design
// - ai
// - integrations (no-code)
// - desktop
// - mobile
import { useState } from 'react'

export const Tag = ({ children, type = 'default' }) => {
  const [hovered, setHovered] = useState(false)
  let typeClassNames = ''
  let style = {}

  if (type === 'default' || type === 'mobile' || type === 'desktop') {
    typeClassNames = 'hover:text-opacity-60 hover:border-gray-600'
  }

  if (type === 'mobile') {
    typeClassNames =
      'hover:text-opacity-100 hover:text-yellow-400 hover:border-yellow-500'
  }

  if (type === 'desktop') {
    typeClassNames =
      'hover:text-opacity-100 hover:text-blue-400 hover:border-blue-500'
  }

  if (type === 'frontend') {
    typeClassNames =
      'hover:text-opacity-100 hover:text-orange-400 hover:border-orange-500'
  }

  if (type === 'backend') {
    typeClassNames =
      'hover:text-opacity-100 hover:text-indigo-400 hover:border-indigo-500'
  }

  if (type === 'design') {
    typeClassNames =
      'hover:text-opacity-100 hover:text-emerald-400 hover:border-emerald-500'
  }

  if (type === 'ai') {
    // rainbow
    typeClassNames =
      'hover:text-opacity-100 hover:text-rose-400 hover:border-rose-500'

    // style = {
    //   // border
    //   borderImage:
    //     'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
    //   borderImageSlice: 1,

    //   // text
    //   background:
    //     'linear-gradient(to bottom right, #b827fc 30%, #2c90fc 40%, #38d21a 50%, #fec837 60%, #fd1892 70%)',
    //   WebkitBackgroundClip: 'text',
    //   WebkitTextFillColor: 'transparent',
    // }
  }

  if (type === 'integrations') {
    typeClassNames =
      'hover:text-opacity-100 hover:text-violet-400 hover:border-violet-500'
  }

  return (
    <span
      className={`mr-2 font-extralight px-3 text-4xl border rounded-sm border-gray-300 text-gray-900 text-opacity-20 cursor-default ${typeClassNames}`}
      style={hovered ? style : {}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  )
}
