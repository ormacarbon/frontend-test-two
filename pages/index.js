import Link from "next/link";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Button from "../components/button";
import Image from 'next/image';
import bgimg from '../public/cripto.jpg'


const CentralDiv = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const StyledImg = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  background-repeat: no-repeat;
  -webkit-filter: blur(5px);
  
`

const TransDiv = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  
  
`
const BordDiv = styled.div`
  
`

export default function Home() {
  return (
    <BordDiv>
      <CentralDiv>
        <StyledImg src={bgimg} alt='/'/>
        <TransDiv>
          <h2>Welcome to the Cripto World</h2>
          <p>Click and enjoy our product</p>
          <Button butname="Click Here"/>  
          <div></div>
        </TransDiv>
      </CentralDiv>
    </BordDiv>
  )
}
