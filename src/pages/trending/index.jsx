import { useContext, useEffect, useState } from "react";

import { Card } from "../../components/card/card";
import { Pagination } from "../../components/pagination/pagination";
import { Footer } from "../../components/footer/footer";
import { Loading } from "../../components/loading/loading";

import { themeContext } from "../../context/themeContext";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";

import { IndexTrending } from "../../styles/pagesStyles/trendingStyle";

export default function Trending() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [darkTheme] = useContext(themeContext);

  const {
    data: configData,
    loading: configLoading,
    error: configError,
  } = useFetch("configuration", null);

  useEffect(() => {
    setLoading(true);

    api
      .get("trending/movie/week", {
        params: {
          page: page,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [page]);

  function pagination(page) {
    setPage(page);
  }

  return (
    <IndexTrending dark={darkTheme}>
      <div className="container">
        <div className="title">
          <h1>Trending movies</h1>
          <hr />
        </div>

        <Pagination
          totalPages={data?.total_pages}
          page={page}
          pagination={pagination}
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
        />
      </div>

      <Footer />
    </IndexTrending>
  );
}
