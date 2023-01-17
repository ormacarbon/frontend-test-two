import styled from "styled-components";

export const SearchComponent = styled.form`
  ${(props) => props.theme.utils.flexUtil("row")};
  background: ${(props) =>
    props.dark ? props.theme.colors.onyx : props.theme.colors.white};
  width: 100%;
  max-width: 400px;
  margin: 0 40px;
  border-radius: 3px;

  input {
    flex: 1;
    background: transparent;
    color: ${(props) =>
      props.dark
        ? props.theme.colors.cadetBlueCrayola
        : props.theme.colors.black};
    border: 0;
    outline: 0;
    padding: 10px;
    font-size: ${(props) => props.theme.fontSizes.fs_small};

    &::placeholder {
      color: ${(props) =>
        props.dark
          ? props.theme.colors.cadetBlueCrayola
          : props.theme.colors.cadetBlueCrayola};
      font-style: italic;
    }
  }

  button {
    background: transparent;
    width: 50px;
    color: ${(props) =>
      props.dark
        ? props.theme.colors.cadetBlueCrayola
        : props.theme.colors.cadetBlueCrayola};
    border: 0;
    outline: 0;
    font-size: ${(props) => props.theme.fontSizes.fs_medium};
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.redCrayola};
    }
  }

  @media screen and (max-width: 625px) {
    display: none;
  }
`;
