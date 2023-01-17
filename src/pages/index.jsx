import { useContext } from "react";
import Link from "next/link";

import { themeContext } from "../context/themeContext";
import { api } from "../services/api";

import { Banner } from "../components/banner/banner";
import { Card } from "../components/card/card";
import { Footer } from "../components/footer/footer";

import { IndexMain, SliderComponent } from "../styles/pagesStyles/indexStyle";

export default function Home({
  trendingData,
  discoverData,
  popularData,
  configData,
}) {
  const [darkTheme, setDarkTheme] = useContext(themeContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: (
      <button className="slick-arrow slick-next">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    ),
    prevArrow: (
      <button className="slick-arrow slick-prev">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 665,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 535,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <IndexMain dark={darkTheme}>
      <div className="container">
        <Banner configData={configData} bannerData={popularData} />

        <div className="main-page__section">
          <h2>
            Trending
            <Link href="/trending">
              See more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </h2>
          <SliderComponent dark={darkTheme} {...settings}>
            {trendingData?.results.map((item) => {
              return (
                <Card key={item?.id} content={item} configData={configData} />
              );
            })}
          </SliderComponent>
        </div>

        <div className="main-page__section">
          <h2>
            Discover
            <Link href="/discover">
              See more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </h2>
          <SliderComponent dark={darkTheme} {...settings}>
            {discoverData?.results.map((item) => {
              return (
                <Card key={item?.id} content={item} configData={configData} />
              );
            })}
          </SliderComponent>
        </div>
      </div>

      <Footer />
    </IndexMain>
  );
}

export const getStaticProps = async () => {
  const trendingResponse = await api.get("trending/movie/week");
  const trendingData = await trendingResponse.data;

  const discoverResponse = await api.get("discover/movie", {
    params: {
      "release_date.lte": "2020-12-31",
      "certification.lte": "R",
      certification_country: "US",
    },
  });
  const discoverData = await discoverResponse.data;

  const popularResponse = await api.get("movie/popular");
  const popularData = await popularResponse.data;

  const configResponse = await api.get("configuration");
  const configData = await configResponse.data;

  return {
    props: {
      trendingData,
      discoverData,
      popularData,
      configData,
    },
    revalidate: 60 * 20, // 20 minutes
  };
};
