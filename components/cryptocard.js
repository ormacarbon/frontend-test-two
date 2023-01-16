import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import tether from '../public/Tether.jpg'

const Colab = styled.div`
  width: 220px;
  
  
`
const Head = styled.div`
   background-color:  black;
   border-radius: 10px 10px 0px 0px;
   display: flex;
   justify-content: center;
   border: 1px solid yellow;
  
`
const Rod = styled.div`
  background: #FFFFFF;
  box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-top: 40px;
  
  padding-bottom: 40px;

  h3 {
    color: #6278F7;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 2px;
    display: flex;
    justify-content: center;
  }
`
const ImgStyled = styled(Image)`
  
  
  border-radius: 50%;
  position: relative;
  
`

const PriceSty = styled.h4`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  color: #6278F7;
`

const cryptocard = ({image, name, price}) => {
  
  return (
    <Colab>
        <Head>
            <ImgStyled 
            src={image} 
            alt="/" 
            width= {100}
            height= {100}
            />
        </Head>
        <Rod>
            <h3>{name}</h3>
            <PriceSty>$ {price.toLocaleString()}</PriceSty>
        </Rod>
    </Colab>
  )
}

export default cryptocard