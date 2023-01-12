import { Heading } from "@/components/typography";
import { AiOutlineMenu } from "react-icons/ai";
import * as S from "./header.styles";

interface HeaderProps {
  children: string;
}
export const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <S.HeaderContainer {...props}>
      <S.HeaderBox>
        <Heading variant="xl">{children}</Heading>

        <S.MenuBox>
          <AiOutlineMenu size={30} />
        </S.MenuBox>
      </S.HeaderBox>
    </S.HeaderContainer>
  );
};
