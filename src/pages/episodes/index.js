import { Pagination, Episode } from "../../components";

import { useFetch } from "../../shared/hooks";

export default function Episodes() {
  const { data, isLoading, page, setPage, error } = useFetch("episode");

  const episodes = data?.results;
  const pagination = data?.info;

  if (error) return <h1>Erro ao carregar os dados...</h1>;

  return (
    <section className="container">
      <h1>Episódios</h1>

      {episodes?.length && (
        <Pagination
          currentPage={page}
          onChangePage={setPage}
          totalPages={pagination.pages}
        />
      )}

      {isLoading && <h1>Carregando...</h1>}
      {!episodes?.length ? (
        <h1>Nenhum episódio encontrado...</h1>
      ) : (
        <div className="grid responsive-grid">
          {episodes?.map(({ id, name, air_date }) => (
            <Episode key={id} id={id} name={name} air_date={air_date} />
          ))}
        </div>
      )}
    </section>
  );
}
