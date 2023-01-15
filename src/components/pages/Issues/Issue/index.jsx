import { Container, Content, Label } from "./styles";

export default function Issue({ data }) {
  console.log(data.labels);
  return (
    <Container style={{ fontSize: 30 }}>
      <Content>
        <img className="profile_img" src={data.user.avatar_url} />
        <div>
          <span className="user_name">{data.user.login}</span>
          <p className="issue_title">
            {data.title} <br />
            {data.labels.map((label) => (
              <span key={`${label.id}`}>
                <Label label={label}>{label.name}</Label>
              </span>
            ))}
          </p>
        </div>
      </Content>
    </Container>
  );
}
