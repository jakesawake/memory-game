import fetchPokemon from "../api/pokemon";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Board() {
  const [pool, setPool] = useState([]); // initial 20 pokemon
  const [board, setBoard] = useState([]); // pool of 9 pokemon
  const [pickedIds, setPickedIds] = useState([]); // clicked id's
  const [highScore, setHighScore] = useState(0);
  const score = pickedIds.length;

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

  function handleClick(id) {
    if (pickedIds.includes(id)) {
      if (score > highScore) setHighScore(score);
      setPickedIds([]);
    } else {
      setPickedIds([...pickedIds, id]);
    }
  }
  return (
    <>
      <div className="flex flex-col font-pokemon-game">
        <p>Current Score: {score}</p> <p>High Score: {highScore}</p>
      </div>
      <div className="grid grid-cols-3">
        {board.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              pokemonId={pokemon.id}
              name={pokemon.name}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </>
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
