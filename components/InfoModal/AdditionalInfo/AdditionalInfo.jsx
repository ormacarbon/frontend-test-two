import { ItemCategory, ItemInfo } from "../styles";
import { useContext } from "react";
import { GlobalContext } from "../../../storage/global";

const AdditionalInfo = ({ category, data }) => {
  const globalContext = useContext(GlobalContext);
  return (
    <ItemCategory
      className={`animated ${
        globalContext.lightTheme ? "lightThemeFontColor" : "darkThemeFontColor"
      }`}
    >
      {`${category}: `}
      {data.map((content) => (
        <ItemInfo
          key={content.id}
          className={
            globalContext.lightTheme
              ? "lightThemeFontColor"
              : "darkThemeFontColor"
          }
        >
          {content.name}
        </ItemInfo>
      ))}
    </ItemCategory>
  );
};

export default AdditionalInfo;
