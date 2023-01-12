import React from "react";
import axios from "axios";
import Image from "next/image";

export const getServerSideProps = async (context: any) => {
  const id = context.params.id;
  const fetch = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
  const res = await fetch.data;

  return {
    props: {
      data: res,
    },
  };
};

export default function PokemonDetails({ data }: any) {
  return (
    <div className="bg-gray-200 flex w-[100vw] -mb-6">
      <main className="mt-5 mx-auto">
        <section className="bg-white w-[400px] rounded-xl shadow pb-4">
          <Image
            src={data.sprites.front_default}
            alt={data.name + "icon"}
            width={400}
            height={400}
          />
          <h1 className="text-center capitalize text-4xl font-bold">
            {data.name}
          </h1>
          <p className="text-center text-2xl">{data.base_experience} XP</p>
        </section>
        <section className="bg-white mt-5 w-[400px] rounded-xl shadow py-4">
          <h2 className="text-2xl font-bold text-center">Abilities</h2>
          {data.abilities.map((i) => {
            return (
              <p
                key={i.ability.name}
                className="text-center text-xl capitalize"
              >
                -{i.ability.name.replace(/-/g, " ")}
              </p>
            );
          })}
        </section>
        <section className="bg-white mt-5 w-[400px] rounded-xl shadow py-4">
          <h2 className="text-center text-2xl font-bold">Moves</h2>
          {data.moves.map((i) => {
            return (
              <p key={i.move.name} className="text-center text-xl capitalize">
                -{i.move.name.replace(/-/g, " ")}
              </p>
            );
          })}
        </section>
        <section className="bg-white mt-5 w-[400px] rounded-xl shadow py-4">
          <h2 className="text-center text-2xl font-bold">Weight</h2>
          <p className="text-center text-xl">{data.weight} Hg</p>
        </section>
        <section className="bg-white mt-5 w-[400px] rounded-xl shadow py-4 mb-5">
          <h2 className="text-center text-2xl font-bold">Gallery</h2>
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
                  <p className="text-center">Front default</p>
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
                  <p className="text-center">Front shiny</p>
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
                  <p className="text-center">Front female</p>
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
                  <p className="text-center">Back default</p>
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
                  <p className="text-center">Back shiny</p>
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
                  <p className="text-center">Back female</p>
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
                  <p className="text-center">
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
                  <p className="text-center">
                    Back shiny <br />
                    female
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
