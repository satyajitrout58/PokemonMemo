import { useState, useContext } from "react";
import { pokemonContext } from "../context/PokemonContext";

const useFetchPokemonDetails = () => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(false);

  const { pokemonState, dispatch } = useContext(pokemonContext);
  const { pokemonDetails } = pokemonState;
  console.log(pokemonDetails);

  const fetchDetailsData = async (url) => {
    try {
      setLoading(true);
      if (pokemonDetails[url]) {
        setDetails(pokemonDetails[url]);
      } else {
        const response = fetch(url);
        const data = await (await response).json();
        setDetails(data);
        const payload = {
          url,
          data
        };
        dispatch({ type: "UPDATE_DETAILS", payload });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return { fetchDetailsData, details, loading };
};

export default useFetchPokemonDetails;
