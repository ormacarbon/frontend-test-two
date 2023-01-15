const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default class PokemonServices {
  async getAllPokemons() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  }

  async findPokemonByName(pokemonName) {
    const response = await fetch(`${BASE_URL}/${pokemonName}`);
    const data = await response.json();
    return data;
  }

  async getNextPage(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}