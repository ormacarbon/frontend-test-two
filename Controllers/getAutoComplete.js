function getAutoComplete() {
  const pokemonList = localStorage.getItem("PokemonList");

  if (pokemonList === undefined && pokemonList === null) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1279")
      .then((resp) => resp.json())
      .then((data) => {
        const Arr = data.results.map((a) => a.name);
        console.log(Arr);
        localStorage.setItem("PokemonList", JSON.stringify(Arr));
      });
  }

  return;
}

export default getAutoComplete;
