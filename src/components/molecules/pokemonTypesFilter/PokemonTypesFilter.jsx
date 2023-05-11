import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {getPokemonTypes} from '../../../services/api';
import CheckboxItem from '../../atoms/checkboxItem/CheckboxItem';

const PokemonChipsFilter = ({pokemonTypes, setPokemonTypes}) => {
  useEffect(() => {
    async function fetchPokemonChips() {
      if (!pokemonTypes.length) {
        const {
          data: {results = []},
        } = await getPokemonTypes();

        const initialPokemonChips = results.reduce((acc, currValue) => {
          const newVal = {name: currValue.name, isChecked: false};
          return [...acc, newVal];
        }, []);
        setPokemonTypes(initialPokemonChips);
      }
    }

    fetchPokemonChips();
  }, []);

  function handleChange(newValue, index) {
    const updatedTypes = pokemonTypes.map((pokemon, currentIndex) => {
      return currentIndex === index
        ? {
            ...pokemon,
            isChecked: newValue,
          }
        : pokemon;
    });
    setPokemonTypes(updatedTypes);
  }

  return (
    <View>
      <FlatList
        data={pokemonTypes}
        renderItem={({item, index}) => (
          <CheckboxItem
            label={item.name}
            onValueChange={newValue => handleChange(newValue, index)}
            value={pokemonTypes[index].isChecked}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default PokemonChipsFilter;
