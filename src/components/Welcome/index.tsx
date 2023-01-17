import { WelcomeMain } from "./styles";

import { StyledLink } from "../../styles/global";

import { AiFillStar } from "react-icons/ai";

export default function Welcome() {
  return (
    <WelcomeMain>
      <h1>
        Welcome to
        <span> Cine</span>
        phile
      </h1>
      <footer>
        <StyledLink href="/content/movie">
          Lets get start!
          <AiFillStar size={16} color="#fde047" />
        </StyledLink>
      </footer>
    </WelcomeMain>
  );
}
