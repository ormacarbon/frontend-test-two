import { LogoImage } from "./styles";
import Image from "next/image";
import { GlobalContext } from "../../storage/global";
import { useContext } from "react";

const Logo = () => {
  const globalContext = useContext(GlobalContext);
  return (
    <LogoImage>
      <Image
        src={
          globalContext.lightTheme
            ? "/illustrations/light-theme-logo.svg"
            : "/illustrations/dark-theme-logo.svg"
        }
        alt="zeldapi logo"
        width={100}
        height={20}
      />
    </LogoImage>
  );
};

export default Logo;
