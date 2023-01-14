import { useRouter } from "next/router";
import { Avatar } from "../../components";

import { api } from "../../shared/services";

export default function LocationsById({ location }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Carregando...</h1>;

  const { name, residents, dimension, type } = location;

  return (
    <section className="container">
      <h2>{name}</h2>
      <p>Dimensão: {dimension}</p>
      <small>Tipo: {type}</small>
      <hr />

      <h2>Residentes</h2>

      <hr />

      <div className="grid responsive-grid">
        {residents?.map(({ id, name, image }) => (
          <Avatar id={id} name={name} image={image} key={id} />
        ))}
      </div>
    </section>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const { data } = await api.get(`location/${id}`);

    const getResidents = data.residents.map((resident) => api.get(resident));

    const residents = await Promise.all(getResidents);

    return {
      props: {
        location: {
          ...data,
          residents: residents.map(({ data }) => data),
        },
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
