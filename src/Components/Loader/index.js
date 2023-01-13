import React from 'react'
import {Loader} from './styles'

export default function LoaderComponent() {
  return (
    <Loader>
         <div className="lds-ripple"><div></div><div></div></div>
         <span>Loading</span>
    </Loader>
  )
}
