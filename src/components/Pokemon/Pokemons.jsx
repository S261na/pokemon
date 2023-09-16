import React, { useEffect, useState } from "react";
import axios from "axios";
import './Pokemons.css'

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const pokemonShow = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
        const results = response.data.results;

        const pokImg = [];
        results.map((pokemon) => {
          axios.get(pokemon.url).then((res) => {
            pokImg.push(res.data);

            
            if (pokImg.length === results.length) {
              setPokemon(pokImg);
            }
          });
        });
      });
    };

    pokemonShow();
  }, []);

  return (
    <div>
      <h1>POKEMONS</h1>
      <div className="pok">
        {pokemon.map((item, index) => (
          <div key={index} className="pokemon">
            <p>{item.name}</p>
            <img src={item.sprites.front_default} alt="pokemon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;

