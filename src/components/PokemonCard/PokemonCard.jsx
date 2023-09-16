import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
