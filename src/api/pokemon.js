async function fetchPokemon() {
  // get 20 pokemon in an array
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const twentyNums = () => Array.from({ length: 20 }, (_, i) => i + 1);

  const builtUrl = twentyNums.map((num) => {
    baseUrl + `${num}/`;
  });

  console.log(builtUrl);

  // getting the list of 151 pokemon
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

    if (!response.ok) {
      throw new Error(`HTTP error! Status code: ${response.status}`);
    }
    console.log(response.status);

    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.error(`Fetch failed:`, error);
  }
}
