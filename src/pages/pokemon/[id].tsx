import React from "react";
import axios from "axios";

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
  console.log(data);
  return (
    <>
      <h1>{data.name}</h1>
      <p>XP - {data.base_experience}</p>
    </>
  );
}
