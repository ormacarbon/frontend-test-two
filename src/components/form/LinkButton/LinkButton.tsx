import * as S from "./link-button";

interface LinkButtonProps {
  children: string;
  href: string;
}

export const LinkButton = ({ children, href }: LinkButtonProps) => {
  return <S.LinkButtonContainer href={href}>{children}</S.LinkButtonContainer>;
};
