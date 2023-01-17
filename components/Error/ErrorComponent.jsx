import { useContext } from "react";
import { ErrorContainer, ErrorDescription, ErrorTitle } from "./styles";
import { GlobalContext } from "../../storage/global";

const ErrorComponent = ({ title, message }) => {
  const globalContext = useContext(GlobalContext);

  return (
    <ErrorContainer className="animated">
      <ErrorTitle
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
      >
        {title}
      </ErrorTitle>
      <ErrorDescription
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
      >
        {message}
      </ErrorDescription>
    </ErrorContainer>
  );
};

export default ErrorComponent;
