
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import styled from 'styled-components'

const layout = ({children}) => {
  return (
    <div>
        <Navbar/>
            {children}
        <Footer/>
    </div>
  )
}

export default layout