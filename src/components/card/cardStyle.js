import styled from "styled-components";

export const CardComponent = styled.a`
  ${(props) => props.theme.utils.flexUtil("column", "flex-end", "center")};
  width: 100%;
  height: 300px;
  max-width: 230px;
  background-size: 100% !important;
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 6px 1px
    ${(props) =>
      props.dark
        ? props.theme.colors.eerieBlack
        : props.theme.colors.lightGray}; 
  text-decoration: none;
  text-align: center;
  position: relative;
  transition: 0.3s;

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      ${(props) =>
          props.dark ? props.theme.colors.black : props.theme.colors.redCrayola}
        15%,
      #00000000 60%,
      #00000000 100%
    );
    border-radius: inherit;
  }

  &:hover {
    background-size: 118% !important;
  }

  p {
    margin: 5px 0;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    z-index: 1;
  }
`;
