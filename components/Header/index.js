import { useContext } from "react";
import { HeaderWrapper, SwitchContainer, Slider, Input } from "./styles";
import { MainWrapper } from "../Wrapper";
import Image from "next/image";
import logo from "../../images/logo.png";
import { useRouter } from "next/router";

const Header = () => {
  const { darkMode, setDarkMode, isLogged } = useContext(MainWrapper);
  const router = useRouter();

  return (
    <HeaderWrapper darkMode={darkMode}>
      <div
        className="title"
        onClick={() => router.push(!isLogged ? "/" : "/dashlist")}
      >
        <Image src={logo} alt="Picture of the author" />
        <span>Rick and Morty Data</span>
      </div>
      <div className="darkmode-area">
        <span>Dark mode: {!darkMode ? "off" : "on"}</span>
        <SwitchContainer>
          <Input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <Slider />
        </SwitchContainer>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
