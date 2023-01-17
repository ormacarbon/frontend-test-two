import { AsideTop, ImgDiv, Info } from "./styles";

import Youtube from "react-youtube";

import { useContext, useState } from "react";

import { AiFillStar } from "react-icons/ai";

import { DataContext, DataProps } from "../../pages/content/[type]";

export default function TopEntertainment() {
  const { data, type } = useContext(DataContext);
  let titleOrName = "";

  if (type === "movie") {
    const { title } = data[0];
    titleOrName = title;
  } else if (type === "tv") {
    const { name } = data[0];
    titleOrName = name;
  }
  return (
    <AsideTop>
      <header>
        <AiFillStar size={24} color="#fde047" />
        <h1>Recommended Movie</h1>
        <AiFillStar size={24} color="#fde047" />
      </header>
      <ImgDiv>
        <img
          src={`https://image.tmdb.org/t/p/w500${data[0].poster_path}`}
          alt=""
        />
        <Info>
          <h2>{titleOrName}</h2>
          <span>
            {data[0].vote_average}
            <AiFillStar size={16} color="#fde047" />
          </span>

          <p>{data[0].overview}</p>
        </Info>
      </ImgDiv>
    </AsideTop>
  );
}
