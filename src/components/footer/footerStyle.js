import styled from "styled-components";

export const FooterComponent = styled.footer`
  ${(props) => props.theme.utils.flexUtil("row", "space-between", "center")};
  padding: 10px;
  padding-top: 20px;
  margin-top: auto;
  color: ${(props) =>
    props.dark ? props.theme.colors.white : props.theme.colors.black};

  a {
    color: ${(props) =>
      props.dark
        ? props.theme.colors.redCrayola
        : props.theme.colors.blueJeans};
    text-decoration: none;
  }
`;
