import React from 'react'
import { HighlightContainer } from './style'

export default function Highlights({ info, value, description }) {
  return (
    <HighlightContainer>
      <p>{ info }</p>
      <p>{ value }</p>
    </HighlightContainer>
  )
}
