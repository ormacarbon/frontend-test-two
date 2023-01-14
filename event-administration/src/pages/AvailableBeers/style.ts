import styled from "styled-components";

export const BeersCard = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.div`
  padding-top: 70px;
  text-align: center;
  font-family: var(--roboto);

  @media screen and (max-width: 500px) {
    padding-top: 100px;
  }
`;

export const Pagination = styled.div`
  padding: 10px 0;

  > div {
    display: flex;
    justify-content: center;
  }
`;
