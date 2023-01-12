import React, { useMemo } from "react";
import axios from "axios";
import ExchangeDetail from "../../Components/ExchangeDetail";
import { NewsContainer, NewsHeader, NewsText } from "./styles";
import moment from "moment";
import { SectionTitle } from "../../Components/SectionTitle";
import SEO from "../../Components/SEO";
import BackBtn from '../../Components/BackBtn/index'

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/exchanges/${params.id}`
  );
  const data = await response.data;
  return {
    props: {
      exchange: data,
    },
  };
}

export async function getStaticPaths() {
  //get all the possible id's
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/exchanges"
  );
  const data = await response.data;
  const paths = data.map((exchange) => ({
    params: { id: exchange.id },
  }));

  return { paths, fallback: false };
}

export default function exchange({ exchange }) {
  return (
    <>
      <main>
        <SEO name={exchange.name + ' | Exchange Detail'} desc={exchange.name}/>
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
        <section id="exchange-news">
          <NewsContainer>
            <NewsHeader>
              <SectionTitle title="News" />
              <BackBtn link={'/exchanges'}/>
            </NewsHeader>
            {exchange.status_updates.map((news, index) => (
              <NewsText key={index}>
                <label>
                  {useMemo(
                    () =>
                      moment(news.created_at).format("MMMM Do YYYY, h:mm:ss a"),
                    [exchange]
                  )}
                </label>
                <p>{news.description}</p>
              </NewsText>
            ))}
            {exchange.status_updates.length === 0 ? <p className="error">Sorry 😔, we don´t have any news about this exchange.</p> : ""}
          </NewsContainer>
        </section>
      </main>
    </>
  );
}
