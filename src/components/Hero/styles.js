import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 90%;
  height: 90vh;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  gap: 2rem;

  button:first-of-type {
    margin-top: 0;
  }

  button {
    border: 2px solid ${props => props.theme.navlinksFontColorHover};
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    font-size: 1rem;
    margin-top: 5rem;
  }

  input {
    width: 21rem;
    background-color: ${props => props.theme.searchInputColor};
    color: ${props => props.theme.navlinksFontColor};
    padding: 1rem;
    border: 2px solid ${props => props.theme.navlinksFontColorHover};
    border-radius: 1rem;
    font-size: 1rem;
  }

  textarea {
    padding: 1rem;
    background-color: ${props => props.theme.searchInputColor};
    color: ${props => props.theme.navlinksFontColor};
    border: 2px solid ${props => props.theme.navlinksFontColorHover};
    border-radius: 1rem;
    font-size: 1rem;
  }
`;
