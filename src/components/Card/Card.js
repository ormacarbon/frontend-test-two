import { useRouter } from "next/router";
import React from "react";
import {
  Back,
  Flipper,
  Front,
  H2Modified,
  ImgCard,
  PageCard,
  PDescription,
} from "./styles";

const Card = (props) => {
  const router = useRouter();
  const { character, comic, creator } = props;

  const handlePage = () => {
    switch (router.pathname) {
      case "/":
        return (
          <PageCard>
            <Flipper>
              <Front>
                <ImgCard
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={`Photo of ${character.name}`}
                />
              </Front>
              <Back>
                <H2Modified>{character.name}</H2Modified>
                <p>{`ID: ${character.id}`}</p>
                <p>{`Description: ${character.description}`}</p>
                <p>{`Comics appearances: ${character.comics.available}`}</p>
              </Back>
            </Flipper>
          </PageCard>
        );

      case "/comicsPage":
        return (
          <PageCard>
            <Flipper>
              <Front>
                <ImgCard
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={`Photo of ${comic.title}`}
                />
              </Front>
              <Back>
                <H2Modified>{comic.title}</H2Modified>
                <p>{`ID: ${comic.id}`}</p>
                <p>{`Number of pages: ${comic.pageCount}`}</p>
                <PDescription>{`Description: ${comic.description}`}</PDescription>
              </Back>
            </Flipper>
          </PageCard>
        );

      case "/creatorsPage":
        return (
          <PageCard>
            <Flipper>
              <Front>
                <ImgCard
                  src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
                  alt={`Photo of ${creator.fullName}`}
                />
              </Front>
              <Back>
                <H2Modified>{`${creator.fullName}`}</H2Modified>
                <p>{`ID: ${creator.id}`}</p>
                <p>{`Written Comics: ${creator.comics.available}`}</p>
                <p>{`Written Series: ${creator.series.available}`}</p>
              </Back>
            </Flipper>
          </PageCard>
        );

      default:
        break;
    }
  };

  return <div>{handlePage()}</div>;
};

export default Card;
