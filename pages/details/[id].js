import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/state";
import Navbar from "../../src/components/Navbar";
import { getPokemonType } from "../../src/components/PokemonCard/types";
import styled, { keyframes } from "styled-components";
import ScrollButton from "../../src/components/ScrollButton";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DetailStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
  flex-wrap: wrap;
  width: 100vw;
  min-height: calc(100vh - 116px);
  gap: 30px;
  background-color: ${({ theme }) => theme.backgroundBase};
  color: #ffffff;
  animation: ${fadeIn} 1.5s ease-in-out;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin: 0 0 5px 0;
    text-transform: capitalize;
    letter-spacing: 0.03rem;
  }
  h2 {
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: left;
    margin: 5px 0;
    letter-spacing: 0.05rem;
  }
  p {
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    margin: 0;
    letter-spacing: 0.05rem;
    color: black;
  }

  .container-details {
    max-width: 500px;
    min-width: 350px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.backgroundLevel3};
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    .container-type {
      width: 150px;
      display: flex;
      img {
        max-width: 100px;
        height: 24px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px dashed #ffffff;
        margin-right: 8px;
        animation: ${fadeIn} 2s ease-in-out;
      }
    }
  }

  .container-base-stats {
    display: flex;
    flex-direction: column;
    padding: 16px;
    max-width: 500px;
    width: 350px;
    height: 405px;
    background-color: ${({ theme }) => theme.backgroundLevel3};
    border-radius: 8px;
    .title-base-stats {
      margin-bottom: 20px;
      margin-left: 15px;
    }
  }
  .container-stats {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }

  .stat {
    display: flex;
    align-items: center;
    border-top: 1px solid lightgrey;
    .stat-name {
      display: flex;
      justify-content: end;
      font-weight: 900;
      padding: 5px 0;
      flex-grow: 2;
      text-transform: capitalize;
      p{
        color: #ffffff;
      }
      .number-stat {
        flex-grow: 0;
        padding: 0 20px;
        font-weight: 500;
      }
    }
    .container-bar {
      display: flex;
      justify-content: start;
      width: 100px;
    }
  }
  hr {
    border: 1px solid lightgrey;
    width: 100%;
  }
  .stat-total {
    display: flex;
    align-items: center;
    margin-left: 100px;
    
    p {
      margin-left: 10px;
      font-weight: 700;
      color: #ffffff;
      font-size: 1.05rem;
    }
  }

  .container-moves {
      display: flex;
      flex-direction: column;
      width: 292px;
      height: 440px;
      background-color: ${({ theme }) => theme.backgroundLevel3};
      border-radius: 8px;
      h2 {
        padding: 15px;
        margin-left: 15px;
        align-self: flex-start;
        font-style: normal;
        line-height: 30px;
      }
    }
    .container-move-types {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding-left: 30px;
      p {
        width: auto;
        color: #5d5d5d;
        background: #ececec;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 8px;
        padding: 15px;
      }
    }
    @media (max-width: 980px) {
      .container-moves{
        width: 380px;
      }
    }
`;

const CardColor = styled.div`
  background-color: ${(props) => props.color};
  padding: 16px;
  max-width: 500px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  position: relative;
  .img-pokemon {
    width: 270px;
    height: 270px;
    align-self: center;
    justify-self: center;
    animation: ${fadeIn} 1.5s ease-in-out;
    z-index: 2;
  }
  .img-pokedex {
    z-index: 0;
    width: 345px;
    position: absolute;
    bottom: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ContainerBar = styled.div`
  background-color: ${(props) => props.color};
  height: 10px;
  border-radius: 8px;
  ${(props) => `
    width: ${props.size}%;
  `}
`;

export default function Details() {
  const { getPokemonColor } = useContext(GlobalContext);
  const [pokemonDetail, setPokemonDetail] = useState({});

  const router = useRouter();
  const { id } = router.query;

  const fetchPokemonDetail = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemonDetail(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  const barColor = (statNumber) => {
    if (statNumber <= 50) {
      return "#ff7c2d";
    } else {
      return "#ffdd6a";
    }
  };

  const totalStats = (stat) => {
    return (
      stat[0].base_stat +
      stat[1].base_stat +
      stat[2].base_stat +
      stat[3].base_stat +
      stat[4].base_stat +
      stat[5].base_stat
    );
  };

  return (
    <>
      <Navbar />
      <DetailStyled>
        <div className="card">
          <CardColor
            color={getPokemonColor(
              pokemonDetail.types && pokemonDetail.types[0].type.name
            )}
          >
            <h2>
              #
              {pokemonDetail.id < 10
                ? `0${pokemonDetail.id}`
                : pokemonDetail.id}
            </h2>
            <img
              className="img-pokemon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
              alt={pokemonDetail.name}
            />
            <img className="img-pokedex" src={"/images/pokedex.png"} alt={"pokedex"} />
          </CardColor>
          <section className="container-details">
            <h1 className="name">{pokemonDetail.name}</h1>
            <div className="container-type">
              {pokemonDetail.types?.map((type, index) => {
                return <img src={getPokemonType(type.type.name)} key={index} />;
              })}
            </div>
          </section>
        </div>
        <div className="container-base-stats">
          <h2 className="title-base-stats">Base stats:</h2>
          <div className="container-stats">
            {pokemonDetail.stats?.map((stat, index) => {
              return (
                <div key={index}>
                  <div className="stat">
                    <div className="stat-name">
                      <p>{stat.stat.name}</p>
                      <p className="number-stat">{stat.base_stat}</p>
                    </div>
                    <div className="container-bar">
                      <ContainerBar
                        className="bar-color"
                        color={barColor(stat.base_stat)}
                        size={stat.base_stat}
                      ></ContainerBar>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr/>
            <div className="stat-total">
              <p>Total</p>
              <p>{pokemonDetail.stats && totalStats(pokemonDetail.stats)}</p>
              <div>
                <ContainerBar color={"none"} size={150}></ContainerBar>
              </div>
            </div>
          </div>
        </div>
        <section className="container-moves">
          <h2>Moves:</h2>

          <section className="container-move-types">
            <p>
              {pokemonDetail.moves &&
                pokemonDetail.moves[0].move.name.charAt(0).toUpperCase() +
                  pokemonDetail.moves[0].move.name?.slice(1)}
            </p>
            <p>
              {pokemonDetail.moves &&
                pokemonDetail.moves[1].move.name.charAt(0).toUpperCase() +
                  pokemonDetail.moves[1].move.name?.slice(1)}
            </p>
            <p>
              {pokemonDetail.moves &&
                pokemonDetail.moves[2].move.name.charAt(0).toUpperCase() +
                  pokemonDetail.moves[2].move.name?.slice(1)}
            </p>
            <p>
              {pokemonDetail.moves &&
                pokemonDetail.moves[3].move.name.charAt(0).toUpperCase() +
                  pokemonDetail.moves[3].move.name?.slice(1)}
            </p>
          </section>
        </section>
      </DetailStyled>
      <ScrollButton/>
    </>
  );
}
