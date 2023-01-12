import PaginationComponent from "../components/PaginationComponents";
import PaginationSelector from "../components/PaginationSelector";

import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Home() {

 
  const [search, SetSearch] = useState("");
  const [animes, setAnimes] = useState([]);
  const [value, setValue] = useState("");
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(animes.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = animes.slice(startIndex, endIndex);

  const http = {
    method: "get",
    url: `https://api.jikan.moe/v4/anime?q=${search}`,
    headers: {},
  };

  async function fetchData() {
    try {
      const response = await axios(http);
      setAnimes(response.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
    setCurrentPage(0);
  }, [itensPerPage]);
  
  
  const httpTop = {
    method: "get",
    url: `https://api.jikan.moe/v4/top/anime`,
    headers: {},
  };
  
  async function fetchTop() {
    try {
      const response = await axios(httpTop);
      setAnimes(response.data.data);
    } catch (err) {
      console.error(err);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value && target.length > 0) return;
    setValue("");
  };

  const router = useRouter()
  
  function handleClick(id) {
    router.push(`/animes/${id}`)
  }

  return (
    <>
      <ContainerSearch
        onSubmit={handleSubmit}
        onChange={(event) => setValue(event.target.value)}
      >
        <input
          type="text"
          placeholder="Search for anime..."
          value={value}
          onChange={(e) => SetSearch(e.target.value)}
        />
        <button type="submit" onClick={fetchData}>
          Search
        </button>
        <button type="submit" onClick={fetchTop}>
          Top Animes
        </button>
      </ContainerSearch>
      <PaginationContainer>
        <PaginationSelector
          itensPerPage={itensPerPage}
          setItensPerPage={setItensPerPage}
        />
        <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} />
      </PaginationContainer>
      <AnimeContainer>
        {currentItens.length > 0
          ? currentItens.map((item, index) => {
              return (
                <CardContainer key={index}>
                  <IMGContainer>
                    <img
                      src={item.images?.jpg?.large_image_url}
                      width="250px"
                      height="250px"
                    />
                  </IMGContainer>
                  <Title>{item.title}</Title>
                  <ButtonContainer>
                  <button onClick={() => handleClick(item.mal_id)}>See more</button>
                  </ButtonContainer>
                </CardContainer>
              );
            })
          : null}
      </AnimeContainer>
    </>
  );
}

const ContainerSearch = styled.form`
  display: flex;
  justify-content: center;
  margin: 10px;

  input {
    width: 200px;
    margin: 0 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #333;
    color: ${props => props.theme.color};

    &:focus:hover {
      border: 1px solid transparent;
    }
  }

  button {
    width: 100px;
    margin: 0 10px;
    border: none;
    outline: none;
    color: ${props => props.theme.backgroundColor};
    background: ${props => props.theme.buttonSearchBackgroundColor};
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;

    &:hover {
      background: ${props => props.theme.buttonSearchHoverColor};
    }
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
`;

const AnimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
  position: relative;
  background: ${(props) => props.theme.backgroundColor};
  height: 82.3vh;
  overflow-y: scroll;
  margin-left: 10px;

  @media (max-width: 1280px) {
    padding: 0px;
    margin-left: 0px;
  }
`;
const IMGContainer = styled.div`
  min-width: 250px;
  min-height: 250px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-width: 325px;
  max-width: 325px;
  min-height: 350px;
  max-height: 0 auto;
  margin: 10px 10px 10px 0px;
  background: ${(props) => props.theme.backgroundColor};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 1280px) {
    margin: 0 auto;
  }
`;
const Title = styled.h3`
  text-align: center;
  margin: 0 auto;
  font-size: 23px;
  font-weight: bold;
  color: ${(props) => props.theme.color};
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: relative;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    text-decoration: none;
    font-size: 18px;
    outline: none;
    background: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.buttonColorHover};
    cursor: pointer;
    border-radius: 8px;
    border: none;
    padding: 10px;
    &:hover {
      background: ${(props) => props.theme.hoverColor};
    }
  }
`;
