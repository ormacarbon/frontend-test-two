import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

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
    <div className="bg-gray-200 dark:bg-gray-800 flex min-w-screen min-h-screen -mb-6">
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
      <main className="mt-5 mx-auto">
        <div className="block sm:block md:block lg:block xl:flex xl:gap-5">
          <section className="bg-white dark:bg-gray-700 mt-5 w-80 rounded-xl shadow py-4">
            <Image
              src={data.sprites.front_default}
              alt={data.name + "icon"}
              width={400}
              height={400}
            />
            <h1 className="text-center dark:text-gray-200 capitalize text-4xl font-bold">
              {data.name}
            </h1>
            <p className="text-center text-2xl dark:text-gray-200">
              {data.base_experience} XP
            </p>
          </section>
          <section className="bg-white dark:bg-gray-700 mt-5 w-80 rounded-xl shadow py-4">
            <h2 className="text-center text-2xl dark:text-gray-200 font-bold pb-2">
              Moves
            </h2>
            {showMore ? (
              <div className="h-96 overflow-y-auto mx-3 border-2 dark:border-gray-600">
                {data.moves.map((i) => {
                  return (
                    <p
                      key={i.move.name}
                      className="text-center text-xl dark:text-gray-200 capitalize"
                    >
                      -{i.move.name.replace(/-/g, " ")}
                    </p>
                  );
                })}
              </div>
            ) : (
              data.moves.slice(0, 13).map((i) => {
                return (
                  <p
                    key={i.move.name}
                    className="text-center text-xl dark:text-gray-200 capitalize"
                  >
                    -{i.move.name.replace(/-/g, " ")}
                  </p>
                );
              })
            )}
            {data.moves.length > 13 && (
              <button
                className="flex mx-auto my-2   bg-blue-700 hover:bg-blue-800 active:bg-blue-900 py-3 px-5 text-white font-semibold rounded-lg transition-all duration-250 ease-in"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more..."}
              </button>
            )}
          </section>
          <section className="bg-white dark:bg-gray-700 mt-5 w-80 rounded-xl shadow py-4">
            <h2 className="text-center text-2xl dark:text-gray-200 font-bold">
              Gallery
            </h2>
            <div className="flex">
              <div className="mx-auto grid grid-cols-3">
                {data.sprites.front_default && (
                  <div>
                    <Image
                      src={data.sprites.front_default}
                      alt={data.name + "front default"}
                      width={300}
                      height={300}
                    />
                    <p className="text-center dark:text-gray-200">
                      Front default
                    </p>
                  </div>
                )}
                {data.sprites.front_shiny && (
                  <div>
                    <Image
                      src={data.sprites.front_shiny}
                      alt={data.name + "front shiny"}
                      width={300}
                      height={300}
                    />
                    <p className="text-center dark:text-gray-200">
                      Front shiny
                    </p>
                  </div>
                )}
                {data.sprites.front_female && (
                  <div>
                    <Image
                      src={data.sprites.front_female}
                      alt={data.name + "front female"}
                      width={300}
                      height={300}
                    />
                    <p className="text-center dark:text-gray-200">
                      Front female
                    </p>
                  </div>
                )}
                {data.sprites.back_default && (
                  <div>
                    <Image
                      src={data.sprites.back_default}
                      alt={data.name + "back default"}
                      width={300}
                      height={300}
                    />
                    <p className="text-center dark:text-gray-200">
                      Back default
                    </p>
                  </div>
                )}
                {data.sprites.back_shiny && (
                  <div>
                    <Image
                      src={data.sprites.back_shiny}
                      alt={data.name + "back shiny"}
                      width={300}
                      height={300}
                    />
                    <p className="text-center dark:text-gray-200">Back shiny</p>
                  </div>
                )}
                {data.sprites.back_female && (
                  <div>
                    <Image
                      src={data.sprites.back_female}
                      alt={data.name + "back female"}
                      width={300}
                      height={300}
                    />
                    <p className="text-center dark:text-gray-200">
                      Back female
                    </p>
                  </div>
                )}
                {data.sprites.front_shiny_female && (
                  <div>
                    <Image
                      src={data.sprites.front_shiny_female}
                      alt={data.name + "front shiny female"}
                      width={300}
                      height={300}
                    />
                    <p className="text-center dark:text-gray-200">
                      Front shiny <br />
                      female
                    </p>
                  </div>
                )}
                {data.sprites.back_shiny_female && (
                  <div>
                    <Image
                      src={data.sprites.back_shiny_female}
                      alt={data.name + "back shiny female"}
                      width={300}
                      height={300}
                    />
                    <p className="text-center dark:text-gray-200">
                      Back shiny <br />
                      female
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
        <div className="block sm:block md:block lg:block xl:flex xl:gap-5">
          <section className="bg-white dark:bg-gray-700 mt-5 w-80 rounded-xl shadow py-4">
            <h2 className="text-2xl font-bold text-center dark:text-gray-200">
              Abilities
            </h2>
            {data.abilities.map((i) => {
              return (
                <p
                  key={i.ability.name}
                  className="text-center text-xl dark:text-gray-200 capitalize"
                >
                  -{i.ability.name.replace(/-/g, " ")}
                </p>
              );
            })}
          </section>
          <section className="bg-white dark:bg-gray-700 mt-5 w-80 rounded-xl shadow py-4">
            <h2 className="text-center text-2xl font-bold dark:text-gray-200">
              Weight
            </h2>
            <p className="text-center text-xl dark:text-gray-200">
              {data.weight} Hg
            </p>
          </section>
          <section className="bg-white dark:bg-gray-700 mt-5 w-80 rounded-xl shadow py-4">
            <h2 className="text-2xl font-bold text-center dark:text-gray-200">
              Types
            </h2>
            {data.types.map((i) => {
              return (
                <p
                  key={i.type.name}
                  className="text-center text-xl dark:text-gray-200 capitalize"
                >
                  -{i.type.name.replace(/-/g, " ")}
                </p>
              );
            })}
          </section>
        </div>

        <div className="py-7">
          <Link
            href="/"
            className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 py-3 px-5 text-white font-semibold rounded-lg transition-all duration-250 ease-in"
          >
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}
