import { useCallback, useMemo, useState } from "react";
import { Avatar, Filters } from "../components";

import { useFetch } from "../shared/hooks";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [filterOption, setFilterOption] = useState();

  const params = useMemo(
    () => ({
      params: {
        name: searchValue,
        ...filterOption,
      },
    }),
    [searchValue, filterOption]
  );

  const { data, isLoading, page, setPage, error } = useFetch(
    "character",
    params,
    `character-${searchValue}${Object.values(filterOption || {}).join("-")}`
  );

  const handleNameChange = useCallback(
    (e) => {
      setPage(1);
      setSearchValue(e.target.value);
    },
    [setPage]
  );

  const setFilter = useCallback((e) => {
    const { value } = e.target;
    const [filter, option] = value.split(":");

    setFilterOption({ [filter]: option });
  }, []);

  const avatars = data?.results;
  const pagination = data?.info;

  return (
    <section className="container">
      <Filters
        page={page}
        setPage={setPage}
        pagination={pagination}
        avatars={avatars}
        handleNameChange={handleNameChange}
        handleFilterChange={setFilter}
      />

      {error ? (
        <h1>Erro ao carregar os dados...</h1>
      ) : (
        <>
          {isLoading && <h1>Carregando...</h1>}

          {!avatars?.length ? (
            <h1>Nenhum personagem encontrado...</h1>
          ) : (
            <div className="grid responsive-grid">
              {avatars?.map(({ id, name, image }) => (
                <Avatar id={id} name={name} image={image} key={id} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
