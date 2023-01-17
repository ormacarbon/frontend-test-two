import styled from "styled-components";

export const AsideTop = styled.aside`
  width: 100%;
  padding: 1rem;

  box-shadow: 0px 0px 6px 4px rgba(58, 24, 193, 0.61);
  border-radius: 20px;

  grid-area: aside;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  header {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;

  span {
    color: ${(props) => props.theme.colors["gray-400"]};
    display: flex;
    align-items: center;
  }
`;

export const ImgDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 10px;
  cursor: pointer;

  img {
    max-width: 30%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
  }
`;
