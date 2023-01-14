import React from 'react'
import { Title } from './styles'

export const SectionTitle = (props) => {
  return (
    <Title>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </Title>
  )
}
