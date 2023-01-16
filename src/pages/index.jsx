import { useContext } from "react";

import { themeContext } from "../context/themeContext";
import { useFetch } from "../hooks/useFetch";

import { Banner } from "../components/banner/banner";
import { Card } from "../components/card/card";

import { IndexMain, SliderComponent } from "./indexStyle";
import Link from "next/link";

export default function Home() {
  const [darkTheme, setDarkTheme] = useContext(themeContext);

  const SlickButtonFix = ({
    className,
    currentSlide,
    slideCount,
    children,
    ...props
  }) => (
    <button {...props} className={className}>
      {children}
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: (
      <SlickButtonFix className="slick-arrow slick-next">
        <i className="fa-solid fa-chevron-right"></i>
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix className="slick-arrow slick-prev">
        <i className="fa-solid fa-chevron-left"></i>
      </SlickButtonFix>
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

  const {
    data: trendingData,
    loading: trendingLoding,
    error: TrendingError,
  } = useFetch("trending/movie/week");

  const {
    data: discoverData,
    loading: discoverLoding,
    error: discoverError,
  } = useFetch("discover/movie", {
    include_adult: false,
    "release_date.lte": "2018-12-31",
  });

  return (
    <IndexMain dark={darkTheme}>
      <div className="container">
        <Banner />

        <div className="main-page__section">
          <h2>
            Trending
            <Link href="/trending">
              See more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </h2>
          <SliderComponent dark={darkTheme} {...settings}>
            {trendingData?.results.map((item) => {
              return <Card key={item?.id} content={item} />;
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
              return <Card key={item?.id} content={item} />;
            })}
          </SliderComponent>
        </div>
      </div>
    </IndexMain>
  );
}
