import React, { useMemo } from "react";
import axios from "axios";
import ExchangeDetail from "../../Components/ExchangeDetail";
import { NewsContainer, NewsHeader, NewsText } from "./styles";
import moment from "moment";
import { SectionTitle } from "../../Components/SectionTitle";
import SEO from "../../Components/SEO";
import BackBtn from '../../Components/BackBtn/index'
import { ExchangeService } from "../../classes";

export async function getServerSideProps({ params }) {
  const exchange = await ExchangeService.getExchange(params.id)
  return {
    props: {
      exchange
    },
  };
}

export default function exchange({ exchange }) {
  return (
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
                    [news.created_at]
                  )}
                </label>
                <p>{news.description}</p>
              </NewsText>
            ))}
            {exchange.status_updates.length === 0 ? <p className="error">Sorry 😔, we don´t have any news about this exchange.</p> : ""}
          </NewsContainer>
        </section>
      </main>
  );
}
