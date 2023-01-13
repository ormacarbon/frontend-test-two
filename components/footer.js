import React from 'react'
import styled from 'styled-components'

const FooterSec = styled.div`
  background-color: black;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

`

const footer = () => {
  return (
    <FooterSec>
        <span>Next 2021 All Rights Reserved</span>
    </FooterSec>
  )
}

export default footer