import React from 'react';
import {View} from 'react-native';
import PokemonFeature from '../../atoms/pokemonFeature/PokemonFeature';
import {getPokemonFeatures} from '../../../util/utils';
import {styles} from './PokemonFeatures.styles';

const PokemonFeatures = ({pokemon}) => {
  const pokemonFeatures = getPokemonFeatures(pokemon);
  return (
    <View style={styles.container}>
      {pokemonFeatures.map((pokemon, index) => {
        return (
          <PokemonFeature
            header={pokemon.header}
            value={pokemon.value}
            fullWidth={index == 6}
          />
        );
      })}
    </View>
  );
};

export default PokemonFeatures;
