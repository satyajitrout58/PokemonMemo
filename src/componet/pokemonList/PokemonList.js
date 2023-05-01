import React from "react";
import useFetchPokemonDetails from "../hooks/useFetchPokemonDetails";

const PokemonList = ({ pokemons }) => {
  const { fetchDetailsData, details, loading } = useFetchPokemonDetails();
  const generateList = () => {
    return (
      pokemons &&
      pokemons.map((value, key) => {
        return (
          <option value={value.url} key={key}>
            {value.name}
          </option>
        );
      })
    );
  };
  const handleChange = (e) => {
    fetchDetailsData(e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange}>{generateList()}</select>
      {/* {JSON.stringify(details)} */}
    </div>
  );
};

export default PokemonList;
