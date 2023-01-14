import { Pagination, Episode, Location } from "../../components";

import { useFetch } from "../../shared/hooks";

export default function Locations() {
  const { data, isLoading, page, setPage, error } = useFetch(
    "location",
    {},
    "locations"
  );

  const locations = data?.results;
  const pagination = data?.info;

  if (error) return <h1>Erro ao carregar os dados...</h1>;

  return (
    <section className="container">
      <h1>Localizações</h1>
      {locations?.length && (
        <Pagination
          currentPage={page}
          onChangePage={setPage}
          totalPages={pagination.pages}
        />
      )}
      {isLoading && <h1>Carregando...</h1>}
      {!locations?.length ? (
        <h1>Nenhuma localização encontrada...</h1>
      ) : (
        <div className="grid responsive-grid">
          {locations?.map(({ id, name, air_date }) => (
            <Location key={id} id={id} name={name} />
          ))}
        </div>
      )}
    </section>
  );
}
