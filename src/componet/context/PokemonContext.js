import React, { createContext, useReducer } from "react";
import { pokemonreducer, pokemonInitialState } from "../reducer/pokemonReducer";

export const pokemonContext = createContext(pokemonInitialState);

const PokemonContext = ({ children }) => {
  const [pokemonState, dispatch] = useReducer(
    pokemonreducer,
    pokemonInitialState
  );
  return (
    <pokemonContext.Provider value={{ pokemonState, dispatch }}>
      {children}
    </pokemonContext.Provider>
  );
};

export default PokemonContext;
