import { Heading } from "@/components/typography";
import { AiOutlineMenu } from "react-icons/ai";
import * as S from "./header.styles";

interface HeaderProps {
  children: string;
}
export const Header = ({ children }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.HeaderBox>
        <S.LogoBox href={"/"}>
          <Heading variant="xl">{children}</Heading>
        </S.LogoBox>

        <S.MenuBox>
          <AiOutlineMenu size={30} />
        </S.MenuBox>
      </S.HeaderBox>
    </S.HeaderContainer>
  );
};
