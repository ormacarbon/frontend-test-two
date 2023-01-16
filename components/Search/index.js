import { useState, useCallback, useEffect } from "react";

import { sections } from "../../api";
import ArrowDown from "../../assets/arrow-down";

import { ButtonContainer, Button, SectionList } from "./styles";

const Search = ({ setSection }) => {
  const sectionList = sections;
  const [activeClass, setActiveClass] = useState(false);
  const [sectionTitle, setSectionTitle] = useState("World");

  function upFirstLetter(string) {
    if (string) return string.charAt(0).toUpperCase() + string.slice(1);
    else return string;
  }

  const toggleSectionList = useCallback(() => {
    setActiveClass(!activeClass);
  }, [activeClass]);

  function handleChangeSection(value) {
    toggleSectionList();
    sectionList.filter((sec) => {
      const condition = sec === value;
      if (condition) {
        setSection(sec);
        setSectionTitle(upFirstLetter(sec));
      }
      return condition;
    });
  }

  useEffect(() => {
    const html = document.documentElement;
    if (activeClass) {
      setTimeout(() => html.addEventListener("click", toggleSectionList));
    }
    return () => {
      html.removeEventListener("click", toggleSectionList);
    };
  }, [activeClass, toggleSectionList]);

  return (
    <ButtonContainer>
      <Button
        onClick={toggleSectionList}
        className={`${activeClass ? "active selected" : ""}`}
      >
        {sectionTitle} <ArrowDown />
      </Button>
      {activeClass && (
        <SectionList>
          {sectionList.map((sec) => (
            <li key={sec} onClick={() => handleChangeSection(sec)}>
              {upFirstLetter(sec)}
            </li>
          ))}
        </SectionList>
      )}
    </ButtonContainer>
  );
};

export default Search;
