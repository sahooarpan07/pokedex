import {View, Text} from 'react-native';
import React from 'react';
import PokemonChip from '../../atoms/pokemonChip/PokemonChip';
import {COLORS} from '../../../constants/constants';
import {getCapitalisedWord} from '../../../util/utils';

const PokemonChips = ({pokemon, showWeakness}) => {
  return (
    <View style={{flexDirection: 'row', gap: 8}}>
      {pokemon?.types.map((type, index) => {
        console.log(pokemon.weakness, 'selectedPokemon.weakness in chips');
        const value =
          showWeakness && pokemon.weakness
            ? pokemon.weakness[index]
            : type?.type?.name;

        return (
          <PokemonChip
            backgroundColor={COLORS[type?.type?.name]}
            value={getCapitalisedWord(value)}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default PokemonChips;
