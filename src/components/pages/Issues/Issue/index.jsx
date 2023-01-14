import { Container, Content } from "./styles";

export default function Issue({ data }) {
  return (
    <Container style={{ fontSize: 30 }}>
      <Content>
        <img className="profile_img" src={data.user.avatar_url} />
        <div>
          <span className="user_name">{data.user.login}</span>
          <p className="issue_title">
            Aqui vai ficar todo o texto referente a issue
          </p>
        </div>
      </Content>
    </Container>
  );
}
