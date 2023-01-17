import { useState, useEffect } from 'react';
import AnimeCardInfo from './components/AnimeCardInfo';
import AnimeCard from './components/AnimeCard';
import styled from 'styled-components';
import Pagination from './components/Pagination';

const Container = styled.div`
  display: grid;
  padding-top: 130px;
  padding-bottom: 100px;
  grid-auto-flow: row;

  @media (max-width: 768px) {
    padding-left: 100px;
    right: 0;
  }

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
      top: 15px;
      justify-content: center;
      align-items: center;
      width: 120px;
      right: 70px;
      height: 30px;
      z-index: 1;
    }
  }
`;

export default function HomePage() {
  const [animeData, setAnimeData] = useState([]);
  const [search, setSearch] = useState('');
  const [animeInfo, setAnimeInfo] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(animeData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = animeData.slice(startIndex, endIndex);

  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=100`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };
  useEffect(() => {
    setCurrentPage(0);
    getData();
  }, [search]);

  return (
    <Container>
      <input
        placeholder='🔍 Search animes...'
        onChange={(e) => setSearch(e.target.value)}
      />

      <AnimeCard animeList={currentItems} setAnimeInfo={setAnimeInfo} />
      {animeInfo && <AnimeCardInfo animeInfo={animeInfo} />}
      {animeData ? (
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      ) : (
        ''
      )}
    </Container>
  );
}
