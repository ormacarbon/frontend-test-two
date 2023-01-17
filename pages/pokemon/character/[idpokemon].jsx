import { useEffect, useState } from "react";

import Image from "next/image";

import api from "../../../services/api.service";

import Nav from "../../../components/Nav";

import {
  Content,
  Box,
  CardCharacter,
  PokemonStatBox,
  BoxEvolvesTo,
  PokemonSkills,
  BoxSkill,
  Skill,
} from "./styles";

export default function CharacterPokemon({ data }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Content>
      <Nav />
      <Box>
        <CardCharacter>
          <Image
            src={`${data.images.large}`}
            alt="card pokemon"
            width={250}
            height={350}
          />
          <PokemonStatBox>
            <h2>{data.name}</h2>
            {data.level ? (
              <div>
                <p>lvl {data.level}</p>
                <Image
                  src={"/assets/lvl.svg"}
                  alt="lvl"
                  width={25}
                  height={25}
                />
              </div>
            ) : (
              <></>
            )}
            <div>
              <p>heart {data.hp}</p>
              <Image
                src={"/assets/heart.svg"}
                alt="hp"
                width={25}
                height={25}
              />
            </div>
          </PokemonStatBox>
          <BoxEvolvesTo>
            <div>
              <h4>type pokemon:</h4>
              {data.types &&
                data.types.map((element, index) => {
                  return (
                    <>
                      <p>{element}</p>
                      <Image
                        key={index}
                        src={`/assets/${element}.svg`}
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </>
                  );
                })}
            </div>
            <div>
              {data.evolvesTo ? (
                <>
                  <h4>evolves to</h4>
                  <p>{data.evolvesTo}</p>
                </>
              ) : (
                <>
                  <h4>evolves from:</h4>
                  <p>{data.evolvesFrom}</p>
                </>
              )}
              <Image
                src={`/assets/ball.svg`}
                alt="ball"
                width={25}
                height={25}
              />
            </div>
          </BoxEvolvesTo>
          <PokemonSkills>
            {data?.abilities ? Abilities(data) : <></>}
            {data?.attacks ? Attacks(data) : <></>}
          </PokemonSkills>
        </CardCharacter>
      </Box>
    </Content>
  );
}

export const Abilities = (data) => {
  return (
    <BoxSkill>
      <h3>Abilities</h3>
      <Skill>
        {data.abilities.map((abilities) => {
          return (
            <>
              <h4>{abilities.name}</h4>
              <p>{abilities.text}</p>
            </>
          );
        })}
      </Skill>
    </BoxSkill>
  );
};

export const Attacks = (data) => {
  return (
    <BoxSkill>
      <h3>Attacks</h3>
      <Skill>
        {data.attacks.map((attacks, key) => {
          return (
            <>
              <h4>{attacks.name}</h4>
              <p>{attacks.text}</p>
              <div>
                <p>damage {attacks.damage}</p>
                <Image
                  key={key}
                  alt="sword"
                  src={"/assets/swords.svg"}
                  width={25}
                  height={25}
                />
              </div>
            </>
          );
        })}
      </Skill>
    </BoxSkill>
  );
};

CharacterPokemon.getInitialProps = async (context) => {
  const { idpokemon } = context.query
  const data = await api.get(`/${idpokemon}`)
  return data
};
