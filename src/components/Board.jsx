import fetchPokemon from "../api/pokemon";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Board() {
  const [pool, setPool] = useState([]);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetchPokemon()
      .then((data) => {
        setPool(data);
        const nineRandomPokemonObjs = getNinePokemonObj(data);

        setBoard(nineRandomPokemonObjs);
      })
      .catch((error) => {
        console.error("An error occurred", error);
      });
  }, []);

  function handleClick() {
    const { name, value } = e.target;
  }

  return (
    <div className="grid grid-cols-3">
      {board.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            pokemonId={pokemon.id}
            name={pokemon.name}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
}

function getNinePokemonObj(arr) {
  const arrCopy = [...arr];
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * (arrCopy.length - i) + i);
    [arrCopy[i], arrCopy[randomIndex]] = [arrCopy[randomIndex], arrCopy[i]];
  }
  return arrCopy.slice(0, 9);
}
