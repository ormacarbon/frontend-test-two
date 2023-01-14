import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Content = styled(DropdownMenu.Content)`
  width: 22rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: ${({ theme }) => theme.radii.md};
  border-top-left-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.background2};
  padding: 1rem;
  box-shadow: 0px 10px 20px -1px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;

export const Trigger = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  display: block;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const MenuTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;
export const Item = styled(DropdownMenu.Item)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  user-select: none;
  outline: none;
`;
export const Separator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.background3};
`;
