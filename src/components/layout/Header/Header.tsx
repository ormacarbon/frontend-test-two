import { ThemeSwitch } from "@/components/form";
import { Heading } from "@/components/typography";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import * as S from "./header.styles";

interface HeaderProps {
  children: string;
}
export const Header = ({ children }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.HeaderBox>
        <S.LeftSide>
          <S.LogoBox href={"/"}>
            <Heading variant="xl">{children}</Heading>
          </S.LogoBox>

          <S.NavbarContainer>
            <S.NavItem href={"/category/history"}>History</S.NavItem>
            <S.NavItem href={"/category/crime"}>Crime</S.NavItem>
            <S.NavItem href={"/category/mystery"}>Mystery</S.NavItem>
          </S.NavbarContainer>
        </S.LeftSide>

        <S.MenuBox>
          <MobileMenu />

          <S.ThemeSwitchContainer>
            <ThemeSwitch />
          </S.ThemeSwitchContainer>
        </S.MenuBox>
      </S.HeaderBox>
    </S.HeaderContainer>
  );
};
