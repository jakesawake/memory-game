export default async function fetchPokemon() {
  // getting the list of 151 pokemon
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

    if (!response.ok) {
      throw new Error(`HTTP error! Status code: ${response.status}`);
    }

    // console.log(response.status);

    const pokemon = await response.json();
    // console.log(pokemon);

    const getTwentyPokemonV2 = pokemon.results
      .filter((item) => {
        getPokemonIdFromUrl(item.url) ? item : console.log("No item here");
      })
      .map((item) => {
        const splitUrl = getPokemonIdFromUrl(item.url);
        return { id: splitUrl[4], name: item.name };
      });

    console.log(getTwentyPokemonV2);
  } catch (error) {
    console.error(`Fetch failed:`, error);
  }
}

function getPokemonIdFromUrl(url) {
  const pokemonUrl = new URL(url);
  const splitUrl = pokemonUrl.pathname.split("/");
  if (splitUrl[4] <= 20) {
    console.log(splitUrl[4]);
    return splitUrl[4];
  }
}
