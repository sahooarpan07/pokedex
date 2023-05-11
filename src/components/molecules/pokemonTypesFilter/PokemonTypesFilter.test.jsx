/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonTypesFilter from './PokemonTypesFilter';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders Pokemon Types filter crrectly', () => {
  const types = [
    {
      name: 'fire',
      isChecked: false,
    },
  ];
  const setPokemonChips = jest.fn();
  //   const tree = renderer
  //     .create(
  //       <PokemonTypesFilter
  //         pokemonTypes={types}
  //         setPokemonChips={setPokemonChips}
  //       />,
  //     )
  //     .toJSON();
  const tree = renderer
    .create(
      <PokemonTypesFilter
        pokemonTypes={types}
        setPokemonChips={setPokemonChips}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
