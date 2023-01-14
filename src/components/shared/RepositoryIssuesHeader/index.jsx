import {
  ActionButtonsContainer,
  Container,
  Content,
  PageInfoContainer,
  RepoLogo,
} from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import Button from "../../shared/Button";
import ToggleThemeButton from "../ToggleThemeButton";

export default function RepositoryIssuesHeader(props) {
  const { repository } = props;

  console.log(repository);

  return (
    <Container>
      <Content>
        <PageInfoContainer>
          <img
            alt={`${repository.name} logo`}
            src={repository.owner.avatar_url}
          />
          <span>{repository.name} • Issues</span>
        </PageInfoContainer>
        <ActionButtonsContainer>
          <ToggleThemeButton />
          <Button type="rounded-square">
            <FiArrowLeft />
            Voltar
          </Button>
        </ActionButtonsContainer>
      </Content>
    </Container>
  );
}
