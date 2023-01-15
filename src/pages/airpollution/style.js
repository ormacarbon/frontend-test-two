import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerAirPolluition = styled.div`
  width: 100vw;
  margin: 40px auto;
  .infosPolluition {
    max-width: 80vw;
    margin: 140px auto;
    display: flex;
    justify-content: space-around;
    @media ${devices.laptop} {
      flex-direction: column;
    }
  }
`