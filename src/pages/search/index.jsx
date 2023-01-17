import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { searchContext } from "../../context/searchContext";
import { themeContext } from "../../context/themeContext";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";

import { Pagination } from "../../components/pagination/pagination";
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Loading } from "../../components/loading/loading";

import { IndexSearch } from "../../styles/pagesStyles/searchStyle";

export default function Search() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const router = useRouter();

  const [searchValue, setSearchValue] = useContext(searchContext);
  const [darkTheme] = useContext(themeContext);

  const {
    data: configData,
    loading: configLoading,
    error: configError,
  } = useFetch("configuration", null);

  useEffect(() => {
    setLoading(true);
    console.log(searchValue);

    api
      .get("search/movie", {
        params: {
          query: searchValue,
          page: page,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [page, searchValue]);

  function pagination(page) {
    setPage(page);
  }

  return (
    <IndexSearch dark={darkTheme}>
      <div className="container">
        <div className="title">
          <h2>
            You searched for
            <span> &apos;{decodeURIComponent(searchValue)}&apos; </span>
          </h2>
          <hr />
        </div>

        <Pagination
          totalPages={data?.total_pages}
          page={page}
          pagination={pagination}
        />

        <div className="cards">
        { loading && configLoading ? <Loading /> : null }
          {data?.results.length > 0 ? (
            data?.results.map((item) => {
              return (
                <Card key={item.id} content={item} configData={configData} />
              );
            })
          ) : (
            <p>Nothing found.</p>
          )}
        </div>

        <Pagination
          totalPages={data?.total_pages}
          page={page}
          pagination={pagination}
        />
      </div>

      <Footer />
    </IndexSearch>
  );
}
