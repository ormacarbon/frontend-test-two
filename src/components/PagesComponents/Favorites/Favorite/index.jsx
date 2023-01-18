import { ArrowRightIcon, XIcon } from "@primer/octicons-react";
import { Container, Content } from "./styles";
import { useContext } from "react";
import { FavoritesContext } from "../../../../contexts/StorageRepositories/favorites";

export default function FavoriteRepository({ data }) {
  const { removeFavorite } = useContext(FavoritesContext);

  function formatUrl(url) {
    return url.replace("/", "%2F");
  }

  return (
    <Container>
      <Content>
        <img alt={`${data.name} logo`} src={data.owner.avatar_url} />
        <span>{data.full_name}</span>
        <div>
          <button onClick={() => removeFavorite(data)}>
            <XIcon />
          </button>
          <a
            target="_blank"
            rel="noreferrer"
            href={`/repository/${formatUrl(data.full_name)}`}
          >
            Acessar
            <span>
              <ArrowRightIcon size={14} />
            </span>
          </a>
        </div>
      </Content>
    </Container>
  );
}
