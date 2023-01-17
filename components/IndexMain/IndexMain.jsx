import { MainContainer, Title } from "./styles";
import IndexMenu from "../Menus/IndexMenu/IndexMenu";
import { GlobalContext } from "../../storage/global";
import { useContext } from "react";

const IndexMain = ({ title, categories }) => {
  const globalContext = useContext(GlobalContext);

  return (
    <MainContainer
      className={globalContext.lightTheme ? "lightThemeBg" : "darkThemeBg"}
    >
      <Title
        className={`animated ${
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }`}
      >
        {title}
      </Title>
      <nav>
        <IndexMenu categories={categories} />
      </nav>
    </MainContainer>
  );
};

export default IndexMain;
