import styled from 'styled-components'
import { LinkIcon } from '@heroicons/react/24/solid'

export const Link = ({ href = '', children, inline = false }) => {
  if (inline) {
    return (
      <LinkStyled href={href} target="_blank">
        {children}
      </LinkStyled>
    )
  }

  return (
    <div className="flex items-center">
      <LinkIcon className="h-6 w-6 mr-2 -mb-1" />
      <LinkStyled href={href} target="_blank">
        {children}
      </LinkStyled>
    </div>
  )
}

const LinkStyled = styled.a.attrs({
  className:
    'text-3xl text-sky-500 hover:underline font-semibold cursor-pointer hover:opacity-70 tracking-normal',
})`
  //
`
