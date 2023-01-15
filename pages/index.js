import Link from "next/link";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Button from "../components/button";
import Image from "next/image";
import img from '../public/coin.png'


const CentralDiv = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`


const TransDiv = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 40px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.20) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  
  
`
const BordDiv = styled.div`
  
`
const DivP = styled.p`
  
  margin-bottom: 10px;
  letter-spacing: 1px;
  line-height: 29px;
  font-size: 20px;
  span {
    color: yellow;
    font-weight: bold;
    
  }
`

const CriptImg = styled(Image)`
  width: 250px;
  height: 250px;
  animation: rotation 8s infinite linear;
  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`

export default function Home() {

  return (
    <BordDiv>
      <CentralDiv>
        <CriptImg src={img}/>
        <TransDiv>    
          <h2>Welcome to the Crypto World !</h2>
          <DivP>
              Here you can learn about Cryptocurrencies <br></br> and discover your favorite currencies <br></br> enjoy your stay !</DivP>
          
          <Link href="/search"> <Button butname="Lets go"/>   </Link>
          <div></div>
        </TransDiv>
      </CentralDiv>
    </BordDiv>
  )
}
