import { useContext, useEffect } from "react";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

import { highlightMovieContext } from "../../context/highlightMovieContext";
import { themeContext } from "../../context/themeContext";

import { BannerComponent } from "./bannerStyle";
import { theme } from "../../styles/theme";

export function Banner({ bannerData, configData }) {
  const [darkTheme, setDarkTheme] = useContext(themeContext);
  const [highlightMovie, setHighlightMovie] = useContext(highlightMovieContext);

  useEffect(() => {
    if (!highlightMovie) {
      setHighlightMovie(bannerData?.results[0]);
    }
  }, [bannerData, highlightMovie, setHighlightMovie]);

  return (
    <BannerComponent
      style={{
        background: `url("${
          configData?.images.secure_base_url + configData?.images.poster_sizes[5]
        }/${highlightMovie?.poster_path}") no-repeat left`,
      }}
      dark={darkTheme}
    >
      <div className="content">
        <h2 className="content-title">{highlightMovie?.original_title}</h2>
        <p className="overview">
          {highlightMovie?.overview || highlightMovie?.overview != ""
            ? highlightMovie?.overview
            : "No description provided."}
        </p>
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
