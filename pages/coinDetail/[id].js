import axios from "axios";
import React from "react";
import { AboutContainer, CoinDetail } from "./styles";
import { IoCaretBackSharp } from "react-icons/io5";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  const data = await response.data;
  return {
    props: {
      coin: data,
    },
  };
}

export default function CryptoDetail({ coin }) {
  return (
    <CoinDetail>
      <AboutContainer>
        <div className="header-text">
          <div className="box">
            <img src={coin.image.small} alt={coin.name} />
            <p>{coin.name}</p>
          <Link href="/" className="back">
            <IoCaretBackSharp />
            <p>Voltar</p>
          </Link>
          </div>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: coin.description.en }}
          className="text"
        ></p>
      </AboutContainer>
    </CoinDetail>
  );
}
