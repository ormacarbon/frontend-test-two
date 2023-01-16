import styled from 'styled-components'

export const Container = styled.form`
  flex: 1;
  width: 100%;
  max-width: 20rem;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.sm};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: 100%;
  }

  .react-datalist-input__container {
    position: relative;
    width: 100%;
  }

  .react-datalist-input__textbox {
    background: transparent;
    font-weight: 500;
    width: 100%;
    font-size: ${(props) => props.theme.fonts.size.md};
    color: ${(props) => props.theme.colors.text};
    padding: ${(props) => props.theme.spacing.md};
    border-radius: ${(props) => props.theme.spacing.md};
    border: 1px solid ${(props) => props.theme.colors.border};
    transition: color 0.3s, border 0.3s; 
    outline: none;
  }

  .react-datalist-input__listbox {
    position: absolute;
    display: flex;
    width: 100%;
    margin: ${(props) => props.theme.spacing.xs} 0 0 0;
    color: ${(props) => props.theme.colors.text};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.spacing.md};
    background-color: ${(props) => props.theme.colors.background};
    overflow: hidden;
    flex-direction: column;
    list-style-type: none;
    z-index: 300;
  }

  .react-datalist-input__listbox-option {
    cursor: pointer;
    padding: ${(props) => props.theme.spacing.lg};
    &::selection {
      background: red;
    }
  }

  .react-datalist-input__listbox-option:focus {
    background-color: ${(props) => props.theme.colors.primary200};
  }

  .react-datalist-input__listbox-option:hover {
    background-color: ${(props) => props.theme.colors.primary200};
  }
`