import Link from "next/link";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Trending from "../components/trending";
const AppContainer = styled.div`   
  box-sizing: border-box;
  font-family: "Opens-Sans", sans-serif;
  
  padding: 0;
  margin: 0;
`

export default function Cripto() {
  return (
    <AppContainer>
      <Trending/>
    </AppContainer>
  )
}
