import { LoaderContainer } from "./styles";
import { useContext } from "react";
import { GlobalContext } from "../../storage/global";

const Loader = () => {
  const globalContext = useContext(GlobalContext);

  return (
    <LoaderContainer
      className={`animated ${
        globalContext.lightTheme ? "lightThemeFontColor" : "darkThemeFontColor"
      }`}
    >
      Loading...
    </LoaderContainer>
  );
};

export default Loader;
