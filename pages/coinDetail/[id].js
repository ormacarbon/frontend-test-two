import axios from "axios";
import React from "react";
import { AboutContainer, CoinDetail } from "./styles";
import BackBtn from "../../Components/BackBtn";
import Head from "next/head";
import SEO from "../../Components/SEO";

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${params.id}`
  );
  const data = await response.data;
  return {
    props: {
      coin: data,
    },
  };
}

export async function getStaticPaths() {
  //get all the possible id's
  const response = await axios.get("https://api.coingecko.com/api/v3/coins");
  if (response.status === 200) {
    const data = await response.data;
    const paths = data.map((coin) => ({
      params: { id: coin.id },
    }));
    return { paths, fallback: false };
  } else {
    return { paths: [], fallback: false };
  }
}

export default function CryptoDetail({ coin }) {
  return (
    <>
      <main>
        <SEO name={coin.name + ' | Coin Detail'} desc={coin.name}/>
        <section id='coins-details'>
        <CoinDetail>
          <AboutContainer>
            <div className="header-text">
              <div className="box">
                <img src={coin.image.small} alt={coin.name} />
                <p>{coin.name}</p>
                <BackBtn key={coin.id} link={'/'} />
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: coin.description.en }}
              className="text"
            ></p>
          </AboutContainer>
        </CoinDetail>
        </section>
      </main>
    </>
  );
}
