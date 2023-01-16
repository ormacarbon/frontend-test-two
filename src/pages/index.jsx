import { useContext } from "react";

import { themeContext } from "../context/themeContext";
import { useFetch } from "../hooks/useFetch";

import { Banner } from "../components/banner/banner";

import { IndexMain } from "./indexStyle";

export default function Home() {
  const [darkTheme, setDarkTheme] = useContext(themeContext);

  return (
    <IndexMain dark={darkTheme}>
      <div className="container">
        <Banner />
      </div>
    </IndexMain>
  );
}
