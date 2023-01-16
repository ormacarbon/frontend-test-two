import { useState, useEffect } from 'react';
import AnimeCardInfo from './components/AnimeCardInfo';
import AnimeCard from './components/AnimeCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding-top: 130px;

  input {
    position: absolute;
    text-align: center;
    display: flex;
    top: 100px;
    right: 120px;
    width: 200px;
    height: 30px;
    border-radius: 100px;

    @media (max-width: 768px) {
      padding-top: 1px;
      position: fixed;
      text-align: center;
      display: flex;
      top: 10px;
      justify-content: center;
      align-items: center;
      width: 100px;
      right: 0;
      height: 40px;
      z-index: 1;
    }
  }
`;

export default function HomePage() {
  const [animeData, setAnimeData] = useState([]);
  const [search, setSearch] = useState('');
  const [animeInfo, setAnimeInfo] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(animeData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = animeData.slice(startIndex, endIndex)

  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}`
    );
    const resData = await res.json();
    console.log(resData.data);
    setAnimeData(resData.data);
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <Container>
      {pages}
      <input
        placeholder='🔍 Search animes...'
        onChange={(e) => setSearch(e.target.value)}
      />
 {Array.from(Array(pages), (item, index) => {
        return <button key={index}>{index}</button>
      })}
      <AnimeCard animeList={animeData} setAnimeInfo={setAnimeInfo} />
      {animeInfo && <AnimeCardInfo animeInfo={animeInfo} />}

     
    </Container>
  );
}
