import Link from "next/link";
import Image from 'next/image';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Cardzin from "../components/cardzin";
import Navbar from "../components/navbar";
import Axios from "axios";
import { useState, useEffect } from "react";

const AppContainer = styled.div`
  box-sizing: border-box;
  font-family: "Opens-Sans", sans-serif;
  padding: 0;
  margin: 0;
`
const StySearch = styled.div`
  display: flex;
  
  justify-content: center;
  font-size: 6rem;
  margin-top: 60px;
  @media (max-width: 768px) { 
    font-size: 2.5rem;
    margin-left: 50px;
  };
  
`
const StyPut = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  
  
 
`
const StyInp = styled.input`
  border-radius: 30px;
  border: none;  
  color: white;
  outline: none;
  
  
  background-color: transparent;
  padding: 20px;
  width: 400px;
  ::placeholder{
    font-size: 18px;
    
  }
`

const DivIn = styled.div`
  border: 2px solid gray;
  border-radius: 20px;
  @media (max-width: 768px) { 
    margin-left: 50px;
  };
  

`

const DivCoins = styled.div`
  margin-top: 60px;
  margin-left: 6px;
  @media (max-width: 768px) { 
    margin-left: 90px;
  };
  
  
  
  
`

const CardCoins = styled.div`
  margin-left: 45px;
  display: inline-block;
  cursor: pointer;
  margin-bottom: 66px;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  &:hover {
    transform: scale(1.1, 1.1);
  }

`

export default function Search() {

  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([])
  const [filterval, setFilterval] = useState('');
  
  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/search?query=eth").then((response) => {
      setData(response.data.coins);
      setSearchApiData(response.data.coins);   
  });

  }, []);

  const handleFilter=(evento)=> {
    if(evento.target.value == '') {
      setData(searchApiData)
    } else {
      const filterResult = searchApiData.filter( coin => coin.name.toLowerCase().includes(evento.target.value.toLowerCase()))
      setData(filterResult)
    }
    setFilterval(evento.target.value)

  }




  return (
    <AppContainer>
      <StySearch>
        <div>
          <h5>Search for Coins Here</h5>
        </div>
      </StySearch>
      <StyPut>
        <DivIn> 
          <StyInp 
              placeholder="Search Coins"  
              
              onChange = { evento => { handleFilter(evento)
                               
              }}
          ></StyInp>     
        </DivIn>
      </StyPut>

      <DivCoins>
        { data.map( coin => (
          <CardCoins>
            <Cardzin src={coin.large} nome={coin.name} />   
          </CardCoins>   
        ))}     
      </DivCoins>

    </AppContainer>
  );
}
