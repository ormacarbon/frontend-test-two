//? Styled
import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin: 1em 1em;

  h3 {
    margin-right: 0.4em;
  }

  @media (max-width: 400px) {
    max-width: 70%;
  }
`;

export const StatusDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const StatusButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;

  @media (max-width: 400px) {
    margin-top: 1em;
  }
`;

export const StatusButton = styled.button`
  color: ${(props) => props.theme.colors.textColor};
  padding: 0.5em 1em;
  background-color: ${(props) => props.theme.colors.cardBgColor};
  border: 1px solid #aaa;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors.cardBgColor};
    color: #00ff00;
  }
`;

export const FilterMessage = styled.h3`
  margin: 2em 0;
  display: flex;
  text-align: center;
`;
