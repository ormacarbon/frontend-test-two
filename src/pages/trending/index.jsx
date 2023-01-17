import { useContext, useState } from "react";

import { Card } from "../../components/card/card";
import { Pagination } from "../../components/pagination/pagination";

import { themeContext } from "../../context/themeContext";
import { useFetch } from "../../hooks/useFetch";

import { IndexTrending } from "../../styles/pagesStyles/trendingStyle";

export default function Trending() {
  const [page, setPage] = useState(1);

  const [darkTheme] = useContext(themeContext);

  const {
    data: configData,
    loading: configLoading,
    error: configError,
  } = useFetch("configuration", null);

  const params = {
    page: page,
  };

  const { data, loading, error } = useFetch("trending/movie/week", params);

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
          {data?.results.map((item) => {
            return <Card key={item.id} content={item} configData={configData} />;
          })}
        </div>

        <Pagination
          totalPages={data?.total_pages}
          page={page}
          pagination={pagination}
        />
      </div>
    </IndexTrending>
  );
}
