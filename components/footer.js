import React from 'react'
import styled from 'styled-components'

const FooterSec = styled.div`
  background-color: black;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);


`

const footer = () => {
  return (
    <FooterSec>
        <span>Next 2021 All Rights Reserved</span>
    </FooterSec>
  )
}

export default footer