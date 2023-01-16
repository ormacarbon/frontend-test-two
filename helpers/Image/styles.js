import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
`;

export const Img = styled.img`
  border-radius: 1rem;
  object-fit: cover;
  max-width: 16rem;
  height: 13rem;
  display: block;
  grid-area: 1 / 1;
  opacity: 0;
  transition: 0.2s;
  @media screen and (max-width: 680px) {
    height: auto;
  }
`;

export const Skeleton = styled.div`
  border-radius: 1rem;
  grid-area: 1 / 1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;
  @keyframes skeleton {
    from {
      background-position: 0;
    }
    to {
      background-position: -200%;
    }
  }
`;
