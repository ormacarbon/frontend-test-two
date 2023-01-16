import styled from "styled-components";

export const IndexMain = styled.main`
  background: ${(props) =>
    props.dark ? props.theme.colors.onyx : props.theme.colors.white};
  padding: 20px;
`;
