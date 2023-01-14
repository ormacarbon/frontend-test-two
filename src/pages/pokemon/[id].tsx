import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import {
  BackButton,
  BackButtonWrapper,
  DetailsMain,
  DetailsWrapper,
  GalleryGrid,
  GalleryImage,
  GalleryTitle,
  PokemonImage,
  PokemonTitle,
  PokemonXP,
  Section,
  SectionItem,
  SectionTitle,
  SectionWrapper,
  ShowMoreButton,
  ShowMoreTrue,
} from "../../styles/PokemonDetailsPage";

export const getServerSideProps = async (context: {
  params: { id: number };
}) => {
  const id = context.params.id;
  const fetch = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
  const res = await fetch.data;

  return {
    props: {
      data: res,
    },
  };
};

interface PokemonData {
  id: number;
  name: string;
  base_experience: number;
  abilities: Array<{ ability: { name: string } }>;
  types: Array<{ type: { name: string } }>;
  moves: Array<{ move: { name: string } }>;
  weight: number;
  sprites: {
    front_default?: string;
    front_shiny?: string;
    front_female?: string;
    back_default?: string;
    back_shiny?: string;
    back_female?: string;
    front_shiny_female?: string;
    back_shiny_female?: string;
  };
}

export default function PokemonDetails({ data }: { data: PokemonData }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <DetailsWrapper>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <meta
          name="description"
          content="A Twitter clone I made from scratch with React JS and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Pokémon, Search, List, Pokédex, Pedro, Lucena"
        />
        <meta name="author" content="Pedro Lucena"></meta>
        <title>
          {data.name.slice(0, 1).toUpperCase() + data.name.slice(1)} - Pokémon
          Search
        </title>
      </Head>
      <DetailsMain>
        <SectionWrapper>
          <Section>
            <PokemonImage
              src={data.sprites.front_default}
              alt={data.name + "icon"}
              width={300}
              height={300}
            />
            <PokemonTitle>{data.name}</PokemonTitle>
            <PokemonXP>{data.base_experience} XP</PokemonXP>
          </Section>
          <Section>
            <SectionTitle>Moves</SectionTitle>
            {showMore ? (
              <ShowMoreTrue>
                {data.moves.map((i) => {
                  return (
                    <SectionItem key={i.move.name}>
                      -{i.move.name.replace(/-/g, " ")}
                    </SectionItem>
                  );
                })}
              </ShowMoreTrue>
            ) : (
              data.moves.slice(0, 13).map((i) => {
                return (
                  <SectionItem key={i.move.name}>
                    -{i.move.name.replace(/-/g, " ")}
                  </SectionItem>
                );
              })
            )}
            {data.moves.length > 13 && (
              <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show more..."}
              </ShowMoreButton>
            )}
          </Section>
          <Section>
            <SectionTitle>Gallery</SectionTitle>
            <span>
              <GalleryGrid>
                {data.sprites.front_default && (
                  <div>
                    <GalleryImage
                      src={data.sprites.front_default}
                      alt={data.name + "front default"}
                      width={100}
                      height={100}
                    />
                    <GalleryTitle>Front default</GalleryTitle>
                  </div>
                )}
                {data.sprites.front_shiny && (
                  <div>
                    <GalleryImage
                      src={data.sprites.front_shiny}
                      alt={data.name + "front shiny"}
                      width={100}
                      height={100}
                    />
                    <GalleryTitle>Front shiny</GalleryTitle>
                  </div>
                )}
                {data.sprites.front_female && (
                  <div>
                    <GalleryImage
                      src={data.sprites.front_female}
                      alt={data.name + "front female"}
                      width={100}
                      height={100}
                    />
                    <GalleryTitle>Front female</GalleryTitle>
                  </div>
                )}
                {data.sprites.back_default && (
                  <div>
                    <GalleryImage
                      src={data.sprites.back_default}
                      alt={data.name + "back default"}
                      width={100}
                      height={100}
                    />
                    <GalleryTitle>Back default</GalleryTitle>
                  </div>
                )}
                {data.sprites.back_shiny && (
                  <div>
                    <GalleryImage
                      src={data.sprites.back_shiny}
                      alt={data.name + "back shiny"}
                      width={100}
                      height={100}
                    />
                    <GalleryTitle>Back shiny</GalleryTitle>
                  </div>
                )}
                {data.sprites.back_female && (
                  <div>
                    <GalleryImage
                      src={data.sprites.back_female}
                      alt={data.name + "back female"}
                      width={100}
                      height={100}
                    />
                    <GalleryTitle>Back female</GalleryTitle>
                  </div>
                )}
                {data.sprites.front_shiny_female && (
                  <div>
                    <GalleryImage
                      src={data.sprites.front_shiny_female}
                      alt={data.name + "front shiny female"}
                      width={100}
                      height={100}
                    />
                    <GalleryTitle>
                      Front shiny <br />
                      female
                    </GalleryTitle>
                  </div>
                )}
                {data.sprites.back_shiny_female && (
                  <div>
                    <GalleryImage
                      src={data.sprites.back_shiny_female}
                      alt={data.name + "back shiny female"}
                      width={100}
                      height={100}
                    />
                    <GalleryTitle>
                      Back shiny <br />
                      female
                    </GalleryTitle>
                  </div>
                )}
              </GalleryGrid>
            </span>
          </Section>
        </SectionWrapper>
        <SectionWrapper>
          <Section>
            <SectionTitle>Abilities</SectionTitle>
            {data.abilities.map((i) => {
              return (
                <SectionItem key={i.ability.name}>
                  -{i.ability.name.replace(/-/g, " ")}
                </SectionItem>
              );
            })}
          </Section>
          <Section>
            <SectionTitle>Weight</SectionTitle>
            <SectionItem>{data.weight} Hg</SectionItem>
          </Section>
          <Section>
            <SectionTitle>Types</SectionTitle>
            {data.types.map((i) => {
              return (
                <SectionItem key={i.type.name}>
                  -{i.type.name.replace(/-/g, " ")}
                </SectionItem>
              );
            })}
          </Section>
        </SectionWrapper>

        <BackButtonWrapper>
          <BackButton href="/">Back</BackButton>
        </BackButtonWrapper>
      </DetailsMain>
    </DetailsWrapper>
  );
}
