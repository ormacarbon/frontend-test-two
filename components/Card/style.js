//? Styled components
import styled from "styled-components";

export const CardCapsule = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 4em auto;
`;

export const CardCharacter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 1em;
  margin-bottom: 2em;
  border-radius: 1em;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.borderColor} ;
  width: 23%;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.theme.colors.cardBgColor};
  color: ${(props) => props.theme.colors.textColor};

  > img {
    max-width: 100%;
    border-bottom: 2px solid #000;
  }

  > h4 {
    text-transform: capitalize;
    margin: 1em 0 1em;
    color: ${(props) => props.theme.colors.textColor};
  }

  > p {
    color: ${(props) => props.theme.colors.textColor};
  }
`;
