import styled from "styled-components";

export const Pokemon = styled.div`
  padding: 2rem 1rem;
  border: 2px solid ${(props) => props.theme.secondary};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DetailButton = styled.div`
  padding: 0.3rem 0.3rem;
  background: ${(props) => props.theme.secondary};
  border-radius: 8px;
  cursor: pointer;
  margin: 0 auto;
  a {
    color: ${(props) => props.theme.buttonColor};
    text-decoration: none;
  }
`;
