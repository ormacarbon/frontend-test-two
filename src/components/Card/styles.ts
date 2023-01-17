import styled from "styled-components";

export const CardDiv = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 0.5rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.2;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
  }

  h2 {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors["gray-300"]};
    margin-right: 0.5rem;
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors["gray-400"]};
  }

  footer {
    display: flex;
    align-items: center;
  }
`;
