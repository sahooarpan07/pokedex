import React from 'react';
import {FlatList} from 'react-native';
import PokemonCard from '../../atoms/pokemonCard/PokemonCard';

const PokemonList = ({pokemonData, handleNavigate, onPress}) => {
  return (
    <FlatList
      data={pokemonData}
      renderItem={({item}) => {
        return (
          <PokemonCard
            pokemon={item}
            handleNavigate={handleNavigate}
            onPress={() => onPress(item)}
            shouldDisplayName={true}
          />
        );
      }}
      onEndReachedThreshold={1}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  );
};

export default PokemonList;
