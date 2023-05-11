import {createContext, useReducer} from 'react';
import {pokemonReducer} from '../reducers/pokemonReducer';

export const PokemonContext = createContext({
  pokemon: {
    height: 0,

    weight: 0,

    genders: [],

    eggGroups: [],

    abilities: [],

    types: [],

    weaknesses: [],
  },

  dispatch: () => {},
});

const PokemonContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(pokemonReducer, {
    selectedPokemon: null,
  });
  const {selectedPokemon} = state;

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        dispatch,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
