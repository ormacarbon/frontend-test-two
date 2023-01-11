import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Container>
        <h1>Hello, World!</h1>
      </Container>
    </>
  );
}

const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.background1};
`;
