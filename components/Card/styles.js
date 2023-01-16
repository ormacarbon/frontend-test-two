import styled from "styled-components";

export const Container = styled.button`
  flex: 1;
  display: flex;
  background: ${(props) => props.theme.colors.text+10};
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: background 0.3s, border 0.3s, color 0.3s, margin 0.3s;
  margin: ${(props) => props.theme.spacing.sm};
  cursor: pointer;

  :hover {
    margin: 0;
  }

  :active {
    background: transparent;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) { 
    width: 100%;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
  text-align: start;
  font-weight: 600;

  span {
    text-transform: capitalize;
    font-size: ${(props) => props.theme.fonts.size.xl};
  }

  div {
    color: ${(props) => props.theme.colors.gray300};
    border-radius: ${(props) => props.theme.spacing.lg};
    font-size: ${(props) => props.theme.fonts.size.md};
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};

  .button-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`

export const Types = styled.div`
  display: flex;
  height: 100%;
  gap: ${(props) => props.theme.spacing.xs};
`
