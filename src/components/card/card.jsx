import { useContext } from "react";
import { highlightMovieContext } from "../../context/highlightMovieContext";

import { themeContext } from "../../context/themeContext";
import { useFetch } from "../../hooks/useFetch";

import { CardComponent } from "./cardStyle";

export function Card({ content }) {
  const [darkTheme, setDarkTheme] = useContext(themeContext);
  const [highlightMovie, setHighlightMovie] = useContext(highlightMovieContext);

  const { data, loading, error } = useFetch("configuration", null);

  return (
    <CardComponent
      style={{
        background: `url("${
          data?.images.base_url + data?.images.poster_sizes[3]
        }/${content?.poster_path}") no-repeat center`,
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
        <p>{content?.release_date.slice(0, 4)}</p>
      </div>
    </CardComponent>
  );
}
