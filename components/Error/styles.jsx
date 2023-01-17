import styled from "styled-components";
import { hyliaSerif, bitter } from "../../public/fonts/fonts";

export const ErrorContainer = styled.section`
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;

export const ErrorTitle = styled.h1`
  font-family: ${hyliaSerif.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  line-height: 45px;
  text-align: center;
  color: #f0f0f0;
  margin-bottom: 30px;
`;

export const ErrorDescription = styled.p`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 19px;
  text-align: center;
  color: #f0f0f0;
  margin-top: 10px;

  &:first-child {
    margin-top: 0px;
  }
`;
