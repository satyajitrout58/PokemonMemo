export const pokemonInitialState = {
  pokemonList: [],
  pokemonDetails: {}
};
export function pokemonreducer(state = pokemonInitialState, actions) {
  switch (actions.type) {
    case "UPDATE_POKEMON_LIST":
      return { ...state, pokemonList: actions.payload };
    case "UPDATE_DETAILS": {
      const { url, data } = actions.payload;
      const { pokemonDetails } = state;
      const updateDetails = { ...pokemonDetails, [url]: data };
      return { ...state, pokemonDetails: updateDetails };
    }
    default:
      return state;
  }
}
