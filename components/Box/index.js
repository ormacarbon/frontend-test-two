import React from 'react'
import { Container } from './styles'

function Box({title, children}) {
  return(
    <Container>
      {title && 
        <header className='title'>
          <h3>{title}</h3>
        </header>
      }
      
      {children}
    </Container>
  )
}
export default Box;