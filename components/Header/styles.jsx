import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 5px solid #d3ac5c;

  @media (min-width: 744px) {
    height: 120px;
  }
`;
