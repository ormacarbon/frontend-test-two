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
    <>
      <Image
        src={data.sprites.front_default}
        alt={data.name + "icon"}
        width={400}
        height={400}
      />
      <h1 className="text-center capitalize text-4xl font-bold">{data.name}</h1>
      <p className="text-center text-2xl">{data.base_experience} XP</p>
      <h2>Abilities</h2>
      <div>
        {data.abilities.map((i) => {
          return <p key={i.ability.name}>{i.ability.name}</p>;
        })}
      </div>
      <h2>Forms</h2>
      <div>
        {data.forms.map((i) => {
          return <p key={i.name}>{i.name}</p>;
        })}
      </div>
      <h2>Moves</h2>
      <div>
        {data.moves.map((i) => {
          return <p key={i.move.name}>{i.move.name}</p>;
        })}
      </div>
      <h2>Weight - {data.weight}</h2>
      <div>
        <h2>Gallery</h2>
        <div>
          {data.sprites.front_default && (
            <Image
              src={data.sprites.front_default}
              alt=""
              width={40}
              height={40}
            />
          )}
          {data.sprites.front_shiny && (
            <Image
              src={data.sprites.front_shiny}
              alt=""
              width={40}
              height={40}
            />
          )}
          {data.sprites.front_female && (
            <Image
              src={data.sprites.front_female}
              alt=""
              width={40}
              height={40}
            />
          )}
          {data.sprites.back_default && (
            <Image
              src={data.sprites.back_default}
              alt=""
              width={40}
              height={40}
            />
          )}
          {data.sprites.back_shiny && (
            <Image
              src={data.sprites.back_shiny}
              alt=""
              width={40}
              height={40}
            />
          )}
          {data.sprites.back_female && (
            <Image
              src={data.sprites.back_female}
              alt=""
              width={40}
              height={40}
            />
          )}
          {data.sprites.front_shiny_female && (
            <Image
              src={data.sprites.front_shiny_female}
              alt=""
              width={40}
              height={40}
            />
          )}
          {data.sprites.back_shiny_female && (
            <Image
              src={data.sprites.back_shiny_female}
              alt=""
              width={40}
              height={40}
            />
          )}
        </div>
      </div>
    </>
  );
}
