import Link from "next/link";
import ToggleThemeButton from "../../../shared/ToggleThemeButton";
import Button from "../../../shared/Button";

import { AppName, ButtonsContainer, Container, Content } from "./styles";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const goToFavorites = () => router.push("/favorites");

  return (
    <>
      <Container>
        <Content>
          <AppName>
            y<span>ssues</span>
          </AppName>
          <ButtonsContainer>
            <ToggleThemeButton />
            <Button primary type="rounded" onClick={goToFavorites}>
              Favoritos
            </Button>
          </ButtonsContainer>
        </Content>
      </Container>
    </>
  );
}
