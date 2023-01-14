import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};

  .react-datalist-input__container {
    position: relative;
  }

  .react-datalist-input__textbox {
    background: transparent;
    font-weight: 500;
    min-width: 20rem;
    font-size: ${(props) => props.theme.fonts.size.md};
    color: ${(props) => props.theme.colors.light};
    padding: ${(props) => props.theme.spacing.md};
    border-radius: ${(props) => props.theme.spacing.md};
    border: 1px solid ${(props) => props.theme.colors.gray400};
    outline: none;
  }

  .react-datalist-input__listbox {
    position: absolute;
    display: flex;
    width: 100%;
    margin: ${(props) => props.theme.spacing.xs} 0 0 0;
    border: 1px solid ${(props) => props.theme.colors.gray400};
    border-radius: ${(props) => props.theme.spacing.md};
    background-color: ${(props) => props.theme.colors.dark};
    overflow: hidden;
    flex-direction: column;
    list-style-type: none;
    z-index: 1;
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