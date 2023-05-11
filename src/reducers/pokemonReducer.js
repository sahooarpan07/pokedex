export function pokemonReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      return state;
  }
}
