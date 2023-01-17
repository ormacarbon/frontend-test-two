import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Rating } from "react-simple-star-rating";

import { themeContext } from "../../context/themeContext";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";

import { IndexMovie } from "../../styles/pagesStyles/movieStyle";
import { theme } from "../../styles/theme";

export default function Movie() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [creditsData, setCreditsData] = useState(null);
  const [creditsError, setCreditsError] = useState(null);
  const [creditsLoading, setCreditsLoading] = useState(false);

  const [darkTheme, setDarkTheme] = useContext(themeContext);
  const router = useRouter();

  const {
    data: configData,
    loading: configLoading,
    error: configError,
  } = useFetch("configuration", null);

  useEffect(() => {
    setLoading(true);
    setCreditsLoading(true);

    api
      .get(`movie/${router.asPath.replace(/\D/g, "")}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

    api
      .get(`movie/${router.asPath.replace(/\D/g, "")}/credits`)
      .then((res) => {
        setCreditsData(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setCreditsLoading(false));
  }, [router]);

  return (
    <IndexMovie dark={darkTheme}>
      <div className="container">
        <div
          className="banner"
          style={{
            background: `url("${
              typeof window !== "undefined"
                ? configData?.images.secure_base_url +
                  configData?.images.backdrop_sizes[2] +
                  data?.backdrop_path
                : ""
            }") no-repeat center`,
          }}
        ></div>

        <div className="movie-info">
          <div className="image">
            <Image
              src={
                configData?.images.secure_base_url +
                configData?.images.poster_sizes[5] +
                data?.poster_path
              }
              alt={data?.original_title}
              fill
            />
            <span>
              Release date:{" "}
              {`${
                typeof window !== "undefined"
                  ? new Date(data?.release_date).getDate() +
                    "/" +
                    new Date(data?.release_date).getMonth() +
                    "/" +
                    new Date(data?.release_date).getFullYear()
                  : ""
              }`}
            </span>
          </div>

          <div className="content">
            <h1>{data?.original_title}</h1>
            <h4>{data?.tagline}</h4>
            <p className="overview">{data?.overview}</p>
            <ul className="cat-list">
              {data?.genres.map((item) => (
                <li className="cat" key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>

            <div className="movie-rating">
              <Rating
                readonly
                allowFraction
                size={5}
                iconsCount={10}
                emptyIcon={<i className="fa-regular fa-star"></i>}
                fillIcon={<i className="fa-solid fa-star"></i>}
                emptyColor={`${
                  darkTheme ? theme.colors.blueJeans : theme.colors.minionYellow
                }`}
                fillColor={`${
                  darkTheme ? theme.colors.blueJeans : theme.colors.minionYellow
                }`}
                initialValue={data?.vote_average}
              />
              <p>({data?.vote_average.toFixed(1)})</p>
            </div>

            <p>
              Vote count: <strong>{data?.vote_count}</strong> votes
            </p>
            <div className="info">
              <h3>Movie info</h3>
              <p>
                Budgtet: <strong>${data?.budget.toFixed(2)}</strong>
              </p>
              <p>
                Popularity: <strong>{data?.popularity}</strong>
              </p>
              <div>
                <p className="p">Poduction companies:</p>
                <ul className="cat-list">
                  {data?.production_companies.map((item) => (
                    <li className="cat" key={item.id}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="info">
              <h3 className="credits-title">Credits</h3>
              <div>
                <ul>
                  {creditsData?.cast.map((item) => (
                    <li key={item.id}>
                      <div className="info-container">
                        <div className="image-info">
                          <Image
                            src={
                              configData?.images.secure_base_url +
                              configData?.images.profile_sizes[2] +
                              item?.profile_path
                            }
                            fill
                            alt={item.original_name}
                          />
                        </div>
                        <div>
                          <p>
                            Character: <strong>{item.character}</strong>
                          </p>
                          <p>
                            Artist: <strong>{item.original_name}</strong>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul>
                  {creditsData?.crew.map((item) => (
                    <li key={item.id}>
                      <div className="info-container">
                        <div className="image-info">
                          <Image
                            src={
                              configData?.images.secure_base_url +
                              configData?.images.profile_sizes[2] +
                              item?.profile_path
                            }
                            fill
                            alt={item.original_name}
                          />
                        </div>
                        <div>
                          {item.character ? (
                            <p>
                              Character: <strong>{item.character}</strong>
                            </p>
                          ) : null}
                          <p>
                            <strong>{item.job}</strong>
                          </p>
                          <p>
                            Artist: <strong>{item.original_name}</strong>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IndexMovie>
  );
}
