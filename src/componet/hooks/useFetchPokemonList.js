import React, { useState, useContext } from "react";

const useFetchPokemonList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const fetchPokemonList = async () => {
    setLoading(true);
    const response = fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await (await response).json();
    await delay(300);
    setData(data.results);
    setLoading(false);
  };
  return { loading, data, fetchPokemonList };
};

export default useFetchPokemonList;
