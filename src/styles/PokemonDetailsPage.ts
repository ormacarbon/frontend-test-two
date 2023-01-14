import styled, { withTheme } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const DetailsWrapper = withTheme(styled.div`
  display: flex;
  background-color: rgb(229 231 235);
  min-height: 100vh;
  margin-bottom: -1.5rem;

  ${(props) =>
    props.theme.title === "dark" &&
    `
    background-color: rgb(31 41 55);
  `}
`);

export const DetailsMain = styled.main`
  margin-top: 1.25rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionWrapper = styled.div`
  display: block;

  @media (min-width: 640px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1024px) {
    display: block;
  }

  @media (min-width: 1280px) {
    display: flex;
    gap: 1.25rem;
  }
`;

export const Section = withTheme(styled.section`
  background-color: rgb(255 255 255);
  margin-top: 1.25rem;
  width: 20rem;
  border-radius: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.theme.title === "dark" &&
    `
     background-color: rgb(55 65 81);
  `};
`);

export const PokemonImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  object-fit: contain;
  width: 300px;
  height: 300px;
`;

export const PokemonTitle = withTheme(styled.h1`
  text-align: center;
  text-transform: capitalize;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;

  ${(props) =>
    props.theme.title === "dark" &&
    `
    color: rgb(229 231 235);
  `};
`);

export const PokemonXP = withTheme(styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;

  ${(props) =>
    props.theme.title === "dark" &&
    `
    color: rgb(229 231 235);
  `};
`);

export const SectionTitle = withTheme(styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;

  ${(props) =>
    props.theme.title === "dark" &&
    `
    color: rgb(229 231 235);
  `};
`);

export const SectionItem = withTheme(styled.p`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-transform: capitalize;

  ${(props) =>
    props.theme.title === "dark" &&
    `
    color: rgb(229 231 235);
  `};
`);

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryTitle = withTheme(styled.div`
  text-align: center;

  ${(props) =>
    props.theme.title === "dark" &&
    `
    color: rgb(229 231 235);
  `};
`);

export const GalleryImage = styled(Image)`
  object-fit: contain;
  width: 100px;
  height: 100px;
`;

export const ShowMoreTrue = withTheme(styled.div`
  text-align: center;
  height: 22.75rem;
  overflow-y: auto;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  border-width: 2px;

  ${(props) =>
    props.theme.title === "dark" &&
    `
    border-color: rgb(75 85 99); 
  `};
`);

export const ShowMoreFalse = withTheme(styled.div`
  text-align: center;

  ${(props) =>
    props.theme.title === "dark" &&
    `
    color: rgb(229 231 235);
  `};
`);

export const BackButtonWrapper = styled.div`
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
`;

export const ShowMoreButton = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  color: rgb(255 255 255);
  background-color: rgb(29 78 216);
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  border: none;

  &:hover {
    background-color: rgb(30 64 175);
  }
  &:active {
    background-color: rgb(30 58 138);
  }
`;

export const BackButton = styled(Link)`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  color: rgb(255 255 255);
  background-color: rgb(29 78 216);
  text-decoration: none;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    background-color: rgb(30 64 175);
  }
  &:active {
    background-color: rgb(30 58 138);
  }
`;
