export default async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

    if (!response.ok) {
      throw new Error(`HTTP error! Status code: ${response.status}`);
    }

    const pokemon = await response.json();

    // TODO: Refactor this code so that we don't have to call getPokemonIdFromUrl() twice
    // - map over the full pokemon.results to attach the extracted id to every item (even the ones outside 1-20)
    // - filter on that already-computed id field so that URL-parsing happens exactly once per item.

    const getTwentyPokemon = pokemon.results
      .filter((item) => {
        return getPokemonIdFromUrl(item.url);
      })
      .map((item) => {
        return { id: getPokemonIdFromUrl(item.url), name: item.name };
      });

    return getTwentyPokemon;
  } catch (error) {
    throw new Error("Could not fetch data", { cause: error });
  }
}

function getPokemonIdFromUrl(url) {
  const pokemonUrl = new URL(url);
  const splitUrl = pokemonUrl.pathname.split("/");
  if (splitUrl[4] <= 20) {
    return Number(splitUrl[4]);
  }
}
