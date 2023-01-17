import { useContext } from "react";
import { highlightMovieContext } from "../../context/highlightMovieContext";
import { movieIdContext } from "../../context/movieIdContext";

import { themeContext } from "../../context/themeContext";

import { CardComponent } from "./cardStyle";

export function Card({ content, configData }) {
  const [darkTheme, setDarkTheme] = useContext(themeContext);
  const [movieId, setMovieId] = useContext(movieIdContext);
  const [highlightMovie, setHighlightMovie] = useContext(highlightMovieContext);

  return (
    <CardComponent
      onClick={() => setMovieId(content?.id)}
      style={{
        background: `url("${
          content?.poster_path
            ? configData?.images.secure_base_url +
              configData?.images.poster_sizes[3] +
              "/" +
              content?.poster_path
            : "/assets/images/default-movie.png"
        }") no-repeat center`,
      }}
      href={`/movie/${content?.id}-${content?.original_title
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, "")
        .replaceAll(" ", "-")}`}
      dark={darkTheme}
      onMouseOver={() => setHighlightMovie(content)}
    >
      <div className="info">
        <p>{content?.original_title}</p>
        <p>{content?.release_date?.slice(0, 4)}</p>
      </div>
    </CardComponent>
  );
}
