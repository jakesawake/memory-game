export default async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

    if (!response.ok) {
      throw new Error(`HTTP error! Status code: ${response.status}`);
    }

    const pokemon = await response.json();

    const getTwentyPokemon = pokemon.results
      .filter((item) => {
        return getPokemonIdFromUrl(item.url);
      })
      .map((item) => {
        return { id: getPokemonIdFromUrl(item.url), name: item.name };
      });

    return getTwentyPokemon;
  } catch (error) {
    console.error(`Fetch failed:`, error);
  }
}

function getPokemonIdFromUrl(url) {
  const pokemonUrl = new URL(url);
  const splitUrl = pokemonUrl.pathname.split("/");
  if (splitUrl[4] <= 20) {
    console.log(splitUrl[4]);
    return Number(splitUrl[4]);
  }
}
