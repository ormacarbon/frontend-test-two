import { useContext } from "react";

import { themeContext } from "../../context/themeContext";

import { SelectComponent } from "./selectStyle";

export function Select({ setSelectValue }) {
  const [darkTheme] = useContext(themeContext);

  function handleChange(e) {
    setSelectValue(e.target.value);
  }

  const sortByValues = [
      {
        label: "Popularity - Desc.",
        value: "popularity.desc",
      },
    {
      label: "Popularity - Asc.",
      value: "popularity.asc",
    },
    {
      label: "Release date - Desc.",
      value: "release_date.desc",
    },
    {
      label: "Release date - Asc.",
      value: "release_date.asc",
    },
    {
      label: "Original title - Desc.",
      value: "original_title.desc",
    },
    {
      label: "Original title - Asc.",
      value: "original_title.asc",
    },
    {
      label: "Vote average - Desc.",
      value: "vote_average.desc",
    },
    {
      label: "Vote average - Asc.",
      value: "vote_average.asc",
    },
  ];

  return (
    <SelectComponent
      dark={darkTheme}
      style={{
        background: darkTheme
          ? `url("/assets/icons/chevronBlue.svg") no-repeat`
          : `url("/assets/icons/chevronRed.svg") no-repeat`,
      }}
      onChange={handleChange}
    >
      {sortByValues.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </SelectComponent>
  );
}
