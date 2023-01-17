import styled from "styled-components";
import { bitter } from "../../public/fonts/fonts";

export const BackgroundContainer = styled.footer`
  width: 100%;
  background: url("/illustrations/background-3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  border-top: 2px solid #d3ac5c;
`;

export const FooterTitle = styled.h1`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 19px;
  color: #f0f0f0;
  margin: 30px;
`;

export const ContactItem = styled.li`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 0.75em;
  line-height: 14px;
  text-align: center;
  color: #f0f0f0;
  margin-bottom: 10px;
`;

export const RightsContainer = styled.div`
  display: flex;
  flex-flow: column-wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: linear-gradient(180deg, #032520 0%, #0b131b 100%);
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 0.62em;
  line-height: 12px;
  text-align: center;
  color: #f0f0f0;
  margin-top: 50px;
`;
