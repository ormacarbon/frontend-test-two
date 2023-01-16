import { useContext, useEffect } from "react";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

import { highlightMovieContext } from "../../context/highlightMovieContext";
import { themeContext } from "../../context/themeContext";
import { useFetch } from "../../hooks/useFetch";

import { BannerComponent } from "./bannerStyle";
import { theme } from "../../styles/theme";

export function Banner() {
  const [darkTheme, setDarkTheme] = useContext(themeContext);
  const [highlightMovie, setHighlightMovie] = useContext(highlightMovieContext);

  const { data, loading, error } = useFetch("movie/popular", null);
  const { data: dataConfig } = useFetch("configuration", null);

  useEffect(() => {
    if (!highlightMovie) {
      setHighlightMovie(data?.results[0]);
    }
  }, [data, highlightMovie, setHighlightMovie]);

  return (
    <BannerComponent
      style={{
        background: `url("${
          dataConfig?.images.base_url + dataConfig?.images.poster_sizes[5]
        }/${highlightMovie?.poster_path}") no-repeat left`,
      }}
      dark={darkTheme}
    >
      <div className="content">
        <h2 className="content-title">{highlightMovie?.original_title}</h2>
        <p className="overview">{highlightMovie?.overview}</p>
        <div>
          <Rating
            readonly
            allowFraction
            size={5}
            iconsCount={10}
            emptyIcon={<i className="fa-regular fa-star"></i>}
            fillIcon={<i className="fa-solid fa-star"></i>}
            emptyColor="#ffffff"
            fillColor={`${
              darkTheme ? theme.colors.blueJeans : theme.colors.minionYellow
            }`}
            initialValue={highlightMovie?.vote_average}
          />
          <p>({highlightMovie?.vote_average.toFixed(1)})</p>
        </div>
        <Link
          href={`/movie/${highlightMovie?.id}-${highlightMovie?.original_title
            .toLowerCase()
            .replace(/[^a-zA-Z ]/g, "")
            .replaceAll(" ", "-")}`}
        >
          Details
        </Link>
      </div>
    </BannerComponent>
  );
}
