import Link from "next/link";
import styled from "styled-components";

export const MainStyles = styled.div`
  width: 60%;
  height: 200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    margin-top: 5rem;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  font-weight: 400;
  font-size: 48px;

  &:hover {
    text-decoration: underline;
  }
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
