import { useRouter } from "next/router";
import Header from "../../../../../components/Header";
import { MainInfo, MoreInfo } from "../../../styles";

import { DataProps } from "../../../../content/[type]";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

interface GenresProps {
  name: string;
  id: number;
}

interface ProductionProps {
  name: string;
  id: number;
}

interface InfoProps {
  genres: GenresProps[];
  production_companies: ProductionProps[];
  homepage: string;
}

export default function Info() {
  const router = useRouter();
  const { data, type, titleOrName, id } = router.query;
  const movieData: DataProps = JSON.parse(data);
  const [info, setInfo] = useState<InfoProps>();

  useEffect(() => {
    async function getInfo() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=b59de4554604a026d4521e1afaf9d6b3`
        );
        setInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getInfo();
  }, [movieData.id, type]);

  console.log(info);

  return (
    <>
      <Header showSearch={false} />
      <MainInfo>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt=""
        />
        <section>
          <div>
            <h1>{titleOrName}</h1>
            <span>
              {movieData.vote_average}
              <AiFillStar size={16} color="#fde047" />
            </span>
          </div>
          <p>{movieData.overview}</p>
          <MoreInfo>
            <div>
              {info && <h3>Movie Genres</h3>}
              {info &&
                info.genres.map((genre) => (
                  <>
                    <li key={genre.id}>{genre.name}</li>
                  </>
                ))}
            </div>
            <div>
              {info && <h3>Producers</h3>}
              {info &&
                info.production_companies.map((production) => (
                  <>
                    <li key={production.id}>{production.name}</li>
                  </>
                ))}
            </div>
          </MoreInfo>
        </section>
      </MainInfo>
    </>
  );
}
