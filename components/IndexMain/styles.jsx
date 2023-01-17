import styled from "styled-components";
import { bitter } from "../../public/fonts/fonts";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #0b131b 0%, #032520 100%);
`;

export const Title = styled.h1`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 24px;
  text-align: center;
  margin: 50px 30px;

  @media (min-width: 744px) {
    font-size: 2em;
  }
`;

export const Menu = styled.ul`
  margin: 50px 30px 100px 30px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;
