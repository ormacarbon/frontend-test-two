import React from 'react'
import { Input } from './styles'

export default function SearchComponent({onChange}) {
  return (
        <Input
        type='text'
        onChange={onChange}
       />
  )
}
