import React from 'react'
import {Loader} from './styles'

export default function LoaderComponent() {
  return (
    <Loader>
         <div class="lds-ripple"><div></div><div></div></div>
         <span>Loading</span>
    </Loader>
  )
}
