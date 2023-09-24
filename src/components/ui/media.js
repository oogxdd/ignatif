// gif
// video
// image
import { useState } from 'react'
import { Modal } from '@/components'
import styled from 'styled-components'

export const Image = ({ type = 'image', src = '', alt = '', caption = '' }) => {
  const [expanded, setExpanded] = useState(false)

  // if (type === 'image') {
  //   return (
  //     <span>
  //       <div />
  //     </span>
  //   )
  // }

  return (
    <>
      {expanded && <Modal>yo</Modal>}
      <Container className="max-w-md cursor-zoom-in">
        <ImageStyled
          src={src}
          alt={alt}
          onClick={() => setExpanded(!expanded)}
        />
        <Caption>{caption}</Caption>
      </Container>
    </>
  )
}

const Container = styled.div.attrs({
  className: 'flex flex-col border rounded-md',
})``
const ImageStyled = styled.img``
const Caption = styled.span``
