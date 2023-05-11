/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonFeatures from './PokemonFeatures';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders Pokemon Card correctly', () => {
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
  const pokemon = {
    id: 1,
    name: 'Bulbasuar',
    types,
    height: 7,
    weight: 688,
    eggGroups: [],
    abilities: [],
  };

  const tree = renderer.create(<PokemonFeatures pokemon={pokemon} />).toJSON();
  expect(tree).toMatchSnapshot();
});
