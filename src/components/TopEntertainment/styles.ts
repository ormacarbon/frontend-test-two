import styled from "styled-components";

export const AsideTop = styled.aside`
  width: 100%;

  box-shadow: 0px 0px 6px 4px rgba(58, 24, 193, 0.61);
  border-radius: 20px;

  iframe {
    width: 100%;
    border-radius: 20px;
  }

  grid-area: aside;
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
