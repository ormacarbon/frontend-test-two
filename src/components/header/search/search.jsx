import { SearchComponent } from "./searchStyle";

export function Search({ darkTheme }) {
  return (
    <SearchComponent dark={darkTheme}>
      <input type="text" placeholder="Search movies..." />
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </SearchComponent>
  );
}
