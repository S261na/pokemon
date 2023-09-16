import React from "react";
import Pokemons from "./components/Pokemon/Pokemons";
import { Pagination } from "@mui/material";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Pokemons />
      <Pagination />
    </div>
  );
};

export default App;
