import { useRouter } from "next/router";
import { Badge } from "../../components";

import { api } from "../../shared/services";

const translator = {
  gender: {
    Male: "Homem",
    Female: "Mulher",
  },
  species: {
    human: "Humano",
  },
  status: {
    Alive: "Vivo",
    Dead: "Morto",
    unknown: "Desconhecido",
  },
};

const colors = {
  Alive: "green",
  Dead: "red",
  Unknown: "grey",
};

export default function Avatar({ avatar }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Carregando...</h1>;

  const { name, image, gender, species, status } = avatar;

  const avatarGender = translator["gender"][gender] ?? gender;
  const avatarSpecie = translator["species"][species] ?? species;
  const avatarStatus = translator["status"][status] ?? status;

  const statusColor = colors[status] ?? colors.Unknown;

  return (
    <section className="container">
      <div className="flex center column">
        <h2>{name}</h2>

        <img src={image} alt={name} className="avatar" />

        <Badge color={statusColor}>{avatarStatus}</Badge>

        <ul>
          <li>
            <strong>Genero:</strong> {avatarGender}
          </li>
          <li>
            <strong>Eu sou: </strong>
            {avatarSpecie}
          </li>
        </ul>
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
    const { data } = await api.get(`character/${id}`);

    return {
      props: {
        avatar: data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
