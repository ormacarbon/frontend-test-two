import Link from "next/link";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Axios from "axios";
import Trending from "../components/trending";
import { useState, useEffect } from "react";

const AppContainer = styled.div`   
  box-sizing: border-box;
  font-family: "Opens-Sans", sans-serif;
  
  padding: 0;
  margin: 0;
`

export default function Cripto() {

  const [coins, setCoins] = useState([]);
  const [coinsPesquisados, setCoinsPesquisados] = useState([]);


  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/search?query=eth").then((response) => {
      setCoins(response.data.coins);

  });

  }, []);

  return (
    <AppContainer>
      <Trending />
    </AppContainer>
  )
}
