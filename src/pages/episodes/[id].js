import { useRouter } from "next/router";
import { Avatar } from "../../components";

import { api } from "../../shared/services";

export default function EpisodeById({ episode }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Carregando...</h1>;

  const { name, characters, air_date } = episode;

  return (
    <section className="container">
      <h2>{name}</h2>
      <p>
        <strong>Lançado em: </strong>
        {air_date}
      </p>

      <hr />

      <h2>Personagens</h2>

      <hr />

      <div className="grid responsive-grid">
        {characters?.map(({ id, name, image }) => (
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
    const { data } = await api.get(`episode/${id}`);

    const getCharacters = data.characters.map((character) =>
      api.get(character)
    );

    const characters = await Promise.all(getCharacters);

    return {
      props: {
        episode: {
          ...data,
          characters: characters.map(({ data }) => data),
        },
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
