import styled from "styled-components";
import { bitter, hyliaSerif, kadwa } from "../../public/fonts/fonts";

export const BackgroundContainer = styled.section`
  background-image: url("/illustrations/mobile-background.jpg");
  background-size: cover;
  max-width: 100%;
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 3px solid #d3ac5c;

  @media (min-width: 1070px) {
    background-image: url("/illustrations/background-1.png");
  }
`;

export const CoverContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 3px solid #d3ac5c;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  @media (min-width: 744px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 40%;
  }
`;

export const PreTitle = styled.h2`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 0.62em;
  line-height: 12px;
  color: #f0f0f0;
  text-align: center;

  @media (min-width: 744px) {
    font-size: 1.25em;
  }
`;

export const Title = styled.h1`
  font-family: ${hyliaSerif.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 3em;
  line-height: 45px;
  color: #f0f0f0;
  text-align: center;

  @media (min-width: 744px) {
    font-size: 6.25em;
    margin-top: 40px;
  }
`;

export const MainText = styled.p`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 17px;
  text-align: center;
  color: #f0f0f0;
  margin: 26px 30px 0px 30px;

  @media (min-width: 744px) {
    font-size: 1.25em;
    margin: 80px 30px 0px 50px;
    line-height: 40px;
  }
`;
