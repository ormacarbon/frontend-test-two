import Link from "next/link";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Button from "../components/button";


const CentralDiv = styled.div`
  height: 84.9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export default function Home() {
  return (
    <div>
      <CentralDiv>
        <div>
          <h2>Welcome to the Cripto World</h2>
          <p>Click and enjoy our product</p>
          <Button butname="Click Here"/>  
          <div></div>
        </div>
      </CentralDiv>
    </div>
  )
}
