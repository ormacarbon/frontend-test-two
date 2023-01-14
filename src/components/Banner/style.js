import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerBanner = styled.div`
  width: 100%;
  max-width: 95%;
  height: 500px;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url('/static/images/banner.png');
  border-radius: 20px;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`
export const InfosBanner = styled.div`
  font-size: 2rem;
  color: white;
  @media ${devices.tablet} {
    font-size: 1.4rem;
  }
  .wind {
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
    color: black;
    font-size: 1.3rem;
  }
  `

export const InfosTemp = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  h3 {
    margin-bottom: 20px;
  }
`