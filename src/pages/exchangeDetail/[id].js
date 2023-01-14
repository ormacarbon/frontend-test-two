import React, {useState } from "react";
import ExchangeDetail from "../../Components/ExchangeDetail";
import {
  HeaderContainer,
  NewsContainer,
  NewsText,
  TickerContainer,
  Tickers,
} from "../../styles/exchangeDetail";
import moment from "moment";
import { SectionTitle } from "../../Components/SectionTitle";
import SEO from "../../Components/SEO";
import BackBtn from "../../Components/BackBtn/index";
import { ExchangeService } from "../../classes";
import Pagination from "../../Components/Pagination";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const exchange = await ExchangeService.getExchange(params.id);
  return {
    props: {
      exchange,
    },
  };
}

export default function ExchangeDetails({ exchange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(exchange.length / perPage);
  const handlePageChange = (page) => {
    if (page < 1) {
      setCurrentPage(1);
    } else if (page > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(page);
    }
  };
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentPageTickers = exchange.tickers.slice(startIndex, endIndex);
  console.log(exchange);
  return (
    <main>
      <SEO name={exchange.name + " | Exchange Detail"} desc={exchange.name} />
      <section id="exchange-detail">
        <ExchangeDetail
          country={exchange.country}
          image={exchange.image}
          name={exchange.name}
          trustScore={exchange.trust_score}
          FaceUrl={exchange.facebook_url}
          MediumUrl={exchange.other_url_1}
          RedditUrl={exchange.other_url_2}
        />
      </section>
      <section id="exchange-tickers">
        <TickerContainer>
          <HeaderContainer>
            <SectionTitle title="Tickers" />
            <BackBtn link={"/exchanges"} />
          </HeaderContainer>
          <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
          <Tickers>
            {currentPageTickers.map((ticker) => (
              <ul key={ticker.coin_id}>
                <li>Base: {ticker.base}</li>
                <li>Spread: {ticker.bid_ask_spread_percentage}%</li>
                <li>Target: {ticker.target}</li>
                <li><Link href={ticker.trade_url}>Click here to start trade</Link></li>
              </ul>
            ))}
          </Tickers>
        </TickerContainer>
      </section>
      <section id="exchange-news">
        <NewsContainer>
          <SectionTitle title="News" />
          {exchange.status_updates.map((news, index) => (
            <NewsText key={index}>
              <label>
                  {moment(news.created_at).format("MMMM Do YYYY, h:mm:ss a")}
              </label>
              <p>{news.description}</p>
            </NewsText>
          ))}
          {exchange.status_updates.length === 0 ? (
            <p className="error">
              No news about this exchange.
            </p>
          ) : (
            ""
          )}
        </NewsContainer>
      </section>
    </main>
  );
}
