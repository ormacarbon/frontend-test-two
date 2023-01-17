import { Container, Content } from "./styles";

export function HistoryRepository({ data }) {
  function formatUrl(url) {
    return url.replace("/", "%2F");
  }

  return (
    <Container href={`/repository/${formatUrl(data.full_name)}`}>
      <Content>
        <img alt={`${data.name} logo`} src={data.owner.avatar_url} />
        <span>{data.full_name}</span>
      </Content>
    </Container>
  );
}
