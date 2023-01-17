import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { themeContext } from "../../context/themeContext";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";

import { Pagination } from "../../components/pagination/pagination";
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Loading } from "../../components/loading/loading";

import { IndexGenre } from "../../styles/pagesStyles/genreStyle";

export default function Genre() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectValue, setSelectValue] = useState("popularity.desc");

  const router = useRouter();
  const [darkTheme] = useContext(themeContext);

  const maxPage = 500;

  const {
    data: configData,
    loading: configLoading,
    error: configError,
  } = useFetch("configuration");

  useEffect(() => {
    setLoading(true);

    api
      .get("discover/movie", {
        params: {
          sort_by: selectValue,
          "certification.lte": "R",
          certification_country: "US",
          page: page,
          with_genres: router.asPath.replace(/\D/g, ""),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [page, selectValue, router]);

  function pagination(page) {
    setPage(page);
  }

  return (
    <IndexGenre dark={darkTheme}>
      <div className="container">
        <div className="title">
          <h1>
            {router.asPath
              .slice(7)
              .replace(/[0-9]/g, "")
              .replace("-", "")
              .replaceAll("-", " ")}
          </h1>
          <hr />
        </div>

        <Pagination
          totalPages={data?.total_pages}
          page={page}
          pagination={pagination}
          maxPage={maxPage}
        />

        <div className="cards">
        { loading && configLoading ? <Loading /> : null }
          {data?.results.map((item) => {
            return (
              <Card key={item.id} content={item} configData={configData} />
            );
          })}
        </div>

        <Pagination
          totalPages={data?.total_pages}
          page={page}
          pagination={pagination}
          maxPage={maxPage}
        />
      </div>

      <Footer />
    </IndexGenre>
  );
}
