import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../PokemonCard/PokemonCard";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      console.log(res);
      setPokemon(res?.data);
    });
  }, []);

  return <div>{pokemon && <PokemonCard pokemon={pokemon} />}</div>;
};

export default Pokemons;
