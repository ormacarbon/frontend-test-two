import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import img from "../public/coin.png";
import Axios from "axios";
import Cardpreco from "../components/cardpreco";

import Pagination from "../components/pagination";

import { useEffect, useState } from "react";

const BordDiv = styled.div``;
const GalerSty = styled.div`
  
  display: flex;
  align-items: center;
  margin-bottom: -10px;
  justify-content: center;

  h5 {
    font-size: 5rem;
    @media (max-width: 768px) { 
    font-size: 2rem;
    margin-right: 25px;
  };
  }

  
`;

const CriptImg = styled(Image)`
  width: 160px;
  height: 160px;
  @media (max-width: 768px) {
    visibility: hidden;
  }
  animation: rotation 8s infinite linear;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;



export default function Galery() {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(21);

  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      setCoinsData(response.data);
    });
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <BordDiv>
      <GalerSty>
        <CriptImg src={img} />
        <h5>Crypto Gallery</h5>
      </GalerSty>
      <Cardpreco coinsData={currentPosts} />
      <Pagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </BordDiv>
  );
}
