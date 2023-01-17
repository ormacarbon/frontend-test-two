import { useContext, useState } from "react";
import { useRouter } from "next/router";

import { searchContext } from "../../context/searchContext";
import { menuContext } from "../../context/menuContext";

import { SearchComponent } from "./searchStyle";

export function Search({ darkTheme }) {
  const [value, setValue] = useState("");

  const [searchValue, setSearchValue] = useContext(searchContext);
  const [menu, setMenu] = useContext(menuContext);

  const router = useRouter();

  function submitQuery(e) {
    e.preventDefault();
  }

  function handleSearch() {
    if (value.trim()) {
      setMenu(false);
      setSearchValue(value);
      router.push("/search");
      setValue("");
    }
  }

  return (
    <SearchComponent onSubmit={submitQuery} dark={darkTheme}>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        type="text"
        placeholder="Search movies..."
      />
      <button type="submit" onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </SearchComponent>
  );
}
