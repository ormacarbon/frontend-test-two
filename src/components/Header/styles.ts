import styled from "styled-components";
import Link from "next/link";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

export const HeaderWrapper = styled.nav`
  background-color: rgb(30 64 175);
  color: rgb(255 255 255);
`;

export const HeaderWrapperInner = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1280px;
`;

export const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
`;

export const HomeButton = styled(Link)`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: white;
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
`;

export const ThemeSwitcherWrapper = styled.div`
  display: flex;
  line-height: 1.75rem;
  font-weight: 700;
`;

export const DarkButton = styled(BsFillMoonFill)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  cursor: pointer;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
`;
export const LightButton = styled(BsSunFill)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  cursor: pointer;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
`;
