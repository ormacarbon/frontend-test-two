import { Navbar } from "./Navbar";
import styled from "styled-components";

export function Layout({ children }) {
  return (
    <>
      <Navbar>
        <MainContainer>{children} </MainContainer>
      </Navbar>
    </>
  );
}

const MainContainer = styled.main`
  min-height: 100vh;
`;
