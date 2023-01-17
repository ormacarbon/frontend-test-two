import styled from "styled-components";

export const SelectComponent = styled.select`
  width: 100%;
  max-width: 220px;
  appearance: none;
  color: ${(props) =>
    props.dark ? props.theme.colors.blueJeans : props.theme.colors.redCrayola};
  background-position: center right 15px !important;
  padding: 5px 15px;
  padding-right: 45px;
  border: 2px solid
    ${(props) =>
      props.dark
        ? props.theme.colors.blueJeans
        : props.theme.colors.redCrayola};
  font-size: ${(props) => props.theme.fontSizes.fs_medium};
  outline: 0;
`;
