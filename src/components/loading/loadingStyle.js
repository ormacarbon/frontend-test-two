import styled from "styled-components";

export const LoadingComponent = styled.div`
  ${(props) => props.theme.utils.flexUtil("row", "center", "center")};
  background: ${(props) => props.dark ? "#343A4099" : "#ffffff99"};
  backdrop-filter: blur(1px);
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 500px;
  z-index: 2;
  transition: 0.2s;
`;
