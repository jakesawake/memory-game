export default async function fetchPokemon() {
  // getting the list of 151 pokemon
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

    if (!response.ok) {
      throw new Error(`HTTP error! Status code: ${response.status}`);
    }

    // console.log(response.status);

    const pokemon = await response.json();
    console.log(pokemon);

    // console.log(pokemon.results[0].name) gets the name of the pokemon
    // console.log(pokemon.results[0].url) gets the url for the pokemon

    const url = new URL(pokemon.results[0].url);
    console.log(url);

    // to get the id of the pokemon, use the pathname property returned from the split
    const splitUrl = url.pathname.split("/");
    console.log(splitUrl);

    // get the first 20 url from the pokemon api response
  } catch (error) {
    console.error(`Fetch failed:`, error);
  }
}
