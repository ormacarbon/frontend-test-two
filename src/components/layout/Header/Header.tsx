import { Heading } from "@/components/typography";
import { AiOutlineMenu } from "react-icons/ai";

import { HeaderBox, HeaderContainer, MenuBox } from "./header.styles";

interface HeaderProps {
  children: string;
}
export const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <HeaderContainer {...props}>
      <HeaderBox>
        <Heading variant="2xl">{children}</Heading>
      </HeaderBox>

      <MenuBox>
        <AiOutlineMenu size={30} />
      </MenuBox>
    </HeaderContainer>
  );
};
