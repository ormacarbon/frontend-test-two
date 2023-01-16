import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import toggleButton from "../../public/images/nightLightMode.png";
import {
  ButtonLight,
  ButtonNextPage,
  ButtonPrevPage,
  DivCount,
  DivNav,
  HOneModified,
  InputModified,
  NavStyled,
  ToggleLight,
} from "./styles";

const Nav = () => {
  const context = useContext(GlobalContext);
  const { toggleTheme, pagesNumber, count, setCount, search, setSearch } =
    context;
  const router = useRouter();

  const handleDivNav = () => {
    switch (router.pathname) {
      case "/":
        return (
          <DivNav>
            {count === 0 ? (
              <ButtonPrevPage disabled>Prev. Page</ButtonPrevPage>
            ) : (
              <ButtonPrevPage onClick={() => setCount((prev) => prev - 1)}>
                Prev. Page
              </ButtonPrevPage>
            )}
            <DivCount>{count + 1}</DivCount>
            {count === pagesNumber ? (
              <ButtonNextPage disabled>Next Page</ButtonNextPage>
            ) : (
              <ButtonNextPage onClick={() => setCount((prev) => prev + 1)}>
                Next Page
              </ButtonNextPage>
            )}
          </DivNav>
        );
      case "/comicsPage":
        return (
          <DivNav>
            {count === 0 ? (
              <ButtonPrevPage disabled>Prev. Page</ButtonPrevPage>
            ) : (
              <ButtonPrevPage onClick={() => setCount((prev) => prev - 1)}>
                Prev. Page
              </ButtonPrevPage>
            )}
            <DivCount>{count + 1}</DivCount>
            {count === pagesNumber ? (
              <ButtonNextPage disabled>Next Page</ButtonNextPage>
            ) : (
              <ButtonNextPage onClick={() => setCount((prev) => prev + 1)}>
                Next Page
              </ButtonNextPage>
            )}
          </DivNav>
        );
      case "/creatorsPage":
        return (
          <></>
        );
      default:
        break;
    }
  };

  return (
    <NavStyled>
      <HOneModified>
        Welcome, in here you can get to know better each Character, Comic or Creator.
        <br />
        Some of them are shy, so they do not enjoyed appearing in pictures.
        <br />
        Be free to take a look in their cards.
      </HOneModified>
      <ToggleLight>
        <ButtonLight onClick={() => toggleTheme()}>
          <Image src={toggleButton} width={64} height={64} alt="Button" />
        </ButtonLight>
      </ToggleLight>
      {handleDivNav()}
      <InputModified
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </NavStyled>
  );
};

export default Nav;
