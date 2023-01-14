import styled from "styled-components";
import { css } from "styled-components";

export const BeerCard = styled.div`
  width: 250px;

  text-align: center;
  font-family: var(--roboto);
  background-color: var(--lightGrey);
  font-size: 0.8rem;
  border: 1px solid var(--black-400);
  box-shadow: 5px 5px 7px -3px var(--black-400);
  margin: 10px 20px;

  > p {
    text-align: justify;
    margin: 5px 1px;
  }
  > button {
    width: 70%;
    margin: 3px 0;
  }
`;

interface BackGroundImageProps {
  image: string | null;
}

export const BackGroundImage = styled.div<BackGroundImageProps>`
  width: 100%;
  height: 200px;
  margin: auto;
  background-image: ${(props) =>
    props.image === null
      ? `url(https://amici.com.br/wp-content/uploads/sites/83/2020/04/imagem-indispon%C3%ADvel.jpg)`
      : `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: ${(props) => (props.image === null ? "cover" : "contain")};
  background-position: center;
`;
