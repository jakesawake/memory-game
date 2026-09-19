import fetchPokemon from "../api/pokemon";
import { useState, useEffect } from "react";

export default function Board() {
  const [pool, setPool] = useState([]);
  useEffect(() => {
    fetchPokemon()
      .then((data) => {
        setPool(data);
      })
      .catch((error) => {
        console.error("An error occurred", error);
      });
  }, []);
  console.log(pool);
}
