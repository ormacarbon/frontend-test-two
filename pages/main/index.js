import Link from "next/link";
import styled from "styled-components";

export const MainStyles = styled.div`
  width: 60%;
  height: 200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  flex: 1;
`;

const Main = () => {
  return (
    <MainStyles>
      <StyledLink href="/daily">Daily</StyledLink>
      <StyledLink href="/blitz">Blitz</StyledLink>
      <StyledLink href="/live_bullet">Live Bullet</StyledLink>
    </MainStyles>
  );
};

export default Main;
