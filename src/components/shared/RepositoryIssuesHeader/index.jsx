import Button from "../../shared/Button";
import ToggleThemeButton from "../ToggleThemeButton";

import {
  ActionButtonsContainer,
  Container,
  Content,
  PageInfoContainer,
  RepoLogo,
} from "./styles";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

export default function RepositoryIssuesHeader(props) {
  const { repository, isEmpty } = props;
  const router = useRouter();

  return (
    <Container>
      <Content>
        <PageInfoContainer>
          <img
            alt={`${repository.name} logo`}
            src={repository.owner.avatar_url}
          />
          <div>
            <p>{repository.name}</p>
            <span>issues</span>
          </div>
        </PageInfoContainer>
        <ActionButtonsContainer>
          <ToggleThemeButton />
          {!isEmpty && (
            <Button onClick={() => router.back()} type="rounded-square">
              <FiArrowLeft />
              Voltar
            </Button>
          )}
        </ActionButtonsContainer>
      </Content>
    </Container>
  );
}
