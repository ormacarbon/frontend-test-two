//? Styled components
import styled from "styled-components";

export const CardCapsule = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 4em auto;

  
 
  a {
    margin-top: 2em;
    text-decoration: underline;
    color: ${(props) => props.theme.colors.textColor};
    text-transform: capitalize;
    letter-spacing: 0.1em;
    transition: all .2s ease-in;

    &:hover {
      color: ${(props) => props.theme.colors.lightGray};
    }
  }

  @media (max-width: 699px) {
    justify-content: center;
  }
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
  border-color: ${(props) => props.theme.colors.borderColor};
  width: 23%;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.theme.colors.cardBgColor};
  color: ${(props) => props.theme.colors.textColor};

  > img {
    max-width: 100%;
    border-bottom: 2px solid #000;
    border-radius: 2px;
  }

  @media (max-width: 900px) {
    width: 48%;
  }

  @media (max-width: 699px) {
    width: 75%;
  }
`;

export const NameDiv = styled.div`
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;

`;

export const StatusDiv = styled.div`
  display: flex;
  align-items: center;

  h4 {
    font-weight: 500;
    margin-right: .3em;
  }


`;
