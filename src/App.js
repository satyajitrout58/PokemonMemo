import React, { useEffect } from "react";
import "./styles.css";
import PokemonContext from "./componet/context/PokemonContext";
import PokemonList from "./componet/pokemonList/PokemonList";
import useFetchPokemonList from "./componet/hooks/useFetchPokemonList";
export default function App() {
  const { fetchPokemonList, loading, data } = useFetchPokemonList();
  useEffect(() => {
    fetchPokemonList();
  }, []);
  return (
    <PokemonContext>
      <div className="App">
        {loading && <div>Loading...</div>}
        <PokemonList pokemons={data} />
      </div>
    </PokemonContext>
  );
}
