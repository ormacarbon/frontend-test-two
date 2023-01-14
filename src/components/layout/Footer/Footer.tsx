import { Heading } from "@/components/typography";
import * as S from "./footer.styles";

export const Footer = () => {
  return (
    <S.FooterContainer>
      <Heading variant="xl">My blog</Heading>

      <p>© 2023 Miguel Silva Barbosa. All Rights Reserved.</p>
    </S.FooterContainer>
  );
};
