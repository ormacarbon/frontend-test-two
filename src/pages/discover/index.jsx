import { useContext, useEffect, useState } from "react";

import { themeContext } from "../../context/themeContext";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";

import { Pagination } from "../../components/pagination/pagination";
import { Select } from "../../components/select/select";
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Loading } from "../../components/loading/loading";

import { IndexDiscover } from "../../styles/pagesStyles/discoverStyle";

export default function Discover() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectValue, setSelectValue] = useState("popularity.desc");

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
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [page, selectValue]);

  function pagination(page) {
    setPage(page);
  }

  return (
    <IndexDiscover dark={darkTheme}>
      <div className="container">
        <h1>Discover movies</h1>

        <div className="filter">
          <div>
            <span>
              Showing page {page} of{" "}
              {data?.total_pages > maxPage ? maxPage : data?.total_pages}
            </span>
            <Select setSelectValue={setSelectValue} />
          </div>
          <hr />
        </div>

        <Pagination
          totalPages={data?.total_pages}
          page={page}
          pagination={pagination}
          maxPage={maxPage}
        />

        <div className="cards">
          {loading && configLoading ? <Loading /> : null}
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
    </IndexDiscover>
  );
}
