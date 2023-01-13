import React from 'react'
import styled from 'styled-components'

const FooterSec = styled.div`
  background-color: black;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

`

const footer = () => {
  return (
    <FooterSec>
        <p>Next 2021 All Rights Reserved</p>
    </FooterSec>
  )
}

export default footer