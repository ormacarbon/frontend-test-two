

export const getPokemonType = (type) => {
  switch (type) {
    case "bug":
      return "/images/pokemon-types/bug.png";
    case "dark":
      return "/images/pokemon-types/dark.png";
    case "dragon":
      return "/images/pokemon-types/dragon.png";
    case "electric":
      return "/images/pokemon-types/electric.png";
    case "fairy":
      return "/images/pokemon-types/fairy.png";
    case "fighting":
      return "/images/pokemon-types/fighting.png";
    case "fire":
      return "/images/pokemon-types/fire.png";
    case "flying":
      return "/images/pokemon-types/flying.png";
    case "ghost":
      return "/images/pokemon-types/ghost.png";
    case "grass":
      return "/images/pokemon-types/grass.png";
    case "ground":
      return "/images/pokemon-types/ground.png";
    case "ice":
      return "/images/pokemon-types/ice.png";
    case "normal":
      return "/images/pokemon-types/normal.png";
    case "poison":
      return "/images/pokemon-types/poison.png";
    case "psychic":
      return "/images/pokemon-types/psychic.png";
    case "rock":
      return "/images/pokemon-types/rock.png";
    case "steel":
      return "/images/pokemon-types/steel.png";
    case "water":
      return "/images/pokemon-types/water.png";
    default:
      return "/images/pokemon-types/water.png";
  }
};
