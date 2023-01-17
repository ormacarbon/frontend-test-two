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
      <h2>Bringing the best of cinema to your screen</h2>

      <StyledLink href="/content/movie">
        <footer>
          Lets get start!
          <AiFillStar size={16} color="#fde047" />
        </footer>
      </StyledLink>
    </WelcomeMain>
  );
}
