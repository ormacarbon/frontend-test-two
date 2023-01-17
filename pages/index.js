import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Img1 from "../assets/claude-piche-EHbtjmz7hvw-unsplash.jpg";
import Img2 from "../assets/hans-isaacson-bNhut7wv6HE-unsplash.jpg";
import Img3 from "../assets/marco-montero-pisani-5qTxX7nicco-unsplash.jpg";
import Img4 from "../assets/josh-olalde-5PGp5nDOKxI-unsplash.jpg";
import Icon1 from "../assets/sports_bar_FILL1_wght400_GRAD0_opsz48 1.svg";
import Icon2 from "../assets/storefront_FILL0_wght400_GRAD0_opsz24 1.svg";
import { ButtonLink } from "../components/Button/style";
import useFetch from "../utility/useFetch";
import {
  ArticleBreweries,
  ArticleBreweriesInfo,
  DivBreweriesContent,
  DivBreweriesBg,
  DivIntroducao,
  DivIntroducaoConteudo,
  MainBg,
  SectionBreweries,
  SectionTestimony,
  DivTestimonyContent,
  ArticlePlansBg,
  DivPlans,
} from "./Home/style";

export default function Home() {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://api.openbrewerydb.org/breweries/random?size=8"
      );
    }
    fetchData();
  }, [request]);

  return (
    <>
      <MainBg>
        <DivIntroducao className="container">
          <DivIntroducaoConteudo>
            <h1 className="font-1-xxl color-0">
              Breweries you would love<span className="color-p1">.</span>
            </h1>
            <p className="font-2-l color-5">
              Here you can find the best breweries in the country and the best
              thing, close to you!
            </p>
            <ButtonLink>
              <Link href="./">Lets drink!</Link>
            </ButtonLink>
          </DivIntroducaoConteudo>
          <div>
            <Image src={Img1} alt="Primeira imagem" />
          </div>
        </DivIntroducao>
      </MainBg>
      <ArticleBreweries>
        <h2 className="font-1-xxl container">
          choose one<span className="color-p1">.</span>
        </h2>
        {data ? (
          loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {data.slice(0, 3).map((brewery) => (
                <li key={brewery.id}>
                  <Link href="./brewery">
                    <Image src={Img2} alt="Primeira imagem" />
                    <h3 className="font-1-xl">{brewery.name}</h3>
                    <span className="font-2-m color-8">{brewery.state}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )
        ) : null}
      </ArticleBreweries>
      <ArticleBreweriesInfo>
        <DivBreweriesBg className="container">
          <DivBreweriesContent>
            <span className="font-2-l-b color-5">Breweries everywhere</span>
            <h2 className="font-1-xxl color-0">
              choose the one that best suits your style
              <span className="color-p1">.</span>
            </h2>
            <p className="font-2-l color-5">
              Each brewery has it own style and vibe and in each visit, you will
              have an amazing experience. Get together with your friends and
              hang out in brewery of your choice. Let us have a great time.
              Cheers!
            </p>
            <Link className="link" href="./brewery">
              Choose yours!
            </Link>
            <div className="advantages">
              <div>
                <Image src={Icon1} alt="Primeira imagem" />
                <h3 className="font-1-m color-0">Cheers</h3>
                <p className="font-2-s color-5">
                  Get together with your friends and hang out in brewery of your
                  choice. Enjoy a nice beer and create amazing experiences!
                </p>
              </div>
              <div>
                <Image src={Icon2} alt="Primeira imagem" />
                <h3 className="font-1-m color-0">Brewery</h3>
                <p className="font-2-s color-5">
                  Each brewery has an unique style and vibe. You can choose the
                  right for your happy hour with your friends.
                </p>
              </div>
            </div>
          </DivBreweriesContent>
          <div className="cover">
            <Image src={Img3} alt="Primeira imagem" />
          </div>
        </DivBreweriesBg>
      </ArticleBreweriesInfo>

      <SectionBreweries aria-label="some breweries">
        <h2 className="font-1-xxl container">
          some breweries<span className="color-p1">.</span>
        </h2>
        {data ? (
          loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {data.map((brewery) => (
                <li key={brewery.id}>
                  <h3 className="font-1-xl">{brewery.name}</h3>
                </li>
              ))}
            </ul>
          )
        ) : null}
      </SectionBreweries>
      <SectionTestimony aria-label="testimony">
        <div>
          <Image src={Img4} alt="Beer being served" />
        </div>
        <DivTestimonyContent>
          <blockquote className="font-1-xl color-p5">
            <p>
              I was uncertain about choosing a nice brewery. I had so many
              doubts, but with this awesome tool, I found what I have been
              looking for. It was awesome!
            </p>
            <span className="font-1-m-b color-p4">Robert John</span>
          </blockquote>
        </DivTestimonyContent>
      </SectionTestimony>

      <ArticlePlansBg>
        <DivPlans className="container">
          <h2 className="font-1-xxl color-0">
            our plans
            <span className="color-p1">.</span>
          </h2>
          <div className="plans-item">
            <h3 className="font-1-xl color-6">SILVER</h3>
            <span className="font-1-xl color-0">
              $ 19 <span className="font-1-xs color-6">month</span>
            </span>
            <ul className="font-2-m color-0">
              <li>3% off in your bill</li>
              <li>1 extra beer on the house</li>
              <li>1 side for half the price</li>
              <li>free parking vallet</li>
            </ul>
            <ButtonLink>
              <Link className="button second" href="./plans.html">
                Take me there
              </Link>
            </ButtonLink>
          </div>

          <div className="plans-item">
            <h3 className="font-1-xl color-p1">GOLD</h3>
            <span className="font-1-xl color-0">
              $ 39 <span className="font-1-xs color-6">month</span>
            </span>
            <ul className="font-2-m color-0">
              <li>10% off in your bill</li>
              <li>3 extra beers on the house</li>
              <li>2 sides and 1 main dish for half the price</li>
              <li>free parking vallet for a week</li>
              <li>1+ hour for the Happy Hour</li>
              <li>2 tickets for city events</li>
            </ul>
            <ButtonLink>
              <Link className="button" href="./plans.html">
                Take me there
              </Link>
            </ButtonLink>
          </div>
        </DivPlans>
      </ArticlePlansBg>
    </>
  );
}
