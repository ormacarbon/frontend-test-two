import styled from "styled-components";
import { bitter } from "../../public/fonts/fonts";

export const LoaderContainer = styled.h1`
  font-family: ${bitter.style.fontFamily};
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25em;
  line-height: 24px;
  text-align: center;
  height: 100vh;
`;
