import React from 'react'
import { Button } from './styles'

function iconButton(props) {
  
  return(
    <Button {...props}>
        {props.icon}
        {props.title}
    </Button>
  )
}
export default iconButton;