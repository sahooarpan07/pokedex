/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonList from './PokemonList';
import renderer from 'react-test-renderer';

// Note: test renderer must be required after react-native.

test('renders Pokemon List correctly', () => {
  const types = [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ];

  const pokemonData = [
    {
      id: 1,
      name: 'Bulbasuar',
      types,
    },
  ];

  const handleNavigate = jest.fn();
  const onPress = jest.fn();

  const tree = renderer
    .create(
      <PokemonList
        handleNavigate={handleNavigate}
        onPress={onPress}
        pokemonData={pokemonData}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
