/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonStats from './PokemonStats';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders Pokemon Stats correctly', () => {
  const stats = [
    {
      stat: {
        name: 'Attack',
      },
      base_stat: 74,
    },
  ];

  const tree = renderer.create(<PokemonStats stats={stats} />).toJSON();

  expect(tree).toMatchSnapshot();
});
