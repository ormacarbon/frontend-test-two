import { AsideTop, Info } from "./styles";

import Youtube from "react-youtube";

import { useEffect, useState } from "react";

import { AiFillStar } from "react-icons/ai";

import axios from "axios";

import { DataProps } from "../../pages/movies";

interface TopProps {
  data: DataProps[];
  movieOrSerie: string;
}

export default function TopEntertainment({ data, movieOrSerie }: TopProps) {
  const topTrailer = data[0]; // Get the most popular movie
  const [trailer, setTrailer] = useState();
  let titleOrName = "";

  if (movieOrSerie === "movie") {
    const { title } = topTrailer;
    titleOrName = title;
  } else if (movieOrSerie === "tv") {
    const { name } = topTrailer;
    titleOrName = name;
  }

  useEffect(() => {
    async function getTrailer() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${movieOrSerie}/${topTrailer.id}/videos?api_key=b59de4554604a026d4521e1afaf9d6b3`
        );
        setTrailer(response.data.results[0].key);
      } catch (error) {
        console.log(error);
      }
    }

    getTrailer();
  }, [data, movieOrSerie, topTrailer.id]);

  console.log(movieOrSerie);

  return (
    <AsideTop>
      <Youtube
        videoId={trailer}
        opts={{
          playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
          },
        }}
      />
      <Info>
        <h2>{titleOrName}</h2>
        <span>
          {topTrailer.vote_average}
          <AiFillStar size={16} color="#fde047" />
        </span>

        <p>{topTrailer.overview}</p>
      </Info>
    </AsideTop>
  );
}
