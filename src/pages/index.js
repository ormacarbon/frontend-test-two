import { useState, useEffect } from "react";
//COMPONENTS
import { Loading, CardList, LoadingContext } from "../Components/index";
//THEME
import { ThemeContext, themes, BtnDarkMode } from "../styles/ThemeContext";
function Home() {
  const [theme, setTheme] = useState(themes.dark);
  const [loading, setLoading] = useState(false);

  function changeTheme(prop) {
    const _theme = prop === "dark-mode" ? themes.light : themes.dark;
    localStorage.setItem("theme", _theme);
  }

  useEffect(() => {
    document.title = "LISTA DE POKEMONS";
    const _theme = localStorage.getItem("theme");

    switch (_theme) {
      case themes.light:
        document.body.classList.remove("dark-mode");
        break;
      case themes.dark:
        document.body.classList.add("dark-mode");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <section className={`container`}>
          <Loading />

          <BtnDarkMode
            className="darkMode-btn"
            value={theme}
            onClick={(e) => {
              changeTheme(e.target.value);
            }}
          />

          <CardList />
        </section>
      </LoadingContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Home;
