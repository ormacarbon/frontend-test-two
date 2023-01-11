import { ThemeContext } from "../../Context/ThemeStore";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";

const themes ={
    dark:{
        primaryBack: "#374151",
        background: '#1F2937',
        primary: "#FFFFFF",
        secondary: "#D1D5DB",
        text: '#FFFFFF',
        desc: '#FFFFFF',
        borderColor: '#edeff2',
    },
    light:{
        primaryBack: "#FFFFFF",
        background: '#F0F1F3',
        primary: "#3B82F6",
        secondary: "#D1D5DB",
        text: '#1F2937',
        desc: '#9CACCB',
        borderColor: '#edeff2',
    }
}

const Theme = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    );
  };
  
  export default Theme;