import React from 'react'
import Image from 'next/image'
import { Container } from './styles'

function Frame(props) {
  return(
    <Container>
      <Image
        src={props.src}
        alt={props.alt}
        unoptimized={props.unoptimized}
        width={props.width}
        height={props.height}
        priority={props.priority}
      />
    </Container>
  )
}
export default Frame;