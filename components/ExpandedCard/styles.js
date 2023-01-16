import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: background 0.3s, border 0.3s;
  font-weight: 600;
`

export const Header = styled.header`
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.xs};

  .title-container {
    display: flex;
    gap: ${(props) => props.theme.spacing.sm};
    font-size: ${(props) => props.theme.fonts.size["2xl"]};
    transition: background 0.3s, color 0.3s, border 0.3s; 

    p {
      text-align: start;
      text-transform: capitalize;
      color: ${(props) => props.theme.colors.text};
    }

    span {
      color: ${(props) => props.theme.colors.gray300};
      border-radius: ${(props) => props.theme.spacing.lg};
    }
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
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
`

export const Description = styled.div`
  height: 3.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
  font-size: ${(props) => props.theme.fonts.size.md};
`
